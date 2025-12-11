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
}