import { Stage, StageContent } from "@/types";

export const stageContent: Record<Stage, StageContent> = {
  understand: {
    title: "Understanding Customer Needs",
    description: "Learn how to uncover stakeholder needs before crafting a value proposition. Understand what drives their decisions—from corporate goals to personal motivations.",
    videoUrl: "https://www.youtube.com/embed/2C-2v99paQM",
    articles: [
      {
        id: "article-dschool",
        title: "Discovery Stage Workshop",
        description: "Make the discovery phase engaging and effective with design thinking workshops. Uncover unique customer values, spark innovation, and gain a competitive edge using a proven approach.",
        url: "https://www.future-processing.com/blog/discovery-phase-powered-by-design-thinking-workshops/",
        type: "article"
      },
      {
        id: "article-hbr",
        title: "Unlock Faster Development with Design Thinking",
        description: "Discover how a human-centered design thinking approach can cut development time, accelerate time-to-market, and clarify high-value problems. Learn why involving expert UX designers from the start is key to building impactful MVPs.",
        url: "https://blog.convergentis.com/discovery-phase-in-design-thinking",
        type: "article"
      },
      {
        id: "article-3",
        title: "Reaching Alignment: The True Goal of the Discovery Phase",
        description: "Every discovery aims to build consensus around the problem and its desired outcomes. Explore when discovery is needed, who’s involved, and what activities shape a successful outcome.",
        url: "https://www.nngroup.com/articles/discovery-phase/",
        type: "article"
      }
    ],
    reflectionQuestions: [
      {
        id: "understand-q1",
        question: "What is your problem statement? Include context, boundaries, and key assumptions.",
        placeholder: "Define the problem you're trying to solve...",
        type: "textarea",
        required: true
      },
      {
        id: "understand-q2",
        question: "Complete the 5W+H analysis for your problem space.",
        placeholder: "Who is affected? What is the issue? Where does it occur? When does it happen? Why is it important? How does it manifest?",
        type: "textarea",
        required: true
      },
      {
        id: "understand-q3",
        question: "Describe your primary persona and their jobs to be done (functional, emotional, and social).",
        placeholder: "Detail your user persona and their needs...",
        type: "textarea",
        required: true
      },
      {
        id: "understand-q4",
        question: "Map the value chain for your problem space. What are the key activities and gaps?",
        placeholder: "List the sequence of activities and identify potential gaps...",
        type: "textarea",
        required: true
      }
    ],
    tasks: [
      {
        id: "understand-task1",
        title: "Create a Stakeholder Map",
        description: "Identify all stakeholders and map their relationships and influence levels.",
        required: true
      },
      {
        id: "understand-task2",
        title: "Develop Extreme User Profiles",
        description: "Create profiles for at least 2 extreme users who might interact with your solution.",
        required: true
      },
      {
        id: "understand-task3",
        title: "Complete Value Chain Analysis",
        description: "Document the entire value chain, highlighting potential innovation opportunities.",
        required: true
      }
    ]
  },
  
  observe: {
    title: "Observe and Empathize with Users",
    description: "Apply various observation methods to gather deep insights about your users and their context.",
    videoUrl: "https://www.youtube.com/embed/kkhoq6Hq12M",
    articles: [
      {
        id: "article-4",
        title: "Observation in Design Thinking: Empathy Through Insight",
        description: "This article explores the role of observation in design thinking, highlighting how understanding user behavior through field research and the AEIOU framework leads to more effective, user-centered solutions.",
        url: "https://medium.com/@ashraful.ruet15/observation-in-the-design-thinking-process-44f065616f70",
        type: "article"
      },
      {
        id: "article-5",
        title: "Design Thinking: Empathy and Observation in Action",
        description: "This article explores how empathy and direct observation can transform strategy development by uncovering user needs, fostering curiosity, and guiding innovation through real-world insights.",
        url: "https://blogs.perficient.com/2019/01/16/design-thinking-empathy-observation-pt-3/",
        type: "article"
      },
      {
        id: "article-6",
        title: "Observation: The Foundation of Effective Design",
        description: "In this personal reflection, Maitreyee Kalaskar highlights how observation enhances creativity, sharpens design decisions, and helps avoid costly missteps—making it an essential part of a designer’s process and growth.",
        url: "https://medium.com/@maitreyee_kal/observation-is-key-to-good-design-4a4a842032d0",
        type: "article"
      }
    ],
    reflectionQuestions: [
      {
        id: "observe-q1",
        question: "Document your AEIOU observations. What patterns emerged?",
        placeholder: "Detail your observations about Activities, Environments, Interactions, Objects, and Users...",
        type: "textarea",
        required: true
      },
      {
        id: "observe-q2",
        question: "Create an empathy map for your primary user. What insights emerged about what they say, think, do, and feel?",
        placeholder: "Document your empathy map findings...",
        type: "textarea",
        required: true
      },
      {
        id: "observe-q3",
        question: "What are the key insights from your customer journey map? Identify major pain points and opportunities.",
        placeholder: "Describe the journey phases and key findings...",
        type: "textarea",
        required: true
      },
      {
        id: "observe-q4",
        question: "What emerging trends (market, behavior, technology) might impact your solution space?",
        placeholder: "Analyze relevant trends and their implications...",
        type: "textarea",
        required: true
      }
    ],
    tasks: [
      {
        id: "observe-task1",
        title: "Conduct Shadowing Sessions",
        description: "Shadow at least 3 potential users and document their behaviors and context.",
        required: true
      },
      {
        id: "observe-task2",
        title: "Complete Observation Grid",
        description: "Use the observation grid template to record and analyze user behaviors over time.",
        required: true
      },
      {
        id: "observe-task3",
        title: "Facilitate Peer Observation",
        description: "Organize and document a peer observation session with at least 2 participants.",
        required: true
      }
    ]
  },
  
  define: {
    title: "Define Point of View",
    description: "In this stage, you'll synthesize your research findings into a clear problem statement or 'Point of View' (POV) that will guide your solution development.",
    videoUrl: "https://www.youtube.com/embed/TNAdanuvwtc",
    articles: [
      {
        id: "article-5",
        title: "Crafting a Strong Problem Statement",
        description: "How to write a problem statement that drives innovation.",
        url: "#https://steveblank.com/2010/01/25/whats-a-startup-first-principles/",
        type: "article"
      },
      {
        id: "article-6",
        title: "From Research to Insights",
        description: "Methods for synthesizing research data into actionable insights.",
        url: "https://innovation.kaust.edu.sa/can-you-define-your-startup-in-one-sentence/",
        type: "article"
      },
      {
        id: "article-7",
        title: "How Might We Questions",
        description: "Transform problem statements into opportunity questions.",
        url: "https://devsquad.com/blog/design-thinking-stages",
        type: "article"
      },
      {
        id: "article-8",
        title: "Vision Cone Framework",
        description: "Define immediate, mid-term, and long-term vision for your idea.",
        url: "https://www.studocu.vn/vn/document/royal-melbourne-institute-of-technology-vietnam/international-business/w4/65937195",
        type: "article"
      },
      {
        id: "article-9",
        title: "Context Mapping Guide",
        description: "Tools for uncovering the broader context influencing user behavior.",
        url: "https://designthinkingforhealth.org/the-course/define/",
        type: "article"
      }
    ],
    reflectionQuestions: [
      {
        id: "define-q1",
        question: "Describe your target user in one clear sentence",
        placeholder: "e.g., A busy working parent with young children",
        type: "text",
        required: true
      },
      {
        id: "define-q2",
        question: "What is this user's biggest need?",
        placeholder: "e.g., To prepare nutritious meals quickly and easily",
        type: "text",
        required: true
      },
      {
        id: "define-q3",
        question: "What's the main barrier keeping them from fulfilling this need?",
        placeholder: "e.g., Limited time between work and family responsibilities",
        type: "text",
        required: true
      },
      {
        id: "define-q4",
        question: "Complete the POV template: [User] is experiencing [problem] because [cause/insight]",
        placeholder: "e.g., A busy working parent is experiencing difficulty providing nutritious meals for their family because they have limited time between work and family responsibilities.",
        type: "textarea",
        required: true
      }
    ],
    tasks: [
      {
        id: "define-task1",
        title: "Analyze research findings",
        description: "Review the data from your 'Understand' and 'Observe' stages and identify patterns, tensions, and surprises.",
        required: true
      },
      {
        id: "define-task2",
        title: "Create a user persona",
        description: "Develop a detailed persona that represents your key user group and their needs.",
        required: true
      },
      {
        id: "define-task3",
        title: "Map the context",
        description: "Document the environmental, emotional, and relational factors influencing your user's experience.",
        required: false
      },
      {
        id: "define-task4",
        title: "Draft HMW questions",
        description: "Transform your POV statement into at least 3 'How Might We' questions for ideation.",
        required: false
      }
    ]
  },
  
  ideate: {
    title: "Ideate Solutions",
    description: "Now that you have a clear problem statement, it's time to generate a wide range of potential solutions. This stage focuses on creative thinking and divergent ideation.",
    videoUrl: "https://www.youtube.com/embed/Q0bCnl6Y-ro",
    articles: [
      {
        id: "article-7",
        title: "Effective Brainstorming Techniques",
        description: "Methods to generate more and better ideas.",
        url: "#",
        type: "article"
      },
      {
        id: "article-8",
        title: "From Ideas to Concepts",
        description: "How to develop raw ideas into robust solution concepts.",
        url: "#",
        type: "article"
      }
    ],
    reflectionQuestions: [
      {
        id: "ideate-q1",
        question: "What ideation methods did you use and why?",
        placeholder: "Describe your ideation process...",
        type: "textarea",
        required: true
      },
      {
        id: "ideate-q2",
        question: "Present your top 3 solution ideas.",
        placeholder: "Describe each solution idea in detail...",
        type: "textarea",
        required: true
      },
      {
        id: "ideate-q3",
        question: "How did you select your final solution concept to prototype?",
        placeholder: "Explain your selection criteria and process...",
        type: "textarea",
        required: true
      }
    ],
    tasks: [
      {
        id: "ideate-task1",
        title: "Conduct a brainstorming session",
        description: "Generate at least 20 possible solution ideas without judging or filtering initially.",
        required: true
      },
      {
        id: "ideate-task2",
        title: "Develop solution concepts",
        description: "Select and develop 3-5 promising ideas into more detailed solution concepts.",
        required: true
      }
    ]
  },
  
  prototype: {
    title: "Design Thinking: Prototype Phase",
    description: "A quick, visual overview of the prototype step in design thinking with tips on how to create and test ideas.",
    videoUrl: "https://www.youtube.com/embed/Q4MzT2MEDHA",
    articles: [
      {
        id: "article-9",
        title: "22 Creative Ways to Prototype in Design Thinking",
        description: "Explore fun and practical prototyping methods to quickly test and improve your ideas.",
        url: "https://makeiterate.com/22-creative-ways-to-prototype-in-design-thinking/",
        type: "article"
      },
      {
        id: "article-10",
        title: "Design Thinking: Prototype Stage Explained",
        description: "Learn how to build and test prototypes to turn ideas into tangible, user-focused solutions.",
        url: "https://www.mural.co/blog/design-thinking-prototype",
        type: "article"
      }
    ],
    reflectionQuestions: [
      {
        id: "prototype-q1",
        question: "What type of prototype did you create and why?",
        placeholder: "Describe your prototype and your approach...",
        type: "textarea",
        required: true
      },
      {
        id: "prototype-q2",
        question: "What is your Minimum Viable Product (MVP) concept?",
        placeholder: "Define what your MVP would include...",
        type: "textarea",
        required: true
      },
      {
        id: "prototype-q3",
        question: "What are the key hypotheses you want to test with your prototype?",
        placeholder: "List the assumptions you need to validate...",
        type: "textarea",
        required: true
      }
    ],
    tasks: [
      {
        id: "prototype-task1",
        title: "Create a low-fidelity prototype",
        description: "Build a simple representation of your solution using available materials (paper, digital tools, etc.).",
        required: true
      },
      {
        id: "prototype-task2",
        title: "Design test scenarios",
        description: "Plan specific scenarios or tasks that users will perform with your prototype during testing.",
        required: true
      }
    ]
  },
  
  test: {
    title: "Test with Users",
    description: "In this stage, you'll validate your prototype with real users, collect feedback, and iterate based on what you learn. This completes the Build-Measure-Learn loop and may require multiple cycles.",
    videoUrl: "https://www.youtube.com/embed/UVEQCNM6X-A",
    articles: [
      {
        id: "article-11",
        title: "A Guide to the 5th Stage of Design Thinking",
        description: "You wouldn’t buy a car without a test drive — the same goes for design thinking. To ensure usability, testing and user feedback are essential before moving forward.",
        url: "https://www.mural.co/blog/design-thinking-testing",
        type: "article"
      },
      {
        id: "article-12",
        title: "Stage 5 in the Design Thinking Process: Test",
        description: "Testing is essential throughout the design thinking process. By regularly creating and testing prototypes—starting low-fidelity and evolving—you gain user insights and feedback to refine your designs.",
        url: "https://www.interaction-design.org/literature/article/stage-5-in-the-design-thinking-process-test?srsltid=AfmBOopFuJp0_nHEmdqhlS6yocUI3Msm0w2YjCDcUlgMKBZrRs1UJlu-",
        type: "pdf"
      }
    ],
    reflectionQuestions: [
      {
        id: "test-q1",
        question: "How did you test your prototype and with whom?",
        placeholder: "Describe your testing process and participants...",
        type: "textarea",
        required: true
      },
      {
        id: "test-q2",
        question: "What were the key findings from your testing?",
        placeholder: "Summarize what worked, what didn't, and why...",
        type: "textarea",
        required: true
      },
      {
        id: "test-q3",
        question: "How did you iterate your solution based on feedback?",
        placeholder: "Describe the changes you made and your reasoning...",
        type: "textarea",
        required: true
      }
    ],
    tasks: [
      {
        id: "test-task1",
        title: "Conduct user testing",
        description: "Test your prototype with at least 5 representative users, taking notes on their feedback and behaviors.",
        required: true
      },
      {
        id: "test-task2",
        title: "Analyze test results",
        description: "Review testing data to identify patterns and key insights for improvement.",
        required: true
      },
      {
        id: "test-task3",
        title: "Iterate your prototype",
        description: "Make improvements to your prototype based on testing insights.",
        required: true
      }
    ]
  },
  
  reflect: {
    title: "Reflect and Plan Next Steps",
    description: "In this final stage, you'll review your entire innovation journey, synthesize key learnings, and plan your path forward to bring your solution to reality.",
    videoUrl: "https://www.youtube.com/embed/x_uUidaszjw",
    articles: [
      {
        id: "article-13",
        title: "Strategic Reflection in Design Thinking: A Practical Guide",
        description: "This article explores how reflection, particularly through techniques like affinity mapping, enhances the design thinking process and drives innovative, strategic decision-making across various contexts.",
        url: "https://nicoledessain.medium.com/reflection-design-thinking-style-4f7a9d0663e9",
        type: "article"
      },
      {
        id: "article-14",
        title: "Fostering Integrative Learners through Critical Reflection and Design Thinking",
        description: "This study explores how integrating critical reflection with design thinking cultivates learners with interdisciplinary problem-solving and innovation skills in educational settings.",
        url: "https://www.researchgate.net/publication/273142716_Combining_Critical_Reflection_and_Design_Thinking_to_Develop_Integrative_Learners",
        type: "template"
      }
    ],
    reflectionQuestions: [
      {
        id: "reflect-q1",
        question: "What are the most important insights you gained throughout this process?",
        placeholder: "Summarize your key learnings...",
        type: "textarea",
        required: true
      },
      {
        id: "reflect-q2",
        question: "How has your understanding of the problem and solution evolved?",
        placeholder: "Describe how your thinking has changed...",
        type: "textarea",
        required: true
      },
      {
        id: "reflect-q3",
        question: "What are your next steps to develop and implement your solution?",
        placeholder: "Outline your action plan moving forward...",
        type: "textarea",
        required: true
      },
      {
        id: "reflect-q4",
        question: "What is your refined business model or value proposition?",
        placeholder: "Describe your business model...",
        type: "textarea",
        required: true
      }
    ],
    tasks: [
      {
        id: "reflect-task1",
        title: "Complete a business model canvas",
        description: "Define the key components of your business model using the Business Model Canvas framework.",
        required: true
      },
      {
        id: "reflect-task2",
        title: "Create an implementation roadmap",
        description: "Develop a timeline with key milestones for developing and launching your solution.",
        required: true
      }
    ]
  }
};
