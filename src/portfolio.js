/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rohan Menwani Portfolio",
    type: "website",
    url: "http://RohanMenwani.com/",
  },
};

//Home Page
const greeting = {
  title: "Rohan Menwani",
  logo_name: "Rohan Menwani",
  nickname: "MERN Stack Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bQQXAx0NyCLH4-UkotD4dz3YBReBzrk7/view?usp=sharing",
  portfolio_repository: "https://github.com/RohanMenwani/masterPortfolio",
  githubProfile: "https://github.com/RohanMenwani",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/RohanMenwani",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rohan-menwani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:rishimenwani@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/rohan_menwani",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rohan.menwani.10/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rohan._.menwani/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend SkillStack",
      fileName: "BackendImg",
      skills: [
        "⚡ Experienced in building and maintaining RESTful APIs and GraphQL APIs using Node.js, Express.js, and Nest.js. ",
        "⚡ Proficient in designing and managing databases using Prisma, MongoDB, and MySQL to ensure data integrity and performance. ",
        "⚡ Developing server-side logic and integrating front-end elements with server-side logic for full-stack applications. ",
        "⚡ Implementing GraphQL for efficient and flexible data querying and manipulation in complex applications. ",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          imageSrc: "express.png",
        },
        {
          skillName: "NestJS",
          imageSrc: "nest.png",
        },
        {
          skillName: "Prisma",
          imageSrc: "prisma.png",
        },
        {
          skillName: "MongoDB",
          imageSrc: "mongo.png",
        },
        {
          skillName: "GraphQL",
          imageSrc: "graphql.png",
        },
        {
          skillName: "MySql",
          imageSrc: "mysql.svg",
        },
      ],
    },
    {
      title: "Frontend SkillStack",
      fileName: "FrontendImg",
      skills: [
        "⚡Expert in developing responsive and dynamic user interfaces using React and Next.js, ensuring seamless user experience across all devices.",
        "⚡Proficient in managing complex application states with Redux, React Query, and RTK Query for efficient data handling and performance.",
        "⚡Skilled in implementing modern and attractive UI designs using Tailwind CSS, Bootstrap, Material-UI (MUI), and Ant Design (Antd).",
        "⚡Strong understanding of JavaScript and TypeScript for creating robust and scalable front-end applications.",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          imageSrc: "ts-logo.png",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          imageSrc: "nextjs-icon.svg",
        },
        {
          skillName: "Tailwind",
          imageSrc: "tailwind.png",
        },
        {
          skillName: "Redux / RTK",
          imageSrc: "redux.png",
        },
        {
          skillName: "Bootstrap",
          imageSrc: "bootstrap.png",
        },
        {
          skillName: "MUI",
          imageSrc: "mui.png",
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "Other Tools, DevOps and Cloud Services",
      fileName: "CloudInfraImg",
      skills: [
        "⚡Expert in deploying and managing scalable, secure web applications using AWS and Firebase, ensuring efficient cloud operations.",
        "⚡Skilled in setting up CI/CD pipelines to automate testing and deployment processes, enhancing workflow efficiency and reliability.",
        "⚡Proficient in managing server infrastructure with a focus on performance monitoring and maintaining high availability.",
        "⚡Experienced in utilizing Git and GitHub for version control, and Jira for agile project management, promoting seamless teamwork and maintaining high code quality.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },

        {
          skillName: "Github",
          imageSrc: "github.png",
        },

        {
          skillName: "Jira",
          imageSrc: "jira.webp",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "G.E.C. Gandhinagar",
      subtitle: "Bachelors Of Engineering in Information Technology",
      logo_path: "gecg.png",
      alt_name: "GECG",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, CyberSecurity etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.gecg28.ac.in/",
    },
    {
      title: "St. Xavier's High School , Hansol",
      subtitle: "H.S.C. in Science Strem (PCM)",
      logo_path: "xaviers.png",
      alt_name: "St. Xaviers",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ Studied in the science stream with a strong focus on mathematics, achieving a 92 percentile and scoring 97/100 in math.",
        "⚡ This passion for math has always been a highlight.",
        "⚡ My time in school was an incredible experience, filled with learning and memorable moments.",
      ],
      // website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "A newcomer to the professional world, bringing fresh energy and enthusiasm. Known as an energetic developer, always eager to learn new things and stay updated with the latest technologies. Ready to bring passion and innovation to every project.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "La Net Team Software Solutions Pvt. Ltd.",
          company_url: "https://www.lanetteam.com/",
          logo_path: "lanet.jpg",
          duration: "July 2023 - July 2024",
          location: "Surat, Gujarat, India",
          description:
            "Working in a service-based company has provided numerous opportunities to learn and grow. Engaged in various projects, gaining valuable experience in teamwork and project management. Successfully managed projects both as part of a team and as a sole developer, continuously expanding skills and knowledge.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "La Net Team Software Solutions Pvt. Ltd.",
          company_url: "https://www.lanetteam.com/",
          logo_path: "lanet.jpg",
          duration: "Jan 2023 - June 2023",
          location: "Surat, Gujarat, India",
          description:
            "Gained hands-on experience through various projects, enhancing technical skills and professional development.",
        },
        {
          title: "Python Intern",
          company: "CreArt Solutions",
          company_url: "https://www.delhivery.com/",
          logo_path: "creart.jpg",
          duration: "June 2022 - July 2022",
          location: "Ahmedabad, Gujarat, India",
          description:
            "I have worked on project of creating a authentication system with the help of Django, while learning python",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Showcasing a range of projects that demonstrate expertise, creativity, and technical skills across various domains.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "Do you have any questions or a project in mind? I am available on almost every social media. Let's connect! I am here to help and excited to hear from you.",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "Ahmedabad, Gujarat, India",
    locality: "Ahmedabad",
    country: "India",
    region: "",
    postalCode: "382340",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/dkBr1PzvtW82C9fH8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
