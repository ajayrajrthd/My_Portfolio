/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ajayraj's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact."
};

//Home Page
const greeting = {
  title: "Ajayraj Rathod",
  logo_name: "Ajayraj Rathod",
  subTitle:
    "A passionate individual with a strong focus on developing scalable, sustainable social and technical systems. Interested in data analytics, Python, and web development, and driven to create impactful end-to-end products.",
  resumeLink:
    "https://drive.google.com/file/d/1S8tcPOHc0sYlM9-N4ax3wm4gQMTtHRPJ/view?usp=drivesdk ",
  githubProfile: "https://github.com/ajayrajrthd",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio"
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ajayrajrthd",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ajayraj-rathod-b72996248/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ajayrajrthd0@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Data Analysis",
      fileName: "DataAnalysisImg",
      skills: [
        "⚡ Actively improving data analysis skills through real-world projects focused on collecting and interpreting complex datasets",
        "⚡ Gaining proficiency in tools like Python, SQL, Excel, and Power BI for effective data analysis and visualization",
        "⚡ Pursuing industry-relevant certifications in data analytics and machine learning to stay updated with the latest trends",
      ],
      softwareSkills: []
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application's backend in Node, Express & Flask",
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        }
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/ajayraj_leet/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ajayrajrthd5",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "A. P. Shah Institute of Technology",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "ApsitLogo.png",
      duration: "Dec 2021 - May 2025",
      descriptions: [
        "⚡ Gained foundational knowledge in core software engineering subjects like Data Structures, Algorithms, DBMS, Operating Systems, and Artificial Intelligence.",
        "⚡ I have completed specialized courses in Data Analytics and AI/ML, certified by AICTE (All India Council for Technical Education).",
        "⚡ Apart from this, I have acquired strong programming skills in Python and Object-Oriented Programming (OOP) concepts applying it to various computational and analytical problems.",
      ],
      website_link: "https://www.apsit.edu.in/",
    },
    {
      title: "S. T. Lawrence Junior College",
      subtitle: "H.S.C (Higher Secondary Certificate)",
      logo_path: "lawrenceLogo.png",
      duration: "Jun 2019 - August 2021",
      descriptions: [
        "⚡ Studied core science subjects including Physics, Mathematics, Chemistry, Biology, and Information Technology, gaining a strong foundation in the scientific domain.",
        "⚡ Gained proficiency in basic computer applications like HTML, CSS, JavaScript, and Microsoft Office tools.",
      ],
      website_link: "http://www.stlawrencethane.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Analytics",
      subtitle: "- Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1Y06Ov2Z-1LARX83NyRtljVh1KaZ70Qz9/view",
      alt_name: "AWS",
      color_code: "#232F3E",
    },
    {
      title: "Python (Basic)",
      subtitle: "- HackerRank",
      logo_path: "HackerRank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/51bddd3469ab",
      alt_name: "HackerRank",
      color_code: "#0C9D5899",
    },
    {
      title: "AI Fundamentals",
      subtitle: "- Microsoft Azure",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1JJsRSoaC8MEZJ9K3ptrftdlsTijWnMmQ/view",
      alt_name: "Microsoft Azure",
      color_code: "#D83B0199",
    },
    {
      title: "AI ML",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/184uvat_WZOIJ3_gNRNE5YEDAX-DVP6kc/view",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "As a Full Stack Developer intern, I gained hands-on experience in building and maintaining dynamic web applications. Additionally, I actively contributed to event management at my college, playing a key role in organizing technical fests and sports events, ensuring their smooth and successful execution.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer (Intern)",
          company: "Craftlab",
          company_url: "https://www.linkedin.com/company/craftlabai/",
          logo_path: "craftlabai.jpg",
          duration: "Jun 2024 - Jul 2024",
          location: "Mumbai, Maharashtra",
          description:
            "Built and maintained dynamic web applications using SvelteKit, modern framework for developing high-performance web applications. Implemented and managed database interactions using Prisma, ensuring efficient data storage and retrieval.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      work: true,
      experiences: [
        {
          title: "Event Management Team Member",
          company: "A. P. Shah Institute of technology",
          company_url: "https://ojus.eventsapsit.org/",
          logo_path: "ojus.png",
          duration: "Mar 2022 - Feb 2023",
          location: "Thane, Maharashtra",
          description:
            "As a member of the event management team, I actively participated in organizing and managing technical fests and sports events at my college, contributing significantly to the successful execution of these large-scale activities.",
          color: "#414141",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have developed diverse web applications, including mern stack, machine learning platforms and management applications. My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description: "Some of my published Articles, Blogs and Research.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "I’m always excited to connect and collaborate on innovative projects. Feel free to reach out to discuss opportunities, share ideas, or just connect.",
    avatar_image_path: "blogs_image.svg",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "400606, Thane (W), Mumbai, Maharashtra, India",
    locality: "Thane",
    country: "India",
    region: "Maharashtra",
    postalCode: "400606",
    // avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/GjuSXT23ZHzbtFZm8",
  },
  phoneSection: {
    title: "+91 7304699836",
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
