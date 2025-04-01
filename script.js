// Your existing button click handler
document.getElementById("docs-button").addEventListener("click", function() {
  alert("This will later open Google Docs!");
});

// Your existing ripple effect
document.querySelectorAll('.doc-container').forEach(container => {
  container.addEventListener('mouseenter', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'doc-ripple';
    container.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  });
});

// Your existing header sparkles
function addHeaderSparkle() {
  if (!document.querySelector('header')) return;
  
  const sparkle = document.createElement('div');
  sparkle.className = 'header-sparkle';
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  document.querySelector('header').appendChild(sparkle);
  
  setTimeout(() => sparkle.remove(), 2000);
  setTimeout(addHeaderSparkle, Math.random() * 3000 + 1000);
}
addHeaderSparkle();

// Your existing iframe resizer
function resizeIframes() {
  document.querySelectorAll('.doc-embed').forEach(iframe => {
    iframe.onload = function() {
      try {
        const toolbar = iframe.contentDocument.querySelector('[role="toolbar"]');
        if (toolbar) toolbar.style.display = 'none';
      } catch(e) {}
      
      setTimeout(() => {
        const body = iframe.contentDocument.body;
        iframe.style.height = body.scrollHeight + 'px';
      }, 100);
    };
  });
}

window.addEventListener('load', resizeIframes);
window.addEventListener('resize', resizeIframes);

/* ===== ENHANCED FLOATING HEARTS ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Create 8 subtle hearts (behind content)
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = (Math.random() * 20 + 80) + 'vh'; // Start near bottom
    heart.style.animationDelay = Math.random() * 8 + 's';
    heart.style.opacity = Math.random() * 0.4 + 0.3;
    document.body.appendChild(heart);
  }

  // Your existing sparkle clicks (unchanged)
  document.addEventListener('click', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = (e.clientX - 4) + 'px';
    sparkle.style.top = (e.clientY - 4) + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
  });
});

