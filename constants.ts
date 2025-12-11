import { LexicalItem, GrammarQuestion, MasterclassTopic, SpeakingPartData } from './types';

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

export const GRAMMAR_MASTERCLASS_DATA: MasterclassTopic[] = [
  {
    id: "topic1",
    title: "Topic 1: Concessive Clauses (Subordination)",
    function: "To acknowledge or 'concede' that an opposing viewpoint has some truth, immediately followed by the main argument (the contrast). This creates a balanced, complex argument essential for 'Discuss Both Views' essays.",
    rows: [
      {
        feature: "\"While...\"",
        meaning: "Used at the start of the sentence to subordinate the opposing (less important) idea to the main idea.",
        example: "\"**While** collaborative learning can foster critical discussion, I believe that solitary study is ultimately more effective...\"",
        drill: "Rewrite: Group study is valuable, but I disagree. → **While** group study has value, I disagree."
      },
      {
        feature: "\"Although...\"",
        meaning: "Functions identically to 'While'. Used for the concluding summary.",
        example: "\"**Although** group study certainly has value for collaborative learning, I **maintain** that working alone is the more effective approach...\"",
        drill: "Complete: **Although** group work allows for idea exchange, **______**"
      }
    ],
    pronunciation: "Emphasize the **main clause** (the part after the comma) to show where the writer's opinion lies. (e.g., *While collaborative learning...*, **I believe solitary study is more effective**.)"
  },
  {
    id: "topic2",
    title: "Topic 2: Complex Modifiers and Non-Restrictive Clauses",
    function: "To add specific, non-essential, yet highly descriptive information using relative pronouns or participles. This increases sentence density and grammatical range.",
    rows: [
      {
        feature: "Non-Restrictive Clause (using WHICH)",
        meaning: "Adds extra detail about the preceding noun. **Crucially, it requires commas.**",
        example: "\"Unlike group work, **which can often devolve into unrelated social conversation**, studying alone removes external distractions.\"",
        drill: "Combine: Group work is noisy. It is also often inefficient. → Group work, **which is often noisy,** is also inefficient."
      },
      {
        feature: "Participle Phrase (using -ING)",
        meaning: "Describes an action that happens concurrently with, or immediately results from, the main action.",
        example: "\"...which helps to reinforce their own understanding **while simultaneously filling gaps in their peers' knowledge**.\"",
        drill: "Combine: I study alone. I can avoid distractions. → I study alone, **thereby avoiding distractions**."
      }
    ],
    pronunciation: "Pause briefly at the commas surrounding the non-restrictive clause to signal that the information is extra detail. (e.g., *Unlike group work, (pause) which can often devolve... (pause) studying alone...*)."
  },
  {
    id: "topic3",
    title: "Topic 3: Academic Linking Devices (Coherence & Results)",
    function: "To clearly signpost the logic of the argument, ensuring high Coherence and Cohesion scores.",
    rows: [
      {
        feature: "Listing/Contrast",
        meaning: "Moves from the Concession paragraph to the Opinion paragraph.",
        example: "\"**On the one hand**, there are clear benefits...\" → \"**On the other hand**, I support the view...\"",
        drill: "Use: Start your concession paragraph with **On the one hand**."
      },
      {
        feature: "Result/Consequence",
        meaning: "Connects the evidence (tailored schedule) to the final conclusion (efficiency).",
        example: "\"**Consequently**, for the purpose of retaining large amounts of information before an exam, this method is far more time-efficient.\"",
        drill: "Use: The group was efficient. The **consequence** was a high score. → The group was efficient. **Consequently**, they achieved a high score."
      },
      {
        feature: "Result (Shorter)",
        meaning: "Used within a paragraph to link a specific action to its outcome.",
        example: "\"**As a result**, difficult topics often become easier to grasp through discussion...\"",
        drill: "Use: We studied consistently. **As a result**, **______**"
      }
    ],
    pronunciation: "Give a strong emphasis and brief pause after these linkers to signal a shift in focus or logic. (e.g., *On the other hand, (pause)* or *Consequently, (pause)*)."
  },
  {
    id: "topic4",
    title: "Topic 4: The Passive Gerund for Negative Conditions",
    function: "To describe a beneficial result by highlighting the *absence* of a negative action performed by others. This is a common advanced structure.",
    rows: [
      {
        feature: "Passive Gerund with 'Without'",
        meaning: "*Without* (preposition) → requires the *-ing* form (gerund) → *being* → requires the Past Participle (Passive Voice).",
        example: "\"They can devote extra time to their weaknesses, **without being held back** by others.\"",
        drill: "Rewrite: I can study alone. No one bothers me. → I can study alone **without being bothered** by others."
      },
      {
        feature: "Structure Breakdown",
        meaning: "It means: \"They are not subject to the action of 'holding back'.\" (Preposition + Being + Past Participle)",
        example: "(Preposition + Being + Past Participle)",
        drill: "Fill the Gap: Studying alone allows me to focus **without being ______** by music."
      }
    ],
    pronunciation: "Focus on the 'without' and the verb 'held back' to convey the negative condition that is avoided. (e.g., *without being held BACK*)."
  }
];

