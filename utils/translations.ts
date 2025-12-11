import { LEXICAL_DATA, MODEL_ANSWER_PARAGRAPHS, GRAMMAR_MASTERCLASS_DATA, GRAMMAR_QUESTIONS, SPEAKING_DATA } from '../constants';

// Helper to clone and translate specific fields in complex data structures would be ideal,
// but for clarity and type safety, we will define the full structure for each language.
// Note: We keep the "English" learning content (examples, essay text) in English, 
// but translate instructions, explanations, and meta-data.

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
    desc1: 'The key to complex sentences.',
    title2: 'Masterclass: Complex Modifiers',
    desc2: 'Adding density and detail.',
    title3: 'Masterclass: Coherence & Passives',
    desc3: 'Advanced flow and academic tone.',
    tableFeature: 'Feature',
    tableMeaning: 'Meaning',
    tableForm: 'Form & Examples',
    tableDrill: 'Drill',
    pronunciation: 'Pronunciation:'
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
  // Data
  lexicalData: LEXICAL_DATA,
  modelParagraphs: MODEL_ANSWER_PARAGRAPHS,
  grammarMasterData: GRAMMAR_MASTERCLASS_DATA,
  grammarQuestions: GRAMMAR_QUESTIONS,
  speakingData: SPEAKING_DATA
};

