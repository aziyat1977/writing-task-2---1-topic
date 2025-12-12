
import { LEXICAL_DATA, MODEL_ANSWER_PARAGRAPHS, SPEAKING_DATA, GRAMMAR_QUESTIONS } from '../constants';

const en = {
  nav: {
    overview: 'Overview',
    p1: 'Phase 1: Analysis',
    p2: 'Phase 2: Construction',
    p3: 'Phase 3: Model Answer',
    p4: 'Phase 4: Lexical Resource',
    grammarTheory: 'Grammar Masterclass',
    grammarPractice: 'Grammar & Vocabulary',
    speaking: 'Speaking Practice',
    footer: '© 2024 Master Class Series. Educational Demo.'
  },
  hero: {
    badge: 'Master Class Series',
    title: 'Essay Construction',
    subtitle: 'Surgical Breakdown • Band 9 Strategy',
    start: 'Start Class',
    topicLabel: 'The Topic',
    taskLabel: 'The Task',
    topicText: "Some people think that it is more effective for students to study in a group, while others believe that they should study alone.",
    taskText: "Discuss both these views and give your own opinion."
  },
  common: {
    prev: 'Previous',
    next: 'Next',
    goal: 'Goal',
    correct: 'Correct!',
    tryAgain: 'Try again.',
    reveal: 'Reveal Model Answer',
    check: 'Check',
    part: 'Part',
    step: 'Step'
  },
  // ... Phase 1, 2, 3, 4 kept brief for surgery, assuming they exist from previous file state ...
  phase1: {
    part1: {
      id: '1.1',
      title: 'Decoding the Prompt',
      desc: 'The first step to a Band 9 is correctly identifying the constraints.',
      breakdown: 'The Breakdown',
      topicLabel: 'Topic',
      topicValue: 'Study Habits: Group vs. Alone',
      trapLabel: 'THE TRAP (Restriction)',
      trapText: '"More Effective." We must argue about efficacy/results, not just preference or enjoyment.',
      mistake: '*Common Mistake: "I like studying alone because it is fun." (Incorrect - does not address efficacy)',
      instructionLabel: 'Instruction',
      instructionValue: 'Discuss both views + Give your own opinion.'
    },
    part2: {
      id: '1.2',
      title: 'Critical Thinking (T-Chart)',
      desc: 'We must balance the argument before we write.',
      ideaGen: 'Idea Generation',
      viewA: 'View A: Groups',
      viewB: 'View B: Alone',
      coreIdea: 'Core Idea',
      mechanism: 'Mechanism',
      viewACore: 'Peer Correction',
      viewAMech: 'The exchange of ideas fills knowledge gaps that books cannot explain.',
      viewBCore: 'Focus & Pacing',
      viewBMech: 'Eliminates social distraction; allows tailoring schedule to weak areas.'
    },
    part3: {
      id: '1.3',
      title: 'My Position',
      desc: 'The thesis statement controls the entire essay.',
      verdict: 'The Verdict',
      thesis: '"While I acknowledge that Group study has benefits, I argue that Solitary study is superior for exam results due to efficiency."',
      strategyTitle: 'Strategy Note',
      strategyText: 'Notice the "While" structure (Concession). We are not saying Group study is bad, we are saying Solitary is better. This nuance creates a Band 9 Task Response.'
    }
  },
  phase2: {
    part1: {
      id: '2.1',
      title: 'The Introduction',
      desc: 'Two sentences. 40-50 words. Precision is key.',
      stepTitle: 'Introduction Construction',
      stepGoal: 'Contextualize & State Position',
      s1Label: 'Sentence 1: The Paraphrase',
      s1Text: '"Opinions differ regarding the most beneficial approach to learning..."',
      s2Label: 'Sentence 2: The Thesis',
      s2Text: '"While collaborative learning can foster critical discussion, I believe that solitary study is ultimately more effective..."'
    },
    part2: {
      id: '2.2',
      title: 'The Body Paragraphs',
      desc: 'The core debate. One paragraph for the concession, one for your opinion.',
      step2Title: 'Body A (Concession)',
      step2Goal: 'Discuss the opposing view fairly',
      tsLabel: 'Topic Sentence',
      tsA: '"On the one hand, there are clear benefits to studying with peers."',
      argLabel: 'Argument',
      argA: 'It facilitates the exchange of ideas.',
      resLabel: 'Result',
      resA: 'Difficult concepts become easier to grasp through discussion (Peer Correction).',
      step3Title: 'Body B (The Opinion)',
      step3Goal: 'Discuss your view & prove superiority',
      tsB: '"On the other hand, I support the view that solitary study is superior..."',
      argB: 'Unlike groups which devolve into chat, alone time removes distractions.',
      resB: 'It is more time-efficient for retaining facts.'
    },
    part3: {
      id: '2.3',
      title: 'The Conclusion',
      desc: 'Summarize, do not repeat. Provide a final synthesis.',
      stepTitle: 'Conclusion Construction',
      stepGoal: 'Summarize verdict without word-for-word repetition',
      formulaLabel: 'The Formula',
      formulaText: 'Linker + Re-concede (Briefly) + Re-assert Opinion (Strongly)',
      synthesisLabel: 'Synthesis',
      synthesisText: 'Acknowledge the value of groups ("collaborative learning") but reassert the dominance of the solitary method ("distraction-free environment").'
    }
  },
  phase3: {
    part1: {
      id: '3.1',
      title: 'The Opening',
      desc: 'The Introduction and the Concession Paragraph.',
      typeIntro: 'Introduction',
      typeBodyA: 'Body A (Concession)'
    },
    part2: {
      id: '3.2',
      title: 'The Main Argument',
      desc: 'Your opinion paragraph. This is where you win the argument.',
      typeBodyB: 'Body B (Opinion)',
      noteTitle: 'Note the Transition',
      noteQuote: '"On the other hand, I support the view that..."',
      noteText: 'This clearly signals the shift from the concession to your actual position.'
    },
    part3: {
      id: '3.3',
      title: 'The Closing',
      desc: 'The Conclusion and Final Stats.',
      typeConc: 'Conclusion',
      bandScore: 'Band Score',
      wordCount: 'Word Count'
    }
  },
  phase4: {
    part1: {
      id: '4.1',
      title: 'Lexical Resource Intro',
      desc: 'Vocabulary is not about using "big words". It is about collocation and precision.',
      examinerTitle: "The Examiner's Eye",
      examinerText: 'Examiners look for natural phrasing. Instead of saying "make people talk" (Band 5/6), a Band 9 writer says "foster critical discussion". The meaning is the same, but the precision is vastly different.',
      quote: '"Lexical resource is about the natural selection of words that fit together (collocations)."'
    },
    part2: {
      id: '4.2',
      title: 'High-Utility Collocations',
      desc: 'The specific vocabulary used in our Model Answer.',
      colHeader: 'Collocation',
      analysisHeader: 'Analysis'
    },
    part3: {
      id: '4.3',
      title: 'Apply & Download',
      desc: 'You now have the complete blueprint.',
      cardTitle: 'Ready to Write?',
      cardText: 'Download the PDF template that includes this structure, the vocabulary list, and 5 practice prompts.',
      btnText: 'Download Template PDF'
    }
  },
  grammarMaster: {
    title1: 'Masterclass: Subordination',
    desc1: 'The key to complex sentences (MFP Analysis).',
    title2: 'Masterclass: Complex Modifiers',
    desc2: 'Adding density and detail (MFP Analysis).',
    title3: 'Masterclass: Coherence & Passives',
    desc3: 'Advanced flow and academic tone (MFP Analysis).',
    mfpMeaning: 'Meaning (Concept)',
    mfpForm: 'Form (Grammar)',
    mfpPronunciation: 'Pronunciation (Intonation)',
    drill: 'Quick Drill'
  },
  grammarPractice: {
    title1: 'Part 1: Foundational Grammar',
    sub1: 'Multiple Choice Checks',
    title2: 'Part 2: Advanced Practice',
    sub2: 'Gap Fill & Sentence Combining',
    title3: 'Part 3: Vocabulary Check',
    sub3: 'Definitions & Synonyms',
    wordBank: 'Word Bank'
  },
  speaking: {
    part1Title: 'Speaking Part 1',
    part1Desc: 'Introduction & Interview (4-5 mins)',
    part2Title: 'Speaking Part 2',
    part2Desc: 'Individual Long Turn (3-4 mins)',
    part3Title: 'Speaking Part 3',
    part3Desc: 'Two-Way Discussion (4-5 mins)',
    say: 'You should say:'
  },
  // Fully Translated Data for MFP
  grammarMasterData: [
    {
      id: "topic1",
      title: "1. Concessive Clauses",
      function: "To acknowledge the opposing view before crushing it.",
      rows: [
        {
            feature: "While / Although",
            meaning: "Admitting a point is true, BUT subordinating it to a stronger point.",
            form: "While + [Clause A], [Clause B] (Clause B is the winner)",
            drill: "Rewrite: Group study is good, but I prefer alone. -> **While** group study is good, I prefer alone."
        }
      ],
      pronunciation: "Pitch rises on the 'While' clause, pauses at the comma, and falls firmly on the main clause."
    },
    {
      id: "topic2",
      title: "2. Non-Restrictive Modifiers",
      function: "To add detail without starting a new sentence.",
      rows: [
         {
            feature: ", which...",
            meaning: "Adding extra description about the noun before it.",
            form: "Noun + , + which + verb + ... + ,",
            drill: "Combine: Groups are noisy. Groups are bad. -> Groups, **which are noisy**, are bad."
         }
      ],
      pronunciation: "Short pause at the commas. Lower pitch for the 'which' clause."
    },
    {
      id: "topic3_1",
      title: "3. Linking Devices",
      function: "Signposting logic.",
      rows: [
          {
            feature: "Consequently",
            meaning: "Result / Effect.",
            form: "Sentence A. + Consequently, + Sentence B.",
            drill: "Use: It rained. **Consequently**, I stayed home."
          }
      ],
      pronunciation: "Stress on the first syllable. Con-se-quent-ly."
    },
    {
      id: "topic3_2",
      title: "4. Passive Gerunds",
      function: "Describing a state of being.",
      rows: [
          {
            feature: "Without being...",
            meaning: "Avoidance of an action by others.",
            form: "Without + being + Past Participle",
            drill: "Fill: I focused **without being disturbed**."
          }
      ],
      pronunciation: "Link 'without' and 'being' smoothly."
    }
  ],
  // Translated Context for Quizzes
  grammarQuizContext: {
    quiz1: {
      title: "Knowledge Check: Subordination",
      questions: [
        {
          question: "Where is the main idea placed in a sentence starting with 'While'?",
          options: ["Before the comma", "In the main clause (after the comma)", "In the first word", "Not present"],
          correctAnswerIndex: 1,
          explanation: "The 'While' clause creates a concession (weak), and the main clause holds the strong argument."
        },
        {
          question: "What is the function of Concessive clauses?",
          options: ["To agree 100%", "To ask a question", "To acknowledge opposing view before arguing", "To list facts"],
          correctAnswerIndex: 2,
          explanation: "They allow for a balanced argument by admitting the other side has merit before proving your side is better."
        }
      ]
    },
    quiz2: {
      title: "Knowledge Check: Modifiers",
      questions: [
        {
          question: "What punctuation is required for a non-restrictive 'which' clause?",
          options: ["Hyphens", "Commas before and after", "Periods", "Colons"],
          correctAnswerIndex: 1,
          explanation: "Non-restrictive clauses add extra info. You must 'cut' them out with commas."
        },
        {
          question: "What does a participle phrase ending in -ing usually describe?",
          options: ["Past action", "Future plan", "Concurrent action or result", "Opposite action"],
          correctAnswerIndex: 2,
          explanation: "Participle phrases (e.g., '...filling gaps') describe things happening at the same time."
        }
      ]
    },
    quiz3: {
      title: "Knowledge Check: Coherence",
      questions: [
        {
          question: "What linker signals a result?",
          options: ["However", "Consequently", "Although", "But"],
          correctAnswerIndex: 1,
          explanation: "'Consequently' explicitly tells the reader what follows is the effect."
        },
        {
          question: "How is the 'Without' passive gerund formed?",
          options: ["Without + to be", "Without + being + Past Participle", "Without + been", "Without + be"],
          correctAnswerIndex: 1,
          explanation: "Correct form: Preposition (Without) + Gerund (being) + Past Participle."
        }
      ]
    }
  },
  lexicalData: LEXICAL_DATA,
  modelParagraphs: MODEL_ANSWER_PARAGRAPHS,
  grammarQuestions: GRAMMAR_QUESTIONS,
  speakingData: SPEAKING_DATA
};

