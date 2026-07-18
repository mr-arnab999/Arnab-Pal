#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i \
  -e 's/bg-\[#030712\]/bg-background/g' \
  -e 's/text-white/text-text-main/g' \
  -e 's/text-slate-400/text-text-muted/g' \
  -e 's/text-slate-300/text-text-muted/g' \
  -e 's/text-slate-50/text-text-main/g' \
  -e 's/text-cyan-400/text-accent/g' \
  -e 's/text-cyan-300/text-accent/g' \
  -e 's/bg-cyan-500\/10/bg-accent\/10/g' \
  -e 's/border-cyan-500\/20/border-accent\/20/g' \
  -e 's/border-cyan-500\/50/border-accent\/50/g' \
  -e 's/bg-cyan-900\/20/bg-accent\/20/g' \
  -e 's/bg-slate-950\/40/bg-surface\/40/g' \
  -e 's/bg-slate-950/bg-surface/g' \
  -e 's/border-white\/10/border-border-subtle/g' \
  -e 's/border-white\/5/border-border-subtle/g' \
  {} +
