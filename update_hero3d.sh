sed -i 's/const t = state.clock.elapsedTime;/const t = state.clock.elapsedTime * 0.4;/g' src/components/Hero3D.tsx
sed -i 's/opacity={0.3}/opacity={0.25}/g' src/components/Hero3D.tsx
sed -i 's/opacity-50/opacity-25/g' src/components/Hero3D.tsx
