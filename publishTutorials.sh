ls -R repo/
ls -R build/
rm -r repo/
mv build/output/katacoda/ repo/
git add -A
git config user.email "devonfw"
git config user.name "devonfw"
git commit -m "Updated tutorials"
git push
