cat << 'CSS' >> src/index.css

.premium-gradient-slow {
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    90deg,
    #38bdf8 0%,
    #3b82f6 25%,
    #818cf8 50%,
    #3b82f6 75%,
    #38bdf8 100%
  );
  background-size: 200% auto;
  animation: bgPan 6s linear infinite;
  will-change: background-position;
}

@keyframes bgPan {
  0% { background-position: 200% center; }
  100% { background-position: 0% center; }
}

@media (prefers-reduced-motion: reduce) {
  .premium-gradient-slow {
    animation: none;
    background-position: 0% center;
  }
}
CSS
