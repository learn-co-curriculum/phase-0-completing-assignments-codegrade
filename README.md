# Complete Your First Software Engineering Assignment

## Learning Goals

- Understand the steps needed to complete an assignment
- Submit assignments in Canvas through CodeGrade

## Introduction

During this course, you will work on various assignments as you learn to code.
All assignments will be interactive pieces of curriculum that require some work.
Some assignments may ask you to follow a set of instructions, while others will
ask you to figure out your own solution to pass specific tests. This lesson is
your first assignment!

All assignments are hosted on GitHub. In order to work on them, however, you
will need to complete work on your local machine. Once you're done, you will
submit your assignment to Canvas using a platform called CodeGrade.

The general process is:

- Click the GitHub logo button (the 'OctoCat') in Canvas; we will show you
  exactly which button this is soon.
- Create a personal copy (a 'fork') of the assignment into your GitHub account.
- Download your personal copy to your computer (referred to as 'cloning').
- Complete the required work.
- Push your completed code back up to your GitHub repo.
- Submit your completed work in Canvas through the CodeGrade window.

In this assignment, you'll learn the workflow that you will be using to complete
your assignments and submit them using CodeGrade.

## Completing and Submitting Assignments

<iframe width="640" height="480" src="https://www.youtube.com/embed/EqIGup3zb8A" title="Completing and Submitting Software Engineering Assignments" frameborder="0" allowfullscreen></iframe>

### A Quick Note on Organizing Work on Your Machine

