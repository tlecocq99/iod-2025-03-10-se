// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Custom Smooth Scroll with slower speed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      smoothScroll(target);
    }
  });
});

let animationFrameId; // Store the animation frame ID to cancel if needed

function smoothScroll(target) {
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1200; // Time in ms for the scroll (slower)
  let startTime = null;

  // Cancel the animation if the user scrolls during it
  function cancelScrollAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  }

  // Listen for mouse wheel or touchpad scroll to cancel the animation
  window.addEventListener('wheel', cancelScrollAnimation, { once: true });
  window.addEventListener('touchmove', cancelScrollAnimation, { once: true });

  function scrollAnimation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      animationFrameId = requestAnimationFrame(scrollAnimation);
    }
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  // Start the scroll animation
  animationFrameId = requestAnimationFrame(scrollAnimation);
}
