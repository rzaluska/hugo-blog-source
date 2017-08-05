+++
date = "2017-05-11T16:11:58+05:30"
title = "Redmi Note 4 MTK Bootloader Unlocking using Linux"
tags = ["android", "bootloader"]
hl = true
+++

After long and tedious process of unlocking bootloader in my Xiaomi Redmi Note 4
phone using linux, to sum up I decided to write *definitive* tutorial about it.
I have collected all informations that were scattered around internet and
gathered them in one place.

<!--more-->

# Note
This tutorial is written especially for MTK SOC devices, so if you have locked
bootlader on other Xiaomi phone that Redmi Note 4 and it is MTK, then you can
try unlocking it using tools and methods presented here.

# Disclaimer
> 1. I don't take any responsibility for bricked or broken devices.
> 2. You are performing all steps at your own risk.
> 3. Your warranty in most cases will be void.


# General informations
Probably many of you knows that
[bootloader unlocking process](http://en.miui.com/thread-202290-1-1.html)
in recent Xiaomi phones is difficult and requires a lot of work.
First of all it requires special tool called Mi Unlock. Unfortunately it works
only in Windows operating system. Second thing is that to unlock bootloader you
must [ask for premission](https://miui.com/unlock/) first. Then you need to
wait for SMS message that you are allowed to proceed to next steps. To sum up
this part - **we will need to use Windows operating system anyway**.
Right now there is no way to unlock bootloader using linux only :(
So install one
on physical machine or virtual one.

# Before you start
To make sure that bootloader in your Xiaomi Redmi Note 4 MTK is actually locked
we will use Android Fastboot tool.

- Install Android tools in your system (search for **android-tools** in
        package manager)
- Turn off your phone
- Press and hold **Volume (-)** and **Power** buttons **together**.
    Relase buttons when Fastboot screen appears.
- Connect your phone to linux PC
- Issue following command to check if device is connected:
    ~~~bash
    fastboot devices
    ~~~

    Non empty list of fastboot devices should appear
- Issue next command to check if bootloader is locked:
    ~~~bash
    fastboot getvar unlocked
    ~~~
    If you get status like:
    ~~~
    unlocked: "no"
    ~~~
    that means you need to unlock, so continue reading tutorial.

    If this appears:
    ~~~
    unlocked: "yes"
    ~~~
    then you don't need to do anything.


# Unlocking process
## Preparation
- Create Xiaomi Account if you don't have one
    - Go to <https://account.xiaomi.com/>
    - At button of page change language from Chinese to English
    - Click on **Create Mi Account**
    - Fill form and click **Create Mi Account**
- Pass all security check-ups
    - Login to your account <https://account.xiaomi.com/>
    - Fulfill all 4 tasks (Password, Recovery email,...)
    - Make sure there is green bar saying that your account is secure

    This step in necessary to make sure your bootloader unlock permission grant
    application will be accepted faster.
- Go to <https://miui.com/unlock/apply.php> and apply for unlocking your device.
    Provide reason of unlocking like:
    > I want to install custom ROM.
- Wait for grant permissions SMS message. Myself, I have waited for 10 hours. This time
my vary between users.
- After receiving SMS go to
    <https://drive.google.com/open?id=0B9wtW2KGOf0RYWhLNG9ybWM3OG8>
    and download old version of Mi Flash tool. This is needed for bypass
    possible error saying that **binding time is too short**.
- Install application in windows machine or go to next section where I
  describled process of preparing virtual machine.

## Using Virtual Machine instead of physical Windows PC
- Install Virtual Box via package manager
- Create new Virtual Machine and install Windows on it (I recommend using Windows
  7)
- Install **VirtualBox Guest Addons** on your virtual machine. While it is
  running, click on **Devices -> Install Guest Addons**. Finish installation
  inside
  virtual machine.
- Power off virtual machine
- Install **Oracle VM VirtualBox Extension Pack**
    - If you have it in your linux distribution repository then install from it
    - If not then install manually
        - Download <https://www.virtualbox.org/wiki/Downloads>
        - Launch virtual box
        - Go to File -> Preferences -> Extensions
        - Click on small orange button and select downloaded file
        - Go throught install wizard steps and finally provide root password for
          installation completion
        - Restart virtual box
- Go to your virtual machine settings
- Select USB
- Check **Enable USB Controller**
- Select **USB 2.0 (EHCI) Controller**
- Click on small blue icon
- *New Filter 1* position will appear on list
- Make sure new filter is checked
- You can test if USB is working by pluging USB Stick to your PC while virtual
  machine is running. It should appear inside VM.
- If everything is working install Mi Flash on virtual machine


## Flashing China Developer ROM
To be able to unlock bootlader on Redmi Note 4 you need China Developer ROM
installed on your device.

- Backup all your important data
- Make sure that your phone battery is at least **50% charged**
- Download **Redmi Note 4 Latest China Developer Version Fastboot** ROM from
    <http://en.miui.com/a-234.html>
- Download custom cust.img (RAR MD5: 00d47e8fd3e64bf989dd329ebc37d6a3):
    - Mirror 1 <https://www.dropbox.com/s/gyrpatlwi4ok1ct/cust_global.rar?dl=0>
    - Mirror 2 <http://www39.zippyshare.com/v/H3QJXZd1/file.html>
- Extract **ROM** archive
- Extract **cust** archive
- **Replace** cust.img in images/ dir with custom one you have downloaded
- Download **latest version** of SP Flash Tool for **Linux**
    - Mirror 1 <https://androidmtk.com/smart-phone-flash-tool>
    - Mirror 2 <https://tehnotone.com/download-sp-flash-tool-v5-for-linux-latest-versions/>
- Extract downloaded archive
- Add your user to special linux group
    - For ubuntu
    ~~~bash
    sudo adduser username dialout
    ~~~

    - For arch
    ~~~bash
    sudo gpasswd -a username uucp
    ~~~

- Logout and login again to make change live
- run sp\_tool.sh which is located in folder where you extracted SP Tool archive
- Set **Download Agent** to **MTK_All_In_One_DA.BIN**
- Set **Scatter-loading File** to **MT6797_Android_scatter.txt** which is
located in **ROM** images/ dir
- **Uncheck preloader** position on the list of images to push to device
- Turn off phone
- Click **Download** Button in SP Flash Tool
- Click and hold **Volume Down (-)** on phone and while holding it plug your phone
to PC via USB cable
- If phone is detected then yellow bar appears at button and flashing process
begins. You can release **Volume Down (-)** button.
- After flashing is done **Download OK** message appears.
- You can unplug your phone and turn it on. First boot might take up to 10
minutes. This is normal.

## Binding Mi Account to phone
Now you when you have China Developer ROM installed it is time for got throught
setup wizard.
After your phone is ready you must bind it to Xiaomi Account which you have
created in previous steps. Follow this steps in configuration wizard:

- Change language to English
- Connect to network
- Login to Mi Account (very important step)
- Finish wizard

After wizard is done:

- Go to Setting -> About phone -> Tap on MIUI version for 10 times until message
    saying that your are developer now appears
- Go to Setting -> Additional settings -> Developer options
- Turn on USB Debuging

## Unlocking Bootloader
- Start Mi Unlock Tool on **Windows**
- On first screen provide username and password and login to your Xiaomi account
- Turn off your phone and turn in on in Fastboot mode. To do so,
    hold **Volume (-)** and
    **Power** buttons **together**. Relase buttons when Fastboot screen appears.
- Follow steps in Mi Unlock app and connect your phone to PC via USB cable when
    you are asked to do so.
- If everything works out well Mi Unlock will stop at 100% and **your bootloader
    will be unlocked** (you can verify this by using fastboot tool method
            describled at begining of tutorial).
- Enjoy!

# What to do next ?
Now when you have your bootloader unlocked you will probably want to **flash
custom Recovery** to manage your ROMS. This process will be described in next
post.

# References
- <https://forum.xda-developers.com/redmi-note-4/how-to/guide-redmi-note-4-unlock-bootloader-t3517806>
- <https://forum.xda-developers.com/general/rooting-roms/tutorial-how-to-setup-spflashtoollinux-t3160802>
- <http://en.miui.com/thread-202290-1-1.html>
- <http://en.miui.com/thread-371349-1-1.html>
