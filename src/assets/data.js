export const projects = [
  {
    title: "Unreel Recipes",
    description: "Unreel turns Instagram cooking reels into a personal recipe library",
    tags: ["YT-DLP", "OpenAI Whisper", "Anthropic Claude", "React.js", "Flask"],
    link: "https://unreel-your-recipes.vercel.app/",
  },
  {
    title: "Personal Copilot Finance Tracker",
    description: "A full-stack AI-powered personal finance tracker for spending analysis and personalized financial insights",
    tags: ["Plaid", "Supabase", "React.js", "Flask", "LLM"],
    link: "https://github.com/janicejoee/ai-finance-tracker",
  },
  {
    title: "Columbia Sublet Cloud Platform",
    description: "A database-focus application built with PostgreSQL, Flask, and HTML/CSS",
    tags: ["GCP Cloud Run", "GCP Compute Engine", "Cloud Functions", "Restful API", "MySQL", "Cloud SQL", "OAuth2/OIDC"],
    link: "https://github.com/UNKNOWN-CloudApp",
  },
  {
    title: "Mood-based Activities Recommender",
    description: "A database-focus application built with PostgreSQL, Flask, and HTML/CSS",
    tags: ["PostgreSQL", "HTML/CSS", "Flask", "Google Cloud"],
    link: "https://github.com/kimmyna/w4111-proj1",
  },
  {
    title: "Campus Wellness Smart Calendar",
    description: "A smart multi-functional calendar integrated with Google Gemini",
    tags: ["LangChain", "Streamlit", "MongoDB", "Google Gemini"],
    link: "https://github.com/Sallyliubj/smart-calendar-chatbot",
  },
  {
    title: "Indonesian News Fact Checker",
    description: "A machine learning model for detecting hoax news during Indonesia's presidential election",
    tags: ["Pandas", "Data Analysis", "Machine Learning"],
    link: "https://janicejoe281.wixsite.com/janicesportfolio/fact-checker",
  },
];

export const workExperiences = [
  {
    company: "Amazon",
    location: "Arlington, VA",
    role: "Software Engineer Intern",
    period: "Jun 2025 - Aug 2025",
    summary: "Built a React Ops Console that consolidated 4+ workflows, including automated DynamoDB and SQS operations, cutting on-call time by ~30%.",
    logo: new URL("./images/logo-amazon.png", import.meta.url).href,
  },
  {
    company: "Bank Central Asia",
    location: "Jakarta, ID",
    role: "Software Engineer Intern",
    period: "Jun 2024 - Aug 2024",
    summary: "Built a LangChain LLM agent for SQL querying and financial visualization, and improved a Vertex AI RAG pipeline's accuracy from 55% to 75%.",
    logo: new URL("./images/logo-bca.png", import.meta.url).href,
  },
  {
    company: "Wealth Management Cube Ltd",
    location: "Hong Kong, SAR",
    role: "Data Analytics Intern",
    period: "Jun 2023 - Aug 2023",
    summary: "Automated fund data updates and client form transfers, cutting download time from a day to 10 seconds and saving about 2 hours daily.",
    logo: new URL("./images/logo-wmc.png", import.meta.url).href,
  },
];

export const leadershipExperiences = [
  {
    organization: "CityUHK Department of Mathematics",
    location: "Hong Kong, SAR",
    role: "Cohort Leader",
    period: "Sep 2022 - May 2024",
    highlights: [
      "Represented Computing Mathematics students and communicated feedback to faculty and department leadership",
      "Coordinated with faculty, staff, and student representatives on programs, regulations, and events",
      "Supported student activities and initiatives to improve the Computing Mathematics student experience",
    ],
  },
  {
    organization: "Persatuan Mahasiswa Indonesia CityUHK",
    location: "Hong Kong, SAR",
    role: "IndoFest Finance Committee",
    period: "Feb 2024",
    highlights: [
      "Managed event budget and tracked expenses to ensure effective use of funds",
      "Coordinated with vendors and committee members on payments and financial planning",
      "Supported financial planning for a large-scale cultural event with 500+ attendees",
    ],
  },
  {
    organization: "Swire Hotels Hackathon",
    location: "Hong Kong, SAR",
    role: "Finalist",
    period: "Mar 2023",
    highlights: [
      "Led an international team of 5 to build an automated interview platform, reducing hiring labor by 90%",
      "Built a chatbot that generated CV-based interview questions and HR assessment reports",
      "Developed applicant and HR interfaces with audio/video recording, speech-to-text, and automated report generation",
    ],
  },
];

export const hobbies = [
  {
    title: "Competitive Mental Math",
    link: "#",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-math.jpeg"
  },
  {
    title: "Piano",
    link: "https://www.youtube.com/watch?v=4h5QeWyjAEw",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-piano.png"
  },
  {
    title: "Film Photography",
    link: "https://www.instagram.com/filmcucikeringpake",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-photo.jpg"
  },
  {
    title: "Food Blogging",
    link: "https://www.instagram.com/brokecolumbian",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-food.jpeg"
  },
  {
    title: "Taekwondo",
    link: "#",
    image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-taekwondo.JPG"
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "R", "C", "SQL", "JavaScript", "TypeScript", "VBA"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Flask", "LangChain"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase", "MongoDB"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS (Lambda, API Gateway, DynamoDB, S3)", "GCP (Vertex AI, Cloud Run, GCE)", "Docker", "Git"],
  },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Bilingual", credential: "IELTS 7.5" },
  { name: "Mandarin", level: "Proficient", credential: "HSK 3" },
  { name: "German", level: "Proficient", credential: "B1" },
];