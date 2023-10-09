---
title: GSuite Migration Part 2 - Import Email
banner: /images/gsuite-migration/g-suite-migration.png
date: 2021-02-24
author: erik
categories:
- work
tags:
- how-to
visible: false
---
### Import Google Suite email into your gmail.com account
If you are worried about changing your email address, don't be. I know that a lot of you have had your google apps email address for awhile. You have given it out to a lot of people. You want to continue to use it. You will still be able to use your email address.

What we are going to do is forward your email address from your google app email to your new gmail.com account. You can also change your gmail account so that it changes the reply to address to your old email address.

Another concern is the existing email that you already have. I am going to show you how to import your existing email into your gmail account. There are a couple of tricks to it.

{{< load-photoswipe >}} 
**STEP 1) Forward your old emails to your new gmail account.**
* Login to your existing account https://mail.google.com
* Click the gear icon and the See all Settings button
* Select the "Forwarding and POP/IMAP" tab
* Click the "Add forwarding address" button and enter your new gmail.com email address, (press next)
* You'll see a confirmation box, click "Proceed"
* A window will open asking you to verify permission, click Next
* You will now see a text box requesting the confirmation code
* In a different browser window - Open your new gmail account
  * As a note, I don't mean a new Chrome tab
  * Open a new Guest Window and log into your new gmail account
* You should have an email with a confirmation code
* Return to your Chrome window with your old google apps account
* Enter the code into the verify textbox - click verify
* Select the Forward a copy of incoming email radio box - click "Save Changes"
  * change the second dropdown box to delete copy (you don't want copies of your email in two places)

**Screen Shots**  
{{<gallery>}} 
  {{< figure src="/images/gsuite-migration/gmail settings.png" >}}
  {{< figure src="/images/gsuite-migration/forwarding and imap.png" >}}
  {{< figure src="/images/gsuite-migration/add forwarding address.png" >}}
  {{< figure src="/images/gsuite-migration/forwarding proceed.png" >}}
  {{< figure src="/images/gsuite-migration/forwarding verify permission.png" >}}
  {{< figure src="/images/gsuite-migration/forwarding verify confirmation.png" >}}
  {{< figure src="/images/gsuite-migration/forwarding confirmation email.png" >}}
  {{< figure src="/images/gsuite-migration/forward copy.png" >}}
{{</gallery>}}


**STEP 2) Toggle "allow less secure apps" so that we can enable pop3 later**
* Login to your existing account https://mail.google.com (if you are not already logged in)
* Click on your account icon and then click on the "Manage your Google Account" button.
* Click on the "Security" link from the Google Account Home screen.
* Scroll down to the "Less secure app access" section and click "Turn on access(not recommended)".
  * It is ok, I promise
* It will ask you to verify your credentials
* Slide the "Allow less secure apps" slider to ON

**Screen Shots**  
{{<gallery>}} 
  {{< figure src="/images/gsuite-migration/manage google account.png" >}}
  {{< figure src="/images/gsuite-migration/less secure app access.png" >}}
  {{< figure src="/images/gsuite-migration/less secure app access - ON.png" >}}
{{</gallery>}}

**STEP 3) Enable POP3**
* More than likely you have an open Chrome Tab with gmail loaded. If so select that Chrome tab.
* If not Login to your existing account again (google apps/suite)
* Click on the gear icon and click "See all settings" button
* Select the "Forwarding and POP/IMAP" tab
* Click on the radio button next to "Enable POP for all mail"
* Select drop down list item "delete Users Mail's copy"
* Click on "Save Changes"
* Click "Configuration instructions"
   * You should see instructions for setting up a mail client
   * We just want the Incoming Mail (POP) Server information
   * You will need this later.

**Screen Shots**  
{{<gallery>}} 
  {{< figure src="/images/gsuite-migration/gmail settings.png" >}}
  {{< figure src="/images/gsuite-migration/forwarding and imap.png" >}}
  {{< figure src="/images/gsuite-migration/enable pop3.png" >}}
  {{< figure src="/images/gsuite-migration/pop3 info.png" >}}
{{</gallery>}}

**STEP 4) Import your google apps email into your new gmail.com account**
* Log into your new Gmail Acount
  * If you have your gmail.com account loaded in a different Chrome window use that, otherwise
  * Click on your account icon in Chrome and sign out
  * Select "User another account" and then login to your new gmail.com account
* Click on the gear icon and click "See all settings" button
* Click on the tab named "Accounts and Import"
* Click on the link "Import mail and contacts"
* Sign into your other email account. This should be your google apps email. Click Continue.
* This will load for a bit and eventually ask for your POP3 information.
   * Enter your password
   * Update the POP server information that you received during the "Configuration instructions" step above.
   * Click continue
* Import options by leaving the default items checked then click "Start Import"
* That is it, you should see a "Finish" screen click Ok
* Your old email should now start importing into your new gmail account. It might take awhile.
* You can view the status on the "Accounts and Import" screen in the "Check mail for other accounts:" section.

**Screen Shots**  
{{<gallery>}} 
  {{< figure src="/images/gsuite-migration/gmail settings.png" >}}
  {{< figure src="/images/gsuite-migration/accounts and import screen.png" >}}
  {{< figure src="/images/gsuite-migration/sign other email.png" >}}
  {{< figure src="/images/gsuite-migration/enter pop server info.png" >}}
  {{< figure src="/images/gsuite-migration/start import.png" >}}
  {{< figure src="/images/gsuite-migration/finish import.png" >}}
  {{< figure src="/images/gsuite-migration/check import status.png" >}}
{{</gallery>}}

Next, we will make sure you don't lose your [contacts](/2021/02/gsuite-migration-contacts). This import process may have imported your contacts as well. In my experience, it does not always work. So let's make sure.

In case you missed them, here are the other Google Suite to Google Account migration instructions.
* [Introduction](/2021/02/gsuite-migration-intro/)
* [Contacts](/2021/02/gsuite-migration-contacts/)
* [Calendar](/2021/02/gsuite-migration-calendar/)
* [Google Drive](/2021/02/gsuite-migration-drive/)


