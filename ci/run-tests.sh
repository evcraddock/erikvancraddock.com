#! /bin/bash

cp -R dependency/node_modules source/

echo "Downloading Crhome"
echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | tee -a /etc/apt/sources.list \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && apt-get update && apt-get install -y \
      libxpm4 libxrender1 libgtk2.0-0 libnss3 libgconf-2-4 \
      google-chrome-stable xvfb gtk2-engines-pixbuf xfonts-cyrillic \
      xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable \
      imagemagick x11-apps rsync > "/dev/null" 2>&1 && \
     rm -rf /var/lib/apt/lists/* 

echo "Running Tests"
cd source
npm run test