const ru = {
  ...en, // Fallback for things not explicitly overwritten
  nav: {
    overview: 'Обзор',
    p1: 'Фаза 1: Анализ',
    p2: 'Фаза 2: Конструкция',
    p3: 'Фаза 3: Пример эссе',
    p4: 'Фаза 4: Лексика',
    grammarTheory: 'Грамматика (MFP)',
    grammarPractice: 'Практика и Словарь',
    speaking: 'Практика речи',
    footer: '© 2024 Серия мастер-классов. Демо-версия.'
  },
  grammarMaster: {
    title1: 'Мастер-класс: Подчинение',
    desc1: 'Ключ к сложным предложениям (MFP Анализ).',
    title2: 'Мастер-класс: Модификаторы',
    desc2: 'Плотность и детали (MFP Анализ).',
    title3: 'Мастер-класс: Связность',
    desc3: 'Академический тон (MFP Анализ).',
    mfpMeaning: 'Meaning (Значение)',
    mfpForm: 'Form (Грамматика)',
    mfpPronunciation: 'Pronunciation (Интонация)',
    drill: 'Упражнение'
  },
  common: {
    prev: 'Назад',
    next: 'Далее',
    goal: 'Цель',
    correct: 'Верно!',
    tryAgain: 'Попробуйте снова.',
    reveal: 'Показать ответ',
    check: 'Проверить',
    part: 'Часть',
    step: 'Шаг'
  },
  grammarMasterData: [
    {
      id: "topic1",
      title: "1. Уступительные придаточные",
      function: "Признать противоположное мнение перед тем, как опровергнуть его.",
      rows: [
        {
            feature: "While / Although",
            meaning: "Признание правдивости одного факта, НО подчинение его более сильному аргументу.",
            form: "While + [Часть А], [Часть Б] (Часть Б важнее)",
            drill: "Перепишите: Группы — это хорошо, но я предпочитаю соло. -> **While** group study is good, I prefer alone."
        }
      ],
      pronunciation: "Тон повышается на части 'While', пауза на запятой, твердое понижение на главной части."
    },
    {
      id: "topic2",
      title: "2. Уточняющие обороты",
      function: "Добавить детали, не начиная новое предложение.",
      rows: [
         {
            feature: ", which...",
            meaning: "Добавление описания к существительному.",
            form: "Сущ + , + which + глагол + ... + ,",
            drill: "Соедините: Groups are noisy. Groups are bad. -> Groups, **which are noisy**, are bad."
         }
      ],
      pronunciation: "Короткая пауза на запятых. Тон ниже на части 'which'."
    },
    {
      id: "topic3_1",
      title: "3. Связующие слова",
      function: "Указатели логики.",
      rows: [
          {
            feature: "Consequently",
            meaning: "Результат / Эффект.",
            form: "Предложение А. + Consequently, + Предложение Б.",
            drill: "Примените: It rained. **Consequently**, I stayed home."
          }
      ],
      pronunciation: "Ударение на первый слог. Con-se-quent-ly."
    },
    {
      id: "topic3_2",
      title: "4. Пассивный Герундий",
      function: "Описание состояния.",
      rows: [
          {
            feature: "Without being...",
            meaning: "Избежание действия со стороны других.",
            form: "Without + being + Past Participle",
            drill: "Заполните: I focused **without being disturbed**."
          }
      ],
      pronunciation: "Плавно соедините 'without' и 'being'."
    }
  ],
  grammarQuizContext: {
    quiz1: {
      title: "Проверка знаний: Подчинение",
      questions: [
        {
          question: "Где находится главная идея в предложении с 'While'?",
          options: ["До запятой", "В главной части (после запятой)", "В первом слове", "Отсутствует"],
          correctAnswerIndex: 1,
          explanation: "Часть 'While' создает уступку (слабую), а главная часть после запятой содержит сильный аргумент."
        },
        {
          question: "Какова функция уступительных придаточных?",
          options: ["Согласиться на 100%", "Задать вопрос", "Признать другое мнение перед спором", "Перечислить факты"],
          correctAnswerIndex: 2,
          explanation: "Они позволяют сбалансировать аргумент, признавая заслуги другой стороны."
        }
      ]
    },
    quiz2: {
      title: "Проверка знаний: Модификаторы",
      questions: [
        {
          question: "Какая пунктуация нужна для оборота с 'which'?",
          options: ["Дефисы", "Запятые с обеих сторон", "Точки", "Двоеточия"],
          correctAnswerIndex: 1,
          explanation: "Такие обороты добавляют доп. информацию. Их нужно 'вырезать' запятыми."
        },
        {
          question: "Что описывает причастный оборот на -ing?",
          options: ["Прошлое действие", "План на будущее", "Одновременное действие или результат", "Противоположное действие"],
          correctAnswerIndex: 2,
          explanation: "Они описывают вещи, происходящие одновременно."
        }
      ]
    },
    quiz3: {
      title: "Проверка знаний: Связность",
      questions: [
        {
          question: "Какое слово сигнализирует о результате?",
          options: ["However", "Consequently", "Although", "But"],
          correctAnswerIndex: 1,
          explanation: "'Consequently' прямо говорит читателю, что дальше следует эффект."
        },
        {
          question: "Как формируется пассивный герундий с 'Without'?",
          options: ["Without + to be", "Without + being + Past Participle", "Without + been", "Without + be"],
          correctAnswerIndex: 1,
          explanation: "Правильная форма: Предлог (Without) + Герундий (being) + Причастие прошедшего времени."
        }
      ]
    }
  }
};

