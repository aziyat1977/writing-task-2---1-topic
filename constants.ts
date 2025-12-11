import { LexicalItem, GrammarQuestion } from './types';

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
  // --- Original Set (1-10) ---
  {
    id: 1,
    type: 'multiple-choice',
    sectionHeader: "Part 1: Foundational Grammar (Multiple Choice)",
    category: "Formal Prepositions",
    question: "Opinions differ ______ the most beneficial approach to learning.",
    options: [
      { id: "a", text: "concern", isCorrect: false },
      { id: "b", text: "relating", isCorrect: false },
      { id: "c", text: "connection", isCorrect: false },
      { id: "d", text: "regarding", isCorrect: true },
    ]
  },
  {
    id: 2,
    type: 'multiple-choice',
    category: "Conjunctions of Concession",
    question: "______ collaborative learning can foster critical discussion, I believe that solitary study is ultimately more effective.",
    options: [
      { id: "a", text: "However", isCorrect: false },
      { id: "b", text: "Despite", isCorrect: false },
      { id: "c", text: "Moreover", isCorrect: false },
      { id: "d", text: "While", isCorrect: true },
    ]
  },
  {
    id: 3,
    type: 'multiple-choice',
    category: "Precise Academic Verbs",
    question: "Collaborative learning can ______ critical discussion among students.",
    options: [
      { id: "a", text: "make", isCorrect: false },
      { id: "b", text: "foster", isCorrect: true },
      { id: "c", text: "do", isCorrect: false },
      { id: "d", text: "build", isCorrect: false },
    ]
  },
  {
    id: 4,
    type: 'multiple-choice',
    category: "Relative Clauses",
    question: "Unlike group work, ______ can often devolve into unrelated social conversation, studying alone removes distractions.",
    options: [
      { id: "a", text: "that", isCorrect: false },
      { id: "b", text: "which", isCorrect: true },
      { id: "c", text: "what", isCorrect: false },
      { id: "d", text: "where", isCorrect: false },
    ]
  },
  {
    id: 5,
    type: 'multiple-choice',
    category: "Transitive Verbs",
    question: "Some people advocate ______ independent study as the superior method.",
    options: [
      { id: "a", text: "to", isCorrect: false },
      { id: "b", text: "with", isCorrect: false },
      { id: "c", text: "for", isCorrect: true },
      { id: "d", text: "(no preposition)", isCorrect: false },
    ]
  },
  {
    id: 6,
    type: 'multiple-choice',
    category: "Phrasal Verbs",
    question: "Group work can often ______ unrelated social conversation.",
    options: [
      { id: "a", text: "turn up", isCorrect: false },
      { id: "b", text: "result of", isCorrect: false },
      { id: "c", text: "change for", isCorrect: false },
      { id: "d", text: "devolve into", isCorrect: true },
    ]
  },
  {
    id: 7,
    type: 'multiple-choice',
    category: "Participles",
    question: "______ gaps in their peers' knowledge, students reinforce their own understanding.",
    options: [
      { id: "a", text: "Filling", isCorrect: false },
      { id: "b", text: "Simultaneously filling", isCorrect: true },
      { id: "c", text: "Filled", isCorrect: false },
      { id: "d", text: "To fill", isCorrect: false },
    ]
  },
  {
    id: 8,
    type: 'multiple-choice',
    category: "Transition Words",
    question: "______, for the purpose of retaining large amounts of information before an exam, this method is far more time-efficient.",
    options: [
      { id: "a", text: "Nevertheless", isCorrect: false },
      { id: "b", text: "In addition", isCorrect: false },
      { id: "c", text: "Firstly", isCorrect: false },
      { id: "d", text: "Consequently", isCorrect: true },
    ]
  },
  {
    id: 9,
    type: 'multiple-choice',
    category: "Metaphorical Verbs",
    question: "Studying alone allows the learner to ______ their schedule to their specific needs.",
    options: [
      { id: "a", text: "fix", isCorrect: false },
      { id: "b", text: "tailor", isCorrect: true },
      { id: "c", text: "change", isCorrect: false },
      { id: "d", text: "create", isCorrect: false },
    ]
  },
  {
    id: 10,
    type: 'multiple-choice',
    category: "Passive Gerund Structure",
    question: "They can focus on weaknesses, ______ by others.",
    options: [
      { id: "a", text: "not to be held back", isCorrect: false },
      { id: "b", text: "without holding back", isCorrect: false },
      { id: "c", text: "never being held back", isCorrect: false },
      { id: "d", text: "without being held back", isCorrect: true },
    ]
  },

  // --- Section A: Gap Fill ---
  {
    id: 11,
    type: 'input',
    sectionHeader: "Part 2: Advanced Practice",
    instruction: "Section A: Gap Fill (Academic Lexis) - Fill in the blank with the most appropriate word from the essay.",
    category: "Academic Lexis",
    question: "The primary advantage of group work is that it ______ the exchange of ideas and peer correction.",
    correctAnswer: "facilitates"
  },
  {
    id: 12,
    type: 'input',
    category: "Academic Lexis",
    question: "Solitary study is ultimately more effective as it ______ distractions and allows for self-paced progress.",
    correctAnswer: "minimizes"
  },
  {
    id: 13,
    type: 'input',
    category: "Academic Lexis",
    question: "Unlike group work, which can often ______ into unrelated social conversation, studying alone removes external distractions.",
    correctAnswer: "devolve"
  },
  {
    id: 14,
    type: 'input',
    category: "Academic Lexis",
    question: "The learner can ______ their schedule to their specific needs, focusing on weak areas.",
    correctAnswer: "tailor"
  },
  {
    id: 15,
    type: 'input',
    category: "Academic Lexis",
    question: "Explaining complex concepts helps to ______ their own understanding.",
    correctAnswer: "reinforce"
  },
  {
    id: 16,
    type: 'input',
    category: "Academic Lexis",
    question: "The essay is precise, dense, and ______ on the topic of study habits.",
    correctAnswer: "focused"
  },

  // --- Section B: Sentence Combining ---
  {
    id: 17,
    type: 'reveal',
    instruction: "Section B: Sentence Combining - Combine the two sentences using the transition provided.",
    category: "Subordination (As a result)",
    question: "Students work together. Difficult topics often become easier to grasp. (As a result)",
    answerExplanation: "When students work together, difficult topics often become easier to grasp as a result."
  },
  {
    id: 18,
    type: 'reveal',
    category: "Subordination (Although)",
    question: "Group study certainly has value. I maintain that working alone is the more effective approach. (although)",
    answerExplanation: "Although group study certainly has value for collaborative learning, I maintain that working alone is the more effective approach."
  },

  // --- Section C: Formal Word Choice ---
  {
    id: 19,
    type: 'input',
    instruction: "Section C: Formal Word Choice - Replace the bolded informal phrase with the precise academic alternative from the essay.",
    category: "Academic Register",
    question: "Opinions **are different about** the most beneficial approach to learning.",
    correctAnswer: "differ regarding"
  },
  {
    id: 20,
    type: 'input',
    category: "Academic Register",
    question: "The primary **benefit** is that it facilitates the exchange of ideas.",
    correctAnswer: "advantage"
  },
  {
    id: 21,
    type: 'input',
    category: "Academic Register",
    question: "Studying alone ensures a **no-distraction** environment that maximizes productivity.",
    correctAnswer: "distraction-free"
  },
  {
    id: 22,
    type: 'input',
    category: "Academic Register",
    question: "The prompt required a surgical **breakdown** of the IELTS Writing Task 2 process.",
    correctAnswer: "analysis"
  },
  {
    id: 23,
    type: 'input',
    category: "Academic Register",
    question: "Others **say good things about** independent study.",
    correctAnswer: "advocate for"
  },

  // --- Section D: Passive Voice / Gerunds ---
  {
    id: 24,
    type: 'multiple-choice',
    instruction: "Section D: Passive Voice & Gerunds - Determine if the bolded structure is Correct (C) or Incorrect (I).",
    category: "Passive Gerund",
    question: "**Being held back** by others can negatively impact a student's confidence.",
    options: [
      { id: "C", text: "Correct", isCorrect: true },
      { id: "I", text: "Incorrect", isCorrect: false }
    ]
  },
  {
    id: 25,
    type: 'multiple-choice',
    category: "Active vs Passive",
    question: "Group study is certainly **valuing** for collaborative learning.",
    options: [
      { id: "C", text: "Correct", isCorrect: false },
      { id: "I", text: "Incorrect", isCorrect: true }
    ]
  },
  {
    id: 26,
    type: 'multiple-choice',
    category: "Gerund Phrases",
    question: "For the purpose of **retaining** large amounts of information, this method is effective.",
    options: [
      { id: "C", text: "Correct", isCorrect: true },
      { id: "I", text: "Incorrect", isCorrect: false }
    ]
  },
  {
    id: 27,
    type: 'multiple-choice',
    category: "Noun Forms",
    question: "The argument is about **efficacy**, not just preference or enjoyment.",
    options: [
      { id: "C", text: "Correct", isCorrect: true },
      { id: "I", text: "Incorrect", isCorrect: false }
    ]
  },

  // --- Section E: Prepositions ---
  {
    id: 28,
    type: 'multiple-choice',
    instruction: "Section E: Prepositions - Choose the exact preposition used in the essay.",
    category: "Prepositions",
    question: "Difficult concepts become easier to grasp ______ discussion than through solitary reading.",
    options: [
      { id: "a", text: "by", isCorrect: false },
      { id: "b", text: "for", isCorrect: false },
      { id: "c", text: "through", isCorrect: true },
      { id: "d", text: "in", isCorrect: false },
    ]
  },
  {
    id: 29,
    type: 'multiple-choice',
    category: "Prepositions",
    question: "I support the view that solitary study is superior ______ the level of focus it permits.",
    options: [
      { id: "a", text: "to", isCorrect: false },
      { id: "b", text: "due to", isCorrect: true },
      { id: "c", text: "because", isCorrect: false },
      { id: "d", text: "on", isCorrect: false },
    ]
  },
  {
    id: 30,
    type: 'multiple-choice',
    category: "Prepositions",
    question: "It ensures a distraction-free environment that maximizes productivity ______ the contrary.",
    options: [
      { id: "a", text: "for", isCorrect: false },
      { id: "b", text: "(remove / no word)", isCorrect: true },
      { id: "c", text: "upon", isCorrect: false },
      { id: "d", text: "with", isCorrect: false },
    ]
  },
];