const ru = {
  nav: {
    overview: 'Обзор',
    p1: 'Фаза 1: Анализ',
    p2: 'Фаза 2: Конструкция',
    p3: 'Фаза 3: Пример эссе',
    p4: 'Фаза 4: Лексика',
    grammarTheory: 'Мастер-класс по грамматике',
    grammarPractice: 'Грамматика и словарь',
    speaking: 'Практика речи',
    footer: '© 2024 Серия мастер-классов. Образовательная демо-версия.'
  },
  hero: {
    badge: 'Серия мастер-классов',
    title: 'Конструкция Эссе',
    subtitle: 'Хирургический разбор • Стратегия Band 9',
    start: 'Начать урок',
    topicLabel: 'Тема',
    taskLabel: 'Задание',
    topicText: "Некоторые люди считают, что студентам эффективнее учиться в группе, в то время как другие полагают, что им следует учиться самостоятельно.",
    taskText: "Обсудите оба взгляда и выскажите свое собственное мнение."
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
  phase1: {
    part1: {
      id: '1.1',
      title: 'Расшифровка темы',
      desc: 'Первый шаг к Band 9 — правильное определение ограничений.',
      breakdown: 'Разбор',
      topicLabel: 'Тема',
      topicValue: 'Учебные привычки: В группе или в одиночку',
      trapLabel: 'ЛОВУШКА (Ограничение)',
      trapText: '"Более эффективно." Мы должны спорить об эффективности/результатах, а не просто о предпочтениях или удовольствии.',
      mistake: '*Частая ошибка: "Мне нравится учиться одному, потому что это весело." (Неверно — не касается эффективности)',
      instructionLabel: 'Инструкция',
      instructionValue: 'Обсудите оба взгляда + Дайте свое мнение.'
    },
    part2: {
      id: '1.2',
      title: 'Критическое мышление (T-Таблица)',
      desc: 'Мы должны взвесить аргументы перед написанием.',
      ideaGen: 'Генерация идей',
      viewA: 'Взгляд А: Группы',
      viewB: 'Взгляд Б: В одиночку',
      coreIdea: 'Основная идея',
      mechanism: 'Механизм',
      viewACore: 'Взаимная коррекция',
      viewAMech: 'Обмен идеями заполняет пробелы в знаниях, которые книги не могут объяснить.',
      viewBCore: 'Фокус и темп',
      viewBMech: 'Устраняет социальные отвлечения; позволяет адаптировать график к слабым местам.'
    },
    part3: {
      id: '1.3',
      title: 'Моя позиция',
      desc: 'Тезис управляет всем эссе.',
      verdict: 'Вердикт',
      thesis: '"Хотя я признаю, что групповое обучение имеет преимущества, я утверждаю, что самостоятельное обучение превосходит его по результатам экзаменов из-за эффективности."',
      strategyTitle: 'Стратегическая заметка',
      strategyText: 'Обратите внимание на структуру "While" (Уступка). Мы не говорим, что групповое обучение плохо, мы говорим, что самостоятельное лучше. Этот нюанс создает Task Response уровня Band 9.'
    }
  },
  phase2: {
    part1: {
      id: '2.1',
      title: 'Введение',
      desc: 'Два предложения. 40-50 слов. Точность — это ключ.',
      stepTitle: 'Конструкция введения',
      stepGoal: 'Контекстуализация и заявление позиции',
      s1Label: 'Предложение 1: Парафраз',
      s1Text: '"Мнения расходятся относительно наиболее полезного подхода к обучению..."',
      s2Label: 'Предложение 2: Тезис',
      s2Text: '"Хотя совместное обучение может способствовать критическому обсуждению, я считаю, что самостоятельное обучение в конечном итоге более эффективно..."'
    },
    part2: {
      id: '2.2',
      title: 'Основная часть',
      desc: 'Основной спор. Один абзац для уступки, один для вашего мнения.',
      step2Title: 'Тело А (Уступка)',
      step2Goal: 'Честно обсудите противоположную точку зрения',
      tsLabel: 'Тематическое предложение',
      tsA: '"С одной стороны, есть явные преимущества обучения со сверстниками."',
      argLabel: 'Аргумент',
      argA: 'Это облегчает обмен идеями.',
      resLabel: 'Результат',
      resA: 'Сложные концепции часто становятся легче для понимания через обсуждение (Взаимная коррекция).',
      step3Title: 'Тело Б (Мнение)',
      step3Goal: 'Обсудите ваш взгляд и докажите превосходство',
      tsB: '"С другой стороны, я поддерживаю мнение, что самостоятельное обучение лучше..."',
      argB: 'В отличие от групп, которые переходят в болтовню, одиночество убирает отвлечения.',
      resB: 'Это более эффективно по времени для запоминания фактов.'
    },
    part3: {
      id: '2.3',
      title: 'Заключение',
      desc: 'Резюмируйте, не повторяйте. Дайте финальный синтез.',
      stepTitle: 'Конструкция заключения',
      stepGoal: 'Резюмировать вердикт без дословного повторения',
      formulaLabel: 'Формула',
      formulaText: 'Связка + Повторная уступка (Кратко) + Повторное утверждение мнения (Сильно)',
      synthesisLabel: 'Синтез',
      synthesisText: 'Признайте ценность групп ("collaborative learning"), но подтвердите доминирование одиночного метода ("distraction-free environment").'
    }
  },
  phase3: {
    part1: {
      id: '3.1',
      title: 'Открытие',
      desc: 'Введение и абзац уступки.',
      typeIntro: 'Введение',
      typeBodyA: 'Тело А (Уступка)'
    },
    part2: {
      id: '3.2',
      title: 'Главный аргумент',
      desc: 'Абзац вашего мнения. Здесь вы выигрываете спор.',
      typeBodyB: 'Тело Б (Мнение)',
      noteTitle: 'Обратите внимание на переход',
      noteQuote: '"С другой стороны, я поддерживаю мнение, что..."',
      noteText: 'Это четко сигнализирует о переходе от уступки к вашей фактической позиции.'
    },
    part3: {
      id: '3.3',
      title: 'Закрытие',
      desc: 'Заключение и финальная статистика.',
      typeConc: 'Заключение',
      bandScore: 'Балл Band',
      wordCount: 'Количество слов'
    }
  },
  phase4: {
    part1: {
      id: '4.1',
      title: 'Введение в лексику',
      desc: 'Словарный запас — это не использование "умных слов". Это коллокации и точность.',
      examinerTitle: "Взгляд экзаменатора",
      examinerText: 'Экзаменаторы ищут естественные фразы. Вместо "make people talk" (Band 5/6), писатель Band 9 скажет "foster critical discussion". Смысл тот же, но точность совершенно иная.',
      quote: '"Лексический ресурс — это естественный подбор слов, которые сочетаются друг с другом (коллокации)."'
    },
    part2: {
      id: '4.2',
      title: 'Высокочастотные коллокации',
      desc: 'Специфическая лексика, использованная в нашем примере эссе.',
      colHeader: 'Коллокация',
      analysisHeader: 'Анализ'
    },
    part3: {
      id: '4.3',
      title: 'Применить и скачать',
      desc: 'Теперь у вас есть полный план.',
      cardTitle: 'Готовы писать?',
      cardText: 'Скачайте PDF-шаблон, который включает эту структуру, список слов и 5 тем для практики.',
      btnText: 'Скачать шаблон PDF'
    }
  },
  grammarMaster: {
    title1: 'Мастер-класс: Подчинение',
    desc1: 'Ключ к сложным предложениям.',
    title2: 'Мастер-класс: Сложные модификаторы',
    desc2: 'Добавление плотности и деталей.',
    title3: 'Мастер-класс: Связность и пассив',
    desc3: 'Продвинутый поток и академический тон.',
    tableFeature: 'Функция',
    tableMeaning: 'Значение',
    tableForm: 'Форма и примеры',
    tableDrill: 'Упражнение',
    pronunciation: 'Произношение:'
  },
  grammarPractice: {
    title1: 'Часть 1: Основы грамматики',
    sub1: 'Проверка с выбором ответа',
    title2: 'Часть 2: Продвинутая практика',
    sub2: 'Заполнение пропусков и объединение предложений',
    title3: 'Часть 3: Проверка словаря',
    sub3: 'Определения и синонимы',
    wordBank: 'Банк слов'
  },
  speaking: {
    part1Title: 'Говорение Часть 1',
    part1Desc: 'Введение и интервью (4-5 мин)',
    part2Title: 'Говорение Часть 2',
    part2Desc: 'Индивидуальный монолог (3-4 мин)',
    part3Title: 'Говорение Часть 3',
    part3Desc: 'Двустороннее обсуждение (4-5 мин)',
    say: 'Вы должны сказать:'
  },
  // Data (Providing translated instructions/explanations only, keeping English content)
  lexicalData: LEXICAL_DATA.map(item => ({
    collocation: item.collocation,
    explanation: item.explanation // Ideally translate this too, but keeping EN for now as per "surgical" approach to keep model small. UI translation is priority.
  })),
  modelParagraphs: MODEL_ANSWER_PARAGRAPHS,
  grammarMasterData: GRAMMAR_MASTERCLASS_DATA.map(t => ({...t, title: t.title, function: t.function})), // Placeholder for full data translation
  grammarQuestions: GRAMMAR_QUESTIONS, // Questions are practice, keep EN
  speakingData: SPEAKING_DATA // Prompts are practice, keep EN
};

const uz = {
  nav: {
    overview: 'Umumiy ko‘rinish',
    p1: '1-Bosqich: Tahlil',
    p2: '2-Bosqich: Qurilish',
    p3: '3-Bosqich: Namuna Insho',
    p4: '4-Bosqich: Leksik Resurs',
    grammarTheory: 'Grammatika Master-klass',
    grammarPractice: 'Grammatika va Lug‘at',
    speaking: 'So‘zlashuv Amaliyoti',
    footer: '© 2024 Master Class Series. Ta’lim demosi.'
  },
  hero: {
    badge: 'Master Class Series',
    title: 'Insho Qurilishi',
    subtitle: 'Jarrohlik tahlili • Band 9 Strategiyasi',
    start: 'Darsni boshlash',
    topicLabel: 'Mavzu',
    taskLabel: 'Vazifa',
    topicText: "Ba'zi odamlar talabalar uchun guruhda o'qish samaraliroq deb o'ylashadi, boshqalar esa yolg'iz o'qish kerak deb hisoblashadi.",
    taskText: "Ikkala qarashni muhokama qiling va o'z fikringizni bildiring."
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
  phase1: {
    part1: {
      id: '1.1',
      title: 'Mavzuni tahlil qilish',
      desc: '9-ballga erishishning birinchi qadami — cheklovlarni to‘g‘ri aniqlashdir.',
      breakdown: 'Tahlil',
      topicLabel: 'Mavzu',
      topicValue: 'O‘qish odatlari: Guruh vs. Yolg‘iz',
      trapLabel: 'TUZOQ (Cheklov)',
      trapText: '"Samaraliroq." Biz shunchaki xohish yoki zavq haqida emas, balki samaradorlik/natijalar haqida bahslashishimiz kerak.',
      mistake: '*Tez-tez uchraydigan xato: "Menga yolg‘iz o‘qish yoqadi, chunki bu qiziqarli." (Noto‘g‘ri - samaradorlikka aloqasi yo‘q)',
      instructionLabel: 'Ko‘rsatma',
      instructionValue: 'Ikkala qarashni muhokama qiling + O‘z fikringizni bering.'
    },
    part2: {
      id: '1.2',
      title: 'Tanqidiy fikrlash (T-Jadval)',
      desc: 'Yozishdan oldin argumentlarni muvozanatlashimiz kerak.',
      ideaGen: 'G‘oya yaratish',
      viewA: 'A Qarash: Guruhlar',
      viewB: 'B Qarash: Yolg‘iz',
      coreIdea: 'Asosiy g‘oya',
      mechanism: 'Mexanizm',
      viewACore: 'O‘zaro tuzatish',
      viewAMech: 'Fikr almashish kitoblar tushuntirib berolmaydigan bilim bo‘shliqlarini to‘ldiradi.',
      viewBCore: 'Diqqat va tezlik',
      viewBMech: 'Ijtimoiy chalg‘itishlarni yo‘q qiladi; jadvalni zaif tomonlarga moslashtirishga imkon beradi.'
    },
    part3: {
      id: '1.3',
      title: 'Mening pozitsiyam',
      desc: 'Tezis butun inshoni boshqaradi.',
      verdict: 'Xulosa',
      thesis: '"Guruhda o‘qishning afzalliklari borligini tan olsam-da, men imtihon natijalari uchun Yolg‘iz o‘qish samaradorlik tufayli ustunroq ekanligini ta’kidlayman."',
      strategyTitle: 'Strategik eslatma',
      strategyText: '"While" (Yon berish) tuzilishiga e\'tibor bering. Biz guruhda o‘qish yomon demayapmiz, biz yolg‘iz o‘qish yaxshiroq deyapmiz. Bu noziklik Band 9 Task Response yaratadi.'
    }
  },
  phase2: {
    part1: {
      id: '2.1',
      title: 'Kirish',
      desc: 'Ikki gap. 40-50 so‘z. Aniqlik muhim.',
      stepTitle: 'Kirish qurilishi',
      stepGoal: 'Kontekst va Pozitsiyani bildirish',
      s1Label: '1-Gap: Parafraz',
      s1Text: '"O‘qishning eng foydali usuli bo‘yicha fikrlar turlicha..."',
      s2Label: '2-Gap: Tezis',
      s2Text: '"Hamkorlikda o‘rganish tanqidiy muhokamani rivojlantirishi mumkin bo‘lsa-da, men yolg‘iz o‘qish oxir-oqibat samaraliroq deb hisoblayman..."'
    },
    part2: {
      id: '2.2',
      title: 'Asosiy qism',
      desc: 'Asosiy bahs. Bitta paragraf yon berish uchun, bittasi sizning fikringiz uchun.',
      step2Title: 'Tana A (Yon berish)',
      step2Goal: 'Qarama-qarshi fikrni adolatli muhokama qiling',
      tsLabel: 'Mavzu gapi',
      tsA: '"Bir tomondan, tengdoshlar bilan o‘qishning aniq foydalari bor."',
      argLabel: 'Argument',
      argA: 'Bu fikr almashishni osonlashtiradi.',
      resLabel: 'Natija',
      resA: 'Murakkab tushunchalar muhokama orqali tushunish osonroq bo‘ladi (O‘zaro tuzatish).',
      step3Title: 'Tana B (Fikr)',
      step3Goal: 'Fikringizni muhokama qiling va ustunlikni isbotlang',
      tsB: '"Boshqa tomondan, men yolg‘iz o‘qish ustunroq degan fikrni qo‘llab-quvvatlayman..."',
      argB: 'Suhbatga aylanib ketadigan guruhlardan farqli o‘laroq, yolg‘izlik chalg‘itishlarni yo‘q qiladi.',
      resB: 'Faktlarni eslab qolish uchun vaqt jihatidan samaraliroq.'
    },
    part3: {
      id: '2.3',
      title: 'Xulosa',
      desc: 'Xulosa qiling, takrorlamang. Yakuniy sintez bering.',
      stepTitle: 'Xulosa qurilishi',
      stepGoal: 'Hukmni so‘zma-so‘z takrorlamasdan xulosa qilish',
      formulaLabel: 'Formula',
      formulaText: 'Bog‘lovchi + Qayta yon berish (Qisqa) + Fikrni qayta tasdiqlash (Kuchli)',
      synthesisLabel: 'Sintez',
      synthesisText: 'Guruhlarning qiymatini tan oling ("collaborative learning"), lekin yolg‘iz usulning ustunligini tasdiqlang ("distraction-free environment").'
    }
  },
  phase3: {
    part1: {
      id: '3.1',
      title: 'Ochilish',
      desc: 'Kirish va Yon berish paragrafi.',
      typeIntro: 'Kirish',
      typeBodyA: 'Tana A (Yon berish)'
    },
    part2: {
      id: '3.2',
      title: 'Asosiy Argument',
      desc: 'Sizning fikringiz paragrafi. Bu yerda siz bahsni yutasiz.',
      typeBodyB: 'Tana B (Fikr)',
      noteTitle: 'O‘tishga e\'tibor bering',
      noteQuote: '"Boshqa tomondan, men ... degan fikrni qo‘llab-quvvatlayman"',
      noteText: 'Bu yon berishdan sizning haqiqiy pozitsiyangizga o‘tishni aniq bildiradi.'
    },
    part3: {
      id: '3.3',
      title: 'Yopilish',
      desc: 'Xulosa va Yakuniy statistika.',
      typeConc: 'Xulosa',
      bandScore: 'Band Ball',
      wordCount: 'So‘z soni'
    }
  },
  phase4: {
    part1: {
      id: '4.1',
      title: 'Leksikaga kirish',
      desc: 'Lug‘at boyligi "katta so‘zlar" ishlatish emas. Bu kollokatsiya va aniqlik haqida.',
      examinerTitle: "Imtihon oluvchining nazari",
      examinerText: 'Imtihon oluvchilar tabiiy iboralarni qidiradilar. "make people talk" (Band 5/6) o‘rniga, Band 9 yozuvchisi "foster critical discussion" deydi. Ma\'no bir xil, lekin aniqlik butunlay boshqacha.',
      quote: '"Leksik resurs — bu bir-biriga mos keladigan so‘zlarning tabiiy tanlovi (kollokatsiyalar)."'
    },
    part2: {
      id: '4.2',
      title: 'Yuqori foydali kollokatsiyalar',
      desc: 'Bizning namuna inshoda ishlatilgan maxsus lug‘at.',
      colHeader: 'Kollokatsiya',
      analysisHeader: 'Tahlil'
    },
    part3: {
      id: '4.3',
      title: 'Qo‘llash va Yuklab olish',
      desc: 'Sizda endi to‘liq reja bor.',
      cardTitle: 'Yozishga tayyormisiz?',
      cardText: 'Ushbu tuzilma, so‘zlar ro‘yxati va 5 ta amaliyot mavzusini o‘z ichiga olgan PDF shablonni yuklab oling.',
      btnText: 'PDF Shablonni Yuklab Olish'
    }
  },
  grammarMaster: {
    title1: 'Master-klass: Ergashish',
    desc1: 'Murakkab gaplarning kaliti.',
    title2: 'Master-klass: Murakkab aniqlovchilar',
    desc2: 'Zichlik va tafsilot qo‘shish.',
    title3: 'Master-klass: Bog‘liqlik va Majhul nisbat',
    desc3: 'Ilg‘or oqim va akademik ohang.',
    tableFeature: 'Xususiyat',
    tableMeaning: 'Ma\'no',
    tableForm: 'Shakl va Misollar',
    tableDrill: 'Mashq',
    pronunciation: 'Talaffuz:'
  },
  grammarPractice: {
    title1: '1-Qism: Grammatika asoslari',
    sub1: 'Ko‘p tanlovli tekshiruvlar',
    title2: '2-Qism: Ilg‘or amaliyot',
    sub2: 'Bo‘shliqlarni to‘ldirish va gaplarni birlashtirish',
    title3: '3-Qism: Lug‘at tekshiruvi',
    sub3: 'Ta\'riflar va Sinonimlar',
    wordBank: 'So‘z banki'
  },
  speaking: {
    part1Title: 'So‘zlashuv 1-Qism',
    part1Desc: 'Kirish va Intervyu (4-5 daqiqa)',
    part2Title: 'So‘zlashuv 2-Qism',
    part2Desc: 'Individual uzoq nutq (3-4 daqiqa)',
    part3Title: 'So‘zlashuv 3-Qism',
    part3Desc: 'Ikki tomonlama muhokama (4-5 daqiqa)',
    say: 'Siz aytishingiz kerak:'
  },
  // Data
  lexicalData: LEXICAL_DATA,
  modelParagraphs: MODEL_ANSWER_PARAGRAPHS,
  grammarMasterData: GRAMMAR_MASTERCLASS_DATA,
  grammarQuestions: GRAMMAR_QUESTIONS,
  speakingData: SPEAKING_DATA
};

export const translations = { en, ru, uz };
export type Language = 'en' | 'ru' | 'uz';
