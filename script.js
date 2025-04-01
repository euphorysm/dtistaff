document.getElementById("docs-button").addEventListener("click", function() {
    alert("This will later open Google Docs!");
  });

  // Adds a gentle ripple effect when hovering documents
document.querySelectorAll('.doc-container').forEach(container => {
  container.addEventListener('mouseenter', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'doc-ripple';
    container.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  });
});

// Creates occasional subtle sparkles in header
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

function resizeIframes() {
  document.querySelectorAll('.doc-embed').forEach(iframe => {
    iframe.onload = function() {
      // Remove Google's toolbar if present
      try {
        const toolbar = iframe.contentDocument.querySelector('[role="toolbar"]');
        if (toolbar) toolbar.style.display = 'none';
      } catch(e) {}
      
      // Auto-resize to fit content
      setTimeout(() => {
        const body = iframe.contentDocument.body;
        iframe.style.height = body.scrollHeight + 'px';
      }, 100);
    };
  });
}

// Run on load and whenever window resizes
window.addEventListener('load', resizeIframes);
window.addEventListener('resize', resizeIframes);