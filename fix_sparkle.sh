sed -i '/@keyframes sparkle {/,$d' src/index.css
cat << 'CSS' >> src/index.css
@keyframes sparkle {
  0% { 
    background-position: 200% center;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
  100% { 
    background-position: 0% center;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
}

.text-sparkle {
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    90deg,
    #64748b 0%,
    #cbd5e1 25%,
    #f8fafc 50%,
    #cbd5e1 75%,
    #64748b 100%
  );
  background-size: 200% auto;
  animation: sparkle 3s linear infinite;
  will-change: background-position, text-shadow;
}

.dark .text-sparkle {
  background-image: linear-gradient(
    90deg,
    #94a3b8 0%,
    #e2e8f0 25%,
    #ffffff 50%,
    #e2e8f0 75%,
    #94a3b8 100%
  );
}

@media (prefers-reduced-motion: reduce) {
  .text-sparkle {
    animation: none;
    background-position: 0% center;
  }
}
CSS
