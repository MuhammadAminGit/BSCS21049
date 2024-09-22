document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }
  });
});

const data = {
  navbar: {
    logo: "Portfo",
    menuItems: [
      { text: "Home", href: "#home" },
      { text: "About", href: "#about" },
      { text: "Experience", href: "#experience" },
      { text: "Skills", href: "#skills" },
      { text: "Projects", href: "#projects" },
      { text: "Contact", href: "#contact" },
    ],
  },
  home: {
    videoSrc: "assets/vid.mp4",
    greeting: "السلام علیکم My Name is",
    name: "Muhammad Amin | محمد امین",
    role: "And I'm a Software Engineer",
    hireMeLink: "#contact",
  },
  about: {
    title: "About me",
    imageSrc: "assets/portrait.jpeg",
    description: "I'm Amin and I'm a Software Engineer",
    details:
      "I’m a passionate 4th-year Computer Science student at Information Technology University, Lahore. With over a year of experience as an Associate Software Engineer at Veritus Software, I’ve honed my skills in Python, C++, and React.js through various projects. I enjoy tackling challenging problems and am constantly expanding my technical expertise. Currently, I’m working on web applications and backend development, always aiming for clean, efficient solutions.",
    cvLink: "assets/Amin_CV.pdf",
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        role: "Associate Software Engineer",
        company: "Veritus Software",
        date: "May 2023 - Present",
        responsibilities: [
          "Designed and developed the user interface for the Ground Control application using Qt and C++",
          "Created and implemented an internal task management application using React.js",
          "Enhanced the user interfaces of various internal applications, improving usability and overall user experience",
        ],
      },
      {
        role: "Teaching Assistant",
        company: "Information Technology University",
        date: "Aug 2022 - Present",
        responsibilities: [
          "Streamlined the process of code extraction for evaluation and grading, resulting in a more efficient and accurate assessment system",
          "Automated the generation and distribution of weekly progress and grade reports for students via email, enhancing communication and transparency",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Languages",
        description: "Proficient in multiple programming languages.",
        items: ["JavaScript", "Python", "C/C++", "TypeScript", "SQL"],
      },
      {
        name: "Frameworks",
        description:
          "Experienced in modern front-end and back-end technologies for building robust applications.",
        items: ["Qt", "React.js", "Vue.js"],
      },
      {
        name: "Developer Tools",
        description:
          "Expert in using development tools to manage codebases, containers, and server environments.",
        items: ["Git", "Docker", "Linux", "Jupyter"],
      },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        name: "Spatial Analysis of Traffic Accidents",
        description:
          "Conducted in-depth spatial and temporal analysis of traffic accidents in New York City, providing valuable insights into accident patterns and trends.",
      },
      {
        name: "ThreeFace WMS",
        description:
          "Developed a comprehensive full-stack warehouse management web application for vendors, integrating both front-end and back-end functionalities.",
      },
      {
        name: "Facial Recognition using PCA",
        description:
          "Engineered a facial recognition model by implementing Principal Component Analysis (PCA) from scratch, achieving a recognition accuracy of 80%.",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    info: {
      name: "Muhammad Amin",
      address: "Lahore, Pakistan",
      email: "maminyahya@gmail.com",
    },
  },
  footer: {
    text: "Created by Muhammad Amin | © 2024 All rights reserved.",
  },
};

console.log(document.getElementById("logo"));
document.getElementById(
  "logo"
).innerHTML = `<a href="#">${data.navbar.logo}<span>lio</span></a>`;
const menu = document.getElementById("menu");
data.navbar.menuItems.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${item.href}" class="menu-btn">${item.text}</a>`;
  menu.appendChild(li);
});

document.getElementById("background-video").src = data.home.videoSrc;
document.getElementById("greeting").innerText = data.home.greeting;
document.getElementById("name").innerText = data.home.name;
document.getElementById("role").innerText = data.home.role;
document.getElementById("hire-me").href = data.home.hireMeLink;
document.getElementById("hire-me").innerText = "Hire me";

document.getElementById("about-title").innerText = data.about.title;
document.getElementById("about-image").src = data.about.imageSrc;
document.getElementById("about-description").innerText = data.about.description;
document.getElementById("about-details").innerText = data.about.details;
document.getElementById("cv-link").href = data.about.cvLink;
document.getElementById("experience-title").textContent = data.experience.title;

const experienceContent = document.getElementById("experience-content");
data.experience.jobs.forEach((job) => {
  const jobDiv = document.createElement("div");
  jobDiv.classList.add("experience-box");

  jobDiv.innerHTML = `
            <div class="experience-header">
                <div class="experience-role">${job.role}</div>
                <div class="experience-date">${job.date}</div>
            </div>
            <div class="experience-company">${job.company}</div>
            <ul>
                ${job.responsibilities
                  .map((responsibility) => `<li><p>${responsibility}</p></li>`)
                  .join("")}
            </ul>
        `;

  experienceContent.appendChild(jobDiv);
});

document.getElementById("skills-title").textContent = data.skills.title;
const skillsContainer = document.getElementById("skills-content");

data.skills.categories.forEach((category) => {
  const skillCard = document.createElement("div");
  skillCard.classList.add("skills-card");
  const skillTitle = document.createElement("h3");
  skillTitle.textContent = category.name;
  const skillDesc = document.createElement("p");
  skillDesc.textContent = category.description;
  const skillList = document.createElement("ul");

  category.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    skillList.appendChild(listItem);
  });
  skillCard.appendChild(skillTitle);
  skillCard.appendChild(skillDesc);
  skillCard.appendChild(skillList);
  skillsContainer.appendChild(skillCard);
});

document.getElementById("projects-title").textContent = data.projects.title;

const projectsContainer = document.getElementById("projects-content");

data.projects.items.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  const projectBox = document.createElement("div");
  projectBox.classList.add("box");
  const projectTitle = document.createElement("div");
  projectTitle.classList.add("text");
  projectTitle.textContent = project.name;
  const projectDesc = document.createElement("p");
  projectDesc.textContent = project.description;
  projectBox.appendChild(projectTitle);
  projectBox.appendChild(projectDesc);
  projectCard.appendChild(projectBox);
  projectsContainer.appendChild(projectCard);
});

document.getElementById("contact-title").textContent = data.contact.title;

const contactContentLeft = document.querySelector(
  ".contact-content .column.left"
);
contactContentLeft.querySelector(".text").innerText = "Get in Touch";

const icons = contactContentLeft.querySelector(".icons");
icons.innerHTML = `
  <div class="row">
    <i class="fas fa-user"></i>
    <div class="info">
      <div class="head">Name</div>
      <div class="sub-title">${data.contact.info.name}</div>
    </div>
  </div>
  <div class="row">
    <i class="fas fa-map-marker-alt"></i>
    <div class="info">
      <div class="head">Address</div>
      <div class="sub-title">${data.contact.info.address}</div>
    </div>
  </div>
  <div class="row">
    <i class="fas fa-envelope"></i>
    <div class="info">
      <div class="head">Email</div>
      <div class="sub-title">${data.contact.info.email}</div>
    </div>
  </div>
`;

const contactContentRight = document.querySelector(
  ".contact-content .column.right"
);
contactContentRight.querySelector(".text").innerText = "Message me";
const footer = document.querySelector("footer span");
footer.innerHTML = `
  Created by <a href="https://github.com/MuhammadAminGit" target="_blank">Muhammad Amin</a> | 
  <span class="far fa-copyright"></span> 2024 All rights reserved.
`;

