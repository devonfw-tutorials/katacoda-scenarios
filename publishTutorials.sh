rm -r repo/*/
cp -r build/output/katacoda/*/ repo/
cd repo/
git add -A
git config user.email "devonfw"
git config user.name "devonfw"
git commit -m "Updated tutorials"
git push
