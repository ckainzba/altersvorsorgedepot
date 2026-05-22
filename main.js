document.addEventListener('DOMContentLoaded', () => {
  // Navbar blur effect on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(10, 15, 28, 0.95)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.background = 'rgba(10, 15, 28, 0.8)';
      header.style.boxShadow = 'none';
    }
  });

  // Reveal animations on scroll
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load

  // FAQ Accordion – uses 'open' class (not 'active', which is reserved for scroll-reveal)
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const faqHeader = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');

    // Wrap content in .faq-inner so grid animation works correctly
    if (!content.querySelector('.faq-inner')) {
      const inner = document.createElement('div');
      inner.className = 'faq-inner';
      while (content.firstChild) {
        inner.appendChild(content.firstChild);
      }
      content.appendChild(inner);
    }

    faqHeader.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all items
      faqItems.forEach(other => other.classList.remove('open'));

      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
});
