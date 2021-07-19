git checkout release
git merge main --no-edit
yarn dist
git add -f ./dist/*
git commit -m 'release'
git push
git checkout main