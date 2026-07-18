#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i \
  -e 's/bg-cyan-500\/20/bg-accent\/20/g' \
  -e 's/bg-cyan-500\/10/bg-accent\/10/g' \
  -e 's/bg-cyan-400\/10/bg-accent\/10/g' \
  -e 's/bg-cyan-600\/10/bg-accent\/10/g' \
  -e 's/bg-cyan-900\/30/bg-accent\/20/g' \
  -e 's/bg-cyan-500/bg-accent-hover/g' \
  -e 's/bg-cyan-400/bg-accent/g' \
  -e 's/from-cyan-600/from-accent/g' \
  -e 's/from-cyan-500\/50/from-accent-hover\/50/g' \
  -e 's/from-cyan-500\/10/from-accent-hover\/10/g' \
  -e 's/from-cyan-500/from-accent-hover/g' \
  -e 's/from-cyan-400/from-accent/g' \
  -e 's/via-cyan-400/via-accent/g' \
  -e 's/to-cyan-300/to-accent/g' \
  -e 's/border-cyan-500/border-accent-hover/g' \
  -e 's/border-cyan-400/border-accent/g' \
  -e 's/ring-cyan-500/ring-accent-hover/g' \
  -e 's/text-cyan-100/text-text-main/g' \
  -e 's/text-slate-950/text-bg-surface/g' \
  {} +
