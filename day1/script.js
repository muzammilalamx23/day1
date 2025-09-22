// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Animate hamburger
  const spans = hamburger.querySelectorAll('span');
  spans.forEach((span, index) => {
    if (navLinks.classList.contains('active')) {
      if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
      if (index === 1) span.style.opacity = '0';
      if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      span.style.transform = 'none';
      span.style.opacity = '1';
    }
  });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => {
      span.style.transform = 'none';
      span.style.opacity = '1';
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Modal Functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Form submission
function submitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (!data.name || !data.email || !data.subject || !data.message) {
    alert('Please fill in all fields');
    return;
  }

  alert('Thank you for your message! I will get back to you soon.');
  event.target.reset();
}

// Skill items hover animation
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  item.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});