const uz = {
  ...en,
  nav: {
    overview: 'Umumiy',
    p1: '1-Bosqich: Tahlil',
    p2: '2-Bosqich: Qurilish',
    p3: '3-Bosqich: Namuna',
    p4: '4-Bosqich: Leksika',
    grammarTheory: 'Grammatika (MFP)',
    grammarPractice: 'Grammatika va Lug‘at',
    speaking: 'So‘zlashuv',
    footer: '© 2024 Master Class Series. Demo.'
  },
  grammarMaster: {
    title1: 'Master-klass: Ergashish',
    desc1: 'Murakkab gaplar kaliti (MFP Tahlil).',
    title2: 'Master-klass: Modifikatorlar',
    desc2: 'Zichlik va tafsilot (MFP Tahlil).',
    title3: 'Master-klass: Bog‘liqlik',
    desc3: 'Akademik ohang (MFP Tahlil).',
    mfpMeaning: 'Meaning (Ma\'no)',
    mfpForm: 'Form (Shakl)',
    mfpPronunciation: 'Pronunciation (Talaffuz)',
    drill: 'Mashq'
  },
  common: {
    prev: 'Oldingi',
    next: 'Keyingi',
    goal: 'Maqsad',
    correct: 'To‘g‘ri!',
    tryAgain: 'Qayta urinib ko‘ring.',
    reveal: 'Javobni ko‘rsatish',
    check: 'Tekshirish',
    part: 'Qism',
    step: 'Qadam'
  },
  grammarMasterData: [
    {
      id: "topic1",
      title: "1. To'siqsiz Ergash Gaplar",
      function: "Qarama-qarshi fikrni rad etishdan oldin tan olish.",
      rows: [
        {
            feature: "While / Although",
            meaning: "Bir fikrning to'g'riligini tan olish, LEKIN uni kuchliroq fikrga bo'ysundirish.",
            form: "While + [A qism], [B qism] (B qism muhimroq)",
            drill: "Qayta yozing: Group study is good, but I prefer alone. -> **While** group study is good, I prefer alone."
        }
      ],
      pronunciation: "'While' qismida ohang ko'tariladi, vergulda to'xtaladi, asosiy qismda qat'iy tushadi."
    },
    {
      id: "topic2",
      title: "2. Cheklovchi bo'lmagan aniqlovchilar",
      function: "Yangi gap boshlamasdan tafsilot qo'shish.",
      rows: [
         {
            feature: ", which...",
            meaning: "Ot haqida qo'shimcha tavsif qo'shish.",
            form: "Ot + , + which + fe'l + ... + ,",
            drill: "Birlashtiring: Groups are noisy. Groups are bad. -> Groups, **which are noisy**, are bad."
         }
      ],
      pronunciation: "Vergullarda qisqa pauza. 'which' qismida pastroq ohang."
    },
    {
      id: "topic3_1",
      title: "3. Bog'lovchi Vositalar",
      function: "Mantiqiy ko'rsatkichlar.",
      rows: [
          {
            feature: "Consequently",
            meaning: "Natija / Effekt.",
            form: "Gap A. + Consequently, + Gap B.",
            drill: "Qo'llang: It rained. **Consequently**, I stayed home."
          }
      ],
      pronunciation: "Birinchi bo'g'inga urg'u. Con-se-quent-ly."
    },
    {
      id: "topic3_2",
      title: "4. Majhul Gerundiy",
      function: "Holatni tasvirlash.",
      rows: [
          {
            feature: "Without being...",
            meaning: "Boshqalar tomonidan harakatning oldini olish.",
            form: "Without + being + O'tgan Zamon Sifatdoshi",
            drill: "To'ldiring: I focused **without being disturbed**."
          }
      ],
      pronunciation: "'without' va 'being' so'zlarini silliq bog'lang."
    }
  ],
  grammarQuizContext: {
    quiz1: {
      title: "Bilimni Tekshirish: Ergashish",
      questions: [
        {
          question: "'While' bilan boshlanadigan gapda asosiy g'oya qayerda joylashgan?",
          options: ["Verguldan oldin", "Asosiy qismda (verguldan keyin)", "Birinchi so'zda", "Mavjud emas"],
          correctAnswerIndex: 1,
          explanation: "'While' qismi yon berishni (kuchsiz), asosiy qism esa kuchli argumentni bildiradi."
        },
        {
          question: "To'siqsiz ergash gaplarning vazifasi nima?",
          options: ["100% rozi bo'lish", "Savol berish", "Bahslashishdan oldin qarama-qarshi fikrni tan olish", "Faktlarni sanash"],
          correctAnswerIndex: 2,
          explanation: "Ular boshqa tomonning ham haqiqati borligini tan olish orqali muvozanatli argument yaratishga imkon beradi."
        }
      ]
    },
    quiz2: {
      title: "Bilimni Tekshirish: Modifikatorlar",
      questions: [
        {
          question: "Cheklovchi bo'lmagan 'which' iborasi uchun qanday tinish belgisi kerak?",
          options: ["Defislar", "Ikki tomondan vergul", "Nuqtalar", "Ikki nuqta"],
          correctAnswerIndex: 1,
          explanation: "Bunday iboralar qo'shimcha ma'lumot beradi. Ularni vergullar bilan 'ajratib olish' kerak."
        },
        {
          question: "-ing bilan tugaydigan sifatdosh iborasi nimani tasvirlaydi?",
          options: ["O'tgan harakat", "Kelajak rejasi", "Bir vaqtning o'zida sodir bo'lgan harakat yoki natija", "Qarama-qarshi harakat"],
          correctAnswerIndex: 2,
          explanation: "Sifatdosh iboralar (masalan, '...filling gaps') bir vaqtda sodir bo'layotgan narsalarni tasvirlaydi."
        }
      ]
    },
    quiz3: {
      title: "Bilimni Tekshirish: Bog'liqlik",
      questions: [
        {
          question: "Qaysi bog'lovchi natijani bildiradi?",
          options: ["However", "Consequently", "Although", "But"],
          correctAnswerIndex: 1,
          explanation: "'Consequently' o'quvchiga keyingi narsa oldingi harakatning samarasi ekanligini aytadi."
        },
        {
          question: "'Without' majhul gerundiy qanday yasaladi?",
          options: ["Without + to be", "Without + being + O'tgan Zamon Sifatdoshi", "Without + been", "Without + be"],
          correctAnswerIndex: 1,
          explanation: "To'g'ri shakl: Predlog (Without) + Gerundiy (being) + O'tgan Zamon Sifatdoshi."
        }
      ]
    }
  }
};

export const translations = { en, ru, uz };
export type Language = 'en' | 'ru' | 'uz';
