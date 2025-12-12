
import { LexicalItem, GrammarQuestion, SpeakingPartData, ReadingSectionData } from './types';

export const PROMPT_TOPIC = "Some people think that it is more effective for students to study in a group, while others believe that they should study alone.";
export const PROMPT_TASK = "Discuss both these views and give your own opinion.";

export const LEXICAL_DATA: LexicalItem[] = [
  {
    collocation: "Foster critical discussion",
    explanation: "Replaces 'make people talk.' Shows you understand that discussion is a tool for development."
  },
  {
    collocation: "Facilitates the exchange of ideas",
    explanation: "Replaces 'helps share things.' 'Facilitate' is a high-utility academic verb for making processes easier."
  },
  {
    collocation: "Reinforce their understanding",
    explanation: "Replaces 'make knowledge stronger.' Accurately describes the cognitive process of cementing memory."
  },
  {
    collocation: "Devolve into",
    explanation: "Replaces 'turn into bad chat.' A sophisticated verb indicating a decline in quality/order."
  },
  {
    collocation: "Tailor their schedule",
    explanation: "Replaces 'change their plan.' Shows the ability to use metaphorical language (tailoring) correctly."
  }
];

export const MODEL_ANSWER_PARAGRAPHS = [
  "Opinions differ regarding the most beneficial approach to learning, with some arguing that teamwork is superior, while others advocate for independent study. While collaborative learning can foster critical discussion, I believe that solitary study is ultimately more effective as it minimizes distractions and allows for self-paced progress.",
  "On the one hand, there are clear benefits to studying with peers. The primary advantage is that it facilitates the exchange of ideas and peer correction. When students work together, they can explain complex concepts to one another, which helps to reinforce their own understanding while simultaneously filling gaps in their peers' knowledge. As a result, difficult topics often become easier to grasp through discussion than they would through solitary reading.",
  "On the other hand, I support the view that solitary study is superior due to the level of focus it permits. Unlike group work, which can often devolve into unrelated social conversation, studying alone removes external distractions. Furthermore, it allows the learner to tailor their schedule to their specific needs; they can skim over concepts they already know and devote extra time to their weaknesses, without being held back by others. Consequently, for the purpose of retaining large amounts of information before an exam, this method is far more time-efficient.",
  "In conclusion, although group study certainly has value for collaborative learning, I maintain that working alone is the more effective approach because it ensures a distraction-free environment that maximizes productivity."
];

export const GRAMMAR_QUESTIONS: GrammarQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    category: 'Subordination',
    question: "While **collaborative learning** is useful, ______.",
    options: [
        { id: 'a', text: "it can be distracting", isCorrect: true },
        { id: 'b', text: "it is good", isCorrect: false },
        { id: 'c', text: "students like it", isCorrect: false },
        { id: 'd', text: "exams are hard", isCorrect: false }
    ],
    answerExplanation: "The 'While' clause sets up a concession, so the main clause must present a contrasting (often negative or superior) point."
  },
  {
    id: 2,
    type: 'input',
    category: 'Coherence',
    question: "Complete the collocation: '______ critical discussion'",
    correctAnswer: "Foster",
    answerExplanation: "We 'foster' discussion, meaning to encourage its growth."
  },
  {
    id: 3,
    type: 'input',
    category: 'Vocabulary',
    question: "Complete: 'Facilitate the ______ of ideas'",
    correctAnswer: "exchange",
    answerExplanation: "Standard academic collocation: 'exchange of ideas'."
  },
  {
      id: 11,
      type: 'multiple-choice',
      category: 'Advanced Grammar',
      question: "Which sentence uses a non-restrictive clause correctly?",
      options: [
          { id: 'a', text: "My brother, who lives in London, is a doctor.", isCorrect: true },
          { id: 'b', text: "My brother who lives in London is a doctor.", isCorrect: false }
      ],
      answerExplanation: "Commas are needed because 'who lives in London' is extra information (non-restrictive) if you only have one brother."
  },
  {
      id: 12,
      type: 'input',
      category: 'Connectors',
      question: "Type the connector for result: 'It rained heavily. ______, the match was cancelled.'",
      correctAnswer: "Consequently",
      answerExplanation: "'Consequently' implies a direct result."
  },
  {
      id: 31,
      type: 'reveal',
      category: 'Vocabulary',
      question: "Define: **Devolve into**",
      answerExplanation: "To degenerate or decline gradually into a worse state (e.g., 'The debate devolved into a shouting match')."
  },
  {
      id: 32,
      type: 'reveal',
      category: 'Vocabulary',
      question: "Define: **Tailor (verb)**",
      answerExplanation: "To make or adapt something for a particular purpose or person."
  }
];

