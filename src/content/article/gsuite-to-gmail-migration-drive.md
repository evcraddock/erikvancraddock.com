---
title: GSuite Migration Part 5 - Import Drive
banner: /images/gsuite-migration/g-suite-migration.png
date: 2021-02-27
author: erik
categories:
- work
tags:
- how-to
visible: false
---
### Move Drive files from Google apps to gmail.com account Drive
Migrating your Google Drive files is the least automated process of them all. What I mean by that is that there is not a way to migrate your files. Instead, it is necessary to download your files from your existing account. Then, you need to upload those file to your new gmail.com account Drive. There is one hangup. Google documents are not actually documents. Instead, they are records in a database. If you just download a document and then view the file on your computer, you will see that it is just a reference to the file online. There is a way around this. Here is how you do it.

* Go to the [drive website](https://drive.google.com) and log in as your Google Suite/Apps account
* While pressing Shift, click the first document in the My Drive folder, then click the last file.
   * Make sure and hold the shift button until all files are selected.
   * Do not click on folders, these should be handled individually
* Right mouse click one of the selected files and click Download
   * You should see a Download status box in the bottom right.
   * When it finishes your files will be stored in a zip file in your Downloads folder
* Go to the downloads folder on your machine and extract the zip file into a folder on your computer.
   * Your Google documents should get converted to Office documents, ie. .docx and .xlsx files
* For files inside of folder, first open the Google Drive folder
   * Now follow the two previous steps again.
   * Do this for each folder. If you have many folders this could get tedious. I'm sorry.
* Open a new Chrome window, or logout of your Google Apps account
* Go to the [drive website](https://drive.google.com) and log in as your new gmail.com account.
* Using your file manager, go to the folder where you extracted your files.
* Click the "New" button and click either "Upload File" or "Upload Folder"
* Select the file or folder that you want to upload.
* Continue uploading folder or files until you have all your files.

**Screen Shots**  
{{< load-photoswipe >}} 
{{<gallery>}} 
  {{< figure src="/images/gsuite-migration/my drive root.png" >}}
  {{< figure src="/images/gsuite-migration/download files.png" >}}
  {{< figure src="/images/gsuite-migration/download ready.png" >}}
  {{< figure src="/images/gsuite-migration/Drive folder opened.png" >}}
  {{< figure src="/images/gsuite-migration/upload file.png" >}}
{{</gallery>}}

This process is probably the most annoying if you have very many files. Thankfully, actually moving your files is pretty easy. It might just take a bit of time.

In case you missed them, here are the other Google Suite to Google Account migration instructions.
* [Introduction](/2021/02/gsuite-migration-intro/)
* [Email](/2021/02/gsuite-migration-email/)
* [Contacts](/2021/02/gsuite-migration-contacts/)
* [Calendar](/2021/02/gsuite-migration-calendar/)


