// import project1 from '../assets/projects/project-1.webp';
import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/project-2.png';
// import project3 from '../assets/projects/project-3.webp';
// import project4 from '../assets/projects/project-4.webp';

export const NAME = 'Adnan Mukhtar';
// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT = `A software development enthusiast and freshgraduate computer science student from University of Indonesia who is responsible, and easily adaptable, with a particular interest in web development, particularly frontend development, and possesses basic skills in HTML, CSS, JavaScript, Bootstrap, and ReactJs.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: 'Oct 2025 - Apr 2026',
    role: 'Developer Internship',
    company: 'Telkom Indonesia - GovTech Procurement',
    description: `During my internship at PT Telkom Indonesia (GovTech Procurement), I contributed to the development and maintenance of an internal Helpdesk application (Inaproc) for LKPP using Next.js and GraphQL. I built role-based frontend features, implemented dynamic ticket-based data display, and integrated frontend with backend services to support functionalities such as email updates and phone number resets. I also contributed to backend refactoring by transitioning from direct database queries in Express.js to a GraphQL-based architecture, while implementing features such as user verification and data updates. Additionally, I was involved in testing, deployment, maintenance, and bug fixing, as well as enhancing the application by adding new modules like Akun SiKaP and improving overall error handling.`,
    technologies: ['TypeScript', 'Next.js', 'GraphQL', 'Express.js'],
  },
];

export const PROJECTS = [
  {
    title: 'Comfy Store (E-commerce)',
    image: project1,
    description:
      'A simple e-commerce website that I created for practice with features such as a shopping cart, product search, and product listing',
    technologies: ['React', 'Redux', 'Axios', 'Tailwindcss', 'Daisy UI'],
    link: 'https://comfyshop-app.netlify.app/',
  },
  {
    title: 'Search Github User',
    image: project2,
    description:
      'A web application that allows users to search and view GitHub profiles in real-time using the GitHub GraphQL API. ',
    technologies: [
      'React',
      'Typescript',
      'Tailwindcss',
      'Shadcn UI',
      'GraphQL',
      'Apollo',
    ],
    link: 'https://user-search-gh.netlify.app/',
  },
  // {
  //   title: 'Portfolio Website',
  //   image: project3,
  //   description:
  //     'A personal portfolio website showcasing projects, skills, and contact information.',
  //   technologies: ['HTML', 'CSS', 'React', 'tailwindcss', 'framer-motion'],
  // },
  // {
  //   title: 'Blogging Platform',
  //   image: project4,
  //   description:
  //     'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
  //   technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
  // },
];

export const CONTACT = {
  address: '767 Fifth Avenue, New York, NY 10153 ',
  phoneNo: '0877-1130-6923',
  email: 'adnanmkhtr01@gmail.com',
};