export const SPEAKING_DATA: SpeakingPartData[] = [
  {
    id: "part1",
    title: "Part 1: Introduction & Interview",
    description: "4–5 minutes. Focus on personal experiences related to study, work, or daily routines.",
    type: "interview",
    clusters: [
      {
        topic: "Study/Work",
        questions: [
          { text: "Are you a student or are you working right now?" },
          { text: "What's your favourite subject/major?" },
          { text: "Why did you choose this subject/major?" }
        ]
      },
      {
        topic: "Friends/Alone Time",
        questions: [
          { text: "Do you prefer to spend time alone or with friends?" },
          { text: "What do you usually do together with your friends?" },
          { text: "Do you usually spend your days off with your parents or with your friends?" }
        ]
      },
      {
        topic: "Concentration/Focus",
        questions: [
          { text: "Is it difficult for you to stay focused on something?" },
          { text: "What may distract you when you are trying to stay focused?" }
        ]
      },
      {
        topic: "Reading/Habits",
        questions: [
          { text: "Do you often read books?" },
          { text: "Do you prefer reading books or watching movies?" }
        ]
      },
      {
        topic: "Time Management",
        questions: [
          { text: "How do you plan your time in a day?" },
          { text: "Do you like making plans?" }
        ]
      }
    ]
  },
  {
    id: "part2",
    title: "Part 2: Individual Long Turn (Cue Card)",
    description: "3–4 minutes. Describe a past event, person, or object. 1 minute to prepare, 2 minutes to speak.",
    type: "cue-card",
    cueCards: [
      {
        topic: "Describe a group project that you worked on.",
        prompts: [
          "What the project was about.",
          "Who you worked with.",
          "The result of the project."
        ]
      },
      {
        topic: "Describe a person who taught you how to do something.",
        prompts: [
          "Who it was.",
          "What they taught you.",
          "How they taught it to you."
        ]
      },
      {
        topic: "Describe a memory you have from school.",
        prompts: [
          "What happened.",
          "Why you remember it.",
          "Who you told about it."
        ]
      },
      {
        topic: "Describe an article you read that could help improve health/study habits.",
        prompts: [
          "When and where you read it.",
          "What it was about.",
          "Explain why it could improve people’s habits."
        ]
      }
    ]
  },
  {
    id: "part3",
    title: "Part 3: Two-Way Discussion",
    description: "4–5 minutes. Discuss abstract societal issues and compare/contrast ideas.",
    type: "discussion",
    clusters: [
      {
        topic: "Study Methods",
        questions: [
          { text: "How do you feel about group studying?" },
          { text: "What techniques help you study?" },
          { text: "Does it help to vary techniques when studying a specific subject?" },
          { text: "What are the easiest ways to learn a new language?" }
        ]
      },
      {
        topic: "Education System",
        questions: [
          { text: "Should education focus more on practical skills or academic knowledge?" },
          { text: "Do you think class sizes affect learning?" },
          { text: "What changes would you like to see in the education system?" },
          { text: "How has technology changed education in recent years?" }
        ]
      },
      {
        topic: "Online vs. Classroom",
        questions: [
          { text: "Do you think online learning will replace traditional classrooms?" },
          { text: "What are the drawbacks on learning online?" },
          { text: "Is it best to study in classrooms or online?" }
        ]
      },
      {
        topic: "Talent & Skills",
        questions: [
          { text: "Do you think it is important for children to have a special talent?" },
          { text: "Should parents help them to develop their talent?" },
          { text: "Who are you most likely to learn from: your friends, your teacher, or your parents?" }
        ]
      },
      {
        topic: "Memory & Technology",
        questions: [
          { text: "Why do more people today rely on cellphones to memorize things?" },
          { text: "Which can help people remember things better: words or photos?" }
        ]
      },
      {
        topic: "Collaboration & Social Skills",
        questions: [
          { text: "Why are communication skills so important?" },
          { text: "What skills should children learn from an early age?" }
        ]
      }
    ]
  }
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

  // --- VOCABULARY PART 1: Multiple Choice Tests (IDs 31-50) ---
  {
    id: 31,
    type: 'multiple-choice',
    sectionHeader: "Part 3: Vocabulary Practice (Multiple Choice)",
    instruction: "Section 1: Choose the option that best matches the meaning of the bolded word as used in the context.",
    category: "Definitions",
    question: "**Surgical Analysis**: The word 'surgical' implies that the analysis is:",
    options: [
      { id: "a", text: "painful", isCorrect: false },
      { id: "b", text: "performed in a hospital", isCorrect: false },
      { id: "c", text: "extremely precise and thorough", isCorrect: true },
      { id: "d", text: "fast", isCorrect: false }
    ]
  },
  {
    id: 32,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The debate concerns the **most beneficial** approach to learning. 'Beneficial' means:",
    options: [
      { id: "a", text: "kind", isCorrect: false },
      { id: "b", text: "advantageous", isCorrect: true },
      { id: "c", text: "expensive", isCorrect: false },
      { id: "d", text: "easy", isCorrect: false }
    ]
  },
  {
    id: 33,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The essay must define the **parameters** to ensure a high Task Response score. 'Parameters' are:",
    options: [
      { id: "a", text: "errors", isCorrect: false },
      { id: "b", text: "limits or boundaries", isCorrect: true },
      { id: "c", text: "opinions", isCorrect: false },
      { id: "d", text: "rules of grammar", isCorrect: false }
    ]
  },
  {
    id: 34,
    type: 'multiple-choice',
    category: "Definitions",
    question: "**Concession**: This part of the essay discusses the side you disagree with. A 'concession' is:",
    options: [
      { id: "a", text: "a strong argument", isCorrect: false },
      { id: "b", text: "acknowledging a point that is opposed to your main argument", isCorrect: true },
      { id: "c", text: "a final conclusion", isCorrect: false },
      { id: "d", text: "an instruction", isCorrect: false }
    ]
  },
  {
    id: 35,
    type: 'multiple-choice',
    category: "Definitions",
    question: "Collaborative learning can **foster critical discussion**. To 'foster' is to:",
    options: [
      { id: "a", text: "ignore", isCorrect: false },
      { id: "b", text: "limit", isCorrect: false },
      { id: "c", text: "encourage the development of", isCorrect: true },
      { id: "d", text: "stop", isCorrect: false }
    ]
  },
  {
    id: 36,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The essay argues about the **efficacy** of different study methods. 'Efficacy' refers to:",
    options: [
      { id: "a", text: "cost", isCorrect: false },
      { id: "b", text: "speed", isCorrect: false },
      { id: "c", text: "effectiveness", isCorrect: true },
      { id: "d", text: "enjoyment", isCorrect: false }
    ]
  },
  {
    id: 37,
    type: 'multiple-choice',
    category: "Definitions",
    question: "I believe that solitary study is **ultimately** more effective. 'Ultimately' means:",
    options: [
      { id: "a", text: "rarely", isCorrect: false },
      { id: "b", text: "immediately", isCorrect: false },
      { id: "c", text: "in the end or finally", isCorrect: true },
      { id: "d", text: "possibly", isCorrect: false }
    ]
  },
  {
    id: 38,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The primary advantage is that it **facilitates the exchange of ideas**. To 'facilitate' means to:",
    options: [
      { id: "a", text: "make difficult", isCorrect: false },
      { id: "b", text: "make easier", isCorrect: true },
      { id: "c", text: "stop", isCorrect: false },
      { id: "d", text: "organize", isCorrect: false }
    ]
  },
  {
    id: 39,
    type: 'multiple-choice',
    category: "Definitions",
    question: "When students explain concepts, it helps to **reinforce their own understanding**. To 'reinforce' is to:",
    options: [
      { id: "a", text: "make stronger", isCorrect: true },
      { id: "b", text: "question", isCorrect: false },
      { id: "c", text: "simplify", isCorrect: false },
      { id: "d", text: "forget", isCorrect: false }
    ]
  },
  {
    id: 40,
    type: 'multiple-choice',
    category: "Definitions",
    question: "Group work can often **devolve into** unrelated social conversation. To 'devolve into' means to:",
    options: [
      { id: "a", text: "begin with", isCorrect: false },
      { id: "b", text: "improve into", isCorrect: false },
      { id: "c", text: "decline or degenerate into", isCorrect: true },
      { id: "d", text: "transform quickly", isCorrect: false }
    ]
  },
  {
    id: 41,
    type: 'multiple-choice',
    category: "Definitions",
    question: "Solitary study allows the learner to **tailor their schedule**. To 'tailor' something is to:",
    options: [
      { id: "a", text: "simplify it", isCorrect: false },
      { id: "b", text: "customize it to specific needs", isCorrect: true },
      { id: "c", text: "share it", isCorrect: false },
      { id: "d", text: "write it down", isCorrect: false }
    ]
  },
  {
    id: 42,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The solitary method maximizes **productivity**. 'Productivity' is the measure of:",
    options: [
      { id: "a", text: "happiness", isCorrect: false },
      { id: "b", text: "efficiency in creating something valuable", isCorrect: true },
      { id: "c", text: "discussion", isCorrect: false },
      { id: "d", text: "time spent", isCorrect: false }
    ]
  },
  {
    id: 43,
    type: 'multiple-choice',
    category: "Definitions",
    question: "They can skim over concepts and **devote extra time to their weaknesses**. To 'devote' time is to:",
    options: [
      { id: "a", text: "save time", isCorrect: false },
      { id: "b", text: "allocate or dedicate time", isCorrect: true },
      { id: "c", text: "waste time", isCorrect: false },
      { id: "d", text: "borrow time", isCorrect: false }
    ]
  },
  {
    id: 44,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The essay must argue about **efficacy/results**, not just preference or enjoyment. 'Preference' means:",
    options: [
      { id: "a", text: "importance", isCorrect: false },
      { id: "b", text: "the outcome", isCorrect: false },
      { id: "c", text: "a greater liking for one alternative over others", isCorrect: true },
      { id: "d", text: "a strong demand", isCorrect: false }
    ]
  },
  {
    id: 45,
    type: 'multiple-choice',
    category: "Definitions",
    question: "It helps in **cementing memory**. 'Cementing' in this context means:",
    options: [
      { id: "a", text: "blurring", isCorrect: false },
      { id: "b", text: "building walls", isCorrect: false },
      { id: "c", text: "firmly establishing", isCorrect: true },
      { id: "d", text: "changing", isCorrect: false }
    ]
  },
  {
    id: 46,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The **Synthesis** in the conclusion summarizes the verdict. A 'synthesis' is:",
    options: [
      { id: "a", text: "a strong denial", isCorrect: false },
      { id: "b", text: "a detailed description", isCorrect: false },
      { id: "c", text: "the combining of separate parts into a coherent whole", isCorrect: true },
      { id: "d", text: "a new idea", isCorrect: false }
    ]
  },
  {
    id: 47,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The analysis involves **decoding the prompt**. To 'decode' is to:",
    options: [
      { id: "a", text: "make complex", isCorrect: false },
      { id: "b", text: "figure out the hidden meaning or requirements", isCorrect: true },
      { id: "c", text: "rewrite", isCorrect: false },
      { id: "d", text: "ignore", isCorrect: false }
    ]
  },
  {
    id: 48,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The argument allows for **peer correction**. 'Peer correction' is when:",
    options: [
      { id: "a", text: "a teacher grades the students", isCorrect: false },
      { id: "b", text: "students correct each other's mistakes", isCorrect: true },
      { id: "c", text: "students correct their own mistakes", isCorrect: false },
      { id: "d", text: "a test is graded", isCorrect: false }
    ]
  },
  {
    id: 49,
    type: 'multiple-choice',
    category: "Definitions",
    question: "While collaborative learning can **foster critical discussion**. 'Critical' discussion is one that is:",
    options: [
      { id: "a", text: "negative or complaining", isCorrect: false },
      { id: "b", text: "involving careful judgement and analysis", isCorrect: true },
      { id: "c", text: "very loud", isCorrect: false },
      { id: "d", text: "easy to understand", isCorrect: false }
    ]
  },
  {
    id: 50,
    type: 'multiple-choice',
    category: "Definitions",
    question: "The essay must ensure a high **Task Response** score. This score measures:",
    options: [
      { id: "a", text: "grammar accuracy", isCorrect: false },
      { id: "b", text: "vocabulary range", isCorrect: false },
      { id: "c", text: "how well you address all parts of the prompt", isCorrect: true },
      { id: "d", text: "essay length", isCorrect: false }
    ]
  },

  // --- VOCABULARY PART 2: Matching Quizzes (IDs 51-60) ---
  {
    id: 51,
    type: 'multiple-choice',
    instruction: "Section 2: Match the vocabulary word with its most appropriate synonym or definition.",
    category: "Synonym Match",
    question: "Select the definition for: **Concede**",
    options: [
      { id: "a", text: "To argue strongly for", isCorrect: false },
      { id: "b", text: "To admit or acknowledge something as true", isCorrect: true },
      { id: "c", text: "A result or effect", isCorrect: false },
      { id: "d", text: "To limit", isCorrect: false }
    ]
  },
  {
    id: 52,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Advocate**",
    options: [
      { id: "a", text: "To argue strongly for or in favor of", isCorrect: true },
      { id: "b", text: "To bring together", isCorrect: false },
      { id: "c", text: "A design or plan", isCorrect: false },
      { id: "d", text: "Done alone", isCorrect: false }
    ]
  },
  {
    id: 53,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Consequence**",
    options: [
      { id: "a", text: "Exactness and accuracy", isCorrect: false },
      { id: "b", text: "To state again", isCorrect: false },
      { id: "c", text: "A result or effect of an action", isCorrect: true },
      { id: "d", text: "Limits the scope", isCorrect: false }
    ]
  },
  {
    id: 54,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Blueprint**",
    options: [
      { id: "a", text: "The architectural plan or design", isCorrect: true },
      { id: "b", text: "The way something works", isCorrect: false },
      { id: "c", text: "Done alone", isCorrect: false },
      { id: "d", text: "To bring together", isCorrect: false }
    ]
  },
  {
    id: 55,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Consolidate**",
    options: [
      { id: "a", text: "To admit as true", isCorrect: false },
      { id: "b", text: "To bring together (separate items) into a single, unified whole", isCorrect: true },
      { id: "c", text: "To limit the scope", isCorrect: false },
      { id: "d", text: "To state forcefully", isCorrect: false }
    ]
  },
  {
    id: 56,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Restrict**",
    options: [
      { id: "a", text: "Limits the scope or extent", isCorrect: true },
      { id: "b", text: "Marked by accuracy", isCorrect: false },
      { id: "c", text: "To argue for", isCorrect: false },
      { id: "d", text: "To combine parts", isCorrect: false }
    ]
  },
  {
    id: 57,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Mechanism**",
    options: [
      { id: "a", text: "A result of action", isCorrect: false },
      { id: "b", text: "The way something works or produces a particular effect", isCorrect: true },
      { id: "c", text: "Existing alone", isCorrect: false },
      { id: "d", text: "An acknowledgement", isCorrect: false }
    ]
  },
  {
    id: 58,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Precise**",
    options: [
      { id: "a", text: "Marked by exactness and accuracy", isCorrect: true },
      { id: "b", text: "To state again", isCorrect: false },
      { id: "c", text: "A plan", isCorrect: false },
      { id: "d", text: "Unified whole", isCorrect: false }
    ]
  },
  {
    id: 59,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Reassert**",
    options: [
      { id: "a", text: "To admit", isCorrect: false },
      { id: "b", text: "To state again strongly or forcefully", isCorrect: true },
      { id: "c", text: "To limit", isCorrect: false },
      { id: "d", text: "To facilitate", isCorrect: false }
    ]
  },
  {
    id: 60,
    type: 'multiple-choice',
    category: "Synonym Match",
    question: "Select the definition for: **Solitary**",
    options: [
      { id: "a", text: "Done or existing alone", isCorrect: true },
      { id: "b", text: "Group work", isCorrect: false },
      { id: "c", text: "Complex", isCorrect: false },
      { id: "d", text: "Effective", isCorrect: false }
    ]
  },

  // --- VOCABULARY PART 3: Gap-Fill (IDs 61-70) ---
  {
    id: 61,
    type: 'input',
    sectionHeader: "Part 4: Vocabulary Gap-Fill",
    instruction: "Section 3: Use the Word Bank to fill the gaps. Words may need adjustment.",
    category: "Gap Fill",
    question: "To ensure we pass the test, we must first define the ______ of the essay prompt.",
    correctAnswer: "parameters",
    wordBank: [
      "efficacy", "consequently", "reinforced", "accommodate", "advocates",
      "lexical", "devoting", "maintain", "parameters", "dominance"
    ]
  },
  {
    id: 62,
    type: 'input',
    category: "Gap Fill",
    question: "The research aimed to determine the ______ of the new teaching method versus the old one.",
    correctAnswer: "efficacy"
  },
  {
    id: 63,
    type: 'input',
    category: "Gap Fill",
    question: "After practicing the argument multiple times, the student's conviction was strongly ______.",
    correctAnswer: "reinforced"
  },
  {
    id: 64,
    type: 'input',
    category: "Gap Fill",
    question: "The conclusion reasserts the ______ of the solitary method over the group method.",
    correctAnswer: "dominance"
  },
  {
    id: 65,
    type: 'input',
    category: "Gap Fill",
    question: "The student succeeded by ______ extra time to their weakest subjects.",
    correctAnswer: "devoting"
  },
  {
    id: 66,
    type: 'input',
    category: "Gap Fill",
    question: "Many educational experts ______ for a blended learning approach.",
    correctAnswer: "advocate" // Note: Answer key says "advocates" (plural noun or verb). "Experts advocate" (verb). Prompt list has 'advocates' but instruction says 'words may need adjustment'. "advocates" (noun) is in list. Experts (plural) advocate (verb). Correct is "advocate". I will accept "advocate".
  },
  {
    id: 67,
    type: 'input',
    category: "Gap Fill",
    question: "Since the old system was far too slow, ______, the company decided to upgrade all of its hardware.",
    correctAnswer: "consequently"
  },
  {
    id: 68,
    type: 'input',
    category: "Gap Fill",
    question: "When writing for IELTS, a strong ______ resource (vocabulary) is essential for a high score.",
    correctAnswer: "lexical"
  },
  {
    id: 69,
    type: 'input',
    category: "Gap Fill",
    question: "I ______ that self-paced study is superior because it minimizes external distractions.",
    correctAnswer: "maintain"
  },
  {
    id: 70,
    type: 'input',
    category: "Gap Fill",
    question: "The classroom schedule should be flexible enough to ______ the needs of individual learners.",
    correctAnswer: "accommodate"
  },
];