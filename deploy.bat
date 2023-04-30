set e-

npm run build

cd dist

git init
git add -A 
git commit - m 'New Deployment'
push -f git@github.com:berkaymbaskaya/firtApp.git master:gh-pages

cd-
