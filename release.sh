yarn build;
VERSION=$(node -p "require('./package.json').version")
git tag -a $VERSION -m "Tagging ${VERSION} release via yarn release";
git push origin $VERSION;
npm publish;
echo "Released. Go to https://github.com/streetcredlabs/categories/releases write release notes for this version and mark it as Latest."
