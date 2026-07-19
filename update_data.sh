sed -i '1s/^/import portfolioImage from ".\/assets\/images\/regenerated_image_1784448355548.png";\n/' src/data.ts
sed -i 's|"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"|portfolioImage|' src/data.ts
