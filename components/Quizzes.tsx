import React from 'react';
import { PageQuiz } from './UI/PageQuiz';
import { FadeIn } from './FadeIn';

const QuizWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="py-12 px-6 max-w-4xl mx-auto">
    <FadeIn>
      <div className="mb-8 text-center">
         <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400">{title}</h2>
      </div>
      {children}
    </FadeIn>
  </section>
);

export const Quiz1_1: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Decoding the Prompt">
    <PageQuiz questions={[
      {
        question: "What specific constraint does the phrase 'more effective' place on the essay?",
        options: [
            "You must discuss which method is more enjoyable.",
            "You must discuss results, efficacy, and outcomes.",
            "You must discuss which method is more popular.",
            "You must discuss the cost of education."
        ],
        correctAnswerIndex: 1,
        explanation: "The prompt asks for 'effectiveness', which means you must analyze the results or utility of the method, not personal preference."
      },
      {
        question: "Why is 'I like studying alone' a weak argument for this prompt?",
        options: [
            "It is too short.",
            "It contains a grammar error.",
            "It relies on subjective preference rather than objective efficacy.",
            "It uses informal vocabulary."
        ],
        correctAnswerIndex: 2,
        explanation: "Liking something does not mean it is 'effective'. Band 9 requires objective argumentation."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz1_2: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Critical Thinking">
    <PageQuiz questions={[
      {
        question: "What is the 'Mechanism' of an argument?",
        options: [
            "The conclusion of the essay.",
            "The 'how' or 'why' process that links the idea to the result.",
            "The first sentence of the paragraph.",
            "The vocabulary list."
        ],
        correctAnswerIndex: 1,
        explanation: "The mechanism explains *how* the core idea actually works to produce the outcome. It is the engine of your argument."
      },
      {
        question: "What specific benefit of Solitary Study is highlighted in the plan?",
        options: [
            "It is more fun.",
            "It improves social skills.",
            "It allows tailoring the schedule to specific weaknesses.",
            "It is cheaper than a university course."
        ],
        correctAnswerIndex: 2,
        explanation: "The plan emphasizes 'Focus & Pacing' — specifically the ability to customize (tailor) the schedule."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz1_3: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Thesis & Position">
    <PageQuiz questions={[
      {
        question: "Does the thesis statement completely reject the idea of group study?",
        options: [
            "Yes, it says group study is useless.",
            "No, it concedes benefits before arguing solitary is superior.",
            "It says both methods are exactly equal.",
            "It does not mention group study at all."
        ],
        correctAnswerIndex: 1,
        explanation: "The thesis uses 'While...' to acknowledge the value of groups, which adds nuance and depth."
      },
      {
        question: "Why is a complex thesis better than a simple one?",
        options: [
            "It uses fewer words.",
            "It demonstrates critical thinking and nuance (Band 9 Task Response).",
            "It is easier to write.",
            "It confuses the examiner."
        ],
        correctAnswerIndex: 1,
        explanation: "Simple 'I agree' statements are Band 6/7. Complex statements showing the relationship between ideas are Band 9."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz2_1: React.FC = () => (
  <QuizWrapper title="Knowledge Check: The Introduction">
    <PageQuiz questions={[
      {
        question: "How many sentences should the Introduction be?",
        options: [
            "1 sentence",
            "Exactly 2 sentences",
            "4-5 sentences",
            "At least 100 words"
        ],
        correctAnswerIndex: 1,
        explanation: "For IELTS Task 2, two sentences are perfect: one for context (paraphrase) and one for your position (thesis)."
      },
      {
        question: "What should you avoid doing in the Introduction?",
        options: [
            "Paraphrasing the topic",
            "Stating your opinion",
            "Writing a general 'hook' or unrelated background sentence",
            "Using formal language"
        ],
        correctAnswerIndex: 2,
        explanation: "General hooks like 'Since the beginning of time...' waste time and lower your score. Start directly with the topic."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz2_2: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Body Paragraphs">
    <PageQuiz questions={[
      {
        question: "Which body paragraph should contain the Concession (the side you disagree with)?",
        options: [
            "Body Paragraph 1 (Body A)",
            "Body Paragraph 2 (Body B)",
            "The Conclusion",
            "The Introduction"
        ],
        correctAnswerIndex: 0,
        explanation: "Place the concession first. This allows you to finish strong with your own opinion in the second body paragraph."
      },
      {
        question: "What is the function of the 'Result' sentence in a paragraph?",
        options: [
            "To introduce the topic",
            "To define vocabulary words",
            "To prove the argument's validity by showing its consequence",
            "To ask a rhetorical question"
        ],
        correctAnswerIndex: 2,
        explanation: "The 'Result' extends the argument and shows 'so what?', proving that the mechanism leads to a tangible outcome."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz2_3: React.FC = () => (
  <QuizWrapper title="Knowledge Check: The Conclusion">
    <PageQuiz questions={[
      {
        question: "What is the primary goal of the Conclusion?",
        options: [
            "To repeat the introduction word for word",
            "To add new ideas",
            "To provide a final 'Synthesis' of the verdict",
            "To list complex vocabulary"
        ],
        correctAnswerIndex: 2,
        explanation: "A synthesis brings the ideas together into a final judgment without just copying previous sentences."
      },
      {
        question: "Should you introduce new ideas in the Conclusion?",
        options: [
            "Always",
            "Never",
            "Sometimes",
            "Only if you need more words"
        ],
        correctAnswerIndex: 1,
        explanation: "Never add new arguments in the conclusion. It should only summarize what has already been proven."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz3_1: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Model Essay Opening">
    <PageQuiz questions={[
      {
        question: "What linking phrase is used to introduce the concession paragraph?",
        options: [
            "However",
            "Therefore",
            "On the one hand",
            "Furthermore"
        ],
        correctAnswerIndex: 2,
        explanation: "'On the one hand' is the standard academic linker to introduce the first of two contrasting views."
      },
      {
        question: "Which verb is used in the model to mean 'encourage'?",
        options: [
            "To stop",
            "Foster",
            "Adopt",
            "Ignore"
        ],
        correctAnswerIndex: 1,
        explanation: "'Foster' (as in 'foster critical discussion') means to encourage the development or growth of something."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz3_2: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Main Argument">
    <PageQuiz questions={[
      {
        question: "How does the writer signal the shift from concession to their own opinion?",
        options: [
            "In conclusion",
            "For example",
            "On the other hand",
            "Secondly"
        ],
        correctAnswerIndex: 2,
        explanation: "'On the other hand' signals the transition to the opposing view (your view) after 'On the one hand'."
      },
      {
        question: "What punctuation is required for the non-restrictive 'which' clause?",
        options: [
            "No punctuation",
            "Commas before and after",
            "Semicolons",
            "Parentheses"
        ],
        correctAnswerIndex: 1,
        explanation: "Non-restrictive clauses (extra information) must be surrounded by commas: 'Unlike group work, which..., studying alone...'"
      }
    ]} />
  </QuizWrapper>
);

export const Quiz3_3: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Closing">
    <PageQuiz questions={[
      {
        question: "What strong verb is used in the conclusion to reassert the writer's opinion?",
        options: [
            "To fix",
            "Maintain",
            "Guess",
            "Doubt"
        ],
        correctAnswerIndex: 1,
        explanation: "'I maintain that...' is a strong, academic way to restate your firm belief in the conclusion."
      },
      {
        question: "Why is the word count of ~235-250 words ideal?",
        options: [
            "It is very short.",
            "It is exactly 200 words.",
            "It allows full development without wasting time.",
            "It is 350+ words."
        ],
        correctAnswerIndex: 2,
        explanation: "Writing too much (300+) often leads to errors and running out of time. 250-260 is the 'Goldilocks' zone."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz4_1: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Lexical Resource">
    <PageQuiz questions={[
      {
        question: "What is the true definition of 'Lexical Resource'?",
        options: [
            "Using the longest words possible",
            "Using idioms in every sentence",
            "Natural selection of words that fit together (collocations)",
            "Using slang"
        ],
        correctAnswerIndex: 2,
        explanation: "Band 9 is not about obscure words; it is about precision and natural collocation (e.g., 'foster discussion' vs 'make talk')."
      },
      {
        question: "Which phrase is better: 'make people talk' or 'foster discussion'?",
        options: [
            "'Make people talk' is better",
            "'Foster discussion' is better",
            "They are exactly the same",
            "Both are incorrect"
        ],
        correctAnswerIndex: 1,
        explanation: "'Foster' is a precise verb adding specific meaning (encourage growth), whereas 'make' is generic."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz4_2: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Collocations">
    <PageQuiz questions={[
      {
        question: "What does the phrase 'devolve into' imply?",
        options: [
            "Improve into something better",
            "Stay exactly the same",
            "Decline or degenerate in quality",
            "Happen quickly"
        ],
        correctAnswerIndex: 2,
        explanation: "'Devolve' suggests a negative change, often into chaos or disorder (e.g., a debate devolving into an argument)."
      },
      {
        question: "What does 'tailor their schedule' mean?",
        options: [
            "Sew clothes",
            "Write it down",
            "Customize or adapt to specific needs",
            "Cancel the plan"
        ],
        correctAnswerIndex: 2,
        explanation: "To 'tailor' is to cut/shape something to fit perfectly, used here metaphorically for customizing a schedule."
      }
    ]} />
  </QuizWrapper>
);

export const Quiz4_3: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Application">
    <PageQuiz questions={[
      {
        question: "Why is a template useful for IELTS writing?",
        options: [
            "It allows you to cheat",
            "It reduces cognitive load so you can focus on quality",
            "It guarantees a pass even with bad grammar",
            "It means you don't have to think"
        ],
        correctAnswerIndex: 1,
        explanation: "Templates provide a skeleton so you don't panic about structure, allowing your brain to focus on vocabulary and arguments."
      },
      {
        question: "Can this Concession + Opinion structure be used for other topics?",
        options: [
            "No, only this specific topic",
            "Yes, for almost any 'Discuss Both Views' prompt",
            "Only for General Training letters",
            "Only for Reports"
        ],
        correctAnswerIndex: 1,
        explanation: "This 'Concession vs Opinion' structure is a universal academic format for balanced argumentation essays."
      }
    ]} />
  </QuizWrapper>
);

export const QuizGrammar1: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Subordination">
    <PageQuiz questions={[
      {
        question: "Where is the main idea placed in a sentence starting with 'While'?",
        options: [
            "Before the comma",
            "In the main clause (after the comma)",
            "In the first word",
            "It is not in the sentence"
        ],
        correctAnswerIndex: 1,
        explanation: "The 'While' clause creates a concession (the weak point), and the main clause after the comma holds the strong argument."
      },
      {
        question: "What is the function of Concessive clauses?",
        options: [
            "To agree 100% with everyone",
            "To ask a question",
            "To acknowledge an opposing view before presenting a stronger argument",
            "To list random facts"
        ],
        correctAnswerIndex: 2,
        explanation: "Concessive clauses allow for a balanced argument by admitting the other side has merit before proving your side is better."
      }
    ]} />
  </QuizWrapper>
);

export const QuizGrammar2: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Modifiers">
    <PageQuiz questions={[
      {
        question: "What punctuation is required for a non-restrictive 'which' clause?",
        options: [
            "Hyphens",
            "Commas before and after",
            "Periods",
            "Colons"
        ],
        correctAnswerIndex: 1,
        explanation: "Non-restrictive clauses add extra info. You must 'cut' them out of the main sentence with commas on both sides."
      },
      {
        question: "What does a participle phrase ending in -ing usually describe?",
        options: [
            "An action in the past",
            "A future plan",
            "An action happening concurrently or as a result",
            "An opposite action"
        ],
        correctAnswerIndex: 2,
        explanation: "Participle phrases (e.g., '...filling gaps') describe things happening at the same time or as a direct consequence."
      }
    ]} />
  </QuizWrapper>
);

export const QuizGrammar3: React.FC = () => (
  <QuizWrapper title="Knowledge Check: Coherence">
    <PageQuiz questions={[
      {
        question: "What linking word is used to signal a result or consequence?",
        options: [
            "However",
            "Consequently",
            "Although",
            "But"
        ],
        correctAnswerIndex: 1,
        explanation: "'Consequently' (or 'As a result') explicitly tells the reader that what follows is the effect of the previous action."
      },
      {
        question: "How is the 'Without' passive gerund structure formed?",
        options: [
            "Without + to be",
            "Without + being + Past Participle",
            "Without + been",
            "Without + be"
        ],
        correctAnswerIndex: 1,
        explanation: "The correct form is 'Without' (preposition) + 'being' (gerund) + 'held back' (past participle)."
      }
    ]} />
  </QuizWrapper>
);