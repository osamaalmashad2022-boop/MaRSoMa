import type { Unit } from "./types";
import imgTravelTales from "@/assets/lessons/prep3-u11-travel-tales.jpg";
import imgSoloJourney from "@/assets/lessons/prep3-u11-solo-journey.jpg";

export const preparatory3Unit5: Unit = {
  id: "unit5",
  title: "Unit 11: Stories on the Move",
  preTest: {
    title: "Pre-Test: Unit 11",
    description: "Test your knowledge before starting Unit 11.",
    questions: [],
  },
  postTest: {
    title: "Post-Test: Unit 11",
    description: "Test your understanding after completing Unit 11.",
    questions: [
      {
        id: "p3u11-post-1",
        type: "mcq",
        question: "The family's original plan was ..................... .",
        options: ["a long flight", "a simple camping trip", "visiting friends", "a bus tour"],
        correctAnswer: 1,
      },
      {
        id: "p3u11-post-2",
        type: "mcq",
        question: "What made their trip unforgettable?",
        options: ["The beautiful weather", "The unexpected storm", "Visiting new places", "Buying souvenirs"],
        correctAnswer: 1,
      },
      {
        id: "p3u11-post-3",
        type: "mcq",
        question: "When the weather changed, they ..................... .",
        options: ["went home early", "took shelter", "continued hiking", "called for help"],
        correctAnswer: 1,
      },
      {
        id: "p3u11-post-4",
        type: "mcq",
        question: "The positive result of the rain was ..................... .",
        options: ["seeing the waterfall", "learning about weather", "making new friends", "finding treasure"],
        correctAnswer: 2,
      },
      {
        id: "p3u11-post-5",
        type: "mcq",
        question: "Which tense describes an action that happened before another past action?",
        options: ["Past Simple", "Past Continuous", "Past Perfect", "Present Perfect"],
        correctAnswer: 2,
      },
      {
        id: "p3u11-post-6",
        type: "mcq",
        question: "She _____ already left when I arrived.",
        options: ["has", "had", "have", "having"],
        correctAnswer: 1,
      },
      {
        id: "p3u11-post-7",
        type: "mcq",
        question: "While I _____ (walk), I saw a beautiful mosque.",
        options: ["walk", "walked", "was walking", "had walked"],
        correctAnswer: 2,
      },
      {
        id: "p3u11-post-8",
        type: "mcq",
        question: "The view from the mountain was absolutely ..................... .",
        options: ["boring", "breathtaking", "normal", "dangerous"],
        correctAnswer: 1,
      },
      {
        id: "p3u11-post-9",
        type: "truefalse",
        question: "Past Continuous is used for actions that were happening at a specific time in the past.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        id: "p3u11-post-10",
        type: "mcq",
        question: "By the time we reached the hotel, the sun ..................... .",
        options: ["sets", "set", "had set", "was setting"],
        correctAnswer: 2,
      },
    ],
  },
  lessons: [
    {
      id: "prep3-u11-l1",
      title: "Lesson 1: Travel Tales",
      objectives: [
        "Read and analyze a personal travel narrative about a trip to Wadi El-Rayan.",
        "Master vocabulary related to travel, weather, and memorable experiences.",
        "Identify the turning point and the moral of the story in a travel tale.",
      ],
      vocabulary: {
        flashcards: [
          { term: "Unforgettable", definition: "Impossible to forget; very memorable" },
          { term: "Breathtaking", definition: "Very beautiful, impressive or surprising" },
          { term: "Challenging", definition: "Difficult in a way that tests your abilities and skills" },
          { term: "Slippery", definition: "Smooth and hard to stand on because you might slide" },
          { term: "Shelter", definition: "A place that protects you from bad weather or danger" },
          { term: "Remote", definition: "Far away from towns or cities" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "A Camping Trip to Wadi El-Rayan",
          body: "Last summer, my family planned a simple camping trip to Wadi El-Rayan in Fayoum, Egypt. We had booked a comfortable place and packed all the necessary things. However, our journey turned into an unforgettable adventure that we still talk about today.\n\nOn the second day, we decided to take a challenging hiking trail to see a remote waterfall. The breathtaking scenery along the path was absolutely amazing — golden desert hills, crystal-clear lakes, and rare plants and birds everywhere. We felt completely relaxed.\n\nSuddenly, dark clouds gathered overhead, and heavy rain started pouring down. We had ignored the weather and weren't prepared for such conditions. Our lightweight jackets became very wet within minutes. The path became slippery and dangerous, so we took shelter under some larger rocks.\n\nWhile waiting for the storm to pass, we met another family who had been caught in the same situation. They shared their extra food and warm blankets with us. We spent hours talking, laughing, and sharing travel stories. When the rain finally stopped, we had made new lifelong friends. That unexpected experience turned our ordinary camping trip into an unusual one.",
        },
        {
          type: "imagePrompt",
          title: "Travel Tales",
          alt: "A family taking shelter under rocks during a rainstorm in a desert canyon with crystal-clear lakes.",
          imageSrc: imgTravelTales,
        },
      ],
      activities: [
        {
          type: "discuss",
          title: "Your Travel Tales",
          instructions: "Describe an unforgettable or unusual trip you have taken. What made it special? Was there an unexpected event?",
        },
        {
          type: "write",
          title: "Summarizing the Trip",
          instructions: "Write a short summary (4-5 sentences) of the Wadi El-Rayan trip, specifically focusing on how the family's situation changed.",
        },
      ],
    },
    {
      id: "prep3-u11-l2",
      title: "Lesson 2: Past Tenses Review",
      objectives: [
        "Review and differentiate between Past Simple, Past Continuous, and Past Perfect tenses.",
        "Learn to sequence multiple past events using appropriate time markers like 'while', 'when', and 'by the time'.",
        "Apply correct past tense constructions in various contextual scenarios.",
      ],
      vocabulary: {
        flashcards: [
          { term: "Past Simple", definition: "A tense used for completed actions in the past (e.g., I visited)" },
          { term: "Past Continuous", definition: "A tense for actions in progress at a time in the past (e.g., I was walking)" },
          { term: "Past Perfect", definition: "A tense for an action completed before another past action (e.g., I had finished)" },
          { term: "Sequence", definition: "The order in which events happen" },
        ],
      },
      content: [
        {
          type: "grammar",
          title: "Past Tenses",
          grammar: {
            title: "Past Simple, Continuous & Perfect",
            rows: [
              { subject: "Past Simple", verb: "V2 (visited, saw, went)", example: "I visited Luxor last summer." },
              { subject: "Past Continuous", verb: "was/were + V-ing", example: "While I was walking, I saw a temple." },
              { subject: "Past Perfect", verb: "had + V3 (past participle)", example: "By the time we arrived, the sun had set." },
            ],
            rules: [
              "Past Simple: for completed actions at a specific time in the past.",
              "Past Continuous: for actions in progress at a particular time in the past. Often used with 'while' or 'when'.",
              "Past Perfect: for an action completed BEFORE another past action. Often used with 'by the time', 'before', 'after'.",
              "Example: She had already eaten when I arrived. (eating happened first)",
              "Use Past Continuous + Past Simple together: While I was reading, the phone rang.",
            ],
          },
        },
        {
          type: "text",
          title: "Practice: Complete with the Correct Tense",
          body: "1. By the time we reached the hotel, the sun _____ (set). → had set\n2. While I _____ (walk) in the old city, I found a beautiful shop. → was walking\n3. We _____ (visit) three cities during our trip last year. → visited\n4. She _____ (already / finish) packing before the taxi came. → had already finished",
        },
      ],
      activities: [
        {
          type: "fill-in-the-blank",
          title: "Tense Selection",
          instructions: "Choose the correct past tense for each situation to complete the story of a lost traveler.",
          items: [
            "Yesterday, I _____ (drive) when my car broke down.",
            "I realized I _____ (forget) my phone at home.",
            "Luckily, a kind man _____ (stop) to help me."
          ],
        },
        {
          type: "write",
          title: "My Busy Morning",
          instructions: "Write a short paragraph describing a busy morning you had. Use at least one example of each: Past Simple, Past Continuous, and Past Perfect.",
        },
      ],
    },
    {
      id: "prep3-u11-l3",
      title: "Lesson 3: A Solo Journey",
      objectives: [
        "Understand the themes of determination and hospitality in the context of a solo journey.",
        "Identify the geographical landmarks and governorates mentioned during the travel from Cairo to Luxor.",
        "Discuss the internal changes a traveler might experience during a long trip.",
      ],
      vocabulary: {
        flashcards: [
          { term: "Solo", definition: "Done alone, without anyone else" },
          { term: "Determined", definition: "Having a strong feeling that you are going to do something" },
          { term: "Struggled", definition: "Tried very hard to do something difficult" },
          { term: "Southward", definition: "Toward the south" },
          { term: "Landmark", definition: "A famous or important building or place" },
          { term: "Memorable", definition: "Worth remembering; very special" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "A Motorcycle Ride from Cairo to Luxor",
          body: "Three months ago, a young traveler started a solo motorcycle ride from Cairo to Luxor. Many people thought he was crazy for taking the trip alone, but he was determined to see the beauty of Egypt from the road.\n\nIn the first week, he struggled alone through the challenging desert routes. But the kindness of local people along the way helped him continue. They offered food, directions, and warm hospitality.\n\nAs he traveled southward, the scenery changed dramatically — from the busy streets of Cairo to the peaceful farmlands of Minya, a governorate known for its historic landmarks. The most memorable moment of the trip was watching an incredible sunset in the desert near Luxor.\n\nThis journey changed the traveler's view of himself. He realized that with determination and the help of kind strangers, he could achieve anything.",
        },
        {
          type: "imagePrompt",
          title: "Solo Journey",
          alt: "A motorcycle parked overlooking Egyptian pyramids and desert landscape at sunset.",
          imageSrc: imgSoloJourney,
        },
      ],
      activities: [
        {
          type: "role-play",
          title: "Road Trip Interview",
          instructions: "In pairs, act out an interview. One is a reporter, and the other is the solo traveler. Ask about the challenges and the kindness of strangers.",
        },
        {
          type: "match",
          title: "Route Discovery",
          instructions: "Match the following locations or landmarks to their descriptions based on the text.",
          items: [
            "Cairo → Busy streets and starting point",
            "Minya → Peaceful farmlands and historic landmarks",
            "Luxor → Incredible desert sunset and destination",
          ],
        },
      ],
    },
    {
      id: "prep3-u11-l4",
      title: "Lesson 4: Story Time – Twenty Thousand Leagues (Ch. 5)",
      objectives: [
        "Read and analyze the character motivations of Aronnax, Nemo, and Ned Land in Chapter 5.",
        "Discuss the ethical dilemma between the desire for scientific discovery and the need for freedom.",
        "Understand how the setting (ocean depths) influences the characters' perspectives.",
      ],
      vocabulary: {
        flashcards: [
          { term: "Hesitated", definition: "Paused before doing something because of uncertainty" },
          { term: "Sorrow", definition: "A feeling of deep sadness" },
          { term: "Loyal", definition: "Faithful and supportive" },
          { term: "Graveyard", definition: "A place where dead people are buried; here, sunken ships" },
          { term: "Companions", definition: "People you travel or spend time with" },
        ],
      },
      content: [
        {
          type: "reading",
          title: "Secrets of Captain Nemo – Chapter Five",
          body: "As the Nautilus traveled across the world's oceans, Aronnax became more determined to learn the truth about Nemo. The captain was clearly a man of wealth, education, and sorrow, but he kept his past hidden.\n\nNemo's actions sometimes confirmed that. He attacked warships without hesitation, claiming to fight against cruelty. Yet he never told the details of his personal story. To Aronnax, Nemo was both brave and mysterious.\n\nMeanwhile, Ned Land planned escape. He argued that no man had the right to keep them prisoners, no matter how wonderful the submarine. Aronnax hesitated, torn between scientific discovery and freedom. Conseil remained calm and loyal to his master.\n\nOne evening, as Nemo guided the submarine through a graveyard of sunken ships, Aronnax realized the captain saw himself as part of the dead world beneath the waves. The mystery of Nemo deepened, but so did the companions' determination to find a way home.",
        },
      ],
      activities: [
        {
          type: "discuss",
          title: "The Price of Discovery",
          instructions: "If you were Aronnax, would you stay on the Nautilus to learn more secrets, or would you try to escape with Ned Land? Why?",
        },
        {
          type: "write",
          title: "Captain Nemo's Secret",
          instructions: "Based on the text, write a short character sketch explaining why Nemo might be described as a man of 'wealth, education, and sorrow'.",
        },
      ],
    },
  ],
};
