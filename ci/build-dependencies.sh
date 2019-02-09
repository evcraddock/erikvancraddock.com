#! /bin/sh

echo "Building Dependencies..."
cd source
npm install > "/dev/null" 2>&1

echo 'Outputting dependency folder'
cp -R ./node_modules/ ../dependency