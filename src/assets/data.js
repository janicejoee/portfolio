export const workExperiences = [
  {
    id: 'amazon',
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    location: 'Arlington, VA',
    period: 'Jun 2025 - Aug 2025',
    summary:
      'Built internal tooling to streamline teams\' operational tasks, especially on-calls',
    messages: [
      {
        id: 'amazon-q1',
        type: 'question',
        label: 'Job Responsibilities?',
      },
      {
        id: 'amazon-a1',
        type: 'answer',
        content:
          'Built a full-stack Ops Console in React, consolidating 4+ workflows and reducing on-call work time by ~30% for the team',
      },
      {
        id: 'amazon-a2',
        type: 'answer',
        content:
          'Automated DynamoDB log queries and SQS dead-letter queue re-drives, eliminating several manual steps and saving ~5 hours/week for the on-call team',
      },
      {
        id: 'amazon-a3',
        type: 'answer',
        content:
          'Developed REST APIs by integrating AWS Lambda with API Gateway and backend services in Coral Java',
      },
      {
        id: 'amazon-a4',
        type: 'answer',
        content:
          'Implemented IAM-based authentication with custom access policies supporting 6+ internal teams',
      },
      {
        id: 'amazon-q2',
        type: 'question',
        label: 'Technology Used?',
      },
      {
        id: 'amazon-a5',
        type: 'answer',
        content:
          'React, TypeScript, AWS Lambda, API Gateway, DynamoDB, SQS',
      },
    ],
  },
  {
    id: 'bca',
    company: 'Bank Central Asia',
    role: 'Software Development Engineer Intern',
    location: 'Jakarta, Indonesia',
    period: 'Jun 2024 - Aug 2024',
    summary:
      'Worked on internal banking tools to improve reporting and ',
    messages: [
      {
        id: 'bca-q1',
        type: 'question',
        label: 'Job Responsibilities?',
      },
      {
        id: 'bca-a1',
        type: 'answer',
        content:
          'Built a LangChain LLM agent capable of SQL querying and financial data visualization',
      },
      {
        id: 'bca-a2',
        type: 'answer',
        content:
          'Improved Google Vertex AI RAG pipeline response accuracy from 55% to 75% through tuned embeddings, retrieval filtering, and persona constraints',
      },
      {
        id: 'bca-a3',
        type: 'answer',
        content:
          'Developed sentiment analysis models on multilingual bank feedback, achieving 86% accuracy on real-world mixed-language data, improving reporting turnaround by 50%',
      },
      {
        id: 'bca-a4',
        type: 'answer',
        content:
          'Wrote AWS S3 automation utilities for recursive file operations, reducing manual data-ops tasks by ~70%',
      },
      {
        id: 'bca-q2',
        type: 'question',
        label: 'Technology Used?',
      },
      {
        id: 'bca-a5',
        type: 'answer',
        content:
          'LangChain, Google Vertex AI, AWS S3, Scikit-learn, MS Excel',
      },
    ],
  },
  {
    id: 'wmc',
    company: 'Wealth Management Cube Ltd',
    role: 'Data Analytics Intern',
    location: 'Hong Kong',
    period: 'Jun 2023 - Aug 2023',
    summary:
      'Supported data analysis and client reporting for a wealth management startup.',
    messages: [
      {
        id: 'wmc-q1',
        type: 'question',
        label: 'Job Responsibilities?',
      },
      {
        id: 'wmc-a1',
        type: 'answer',
        content:
          'Automated funds data updates, cutting download time from a day to 10 seconds using Selenium and BeautifulSoup',
      },
      {
        id: 'wmc-a2',
        type: 'answer',
        content:
          'Led a team of 6 interns in troubleshooting web scraper code-related issues during implementation',
      },
      {
        id: 'wmc-a3',
        type: 'answer',
        content:
          'Updated fund list with 100+ fund houses, identifying new and removed funds using advanced Excel formulas',
      },
      {
        id: 'wmc-a4',
        type: 'answer',
        content:
          'Saved 2 hours daily by automating data transfer from client\'s JotForm to company\'s ClickUp database',
      },
      {
        id: 'wmc-q2',
        type: 'question',
        label: 'Technology Used?',
      },
      {
        id: 'wmc-a5',
        type: 'answer',
        content:
          'BeautifulSoup, Selenium, Excel, ClickUp',
      },
    ],
  },
];

