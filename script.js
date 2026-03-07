// Typing animation
const typingAnimationElement = document.getElementById('typing-animation');

const words = ["Power BI Developer", "SQL Analyst", "Python Programmer", "Data Enthusiast"];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingAnimationElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingAnimationElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 70);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

type();

// Navbar active on click + scroll
const navLinks = document.querySelectorAll('.navbar ul li a');
const sections = document.querySelectorAll('section');

function activateNav() {
  let scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.navbar ul li a[href="#${sec.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activateNav);
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Load dynamic profile info
fetch('profile.json')
  .then(res => res.json())
  .then(data => {
    // About
    document.getElementById('about-text').textContent = data.profile.bio;

    // Education
    const eduContainer = document.getElementById('education-container');
    data.education.forEach(edu => {
      const div = document.createElement('div');
      div.classList.add('education-card');
      div.innerHTML = `<h3>${edu.degree} - ${edu.institute}</h3>
                       <p>Year: ${edu.year} | GPA: ${edu.gpa}</p>`;
      eduContainer.appendChild(div);
    });

    // Projects
    const projContainer = document.getElementById('projects-container');
    data.projects.forEach(proj => {
      const div = document.createElement('div');
      div.classList.add('project-card');
      div.innerHTML = `<h3>${proj.title}</h3>
                       <p>${proj.desc}</p>
                       <a href="${proj.link}" target="_blank">View Project</a>`;
      projContainer.appendChild(div);
    });
  });
