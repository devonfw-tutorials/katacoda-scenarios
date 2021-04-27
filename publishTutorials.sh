#!/bin/bash

shopt -s dotglob
shopt -s nullglob

cd playbooks
SPECIFIED_TUTORIALS=(*/)
echo "SPECIFIED_TUTORIALS:\n"
printf "%s\n" "${SPECIFIED_TUTORIALS[@]}"
cd ../repo
ONLINE_TUTORIALS=(*/)
echo "ONLINE_TUTORIALS:\n"
printf "%s\n" "${ONLINE_TUTORIALS[@]}"

# delete tutorials, which are not specified anymore
for tutorial in "${ONLINE_TUTORIALS[@]}"
do
  if [[ ! " ${SPECIFIED_TUTORIALS[@]} " =~ " ${tutorial} " ]]; then
      rm -rf "${tutorial}"
      echo "deleted ${tutorial} as not specified anymore in tutorials repository"
  fi
done

cd ../build/output/katacoda
GENERATED_TUTORIALS=(*/)
echo "GENERATED_TUTORIALS:\n"
printf "%s\n" "${GENERATED_TUTORIALS[@]}"
cd ../../..

# delete tutorials, which are newly generated
for tutorial in "${ONLINE_TUTORIALS[@]}"
do
  if [[ ! " ${GENERATED_TUTORIALS[@]} " =~ " ${tutorial} " ]]; then
      rm -rf repo/'${tutorial}'
      echo "deleted ${tutorial} as this is up to be replaced by the build"
  fi
done

cp -r build/output/katacoda/*/ repo/
cd repo/
git add -A
git config user.email "devonfw"
git config user.name "devonfw"
git commit -m "Updated tutorials"
git push