export const SPEAKING_DATA: SpeakingPartData[] = [
    {
        id: "part1",
        title: "Part 1",
        description: "Introduction & Interview",
        type: "interview",
        clusters: [
            {
                topic: "Study Habits",
                questions: [
                    { text: "Do you prefer to study alone or with others?" },
                    { text: "What is your favorite time of day to study?" },
                    { text: "Do you listen to music while studying?" }
                ]
            }
        ]
    },
    {
        id: "part2",
        title: "Part 2",
        description: "Long Turn",
        type: "cue-card",
        cueCards: [
            {
                topic: "Describe a subject you enjoyed studying at school.",
                prompts: [
                    "What the subject was",
                    "Who taught you",
                    "How you studied it",
                    "And explain why you enjoyed it"
                ]
            }
        ]
    },
    {
        id: "part3",
        title: "Part 3",
        description: "Discussion",
        type: "discussion",
        clusters: [
            {
                topic: "Education Systems",
                questions: [
                    { text: "How has technology changed the way we study?" },
                    { text: "Should schools focus more on group work?" }
                ]
            }
        ]
    }
];

export const READING_DATA: ReadingSectionData = {
    passage: {
        title: "The Psychology of Study",
        paragraphs: [
            { label: "A", text: "Many students struggle to find the optimal environment for concentration. Research suggests that while some thrive in silence, others require ambient noise to focus." },
            { label: "B", text: "The 'Mozart Effect', a theory suggesting classical music boosts intelligence, has been largely debunked. However, low-fidelity beats have shown promise in aiding retention." },
            { label: "C", text: "Ultimately, the key factor is consistency. Establishing a routine signals the brain that it is time to work, regardless of the setting." }
        ]
    },
    gapFill: {
        title: "Summary Completion",
        prompt: "Complete the summary using words from the box.",
        textWithGaps: "Research indicates that the best environment varies by individual. While the {1} of listening to classical music to get smarter is not fully supported, other types of sound may help. The most important element is {2} in your schedule.",
        wordBox: ["theory", "consistency", "volume", "silence", "intelligence"],
        answers: [
            { id: 1, answer: "theory", explanation: "Refers to the 'Mozart Effect' mentioned in Paragraph B." },
            { id: 2, answer: "consistency", explanation: "Refers to Paragraph C: 'the key factor is consistency'." }
        ]
    },
    ynng: {
        title: "True / False / Not Given",
        questions: [
            { id: 1, text: "Everyone studies better in silence.", answer: "FALSE", explanation: "Paragraph A says 'others require ambient noise'." },
            { id: 2, text: "Classical music definitely makes you smarter.", answer: "FALSE", explanation: "Paragraph B says it has been 'largely debunked'." },
            { id: 3, text: "Studying at night is better than the morning.", answer: "NOT GIVEN", explanation: "The text mentions routine, but not specific times of day." }
        ]
    },
    matching: {
        title: "Matching Headings",
        questions: [
            { id: 1, text: "Paragraph A", answer: "ii", explanation: "Discusses different environments (silence vs noise)." },
            { id: 2, text: "Paragraph C", answer: "iv", explanation: "Discusses the importance of routine/consistency." }
        ],
        endings: [
            { id: "i", text: "The Mozart Effect" },
            { id: "ii", text: "Individual Differences" },
            { id: "iii", text: "Technology in Schools" },
            { id: "iv", text: "The Power of Habit" }
        ]
    }
};

