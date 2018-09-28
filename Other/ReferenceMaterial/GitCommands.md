Important git commands to know

*This is to clone a different branch from the master branch to your desktop

Example with UnderbarRedo:

>>> git clone https://github.com/spiterman/MKS28-underbar.git --branch UnderbarRedo --single-branch

*These are the basic commands

>>> git add <Filename>
*** Make sure cd into the correct directory ***
*** This stages the commits ***

>>> git commit -m 'Message'
*** This commits the changes locally so that they can be accessed from the personal computer ***
*** Changes haven't been pushed yet ***

>>> git push origin master
*** This pushes the changes to github ***

>>> git checkout <Branch Name>
*** This switches the head to a new branch to inspect ***

>>> git checkout -b <Branch Name>
*** This creates a new branch and switches to it ***

>>> git push origin <Branch Name>
*** This pushes the commits to the desired branch at the origin ***


>>> git init
*** This initializes a repo ***
*** ‘cd’ into the right folder that you want to eventually push up to github ***
*** then run this code ***

>>> git add .
*** adds ALL the files in a folder ***

>>> git remote add origin <URL to the repository you want to add to>
*** Not quite sure what this does, but I’m pretty sure it adds an origin branch ***
*** Does this remotely from the Desktop ***
Example:
	git remote add origin https://github.com/spiterman/MKS28-Sandbox.git

*** After this, go to Github and create a new repository where the code will all go ***
*** Once there there will be some code telling you how to get code from your Desktop ***

>>> git push -u origin master
*** Not sure what the ‘-u’ does but it’s similar to the regular push ***
*** After this the new repo should be created and your files should be synced up ***
*** Also possible to just create a blank repo and pull the folder down ***
*** Probably easier to do that way honestly ***

>>> git remote add <name, example: zbanalagay>  <link to fork, example: https://github.com/zbanalagay/MKS28-data-structures.git>
*** Creates a remote upstream to a another person’s fork, even when working on own origin ***
>>> git push <name, zbanalagay> master
*** pushes things to the other person’s remote upstream ***



*** GIT LECTURE 11/5/15 ***

Working Directory          Staging Area                  Repository                   Github
On local file system       Related hanges for commit     Stored in git folder         Store repo in the cloud
Not reflected in git repo  Not in git repo yet           the stuf that gets pushed    Pull down later


git add <file>       --->                git commit                --->            git push

git reset HEAD file           <---      reset, revert, checkout               <---          git pull



* Branches are good to fiddle with new features
* Reversions: >>> git commit --ammend
* Look up git cheat sheets

* git log looks up older versions
* git checkout <commit alias> <file>
*** commit alias is that random hash eg: ak28ck0

Be careful with:
*** git commit -a -m 'Message' ----> Need to add new files by name so they are untracked so -a won't work
*** git add .  ---->  Time savers but might not add all the files

*** --force ----> Use sparingly


* Practice committing often, granular commits
* www.atlassian.com


>>> git add <filename> --patch

*** this will break up little changes in the commit
*** so you can stage like one line that was changed but not another


>>> git status -v
*** verbose, explains more


Wednesday 11/11/15
*** Sublime Text editor 3 from the Command Line***

>>> open /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl
* This opens Sublime

>>> ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime
* This allows you to open all the files in a folder in sublime
* You must cd in the folder you want to open up
* then just type:

>>> sublime .

* Opens sublime with all the files in the side bar


*** Removing a .git file ***

* So I accidentally initialized my whole desktop as a git repo
* Bad because it started tracking changes in all kinds of files I didn't want it to
* Make sure you initialize in the right folder

>>> rm -rf .git

* This will recursively, force delete all files in a .git directory
* Careful with rm -rf because it eats up everything and there is no way to get it back
* rm by itself won't work on a folder that has contents
* -f flag makes it so you won't have to confirm every file that is recursively getting deleted (Yes all basically)
* -r is the recursive flag
* But this fixed my problem for when I did:
>>> git init
* while I was in my desktop


>>> mkdir <filename>

* Creates a new directory in whatever directory you are in
* aka, makes a new folder
* if initializing a repo, good to name it the same thing on github


*** Live Server ***

* A server that auto updates what you see when you save your sublime file
* This way you don't have to refresh the page
* Combine this with the sublime auto save setting so you can update projects quickly

* Install:

>>> npm install -g live-server

* Keep in mind it doesn't always work with things like automated testing

* Run:
* cd into the directory you want

>>> live-server

* Select the html file you want, and it should be visible in the browser

* Stop a Unix command

ctrl + c

* New tabs in terminal start in the same directory as the original window
