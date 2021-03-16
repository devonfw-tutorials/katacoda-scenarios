ls -R repo/
ls -R build/output/katacoda
rm -r repo/*/
ls -R repo/
mv build/output/katacoda/ repo/
ls -R repo/
git add -A
git config user.email "devonfw"
git config user.name "devonfw"
git commit -m "Updated tutorials"
git push
