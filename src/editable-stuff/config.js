// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kadir",
  middleName: "",
  lastName: "Islow",
  message: " Passionate about coding, automating and making infrastructure more efficient. #DevOps",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kislow",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kislow/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/k_isl0w/",
    },
    {
      image: "fa-brands fa-medium",
      url: "https://medium.com/@kislow",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/kislowai.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kislowai.png"),
  imageSize:375,
  message:
    "I’m a graduate from Coventry University with a degree in Computer Science focus on Ethical Hacking & Network security. I'm most passionate about coding and infrastructure. In my free time I enjoy reading and playing football.",
  resume: "https://linkedin.com/in/kislow/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "GitHub Projects",
  gitHubUsername: "kislow",
  reposLength: 1,
  specificRepos: ["helm-crd-extractor"]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/kislowai.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/kislowai.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Bash", value: 95 },
    { name: "Python", value: 85 },
    { name: "Go", value: 75 },
    { name: "JavaScript", value: 60 },
    { name: "Terraform", value: 80 },
    { name: "Bicep/CloudFormation/Pulumi", value: 65 },
    { name: "Linux", value: 90 },
    { name: "Docker", value: 90 },
    { name: "Kubernetes", value: 80 },
    { name: "AWS", value: 70 },
    { name: "Azure", value: 60 },
    { name: "GitHub/GitLab/AzureDevOps", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm based in the UAE/UK. Get in touch if you know of DevOps Engineering, Site Reliability Engineering or Cloud Engineering opportunities! If you have any questions, or if you just want to say hi, feel free to email me at",
  email: "kadirislow@gmail.com",
};

const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Software Engineer/Cloud Platform Engineer',
      companylogo: require('../assets/img/enbw.png'),
      date: 'November 2022 – Present',
    },
    {
      role: 'DevOps Engineer/Site Reliability Engineer',
      companylogo: require('../assets/img/1n1.png'),
      date: 'September 2020 – October 2022',
    },
    {
      role: 'DevOps Engineer',
      companylogo: require('../assets/img/gft.png'),
      date: 'March 2018 – August 2020',
    },
    {
      role: 'DevOps Tech Lead (contracting)',
      companylogo: require('../assets/img/tagbiometrics.png'),
      date: '2023',
    },
    {
      role: 'Infrastructure Engineer',
      companylogo: require('../assets/img/phka.png'),
      date: 'January 2015 – December 2018',
    },
    {
      role: 'Redevelop network infrastructure (contracting)',
      companylogo: require('../assets/img/safj_fh.png'),
      date: '2017',
    },
    {
      role: 'IT Analyst',
      companylogo: require('../assets/img/cat.png'),
      date: '2015',
    },
    {
      role: 'Software Developer (Intern)',
      companylogo: require('../assets/img/objektkultur.png'),
      date: '2013',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experience };
