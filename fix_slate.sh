#!/bin/bash
find src -type f -name "*.tsx" -exec sed -i \
  -e 's/text-slate-200/text-text-main/g' \
  -e 's/bg-slate-900\/80/bg-surface\/80/g' \
  -e 's/bg-slate-900\/60/bg-surface\/60/g' \
  -e 's/placeholder-slate-600/placeholder-text-muted/g' \
  -e 's/bg-slate-800\/50/bg-surface\/50/g' \
  -e 's/hover:bg-slate-800/hover:bg-surface/g' \
  -e 's/bg-slate-800/bg-surface/g' \
  -e 's/bg-slate-900/bg-surface/g' \
  {} +
