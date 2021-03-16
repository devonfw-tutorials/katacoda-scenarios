ls -R repo/
ls -R build/output/katacoda
rm -r repo/*/
ls -R repo/
cp -r build/output/katacoda/*/ repo/
ls -R repo/
cd repo/
git add -A
git config user.email "devonfw"
git config user.name "devonfw"
git commit -m "Updated tutorials"
git push
