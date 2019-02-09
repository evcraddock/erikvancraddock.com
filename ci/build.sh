#! /bin/sh

cp -R dependency/node_modules source/
cd source
echo "Building the application..."
# npm install
npm run build
cp -R ./dist ../built/
cp -R ./conf/nginx.conf ../built/
cp -R ./ci/Dockerfile ../built/