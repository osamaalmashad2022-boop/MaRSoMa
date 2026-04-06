import type { Stage } from "./types";
import { secondary2Unit2 } from "./secondary2-unit2";
import { secondary2Unit3 } from "./secondary2-unit3";
import { secondary2Unit4 } from "./secondary2-unit4";
import { secondary2Unit5 } from "./secondary2-unit5";
import { secondary2Unit6 } from "./secondary2-unit6";
import imgCaringCommunities from "@/assets/lessons/secondary2-t2-unit7-caring-communities.jpg";
import imgFairness from "@/assets/lessons/sec2-u7-fairness.jpg";
import imgGratitude from "@/assets/lessons/sec2-u7-gratitude.jpg";
import imgConflict from "@/assets/lessons/sec2-u7-conflict.jpg";
import imgProblemSolution from "@/assets/lessons/sec2-u7-problem-solution.jpg";

export const secondary2Data: Stage = {
  id: "secondary2",
  name: "Secondary 2",
  subject: "English",
  description: "Advanced English for Secondary 2 — Term 2: Caring Communities, Creating a Better Community, When Art Speaks, Find Your Passion, Healthy Choices, and Time Habits & Punctuality.",
  units: [
    {
      id: "unit1",
      title: "Unit 7: Caring Communities",
      preTest: {
        title: "Pre-Test: Caring Communities",
        description: "Answer these questions to check your existing knowledge.",
        questions: [],
      },
      postTest: {
        title: "Post-Test: Caring Communities",
        description: "Answer these 10 questions to check what you've learned about caring communities, inclusion, and conflict resolution.",
        questions: [
          { id: "s2u7post1", type: "mcq", question: "An inclusive playground is a place where students feel ___.", options: ["tired", "ignored", "valued", "confused"], correctAnswer: 2 },
          { id: "s2u7post2", type: "mcq", question: "Students show fairness by ___.", options: ["taking turns", "shouting loudly", "playing alone", "competing only"], correctAnswer: 0 },
          { id: "s2u7post3", type: "mcq", question: "Diversity in the passage means ___.", options: ["having the same skills", "winning every game", "having no rules to follow", "having different abilities and backgrounds"], correctAnswer: 3 },
          { id: "s2u7post4", type: "truefalse", question: "Gratitude challenges only involve writing notes.", options: ["True", "False"], correctAnswer: 1 },
          { id: "s2u7post5", type: "mcq", question: "The purpose of 'Inclusive Play Hour' is to make students feel ___.", options: ["fast", "welcome", "tired", "competitive"], correctAnswer: 1 },
          { id: "s2u7post6", type: "truefalse", question: "Small acts of appreciation can improve moods and relationships.", options: ["True", "False"], correctAnswer: 0 },
          { id: "s2u7post7", type: "mcq", question: "Who acted as mediators in the Cairo neighborhood?", options: ["Community council members", "Elders, teachers, and shopkeepers", "Only children", "Police officers"], correctAnswer: 1 },
          { id: "s2u7post8", type: "mcq", question: "One of the mediators' rules was ___.", options: ["interrupt the other person", "blame others for mistakes", "express feelings politely", "compete to win"], correctAnswer: 2 },
          { id: "s2u7post9", type: "truefalse", question: "Resolving conflicts respectfully helps everyone feel they belong.", options: ["True", "False"], correctAnswer: 0 },
          { id: "s2u7post10", type: "mcq", question: "The main idea of the inclusive playground passage is ___.", options: ["how to win games", "why sports are important", "the value of inclusive play", "how to avoid taking turns"], correctAnswer: 2 },
        ],
      },
      lessons: [
        {
          id: "sec2-u7-lesson1",
          title: "Lesson 1: Everyone Belongs to the Playground",
          objectives: [
            "Explain the core components of an inclusive caring community using a school playground as a primary example.",
            "Identify the specific actions students and teachers can take to create a space where everyone feels valued and respected.",
            "Understand the relationship between celebrating diversity and building a stronger community.",
          ],
          vocabulary: {
            flashcards: [
              { term: "Inclusive", definition: "Creating a friendly, welcoming place where all people are included" },
              { term: "Valued", definition: "Given importance or respect" },
              { term: "Diversity", definition: "Having different backgrounds or abilities" },
              { term: "Fairness", definition: "Treating people equally" },
              { term: "Cooperation", definition: "Working together peacefully" },
              { term: "Invite", definition: "To ask someone politely to come somewhere or take part in an activity" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "An inclusive school playground where students of different abilities play together, share equipment, and a teacher guides mixed groups.", imageSrc: imgCaringCommunities },
            {
              type: "reading",
              title: "Everyone Belongs to the Playground",
              body: "A caring community is a place where everyone belongs, no matter their background, abilities, or personalities. One of the best examples of this is a school playground. Every day, students meet, play, and learn how to build friendships. But an inclusive playground is more than swings and slides—it is a space where everyone feels safe, respected, and valued.\n\nIn an inclusive playground, students take turns, share equipment, and invite others to join. When a new student arrives or someone is shy, classmates make an effort to speak kindly and offer help. These small actions create a friendly environment where no one feels left out. It is also a place where students learn to appreciate diversity. Some children may be good at sports, others at drawing, and some may have different needs. When students celebrate these differences, they begin to understand that diversity makes the community stronger.\n\nTeachers also play a role. They encourage students to work in mixed groups so everyone can participate. When conflicts happen, they guide students to solve problems fairly. Fairness means giving each student a chance to play, listen, speak, or lead. Through these experiences, children learn important life skills like empathy, cooperation, and responsibility.\n\nInclusive play and learning prepare students for life. When we include others and treat them with fairness, we help create a community where everyone feels they truly belong.",
            },
            {
              type: "list",
              title: "Comprehension Questions",
              items: [
                "Why is an inclusive playground important? — It's a space where everyone feels safe, respected, and valued.",
                "How can students help new or shy classmates? — By speaking kindly, offering help, and inviting them to join.",
                "What does fairness mean in the passage? — Giving each student a chance to play, listen, speak, or lead.",
                "How do teachers support inclusive learning? — They encourage mixed groups and guide students to solve problems fairly.",
              ],
            },
          ],
          activities: [
            {
              type: "discuss",
              title: "Inclusive Playground Brainstorm",
              instructions: "In small groups, brainstorm three specific changes our school could make to ensure the playground is more inclusive for students with different abilities.",
            },
            {
              type: "write",
              title: "Value Reflection",
              instructions: "Write a short paragraph (50-70 words) describing a time when you felt truly 'valued' in a group. What did other people do to make you feel that way?",
            },
          ],
        },
        {
          id: "sec2-u7-lesson2",
          title: "Lesson 2: Fairness & Taking Turns",
          objectives: [
            "Discuss the practical application of fairness and turn-taking in group dynamics.",
            "Analyze the impact of initiatives like 'Inclusive Play Hour' on student confidence and belonging.",
            "Develop strategies for actively including shy or new classmates in social activities.",
          ],
          vocabulary: {
            flashcards: [
              { term: "Encourage", definition: "To give support, confidence, or hope to someone" },
              { term: "Confident", definition: "Feeling or showing certainty about something; self-assured" },
              { term: "Include", definition: "To make someone or something part of a group or total" },
              { term: "Belong", definition: "To be a member of a particular group; to feel comfortable and accepted" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "Children playing fair games in a school playground, taking turns on a swing set.", imageSrc: imgFairness },
            {
              type: "text",
              title: "Before You Listen",
              body: "Think and discuss: When do you feel included in a group? Why is it important to give everyone a chance to join an activity?",
            },
            {
              type: "list",
              title: "Listening: Inclusive Play Hour",
              items: [
                "The purpose of 'Inclusive Play Hour' is to make students feel welcome.",
                "In 'Circle Challenge,' students could pass the ball when another student encouraged them.",
                "Maya felt unsure because she was new.",
                "Hana helped Maya by inviting her to join.",
                "By the end, students learned the value of taking turns.",
              ],
            },
            {
              type: "list",
              title: "Discussion Questions",
              items: [
                "Describe a time when someone helped you feel included.",
                "What can you do if you see a classmate standing alone during a game?",
                "How does fairness make activities more enjoyable for everyone?",
              ],
            },
          ],
          activities: [
            {
              type: "role-play",
              title: "The Welcome Committee",
              instructions: "Act out a scene where you see a new student standing alone during a game. Use polite and encouraging language to invite them to join while ensuring fairness for other players.",
            },
            {
              type: "discuss",
              title: "The Meaning of Fairness",
              instructions: "Does fairness always mean doing the exact same thing for everyone? Discuss situations where treating people differently might actually be more 'fair'.",
            },
          ],
        },
        {
          id: "sec2-u7-lesson3",
          title: "Lesson 3: Acts of Gratitude",
          objectives: [
            "Analyze how small acts of gratitude and appreciation can decrease conflict and improve community mood.",
            "Master the grammatical structures of Zero and First Conditionals to express general truths and future possibilities.",
            "Identify and evaluate different ways to show thankfulness within a school or neighborhood environment.",
          ],
          vocabulary: {
            flashcards: [
              { term: "Gratitude", definition: "The quality of being thankful and showing appreciation" },
              { term: "Appreciate", definition: "To recognize the value of something or someone" },
              { term: "Notice", definition: "To become aware of something" },
              { term: "Thank", definition: "To express gratitude to someone" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "Students writing thank-you cards and showing gratitude to teachers.", imageSrc: imgGratitude },
            {
              type: "list",
              title: "Gratitude Challenge — Key Points",
              items: [
                "The 'Gratitude Challenge' helped students feel happier and included.",
                "Writing notes to staff is an example of gratitude.",
                "When students practiced gratitude, conflicts decreased.",
                "The main message: small acts of kindness and gratitude can create big positive changes.",
                "Gratitude is powerful and costs nothing.",
              ],
            },
            {
              type: "grammar",
              title: "Language in Context: If Clauses (Conditionals)",
              grammar: {
                title: "Zero & First Conditional",
                rows: [
                  { subject: "Zero Conditional", verb: "If + present simple → present simple", example: "If you boil water, it evaporates." },
                  { subject: "Zero Conditional", verb: "General truth", example: "If you don't say thank you, people feel unappreciated." },
                  { subject: "First Conditional", verb: "If + present simple → will + base verb", example: "If you study hard, you will pass the exam." },
                  { subject: "First Conditional", verb: "Future possibility", example: "If we show gratitude, people will feel valued." },
                ],
                rules: [
                  "Zero Conditional: If + present simple → present simple. Used for facts or general truths.",
                  "First Conditional: If + present simple → will + base verb. Used for real/possible future situations.",
                  "Both clauses can be swapped: 'Water evaporates if you boil it.'",
                ],
              },
            },
            {
              type: "list",
              title: "Practice: Rewrite Using If Clauses",
              items: [
                "When you don't say thank you, people feel unappreciated. → If you don't say thank you, people feel unappreciated.",
                "She is a polite girl so her friends love her. → If she is polite, her friends will love her.",
                "When you boil water, it evaporates. → If you boil water, it evaporates.",
              ],
            },
          ],
          activities: [
            {
              type: "write",
              title: "Gratitude Letter",
              instructions: "Write a short thank-you note (3-4 sentences) to a specific person in your school (a teacher, janitor, or classmate). Use at least one First Conditional sentence (e.g., 'If I continue to work hard, I will...').",
            },
            {
              type: "fill-in-the-blank",
              title: "Conditional Gratitude",
              instructions: "Complete the following sentences using the correct Zero or First Conditional forms.",
              items: [
                "If we __________ (say) thank you, people __________ (feel) appreciated. (Zero)",
                "If you __________ (write) a kind note today, your friend __________ (be) very happy. (First)",
                "When you __________ (help) someone, they __________ (remember) your kindness. (Zero)",
              ],
            },
          ],
        },
        {
          id: "sec2-u7-lesson4",
          title: "Lesson 4: Conflict Resolution",
          objectives: [
            "Identify and apply the three key rules for resolving conflicts: listening, polite expression, and beneficial solutions.",
            "Analyze the role and impact of community mediators (elders, teachers, shopkeepers) in handling disagreements.",
            "Explain how respectful communication contributes to a sense of belonging within an Egyptian community.",
          ],
          vocabulary: {
            flashcards: [
              { term: "Argue over", definition: "To talk in an angry way because you don't agree about something" },
              { term: "Gathering", definition: "A meeting of people in one place" },
              { term: "Interrupt", definition: "To stop someone while they are speaking or doing something" },
              { term: "Mediators", definition: "People who help two sides solve a disagreement" },
              { term: "Misunderstanding", definition: "When people do not understand each other correctly" },
              { term: "Resident", definition: "A person who lives in a particular place" },
              { term: "Take on", definition: "To accept a job, task, or responsibility" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "Students resolving a conflict peacefully with a mediator helping.", imageSrc: imgConflict },
            {
              type: "reading",
              title: "Resolving Conflicts to Keep Everyone Included",
              body: "Conflicts happen in every community, including neighborhoods. Children may argue over football games in the local park, neighbors may disagree about using shared spaces, or misunderstandings can happen during community events. How conflicts are handled can make a community stronger and more inclusive.\n\nIn a Cairo neighborhood, residents noticed that disagreements were common in the local park and during weekend gatherings. To address this, respected members of the community, such as elders, teachers, and shopkeepers, took on the role of mediators. They helped people discuss problems calmly and fairly.\n\nFor example, two children argued over who would play first in a football match. A local elder listened to both sides, encouraged them to explain their feelings politely, and suggested a solution: taking turns and sharing equipment. Neighbors also learned to communicate respectfully when deciding how to care for public spaces, like keeping the park clean or organizing community celebrations.\n\nThe mediators taught simple rules: listen without interrupting, express your feelings politely, and find a solution that benefits everyone. Over time, conflicts decreased, and children and adults felt more included.\n\nThe neighborhood realized that resolving conflicts respectfully helps everyone feel they belong. Role models – like patient elders, fair shopkeepers, or teachers – show others how to handle disagreements kindly, creating a happier and more cooperative Egyptian community.",
            },
            {
              type: "list",
              title: "Rules for Resolving Conflicts",
              items: [
                "Listen without interrupting.",
                "Express your feelings politely.",
                "Find a solution that benefits everyone.",
                "Use role models to guide the process.",
              ],
            },
          ],
          activities: [
            {
              type: "role-play",
              title: "Mediator in Action",
              instructions: "Role-play a disagreement over a shared resource (like the use of a computer or a football field). One student must act as a mediator and guide the others to follow the three conflict resolution rules.",
            },
            {
              type: "discuss",
              title: "The Hardest Rule",
              instructions: "Which of the three rules (Listen without interrupting, Express feelings politely, Find a beneficial solution) is hardest for you to follow during an argument? Why?",
            },
          ],
        },
        {
          id: "sec2-u7-lesson5",
          title: "Lesson 5: Problem-Solution Paragraph",
          objectives: [
            "Understand and identify the three-part structure of a problem-solution paragraph (Problem, Solution, Result).",
            "Learn to use specific linking words (therefore, as a result, in order to) to improve the flow of explanatory writing.",
            "Apply the three-step writing process to draft a paragraph about a relevant community challenge.",
          ],
          vocabulary: {
            flashcards: [
              { term: "Social isolation", definition: "Being separated from other people and having little social contact" },
              { term: "Intergenerational", definition: "Relating to or involving people of different generations" },
              { term: "Empathy", definition: "The ability to understand and share the feelings of others" },
            ],
          },
          content: [
            { type: "imagePrompt", alt: "A student writing a problem-solution paragraph at a desk.", imageSrc: imgProblemSolution },
            {
              type: "reading",
              title: "Model: Problem-Solution Paragraph",
              body: "[Problem] Many neighborhoods face the challenge of social isolation, especially among elderly residents who live alone and may rarely interact with others—leading to loneliness, depression, and reduced community connection.\n\n[Solution] One effective way to address this is through intergenerational volunteer programs, where students or young adults regularly visit elderly people to share stories, assist with small tasks (like grocery pickup or tech help), or simply enjoy a cup of tea together.\n\n[Result] As a result, elderly people feel valued and less alone. Meanwhile younger volunteers gain empathy, life wisdom, and a stronger sense of belonging—strengthening the entire community, one conversation at a time.",
            },
            {
              type: "list",
              title: "How to Write a Problem-Solution Paragraph",
              items: [
                "Step 1: Introduce the problem clearly.",
                "Step 2: Explain one main solution in detail.",
                "Step 3: End with a positive result.",
                "Use linking words: because, as a result, so, therefore, in order to.",
                "Keep the focus on one main problem and one main solution.",
              ],
            },
            {
              type: "list",
              title: "Writing Task — Choose a Topic",
              items: [
                "Littering in public areas",
                "Traffic and noise in cities",
                "Food waste in your school or neighborhood",
                "Lack of green spaces in your community",
              ],
            },
          ],
          activities: [
            {
              type: "write",
              title: "Drafting the Result",
              instructions: "Choose a topic from the list (e.g., Littering). Write only the 'Result' part of the paragraph, using the linking words 'as a result' or 'therefore'.",
            },
            {
              type: "discuss",
              title: "Intergenerational Solutions",
              instructions: "Think of another problem in your school that could be solved using an 'intergenerational' approach (connecting different age groups). How would it work?",
            },
          ],
        },
      ],
    },
    secondary2Unit2,
    secondary2Unit3,
    secondary2Unit4,
    secondary2Unit5,
    secondary2Unit6,
  ],
};