export const projects = [
  {
    id: "columbia-sublet",
    title: "Columbia Sublet Cloud Platform",
    description: "A database-focus application built with PostgreSQL, Flask, and HTML/CSS",
    tags: ["GCP Cloud Run", "GCP Compute Engine", "Cloud Functions", "Restful API", "MySQL", "Cloud SQL", "OAuth2/OIDC"],
    link: "https://github.com/UNKNOWN-CloudApp",
    image: "YOUR_IMAGE_URL_HERE_1",
    summary: "Cloud-native sublet platform supporting secure listings and search for students.",
    messages: [
      {
        id: "columbia-sublet-q1",
        type: "question",
        label: "What is this project about?",
      },
      {
        id: "columbia-sublet-a1",
        type: "answer",
        content:
          "Designed and implemented a cloud-hosted sublet platform for Columbia students, focusing on reliable listing, search, and booking experiences.",
      },
      {
        id: "columbia-sublet-q2",
        type: "question",
        label: "Technology used?",
      },
      {
        id: "columbia-sublet-a2",
        type: "answer",
        content:
          "PostgreSQL/MySQL-backed APIs with Flask, deployed using GCP Cloud Run, Compute Engine, Cloud Functions, and Cloud SQL, with OAuth2/OIDC-secured authentication.",
      },
    ],
  },
  {
    id: "mood-activities",
    title: "Mood-based Activities Recommender",
    description: "A database-focus application built with PostgreSQL, Flask, and HTML/CSS",
    tags: ["PostgreSQL", "HTML/CSS", "Flask", "Google Cloud"],
    link: "https://github.com/kimmyna/w4111-proj1",
    image: "YOUR_IMAGE_URL_HERE_1",
    summary: "Recommender web app that suggests activities based on user mood.",
    messages: [
      {
        id: "mood-activities-q1",
        type: "question",
        label: "What is this project about?",
      },
      {
        id: "mood-activities-a1",
        type: "answer",
        content:
          "Built a web app that recommends activities based on user-selected moods, using structured data stored in a relational database.",
      },
      {
        id: "mood-activities-q2",
        type: "question",
        label: "Technology used?",
      },
      {
        id: "mood-activities-a2",
        type: "answer",
        content:
          "PostgreSQL for data storage, Flask for backend routing and business logic, and HTML/CSS for the interactive front end, deployed on Google Cloud.",
      },
    ],
  },
  {
    id: "smart-calendar",
    title: "Campus Wellness Smart Calendar",
    description: "A smart multi-functional calendar integrated with Google Gemini",
    tags: ["LangChain", "Streamlit", "MongoDB", "Google Gemini"],
    link: "https://github.com/Sallyliubj/smart-calendar-chatbot",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/project-calendar.png",
    summary: "AI-powered calendar that helps students plan events and wellness routines.",
    messages: [
      {
        id: "smart-calendar-q1",
        type: "question",
        label: "What is this project about?",
      },
      {
        id: "smart-calendar-a1",
        type: "answer",
        content:
          "Developed a smart calendar that uses LLM-powered suggestions to help students plan events, study time, and wellness routines.",
      },
      {
        id: "smart-calendar-q2",
        type: "question",
        label: "Technology used?",
      },
      {
        id: "smart-calendar-a2",
        type: "answer",
        content:
          "Leveraged LangChain with Google Gemini, Streamlit for the UI, and MongoDB for storing user events and preferences.",
      },
    ],
  },
  {
    id: "fact-checker",
    title: "Indonesian News Fact Checker",
    description: "A machine learning model for detecting hoax news during Indonesia's presidential election",
    tags: ["Pandas", "Data Analysis", "Machine Learning"],
    link: "https://janicejoe281.wixsite.com/janicesportfolio/fact-checker",
    image: "YOUR_IMAGE_URL_HERE_2",
    summary: "Machine learning pipeline to classify Indonesian political news as real or hoax.",
    messages: [
      {
        id: "fact-checker-q1",
        type: "question",
        label: "What is this project about?",
      },
      {
        id: "fact-checker-a1",
        type: "answer",
        content:
          "Built a machine learning model to detect hoax news during Indonesia's presidential election, focusing on text preprocessing and feature engineering for Indonesian-language articles.",
      },
      {
        id: "fact-checker-q2",
        type: "question",
        label: "Technology used?",
      },
      {
        id: "fact-checker-a2",
        type: "answer",
        content:
          "Used Python, Pandas, and traditional machine learning models to analyze news datasets and evaluate classification performance.",
      },
    ],
  },
];