export const STUDENT_LIFE_DATA = {
  part1: {
      title: "1.1 Study Preferences",
      questions: [
          { id: 1, question: "Do you prefer to study", options: ["at school or college", "in a library", "at home"] },
          { id: 2, question: "Do you study best", options: ["early in the morning", "during the day", "at night"] },
          { id: 3, question: "Do you prefer to work", options: ["with friends", "with background music", "in silence"] }
      ]
  },
  part2: {
      title: "1.2 Verbs in Context",
      instruction: "Complete the text with the correct form of the verbs in the box. Use each verb once only.",
      verbs: ["concentrate", "do", "learn", "overcome", "organise", "study", "take", "teach", "review", "revise"],
      text: "Even the most studious among you will probably have difficulty studying at some stage in your academic career. If or when this happens, the only way to {1} this problem is to go back to basics. First, make sure you have a comfortable environment to {2} in. Some students need to have a quiet space to themselves and can't {3} if there are too many distractions. Others need some sort of background noise, such as music or the company of friends. Whatever your personal preference is, you need to {4} this first of all. Next, make sure you have all of the equipment or tools that you need. For example, if you are {5} a geography course and you have to {6} about countries and their capital cities then you will need to have your atlas to hand. If you're {7} your maths homework then be sure to find your calculator, ruler, protractor and compass before you start. Perhaps you're not preparing a homework assignment or project, but are trying to {8} for an exam. If so, you need to know exactly what is on your curriculum. You should also {9} your notes and make sure that you have a clear understanding of what your lecturers have {10} you. Of course, people with a learning disorder such as dyslexia may need to work harder than others at their studies as they often struggle to read even relatively simple texts.",
      answers: [
          { id: 1, answer: "overcome" },
          { id: 2, answer: "study" },
          { id: 3, answer: "concentrate" },
          { id: 4, answer: "organise" },
          { id: 5, answer: "taking" }, 
          { id: 6, answer: "learn" },
          { id: 7, answer: "doing" }, 
          { id: 8, answer: "revise" },
          { id: 9, answer: "review" },
          { id: 10, answer: "taught" } 
      ]
  },
  part3: {
      title: "1.3 Definitions",
      instruction: "Find a word or phrase in the text to match these definitions.",
      questions: [
          { id: 1, definition: "describes someone who studies a lot", answer: "studious" },
          { id: 2, definition: "things that stop you from working", answer: "distractions" },
          { id: 3, definition: "a sound you can hear, but do not actively listen to", answer: "background noise" },
          { id: 4, definition: "two different types of homework or school task", answer: "assignment and project" },
          { id: 5, definition: "to study for an exam", answer: "revise" },
          { id: 6, definition: "another word for syllabus", answer: "curriculum" },
          { id: 7, definition: "to check your work", answer: "review" },
          { id: 8, definition: "to do something with great difficulty", answer: "struggle" }
      ]
  },
  part4: {
      title: "2.2 Word Building",
      instruction: "Complete the table.",
      headers: ["Subject", "Person", "Adjective"],
      rows: [
          { subject: "architecture", person: "architect", adjective: "architectural" },
          { subject: "biology", person: "biologist", adjective: "biological" },
          { subject: "economics", person: "economist", adjective: "economic" },
          { subject: "geology", person: "geologist", adjective: "geological" },
          { subject: "geography", person: "geographer", adjective: "geographical" },
          { subject: "journalism", person: "journalist", adjective: "journalistic" },
          { subject: "languages", person: "linguist", adjective: "linguistic" },
          { subject: "law", person: "lawyer", adjective: "legal" },
          { subject: "mathematics", person: "mathematician", adjective: "mathematical" },
          { subject: "science", person: "scientist", adjective: "scientific" }
      ]
  }
};
