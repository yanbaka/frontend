git checkout release
if [ $1 ]
then
    git archive --format=zip --prefix=archive/ HEAD `git diff --name-only $1 --diff-filter=d -- dist` -o archive.zip
else
    git archive --format=zip --prefix=archive/ HEAD `git diff --name-only --diff-filter=AMCR HEAD~1 HEAD -- dist` -o archive.zip
fi
git checkout main