Throughout this course, you will be downloading many assignments, so it is
important to keep your code organized. If you haven't yet, we recommend that you
go through the steps in
[the previous lesson](https://github.com/learn-co-curriculum/phase-0-organizing-work-on-your-computer)
to set up a directory where you can keep all of your work for this course.

> **Note:** The process we'll go through in this lesson will create sub-folders
> automatically. Whenever you are starting a new assignment, navigate back to
> your main `se-prep` folder (`cd ~/Development/code/se-prep`) before cloning
> the assignment to ensure these sub-folders don't get created _within each
> other_.

### Accessing GitHub and Forking

All the lessons in this course have a corresponding repository (repo) in GitHub.
On this page in Canvas, you should see two icons in the **upper right** corner.
The first is the GitHub logo, also known as OctoCat.

![Screenshot pointing to OctoCat icon](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/octocat-icon.png)

Clicking the OctoCat icon will open the lesson's GitHub repo. The second icon is
a flag, which you can use to submit an _issue_ for the lesson (e.g., if you find
a typo or other error).

To fork an assignment, click the **OctoCat** button to open its GitHub repo. In
the top right corner of the repo, you should see a button that says **Fork**.

![Screenshot point out 'Fork' button](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/fork-button.png)

Click on that, and you should get a screen that looks something like this:

![Screenshot of the 'Create a new fork' form](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/fork-page.png)

In the **Owner** dropdown, select your GitHub username, then click the **Create
fork** button.

Forking is a process which creates an exact copy of a collection of code and
files. Once you've created a fork on your own GitHub account, you will be able
to edit the files in the repository and write your own code solution without
interfering with the original copy.

Once your fork is ready, the next step is to download (**clone**) your new
repository to your local machine.

### Cloning to Your Local Machine

To download the repository for this lesson, first make sure you're in your
personal fork on GitHub. You can check this by looking in the top left of the
GitHub repository, where it shows the name.

![Screenshot showing example of forked repo](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/forked-repo.png)

If you see your GitHub username before the name of the repo,
phase-0-completing-assignments-codegrade, as well as a subtitle saying "forked
from ...", then you are in the right place.

Once you're in your forked version of the repo, click the **Code** button. A
pop-up will appear which shows several options for cloning: **HTTPS**, **SSH**,
and **GitHub CLI**. **Before doing anything else**, be sure to switch to
**SSH**. With **SSH** selected, you should see what looks sort of like an email
in the box below, starting with `git@github.com:`. You should see your GitHub
name after the `:`.

From here, click the copy button.

![clone-repo](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/clone-repo.gif)

Now, open your terminal and navigate to where you'd like to download the
assignment (e.g. `cd ~/Development/code/se-prep`). Type `git clone` and a space,
then paste in the copied SSH link from GitHub. It should look something like
this:

```console
$ git clone git@github.com:your-github-username/phase-0-completing-assignments-codegrade.git
```

Press enter, and you should see a flurry of terminal activity.

Once the terminal gives you control to type again, a new folder with the GitHub
name of the assignment will have been created. Change directory into this folder
to access the assignment files.

```console
$ cd phase-0-completing-assignments-codegrade
```

Now type `code .` (assuming you're using Visual Studio Code as your text editor)
to open up a text editor window with access to all of the assignment's files.
These instructions are now also available on your local machine in `README.md`.

> Note: the first time you open a directory in Visual Studio Code, you'll see a
> message asking "Do you trust the authors of the files in this folders?" This
> is a [security feature][workspace-trust] of Visual Studio Code. It's safe to
> choose "Yes", and we recommend selecting the "Trust the authors of all the
> files in the parent folder" option to prevent this warning from coming up
> every time you open a lesson. Just be sure to download your code from trusted
> sources!

[workspace-trust]: https://code.visualstudio.com/docs/editor/workspace-trust

### Working on an Assignment

Most assignments will have tests that check your work and provide immediate
feedback in the terminal. We'll walk through some examples in upcoming lessons.

This assignment has two tests. The first checks to see if you've correctly
cloned this assignment to your local machine. If you've followed the steps
above, you've completed everything you need to do to pass the first test. Now,
we need to run the tests and find out what the second one is.

First, run `npm install` in the terminal to install the tools necessary to run
the tests. You should again see a flurry of text as dependencies are installed.

> **Note**: You may get a warnings or a message from the terminal saying there
> are vulnerabilities, **these are okay to ignore** - they are normal! You
> **should not** run the audit command the terminal provides you with as it will
> change the versions of the node dependencies for a lesson, which we do _not_
> want to do.

Once the installations are complete, run `npm test` in the terminal. You should
see the results of your tests. By cloning this assignment down, you've already
passed one test!

```console
This assignment
  ✓ has been correctly cloned to your local environment
  1) has a file named myfile.md

1) This assignment
      has a file named myfile.md:
    AssertionError: No file named 'myfile.md' found. Create one in the root of the assignment's directory: value: expected './myfile.md' to exist

1 passing (5ms)
1 failing
```

> **Note:** If you got a "command not found" error, or a different error aside
> from the AssertionError shown above, go back to the Node.js installation
> lesson for your OS. Go through the steps provided there to make sure Node was
> installed correctly. If you're still receiving different errors, we recommend
> going back through all local environment setup instructions again to ensure
> everything is set up properly.

Although you passed one test, there is still one test not passing. The terminal
gave us a detailed "AssertionError" saying why we did not pass the test:

```console
1) This assignment
      has a file named myfile.md:
    AssertionError: No file named 'myfile.md' found. Create one in the root of the assignment's directory: value: expected './myfile.md' to exist
```

We can use this error to figure out what we need to do to pass it. In this case,
we just need to create a file called `myfile.md` inside the assignment
directory. Let's create it with the CLI commands we just learned.

In the terminal, make sure you're in the root of the assignment directory
(`phase-0-completing-assignments-codegrade`). You can check this with `pwd`. If
you're in the correct directory, the output should look like:

```console
$ pwd
/Users/<your-user-name>/Development/code/se-prep/phase-0-completing-assignments-codegrade
```

If you're not already in the root, `cd` into it.

```console
$ cd phase-0-completing-assignments-codegrade
```

Then use the `touch` command to create `myfile.md`.

```console
$ touch myfile.md
```

To make sure it was created successfully in the correct area, use the `ls`
command. The output should look like:

```console
$ ls
CONTRIBUTING.md         README.md               node_modules            package.json
LICENSE.md              myfile.md               package-lock.json       test
```

When you run `npm test` in the terminal again, both tests should now be passing!

```console
  This assignment
    ✓ has been correctly cloned to your local environment
    ✓ has a file named myfile.md


  2 passing (4ms)
```

This is the general workflow you will follow when working on assignments with
tests:

1. **Fork** the assignment repo to your GitHub account, then **clone** it down
   to your machine.
2. Install the tools needed for the test by running `npm install` (or `npm i`)
   in the terminal.
3. Run `npm test` initially to see what tests you need to pass.
4. Work on the assignment with those tests in mind.
5. As you work, run `npm test` in the terminal as many times as you'd like to
   test your code.
6. Once all your tests are passing, it's time to submit your assignment - or is
   it?

### Pushing your Changes to GitHub

If you go to your **forked** version of the assignment on GitHub, you'll see
that the `myfile.md` file you created is not there. Notice in the screenshot
below, for example, `myfile.md` exists in the local VS Code editor, but not
anywhere in the forked GitHub repo.

![Screenshot showing myfile.md in VS Code, but not in GitHub](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/myfile.png)

This is because you only made the change on your _local clone_. Changes that you
make on a locally cloned repository are not automatically synced to the repo up
on GitHub. You have to manually sync the changes. This is a good thing; it gives
you more control over what changes get "pushed" up to the GitHub repo and when.

The process requires three terminal commands:

1. `git add`
1. `git commit`
1. `git push`

We will learn about these commands in far more detail in two lessons near the
end of the SE Prep course: [Git Basics][basics] and [Pushing Code with
Git][pushing-with-git]. For now, we'll just cover the surface basics that will
allow you to turn in your assignments. If you have questions about these git
commands, however, you are free to refer to those later lessons.

[basics]:
  https://github.com/learn-co-curriculum/phase-0-git-version-control-basics
[pushing-with-git]:
  https://github.com/learn-co-curriculum/phase-0-git-pushing-code

These commands should be run in the terminal within the directory with changes
to push. For example with this assignment, you should be running the following
commands within the `phase-0-completing-assignments-codegrade` directory.

#### Track changes with `git add`

This command lets us tell git what changes and files we want to sync within a
repo. You can specify certain files to track, or you can track all files at once
that have changes to sync.

To track specific files, you just need to add the file names as arguments. For
example:

```bash
git add file1.md file2.md
```

To track all files at once, you can use a period as an argument instead `.`:

```bash
git add .
```

Let's go ahead and track our change by using the `git add .` shortcut.

#### Save changes with `git commit`

Once you've tracked all the changes you want to save with `git add`, the next
step is to save all those changes at once. This is done with `git commit`. To
make a commit, the command is:

```bash
git commit -m "short message briefly explaining the changes saved in this commit"
```

Any time you commit something, you should include a message with it to explain
what changes are actually in the commit. These messages should be one line and
short. The `-m` flag says we want to add one and should be followed by the
message in quotes.

Let's commit our tracked change. In the terminal, run:

```bash
git commit -m "creates myfile.md"
```

#### Push changes with `git push`

We've now tracked and saved our changes - but they're _still_ not up on the
GitHub repo. That's because we haven't told Git where we want these saved
changes to go. We need to do so with `git push`. The full command is:

```bash
git push <remote> <branch>
```

We will learn what a **remote** and **branch** are in greater detail later on.

For now, consider the remote as the repository that is on GitHub — in this case,
the copy of the assignment that you forked into your GitHub account earlier.

It would be tedious if we had to copy and paste the entire repository link every
time we want to push a change, however. Instead, these remotes use aliases that
point to the URL. When cloning a repository down to your machine, an alias gets
automatically created for you called `origin`, which is the remote we will push
to.

You can see this yourself by running the command `git remote -v` in the
terminal. This will list the remotes your repository has. This is also a good
way to verify that you are pushing your changes to **your fork** of the
assignment

Then consider a branch as the version of the code you want to push the changes
to. In most cases, this branch will be called `main` or `master` for older
repositories. You can check what branch your repository uses by using the
command `git branch`, which will list all the branches your repository has. For
this assignment, it should be `main`.

Putting that all together, we can now completely fill out the `git push` command
and push our changes up:

```bash
git push origin main
```

Now, finally, when you load your forked version of the assignment on GitHub, you
should see the `myfile.md` file! With all your work now available on GitHub, you
can submit the assignment.

**Note:** It is a good habit to get into to go to your repo on GitHub after you
push to verify that it completed successfully.

### Submitting an Assignment on CodeGrade

**Note**: Before continuing with the steps below, make sure that you're logged
in to your GitHub account.

To submit your work for grading, head back to the assignment on Canvas and
scroll down to the bottom of the page. There, you should see a button that says
"Load Complete Your First Software Engineering Assignment in a new window".

![Load Complete Your First Software Engineering Assignment in a new window button](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/open-codegrade-btn.png)

Click on that button, and a new window of the CodeGrade interface should open
up. As you haven't submitted an assignment for this lab yet, click on the
"Create submission" button. On the next page that opens, click on the "GitHub"
button. A GitHub screen will open asking you to authorize CodeGrade. (Note: you
should only have to do this step the first time you create a submission.) Once
CodeGrade is authorized, as long as you're logged in to GitHub, CodeGrade should
be connected to your account.

![Gif showing the CodeGrade interface, creating a submission, and connecting to GitHub](https://imgur.com/aXVrPtW.gif)

Once your GitHub account is connected, you should see a list of your repos in
the CodeGrade window. Find the repo that matches the assignment you're
submitting, in this case `phase-0-completing-assignments-codegrade`, and click
the blue "Connect" button.

When CodeGrade finishes connecting the repo, it should show you a success
message with a link to view your submission. Click on that link.

![Gif showing how to connect a GitHub repo on CodeGrade](https://imgur.com/8hLcb3O.gif)

On this new page, there are three different tabs: Code, Feedback Overview, and
AutoTest.

The _Code_ tab is as it sounds, all the code you submitted. The _Feedback
Overview_ is where you can see feedback on your work from instructors if they've
provided any.

The _AutoTest_ tab is what we'll focus on in this lesson. This tab is what runs
the test that automatically grades your work. It will take some time, and you
can see the progress in the small box on the right side of the Setup section.
When it's done, it will say "Done" and your score will update in the Automatic
Tests section.

![Gif showing the AutoTest running and completing](https://imgur.com/G5pzKwr.gif)

If you don't pass, don't fret, you can still fix it! You can click on the
test(s) within the Automatic Tests section to see which ones failed. Then, you
can fix those errors within your local version of the repo, and go through the
process of using `git add`, `git commit`, and `git push` to push your changes.
CodeGrade will then automatically re-run the test when it detects changes have
been made to the GitHub repo.

To see the results after you've already made the initial submission, navigate
back to CodeGrade through the button on Canvas. Instead of on "Create
submission", click on the "Latest submission" button to get taken back to the
AutoTest page.

![Gif showing how to navigate back to AutoTest via the Latest submission button](https://imgur.com/iDeIorX.gif)

Once your tests are all passing in CodeGrade, you are good to go. You can close
the CodeGrade window and move on to the next lesson.

Whew, that was a lot. While it will take some time in the beginning, the more
assignments you complete and submit, the easier the process should become. If
you ever forget a step, that's OK. Come back to this lesson as many times as you
need until it becomes second nature.

## Troubleshooting

Errors and mistakes can happen, and this section will cover some common ones. If
your problem is not listed here, please check with an instructor or technical
coach for guidance.

### I got an error when I tried to clone a lab down to my Mac

If you are a Mac user and you see the following message:

```console
xcrun: error: invalid active developer path
```

You need to install the Xcode Command Line Tools. Run the following command to
install them:

```console
$ xcode-select --install
```

And follow the prompts. Then try running the `git clone` command again. See
[this Stack Overflow post](https://stackoverflow.com/a/52522566) for more
details. Note that you may need to re-install `xcode-select` any time you update
your Mac OS version.

### I wasn't able to connect CodeGrade to my GitHub account

First, check to make sure you're logged in to your GitHub account. Then start
again from the assignment's Canvas page and repeat the steps in the "Submitting
an Assignment on CodeGrade" section above.

If it still does not work, try again, but instead of clicking the "GitHub"
button, click the "Or manually connect your Git repository" link underneath.
CodeGrade will walk you through the manual setup; be sure to read and follow
their instructions carefully.

### The tests are failing in CodeGrade

1. Make sure that you've connected the correct repo to CodeGrade. You can do
   that by clicking on the "Code" tab in CodeGrade and verifying that the title
   of the lab in the README.md file matches the title in Canvas. If you've
   connected the wrong repo, follow the instructions in the next section.

2. Re-run the tests in your local environment to verify that they are passing.

3. Make sure that your completed code was pushed up to GitHub. To do that,
   navigate to your repo on GitHub and check that the latest commit is showing.
   If the code was not pushed to GitHub, follow the instructions in the "Pushing
   your Changes to GitHub" section above. Once your code is pushed up, the tests
   will automatically rerun in CodeGrade and the results will be updated in the
   AutoTest tab. To see this, navigate back to CodeGrade by clicking the button
   on the assignment page in Canvas, then click on the "Latest submission"
   button. You may also want to verify that the assignment is showing as
   completed in Canvas.

### I accidentally connected the wrong repository! How do I remove it and connect the correct one?

To reconnect your CodeGrade assignment to a different repo, you will simply go
through the submission process again and select the correct repo. When you do
that, you will see a message warning you that you have already connected to the
repo and asking if you want to disconnect the current repo and select a new one:

![disconnect repo button](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments-codegrade/disconnect-repo.png)

Click the "Disconnect and select new repository" button. This will return you to
the list of repos where you can select the new repo to connect.

> **Note**: When you first go back through the submission process, the incorrect
> repo will still be under the "Latest Submissions". That is OK - it will be
> overridden once you submit a new repo.

The full process is:

1. Return to the lab's Canvas page and, if necessary, refresh the page to reload
   the CodeGrade button.
2. Click the button and, on the CodeGrade page that opens, click "Create
   Submission".
3. Select the new repo to connect.
4. In the page that opens, click the "Disconnect and select new repository"
   button.
5. Select the correct repo once again.

### I refreshed the CodeGrade page and it's asking me to log back in. What are my account details to log in?

If you don't remember creating a username and password for CodeGrade, that's
because you did not! To access CodeGrade, you must always do so from Canvas.

To get back to the submission page for a specific assignment, return to the
assignment on Canvas and click on the "Load" button at the bottom of the page
again. If the button is not there due to being clicked once before, refresh the
Canvas page and it should reappear.

## Types of Assignments

For most assignments, you will go through the process we just walked through. In
our curriculum, these assignments are often referred to as **labs** — coding
lessons that include tests. There are a few other types of assignments, though,
that require slightly different submission steps:

- **Code-alongs:** These also require code, but will guide you through what
  needs to be written. There are no tests to pass, but you will still need to go
  through forking, cloning, pushing your changes up, and submitting the repo to
  CodeGrade to be marked as complete.
- **Portfolio Projects:** For these assignments, you'll be building fully
  functional applications. Some guidelines and requirements will be provided,
  but it will be up to you to design and create your own app. These will
  eventually become the projects you showcase to potential employers! You will
  submit your projects in Canvas by submitting a link to your GitHub repo.
- **Blog Submissions:** Blogs are a required part of our Software Engineering
  courses. They help to develop your online presence and are a great way to
  reinforce the concepts you learn. You'll write your blog posts on a different
  platform, but submit links to them in Canvas.

## Submitting Projects and Blogs

For both portfolio projects and blog posts, you'll need to manually submit a
link to your work on Canvas. While viewing the assignment, you should see a
**Submit Assignment** button in the upper-right section of the page.

![submit assignment button](https://curriculum-content.s3.amazonaws.com/canvas-welcome/submit-assignment-canvas.png)

Clicking this button will bring you to the bottom of the page where you can
submit a URL link to your work.

![submit assignment form](https://curriculum-content.s3.amazonaws.com/canvas-welcome/submit-assignment-canvas-form.png)

Upon submission you should see confetti appear, indicating that your submission
has been accepted.

> **Note:** It is possible to submit lab and code-along assignments manually
> this way. However, the assignment will only be marked as **Submitted**, not
> **Complete**.

## Conclusion

Congratulations, you've completed your first assignment and submitted it to
CodeGrade! You now know how to work on and submit assignments going forward:

- Click the **OctoCat** button on the Canvas assignment, then the **Fork**
  button on the repo page.
- Once the assignment is forked, clone it down to your local machine.
- Run `npm install` to download the tools required to run the tests for the
  assignment.
- Run `npm test` to see what tests you have to pass. Run the command as many
  times as you like to check your work as you go.
- Complete any required work, then run the `git add`, `git commit`, and
  `git push` commands in the terminal to push your work up to GitHub. Before
  continuing to the next step, be sure to load your repo on GitHub and verify
  that the latest commit is shown.
- Submit your assignment through CodeGrade by selecting your GitHub account,
  then connecting the appropriate repo.

Equipped with this knowledge, you are now ready to tackle greater challenges!
