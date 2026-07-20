sed -i 's/opacity={0.3}/opacity={0.25}/g' src/components/Hero3D.tsx
sed -i 's/const t = state.clock.elapsedTime;/const t = state.clock.elapsedTime * 0.5;/g' src/components/Hero3D.tsx
sed -i 's/count={200}/count={100}/g' src/components/Hero3D.tsx
sed -i 's/args={\[1.5, 1\]}/args={\[1.2, 1\]}/g' src/components/Hero3D.tsx
sed -i 's/args={\[0.8, 32, 32\]}/args={\[0.64, 32, 32\]}/g' src/components/Hero3D.tsx
sed -i 's/emissiveIntensity={0.8}/emissiveIntensity={0.4}/g' src/components/Hero3D.tsx
