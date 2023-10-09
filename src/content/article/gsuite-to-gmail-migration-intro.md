---
title: GSuite Migration - Introduction
banner: /images/gsuite-migration/g-suite-migration.png
date: 2021-02-23
author: erik
categories:
- work
tags:
- how-to
visible: false
---
Many years ago I setup my personal domain using Google Apps. Over the years, I gave friends and family accounts on my personal domain. When I first set this up it was free. It no longer is and I have decided to move my domain off of Google Suite as it is now called. Switching isn't as easy as you would hope. There are several things to consider.

* Third party applications that use Google Authentication
* [Email](/2021/02/gsuite-migration-email/)
* [Contacts](/2021/02/gsuite-migration-contacts/)
* [Calendar](/2021/02/gsuite-migration-calendar/)
* [Google Drive](/2021/02/gsuite-migration-drive/)

As I mentioned, family and friends are also using this domain. If it weren't for them, I would have shut down this Google Suite service long ago. I personally stopped using it a few years ago. I have decided to go ahead and shutdown it down. In order to make sure that no one loses any data, I am writing instructions on how to migrate to a normal Google account. It isn't really hard to do but there are some things that aren't so obvious. I am going to use my domain craddock.org as an example.

For future reference when I say "Google Apps" or "Google Suite", I mean the custom domain that I setup. So you can think "craddock.org" which is my example domain.
If I say gmail.com account, I mean either your existing gmail account or the one we are going to create in the next section.

### Create a gmail.com account
If you already have a gmail.com account, you can skip this.

* Open a Guest window in Chrome
* Click on your user icon in the top right corner of Chrome
* Select Guest
* Goto: [Gmail Setup](https://google.com/gmail/about)
* Click Create Account
* Go through wizard
* Now you have a gmail account

**Screen Shots**
{{< load-photoswipe >}} 
{{<gallery>}} 
  {{< figure src="/images/gsuite-migration/switch to guest.png" >}}
  {{< figure src="/images/gsuite-migration/gmail-about.png" >}}
  {{< figure src="/images/gsuite-migration/create gmail account.png" >}}
  {{< figure src="/images/gsuite-migration/create gmail account 2.png" >}}
  {{< figure src="/images/gsuite-migration/create gmail account 3.png" >}}
  {{< figure src="/images/gsuite-migration/create gmail account 4.png" >}}
  {{< figure src="/images/gsuite-migration/create gmail account 5.png" >}}
{{</gallery>}}

I recommend that you open two separate Google Chrome windows. One will be for your old Google Apps account and the other for your new gmail.com account. You will need to switch between them frequently.

### Third party applications authentication
Some websites on the internet will let you log in with your Google account. You may have logged in using your existing Google Apps account. This can be kind of confusing. Most websites on the internet that require you to log in will ask for your email address. You probably gave them your Google Apps email address, in my case demo@craddock.org. This does not necessarily mean that you authenticated with your Google Apps account. If you authenticate with Google then instead of entering your email address there will be a button that says something like "Log in with Google". Your Google Apps administrator should be able to send you a list of websites that you logged into with Google.

Unfortunately, there isn't a one size fits all solution for changing your Google account for third party applications. Typically there will be a settings page for these websites. I suggest that you look through them to figure out how to change accounts. You may need to contact them for support.

The [next article](/2021/02/gsuite-migration-email/) will explain how to import your Google Apps/Suite email into your new gmail.com account.


