---
title: GSuite Migration Part 3 - Import Contacts
banner: /images/gsuite-migration/g-suite-migration.png
date: 2021-02-25
author: erik
categories:
- work
tags:
- how-to
visible: false
---
### Import Google Suite contacts into your gmail.com account
The email import tool claims to also import your contacts. That does not seem to be the case in my experience. Thankfully, exporting and importing contacts is pretty simple. However, having duplicate contacts is annoying. You should probably verify that your contacts have already been imported. Otherwise here is how you do it.

* Go to the [contacts website](https://contacts.google.com) and log in as your Google Suite/Apps account
* Click on the Export link in the sidebar and then select Google CSV and click the Export button
* It will prompt you with how to handle the file. Select "Save File" and press Ok.
   * The file should get saved in your Downloads folder as google-contacts.csv
* Switch to the Google Chrome window where you are logged into your new gmail.com account
   * If you are not logged into your gmail.com account anywhere, open a new Chrome window
   * Go to the [contacts website](https://contacts.google.com) and log in as your gmail.com account
* Click on the Import link in the sidebar and then click "Select File"
   * Select the google-contacts.csv file that you saved earlier. It should be in your Downloads folder
* Once you select the file click Import
* You should now see all of your contacts listed.

**Screen Shots**  
{{< load-photoswipe >}} 
{{<gallery>}} 
  {{< figure src="/images/gsuite-migration/export contacts.png" >}}
  {{< figure src="/images/gsuite-migration/import contacts.png" >}}
{{</gallery>}}

Next, we need to [import](/2021/02/gsuite-migration-calendar/) all of our events or reminders from the calendar. This process if pretty similar to contacts.

In case you missed them, here are the other Google Suite to Google Account migration instructions.
* [Introduction](/2021/02/gsuite-migration-intro/)
* [Email](/2021/02/gsuite-migration-email/)
* [Calendar](/2021/02/gsuite-migration-calendar/)
* [Drive](/2021/02/gsuite-migration-drive/)