export const hobbies = [
  {
    id: "mental-math",
    title: "Competitive Mental Math",
    link: "#",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-math.jpeg",
    summary: "Training and competing in rapid calculation and number sense.",
    messages: [
      {
        id: "mental-math-q1",
        type: "question",
        label: "Why mental math?",
      },
      {
        id: "mental-math-a1",
        type: "answer",
        content:
          "I enjoy the mix of speed, accuracy, and focus that competitive mental math requires—it feels like a puzzle and a sport at the same time.",
      },
    ],
  },
  {
    id: "piano",
    title: "Piano",
    link: "https://www.youtube.com/watch?v=4h5QeWyjAEw",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-piano.png",
    summary: "Classical and modern piano pieces, often shared through recordings.",
    messages: [
      {
        id: "piano-q1",
        type: "question",
        label: "What do you like about playing piano?",
      },
      {
        id: "piano-a1",
        type: "answer",
        content:
          "Piano is my favorite way to unwind and express myself creatively",
      },
    ],
  },
  {
    id: "film-photo",
    title: "Film Photography",
    link: "https://www.instagram.com/filmcucikeringpake",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-photo.jpg",
    summary: "Capturing everyday moments on 35mm film.",
    messages: [
      {
        id: "film-photo-q1",
        type: "question",
        label: "Why film photography?",
      },
      {
        id: "film-photo-a1",
        type: "answer",
        content:
          "Shooting on film forces me to slow down, be intentional with each shot, and appreciate the imperfect, nostalgic feel of the final images.",
      },
    ],
  },
  {
    id: "food-blog",
    title: "Food Blogging",
    link: "https://www.instagram.com/brokecolumbian",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-food.jpeg",
    summary: "Exploring and sharing budget-friendly food finds.",
    messages: [
      {
        id: "food-blog-q1",
        type: "question",
        label: "What do you share on your food blog?",
      },
      {
        id: "food-blog-a1",
        type: "answer",
        content:
          "I highlight affordable, tasty spots around campus and in the city, especially places that students might not discover on their own.",
      },
    ],
  },
  {
    id: "taekwondo",
    title: "Taekwondo",
    link: "#",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-taekwondo.JPG",
    summary: "Martial arts training that builds discipline and resilience.",
    messages: [
      {
        id: "taekwondo-q1",
        type: "question",
        label: "What does Taekwondo mean to you?",
      },
      {
        id: "taekwondo-a1",
        type: "answer",
        content:
          "Taekwondo keeps me active and grounded—it pushes me physically while also teaching focus, respect, and perseverance.",
      },
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "R", "SQL", "JavaScript", "TypeScript", "VBA", "MATLAB"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Flask", "Pandas", "LangChain", "BeautifulSoup", "Selenium"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS (Lambda, API Gateway, DynamoDB, S3)", "GCP (Vertex AI, Cloud Run, GCE)", "Docker", "Git", "Tableau", "Figma"],
  },
];