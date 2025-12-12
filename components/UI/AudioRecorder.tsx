
import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, Download, RefreshCw, Volume2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const timerIntervalRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = () => {
    if (timerIntervalRef.current) window.clearInterval(timerIntervalRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const getSupportedMimeType = () => {
    const types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/mp4', // Safari 14.1+
      'audio/ogg;codecs=opus',
      'audio/aac'
    ];
    for (const type of types) {
      if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }
    return ''; // Fallback to browser default
  };

  const startRecording = async () => {
    setError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Audio recording APIs are not supported in this browser context.");
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const supportedType = getSupportedMimeType();
      setMimeType(supportedType);

      const options = supportedType ? { mimeType: supportedType } : undefined;
      const mediaRecorder = new MediaRecorder(stream, options);
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blobMimeType = supportedType || 'audio/webm';
        const audioBlob = new Blob(audioChunksRef.current, { type: blobMimeType });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      };

      mediaRecorder.start(200);
      setIsRecording(true);
      setAudioUrl(null);
      setRecordingTime(0);

      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (err: any) {
      console.error("Error accessing microphone:", err);
      let errorMessage = "Microphone access error.";
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        errorMessage = "Permission denied. Please allow microphone access in your browser settings.";
      }
      setError(errorMessage);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
  };

  const togglePlayback = () => {
    if (audioPlayerRef.current) {
      if (isPlaying) {
        audioPlayerRef.current.pause();
      } else {
        audioPlayerRef.current.play()
          .catch(e => setError("Playback failed. The format might not be supported."));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => setIsPlaying(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getFileExtension = () => {
    if (mimeType.includes('mp4')) return '.mp4';
    if (mimeType.includes('aac')) return '.aac';
    if (mimeType.includes('ogg')) return '.ogg';
    if (mimeType.includes('mpeg') || mimeType.includes('mp3')) return '.mp3';
    return '.webm';
  };

  return (
    <div className="w-full mt-12 relative z-20">
      <div className="flex flex-col items-center justify-center gap-6">
        
        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-red-400 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20 max-w-md text-center"
            >
              <AlertCircle size={16} className="shrink-0" />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visualization Area */}
        <div className="h-24 flex items-center justify-center gap-1">
          {isRecording ? (
             <div className="flex gap-1.5 items-end h-full">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ 
                      height: [15, Math.random() * 60 + 20, 15],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.4, 
                      ease: "easeInOut",
                      delay: i * 0.05
                    }}
                    className="w-2 md:w-3 bg-gradient-to-t from-red-600 to-pink-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                  />
                ))}
             </div>
          ) : audioUrl ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-2 text-emerald-400"
            >
               <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                 <Volume2 size={40} />
               </div>
               <span className="text-sm font-mono uppercase tracking-widest text-emerald-500/80">Recording Ready</span>
            </motion.div>
          ) : (
             <div className="flex flex-col items-center text-slate-600">
                <div className="w-20 h-1 bg-slate-800 rounded-full mb-2" />
                <span className="font-mono text-xs uppercase tracking-widest">Ready</span>
             </div>
          )}
        </div>

        {/* Timer */}
        <div className={`font-mono text-5xl md:text-6xl font-bold transition-colors duration-300 ${isRecording ? 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'text-slate-200'}`}>
          {formatTime(recordingTime)}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-8">
          {!isRecording && !audioUrl && (
            <div className="flex items-center gap-6">
                {/* Record Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startRecording}
                  className="group relative w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 hover:border-red-500/50 hover:bg-slate-800 flex items-center justify-center transition-all shadow-2xl"
                >
                  <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <Mic size={40} className="text-slate-400 group-hover:text-red-500 transition-colors" />
                </motion.button>
            </div>
          )}

          {isRecording && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={stopRecording}
              className="relative w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500 flex items-center justify-center transition-all shadow-[0_0_30px_rgba(239,68,68,0.3)]"
            >
              <div className="absolute inset-0 rounded-full border border-red-500 animate-ping opacity-20" />
              <Square size={32} fill="currentColor" className="text-red-500" />
            </motion.button>
          )}

          {audioUrl && !isRecording && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setAudioUrl(null); setRecordingTime(0); }}
                className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 flex items-center justify-center transition-all"
                title="Record Again"
              >
                <RefreshCw size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlayback}
                className="w-24 h-24 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all"
              >
                {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-2" />}
              </motion.button>

              <motion.a
                href={audioUrl}
                download={`audio-practice-${Date.now()}${getFileExtension()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 text-sky-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center transition-all"
                title="Download Audio"
              >
                <Download size={24} />
              </motion.a>
            </>
          )}
        </div>

        {/* Hidden Audio Player */}
        {audioUrl && (
          <audio 
            ref={audioPlayerRef} 
            src={audioUrl} 
            onEnded={handleEnded} 
            onError={() => setError("Audio format not supported by this browser's player, but you can still download it.")}
            className="hidden"
          />
        )}

      </div>
    </div>
  );
};
