
export interface LexicalItem {
  collocation: string;
  explanation: string;
}

export interface EssaySection {
  title: string;
  goal: string;
  content: string[];
  thesis?: string;
  topicSentence?: string;
}

export interface ViewPoint {
  side: string;
  idea: string;
  mechanism: string;
}

export interface GrammarOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export type QuestionType = 'multiple-choice' | 'input' | 'reveal';

export interface GrammarQuestion {
  id: number;
  type: QuestionType;
  sectionHeader?: string;
  instruction?: string;
  category: string;
  question: string;
  options?: GrammarOption[]; // For multiple-choice
  correctAnswer?: string;    // For input type
  answerExplanation?: string; // For reveal type or extra context
  wordBank?: string[];       // For gap-fill exercises
}

export interface MasterclassRow {
  feature: string;
  meaning: string;
  example: string;
  drill: string;
}

export interface MasterclassTopic {
  id: string;
  title: string;
  function: string;
  rows: MasterclassRow[];
  pronunciation: string;
}

// --- Speaking Types ---

export interface SpeakingQuestion {
  text: string;
}

export interface SpeakingCluster {
  topic: string;
  questions: SpeakingQuestion[];
}

export interface SpeakingCueCard {
  topic: string;
  prompts: string[];
}

export interface SpeakingPartData {
  id: string;
  title: string;
  description: string;
  type: 'interview' | 'cue-card' | 'discussion';
  clusters?: SpeakingCluster[]; // For Part 1 & 3
  cueCards?: SpeakingCueCard[]; // For Part 2
}

// --- Reading Types ---

export interface ReadingPassage {
  title: string;
  paragraphs: { label: string; text: string }[];
}

export interface GapFillData {
  title: string;
  prompt: string;
  textWithGaps: string; // Use {26} format for gaps
  wordBox: string[];
  answers: { id: number; answer: string; explanation: string }[];
}

export interface YNNGData {
  title: string;
  questions: { id: number; text: string; answer: string; explanation: string }[];
}

export interface MatchingData {
  title: string;
  questions: { id: number; text: string; answer: string; explanation: string }[];
  endings: { id: string; text: string }[];
}

export interface ReadingSectionData {
  passage: ReadingPassage;
  gapFill: GapFillData;
  ynng: YNNGData;
  matching: MatchingData;
}
