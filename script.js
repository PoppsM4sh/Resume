const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('.rightS ul');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
});
// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.certification-slide');
const indicatorsContainer = document.querySelector('.slide-indicators');

// Create indicators
slides.forEach((_, index) => {
    const indicator = document.createElement('span');
    indicator.addEventListener('click', () => showSlide(index));
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.slide-indicators span');

function showSlide(n) {
    // Handle wrap-around
    if (n >= slides.length) currentSlide = 0;
    else if (n < 0) currentSlide = slides.length - 1;
    else currentSlide = n;

    // Update slides
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');

    // Update indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

// Button controls
document.querySelector('.prev-btn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Initialize first slide
showSlide(0);

/* chatBot*/
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotContainer = document.querySelector('.chatbot-container');
const closeBtn = document.querySelector('.close-btn');
const sendBtn = document.querySelector('.send-btn');
const chatInput = document.querySelector('.chatbot-input input');
const messagesContainer = document.querySelector('.chatbot-messages');

// Sample project data (customize with your projects)
const projects = {
  "portfolio": {
    description: "This portfolio website was built using HTML, CSS, and JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "#"
  },
  "ecommerce": {
    description: "An e-commerce platform with React and Node.js.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  }
};

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
  chatbotContainer.style.display = 'flex';
  chatbotToggle.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  chatbotContainer.style.display = 'none';
  chatbotToggle.style.display = 'block';
});

// Handle user input
sendBtn.addEventListener('click', handleMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleMessage();
});

function handleMessage() {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  // Add user message
  addMessage(userMessage, 'user');
  
  // Process and add bot response
  setTimeout(() => {
    const botResponse = generateResponse(userMessage);
    addMessage(botResponse, 'bot');
  }, 1000);

  chatInput.value = '';
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', `${sender}-message`);
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateResponse(userInput) {
  const input = userInput.toLowerCase();
  
  // Predefined responses
  if (input.includes('hello') || input.includes('hi')) {
    return "Hello! Ask me about specific projects or technologies I've used.";
  }
  
  if (input.includes('portfolio')) {
    return `Portfolio Project: ${projects.portfolio.description} Technologies used: ${projects.portfolio.technologies.join(', ')}`;
  }
  
  if (input.includes('ecommerce')) {
    return `E-commerce Project: ${projects.ecommerce.description} Built with: ${projects.ecommerce.technologies.join(', ')}`;
  }
  
  if (input.includes('technologies') || input.includes('tech stack')) {
    return "I've worked with: HTML, CSS, JavaScript, React, Node.js, and MongoDB.";
  }
  
  return "I'm still learning! Feel free to ask about specific projects or technologies.";
}
// Wait for the typing animation to finish
// Add 'done-typing' class when animation ends
// Add 'done-typing' class when animation ends
document.querySelector('.text').addEventListener('animationend', function() {
    this.classList.add('done-typing');
  });

document.querySelectorAll('.rightS ul li a').forEach(link => {
  link.addEventListener('click', () => {
      // Check if mobile menu is open
      if(document.querySelector('.rightS ul').classList.contains('active')) {
          // Remove active class to close menu
          document.querySelector('.rightS ul').classList.remove('active');
      }
  });
});