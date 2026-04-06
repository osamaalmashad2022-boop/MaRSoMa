import type { Unit } from "./types";
import imgEgyptianLeaders from "@/assets/lessons/prep3-u12-egyptian-leaders.jpg";
import imgTeamwork from "@/assets/lessons/prep3-u12-teamwork.jpg";

export const preparatory3Unit6: Unit = {
  id: "prep3-unit6",
  title: "Unit 12: Leadership and Teamwork",
  preTest: {
    title: "Unit 12 Pre-Test",
    description: "Test your knowledge before starting Unit 12.",
    questions: [],
  },
  postTest: {
    title: "Unit 12 Post-Test",
    description: "Test your understanding after completing Unit 12.",
    questions: [
      {
        id: "p3u12-post-1",
        type: "mcq",
        question: "Queen Hatshepsut ruled Egypt for ..................... years.",
        options: ["twelve", "twenty-two", "thirty-two", "sixty-seven"],
        correctAnswer: 1,
      },
      {
        id: "p3u12-post-2",
        type: "mcq",
        question: "Ramesses II built the famous ..................... temples.",
        options: ["Luxor", "Karnak", "Abu Simbel", "Hatshepsut"],
        correctAnswer: 2,
      },
      {
        id: "p3u12-post-3",
        type: "mcq",
        question: "She stayed humble and showed great ..................... even after winning the award.",
        options: ["modesty", "judge", "treaty", "conflict"],
        correctAnswer: 0,
      },
      {
        id: "p3u12-post-4",
        type: "mcq",
        question: "Her story ..................... me to study harder.",
        options: ["admitted", "prevented", "inspired", "discouraged"],
        correctAnswer: 2,
      },
      {
        id: "p3u12-post-5",
        type: "mcq",
        question: "The teacher said, 'Stop talking!' → The teacher told us ..................... .",
        options: ["stop talking", "to stop talking", "stop to talking", "stopping talk"],
        correctAnswer: 1,
      },
      {
        id: "p3u12-post-6",
        type: "mcq",
        question: "The teacher said, 'Don't be late tomorrow.' → The teacher told us ..................... .",
        options: ["not to be late the next day", "not be late the next day", "to don't be late", "don't be late"],
        correctAnswer: 0,
      },
      {
        id: "p3u12-post-7",
        type: "mcq",
        question: "Great leaders should listen with ..................... to their teams.",
        options: ["anger", "empathy", "silence", "fear"],
        correctAnswer: 1,
      },
      {
        id: "p3u12-post-8",
        type: "mcq",
        question: "Adaptable leaders are ready to ..................... new ideas.",
        options: ["welcome", "refuse", "deny", "attack"],
        correctAnswer: 0,
      },
      {
        id: "p3u12-post-9",
        type: "truefalse",
        question: "Hatshepsut's leadership style emphasized cooperation rather than fight.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "p3u12-post-10",
        type: "mcq",
        question: "The soldiers were ..................... by their leader's brave words to keep fighting.",
        options: ["negotiated", "discouraged", "resisted", "motivated"],
        correctAnswer: 3,
      },
    ],
  },
  lessons: [
    {
      id: "prep3-u12-l1",
      title: "Lesson 1: Egyptian Leaders in History",
      objectives: [
        "Identify the key historical achievements of Queen Hatshepsut, Thutmose III, and Ramesses II.",
        "Understand the difference between military-focused and peace-focused leadership styles.",
        "Learn and use vocabulary related to heritage, prosperity, and immense monuments.",
      ],
      vocabulary: {
        flashcards: [
          { term: "Heritage", definition: "The history, traditions, and culture of a country or family" },
          { term: "Inspire", definition: "To give someone the enthusiasm to do something" },
          { term: "Prosperity", definition: "A state of being successful and having enough money" },
          { term: "Emphasize", definition: "To show that something is important by saying or doing it strongly" },
          { term: "Beyond", definition: "Further than or outside something; more than" },
          { term: "Immense", definition: "Very big or great" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Great Leaders of Ancient Egypt",
          body: "Egypt has produced some of history's most amazing leaders who shaped one of the world's greatest civilizations. They left a heritage that continues to inspire people today.\n\nQueen Hatshepsut was one of the most successful female pharaohs in Egyptian history. She ruled Egypt for twenty-two years and brought peace and prosperity to the country. Hatshepsut concentrated on building projects and trade relationships, great temples and important trading routes. Her leadership style emphasized cooperation rather than fight.\n\nPharaoh Thutmose III was a brilliant military leader. He led many successful campaigns and brought immense wealth and power to the country. Beyond his military skills, Thutmose III also built monuments and temples that celebrated Egypt's glory.\n\nRamesses II, known as Ramesses the Great, was famous for his military achievements and great projects. During his sixty-seven-year rule, he built incredible monuments, including the famous Abu Simbel temples. All these leaders are still remembered as great kings who showed the power and beauty of ancient Egypt's great civilization.",
        },
        {
          type: "imagePrompt",
          title: "Egyptian Leaders",
          alt: "Ancient Egyptian leaders - Queen Hatshepsut, Thutmose III, and Ramesses II with Egyptian monuments.",
          imageSrc: imgEgyptianLeaders,
        },
      ],
      activities: [
        {
          type: "discuss",
          title: "Leadership Styles",
          instructions: "Which ancient Egyptian leader's style do you admire most? Was it their focus on peace, military strength, or building monuments? Why?",
        },
        {
          type: "match",
          title: "Leader and Achievement",
          instructions: "Match the leader to their most famous contribution based on the reading.",
          items: [
            "Queen Hatshepsut → Trade routes and peace",
            "Thutmose III → Military power and wealth",
            "Ramesses II → Abu Simbel temples",
          ],
        },
      ],
    },
    {
      id: "prep3-u12-l2",
      title: "Lesson 2: Teamwork Stories",
      objectives: [
        "Identify the benefits of cooperation and teamwork in scientific and marketing contexts.",
        "Master the conversion of direct commands and orders into reported speech.",
        "Understand how dividing tasks can improve efficiency and meet tight deadlines.",
      ],
      vocabulary: {
        flashcards: [
          { term: "Hybrid", definition: "A mix of two different things" },
          { term: "Judges", definition: "People who watch or listen and then decide who wins" },
          { term: "Marketing", definition: "The work of telling people about a product to help sell it" },
          { term: "Campaign", definition: "A plan to share a message and reach a goal" },
          { term: "Budget", definition: "The amount of money you can spend" },
        ],
      },
      content: [
        {
          type: "text",
          title: "The Power of Working Together",
          body: "Dina's science team from Upper Egypt worked on a solar-powered water pump for villages. When the team had problems, instead of giving up, Mona said, 'Let's find a better way together.' Their cooperation led to a successful project.\n\nHassan works in marketing in Alexandria. When his team faced a difficult project with a tight deadline, their manager suggested dividing the team into small groups. Thanks to teamwork, they finished the project two weeks early and the marketing campaign increased sales significantly.",
        },
        {
          type: "grammar",
          title: "Reported Commands and Orders",
          grammar: {
            title: "Reported Speech: Commands & Orders",
            rows: [
              { subject: "Direct", verb: "\"Close your books.\"", example: "The teacher told us to close our books." },
              { subject: "Direct", verb: "\"Help your brother.\"", example: "My mother asked me to help my brother." },
              { subject: "Direct", verb: "\"Run faster!\"", example: "The coach ordered the players to run faster." },
              { subject: "Direct", verb: "\"Don't be late.\"", example: "The teacher told us not to be late the next day." },
            ],
            rules: [
              "Use: told / asked / ordered / advised + person + to + verb (base form).",
              "For negative commands: told + person + NOT to + verb.",
              "Example: 'Don't talk!' → She told me not to talk.",
              "Common reporting verbs: told, asked, ordered, advised, commanded.",
              "Time words change: tomorrow → the next day, today → that day.",
            ],
          },
        },
        {
          type: "imagePrompt",
          title: "Teamwork",
          alt: "A diverse team of young professionals collaborating around a table.",
          imageSrc: imgTeamwork,
        },
      ],
      activities: [
        {
          type: "fill-in-the-blank",
          title: "Reported Commands Practice",
          instructions: "Rewrite the direct commands as reported speech using 'told', 'asked', or 'ordered'.",
          items: [
            "\"Open the window,\" she said. → She asked me...",
            "\"Don't touch the wires!\" the man said. → The man ordered us...",
            "\"Finish your report by Friday,\" the manager said. → The manager told the team...",
          ],
        },
        {
          type: "discuss",
          title: "My Teamwork Story",
          instructions: "Describe a time you worked in a team. Was it successful? What specific action helped the team reach its goal?",
        },
      ],
    },
    {
      id: "prep3-u12-l3",
      title: "Lesson 3: Leadership Lessons",
      objectives: [
        "Identify and explain the core qualities of a modern, effective leader.",
        "Understand the importance of empathy, adaptability, and vision in leadership roles.",
        "Discuss the role of modesty and continuous learning in earning a team's respect.",
      ],
      vocabulary: {
        flashcards: [
          { term: "Empathy", definition: "The ability to understand and share the feelings of others" },
          { term: "Adaptable", definition: "Ready to change to fit new conditions" },
          { term: "Vision", definition: "A clear idea of what you want to achieve in the future" },
          { term: "Modesty", definition: "Not talking about your achievements; being humble" },
          { term: "Motivated", definition: "Having a strong reason to do something well" },
          { term: "Conflict", definition: "A serious disagreement or argument" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "What Makes an Effective Leader?",
          body: "Modern leadership research shows that the most effective leaders share key qualities that help them inspire teams, solve problems, and achieve goals. These qualities are about how leaders connect with and guide others.\n\nGreat leaders communicate clearly and listen carefully. They understand others' feelings and viewpoints, which builds trust and helps solve conflicts peacefully. Emotional intelligence allows them to build respectful, strong team relationships. They also stay adaptable, ready to adjust plans, welcome new ideas, and trust their teams.\n\nSuccessful leaders also have a clear vision. They set goals, break them into steps, and celebrate progress to keep teams motivated. Importantly, the best leaders never stop learning. They admit mistakes, ask for feedback, and work to improve. This modesty earns respect and encourages their teams to grow, too.\n\nLeadership isn't about having all the answers, but about guiding others with honesty, purpose, and a willingness to develop. In today's world, the most successful leaders are those who lead with both confidence and empathy, supporting their teams to achieve shared success.",
        },
      ],
      activities: [
        {
          type: "write",
          title: "The Leader in Me",
          instructions: "Identify 3 leadership qualities mentioned in the text that you think are most important. Explain why you chose them.",
        },
        {
          type: "discuss",
          title: "Learning from Mistakes",
          instructions: "The text says great leaders admit mistakes. Why is this important for a team's growth?",
        },
      ],
    },
    {
      id: "prep3-u12-l4",
      title: "Lesson 4: Story Time – Twenty Thousand Leagues (Ch. 6)",
      objectives: [
        "Identify the major events and the final resolution of the novel's plot in Chapter 6.",
        "Analyze the themes of curiosity, ambition, and the consequences of isolation.",
        "Discuss the symbolic significance of the ocean's remaining mysteries.",
      ],
      vocabulary: {
        flashcards: [
          { term: "Exhausted", definition: "Feeling extremely tired or loss of energy" },
          { term: "Wonders", definition: "Amazing things that cause admiration" },
          { term: "Weak", definition: "Delicate and easily damaged" },
          { term: "Isolation", definition: "Being alone and separated from others" },
          { term: "Ambition", definition: "A strong desire to achieve something" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Escape to Freedom – Chapter Six",
          body: "At last, after many months, the Nautilus neared the coasts of Europe. Ned Land saw this as a chance to escape. During a strong storm, the three companions secretly lowered a small boat into the sea. They drifted away, because of the storm, yet driven by the hope of freedom.\n\nThe night was long and dangerous. Waves crashed over them, and the wind threatened to damage their weak craft. But at dawn, exhausted and half-conscious, they reached the safety of a shore. For the first time in many months, they felt solid ground under their feet.\n\nAronnax later wrote down their incredible adventures: the wonders of the sea, the dangers they had faced, and the strange brilliance of Captain Nemo. He never discovered the full truth about Nemo's past, nor what became of the Nautilus. Did it still explore the depths, hidden from mankind, or had it crashed in the storm?\n\nThe story closed not with final answers but with a lesson: Human curiosity and knowledge are powerful and can achieve wonders. Yet ambition mixed with sorrow may lead to isolation. The ocean remains vast and mysterious, holding secrets beyond our reach.",
        },
      ],
      activities: [
        {
          type: "discuss",
          title: "Escape or Adventure?",
          instructions: "Was the characters' decision to escape during a dangerous storm a wise choice? What would you have done?",
        },
        {
          type: "write",
          title: "Aronnax's Diary",
          instructions: "Write a diary entry for Professor Aronnax on his first day back on land, reflecting on his time with Captain Nemo.",
        },
      ],
    },
  ],
};
