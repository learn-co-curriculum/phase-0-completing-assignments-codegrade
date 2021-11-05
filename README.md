# Complete Your First Software Engineering Assignment

## Learning Goals

- Understand the steps needed to work on an assignment in GitHub and Canvas

## Introduction

During this course, you will work on various assignments as you learn to code.
All assignments will be interactive pieces of curriculum that require some work.
Some assignments may ask you to follow a set of instructions, while others will
ask you to figure out your own solution to pass specific tests. This lesson is
your first assignment!

All assignments are hosted on GitHub. In order to work on them, however, you
will need to complete work on your local machine. The general process is:

- Go to the assignment's GitHub page
- Create a personal copy (a 'fork') of the assignment
- Download your personal copy (referred to as 'cloning') to your environment
- Complete the required work
- Upload the work you've done to your personal copy of the assignment on GitHub

For this assignment, we'll do a quick walkthrough of these steps so you will
know what to do in future assignments.

You can follow along with the steps in the videos below, or continue reading to
get a more detailed explanation of the process of working on lessons in Canvas.

## WSL: Completing Assignments Code Along

For Windows users, follow along with this video:

<iframe width="640" height="480" src="https://www.youtube.com/embed/mFgvCZ7iCQc" frameborder="0" allowfullscreen></iframe>

## MacOS: Completing Assignments Code Along

For Mac users, follow along with this video:

<iframe width="640" height="480" src="https://www.youtube.com/embed/uzphQmL7a0c" frameborder="0" allowfullscreen></iframe>

### A Quick Note on Organizing Work on Your Machine

Through this course, you will be downloading many assignments, so it is
important to keep your code organized. You are welcome to do what you like, but
we recommend setting up a directory where you can keep all of your work for this
course.

You can follow along with the steps in
[this lesson](https://github.com/learn-co-curriculum/phase-0-organizing-work-on-your-computer)
to set up your directory structure.

> **Note:** The process we'll go through in this lesson will create sub-folders
> automatically. Whenever you are starting a new assignment, navigate back to
> your main `prework` folder (`cd ~/Development/prework`) to ensure these
> sub-folders don't get created _within each other_.

### Accessing GitHub and Forking

All the lessons in this course have a corresponding repository in GitHub. On
this page in Canvas, you should see three icons in the **upper right** corner.
The first says **Fork**. The second is a button that looks like a large-headed
cat (GitHub's 'Octocat' icon); this button will open the lesson's GitHub repo
_without_ forking. The third is a flag, which you can use to submit an _issue_
for the lesson (e.g., if you find a typo or other error).

One way to fork an assignment is to click the Octocat button to go to the
assignment's GitHub repo and fork directly from that page. (We'll go through
that process in a later lesson.) However, the easiest way to fork the assignment
is by clicking the **Fork** button. Either method will work, but we recommend
you use the **Fork** button because it will automate some assignment steps for
you when you get a bit farther along in the curriculum.

<figure>
  <img src="https://curriculum-content.s3.amazonaws.com/fork-link.png" alt="fork link" height="25px">
  <figcaption><sm>This is just a picture, the button is up at the top of the page.</sm></figcaption>
</figure>

Clicking the **Fork** button will do one of two things — it will either start
the forking process or bring you to a page where you select where to create your
fork. If you're prompted to choose, select your personal GitHub account. The
forking process will begin and may take a few moments. When complete, you will
be redirected to a new copy of the assignment that exists under _your_ GitHub
account.

Forking is a process which creates an exact copy of a collection of code and
files. Once you've created a fork on your own GitHub account, you will be able
to edit the files in the repository and write your own code solution without
interfering with the original copy.

Go ahead and fork this assignment. The `README.md` file in the repository
contains these instructions, so you can continue this lesson here or in GitHub.

With a fork created, the next step is to download your new repository to your
local machine.

### Cloning to Your Local Machine

To download the repository for this lesson, on your personal GitHub fork, first
click the **Code** button. A pop-up will appear that says **Clone with HTTPS**.
You'll see a URL provided starting with `https://...`.

![GitHub code button drop-down](https://curriculum-content.s3.amazonaws.com/git-clone-using-ssh.png)

**Before doing anything else**, make sure to switch from **HTTPS** to **SSH** by
clicking the **Use SSH** link. When clicked, the pop-up will change to display
**Clone with SSH**. Instead of a URL, you'll see what sort of looks like an
email, starting with `git@github.com:`. You should see your GitHub name after
the `:`.

![clone with ssh option](https://curriculum-content.s3.amazonaws.com/canvas-welcome/clone-with-ssh.png)

> **Aside:** Why SSH? If you followed the setup instructions, you have added
> your personal SSH key to GitHub. GitHub will store your personal copies of all
> the work you do in this course. Because you've added your SSH key, GitHub will
> know who you are when you send work from your local machine to GitHub to be
> stored. Using HTTPS instead would require you to sign in from your terminal
> using your log-in credentials each time you try to push your code to GitHub;
> it also may not work at all for some assignments.

From here, click the clipboard icon.

![copy to clipboard button](https://curriculum-content.s3.amazonaws.com/copy-clone-command-button.png)

Now, open your terminal and navigate to where you'd like to download the
assignment (e.g. `cd ~/Development/code`). Type `git clone` then paste in the
copied SSH link from GitHub. It should look something like this:

```console
$ git clone git@github.com:<your-user-name>/phase-0-completing-assignments.git
```

Press enter, and you should see a flurry of terminal activity.

> **Troubleshooting**: If you are a Mac user and you see the following message:
>
> `xcrun: error: invalid active developer path`
>
> You need to install the Xcode Command Line Tools. Run the following command to
> install them:
>
> ```console
> $ xcode-select --install
> ```
>
> And follow the prompts. Then try running the `git clone` command again. See
> [this Stack Overflow post](https://stackoverflow.com/a/52522566) for more
> details. Note that you may need to re-install `xcode-select` any time you
> update your Mac OS version.

Once the terminal gives you control to type again, a new folder with the GitHub
name of the assignment will be present. Change directory into this folder to
access the assignment files.

```console
$ cd phase-0-completing-assignments
```

Now, if you've set up VS Code, type `code .` to open up a text editor window
with access to all of the assignment's files. These instructions are now also
available on your local machine in `README.md`.

> Note: the first time you open a directory in Visual Studio Code, you'll see a
> message asking "Do you trust the authors of the files in this folders?" This
> is a [security feature][workspace trust] of Visual Studio Code. It's safe to
> choose "Yes", and we recommend selecting the "Trust the authors of all the
> files in the parent folder" option to prevent this warning from coming up
> every time you open a lesson. Just be sure to download your code from trusted
> sources!

[workspace trust]: https://code.visualstudio.com/docs/editor/workspace-trust

### Completing an Assignment

Most assignments will have tests that check your work and provide immediate
feedback in the terminal. We'll walk through some examples in upcoming lessons.

This assignment has a single test: check to see if you've correctly cloned this
assignment to your local machine. If you've followed the steps above, you've
completed everything you need to do to pass the test; all that is left to do is
run it.

To run an assignment's tests, first you'll need to set up the tools used to run
the test. Fortunately, all the tools required are included as part of the
assignment, so all you need to do is type the following:

```console
$ npm install
```

This command will again cause a flurry of activity in your terminal. You may see
some warnings in the mix of output, but that is normal. After a few moments, you
should see some messaging about packages being added and regain control of the
command line. You're now ready to run this assignment's tests. Type the
following to do so:

```console
$ npm test
```

You should see the test results print out. For this assignment, they'll look
like this:

```console
This assignment
    ✓ has been correctly cloned to your local environment


  1 passing (5ms)
```

Congratulations! You've passed this assignment's test.

> **Note:** If you did not receive a passing test, or if your terminal produced
> some sort of error, walk through the steps in this lesson again and make sure
> you've followed each one. If you're still receiving errors, we recommend going
> back through the local environment setup instructions again to ensure
> everything is set up properly.

## Uploading Your Work to GitHub

When all tests are passing, the next step is to upload your work. To do this, we
run three commands in the terminal. First, type the following, then press
`<Enter>`:

```console
$ git add .
```

This 'stages' any work you've done (changes to your local copy of an assignment)
so it will be ready to upload.

Second, we create a record of these changes that includes a message describing
the change. Type the following, then press `<Enter>`:

```console
$ git commit -m 'Done with assignment'
```

This is known as creating a 'commit.' A commit preserves all _staged_ changes
from the previous command. Any work you've done is now recorded as part of your
copy of the assignment. This copy, however, is still only on your local
environment.

To upload your completed assignment, there is one final command to run. Type the
following, then press `<Enter>`:

```console
$ git push
```

This command sends the changes you've made to GitHub. If you revisit your
_personal_ copy of the assignment on GitHub, the commit you just created (with
the message 'Done with assignment') will be the most recent commit on the
assignment.

Each assignment will be slightly different and will include instructions on what
is required to complete it. Depending on the testing tools in an assignment, the
specific commands may change. For this lesson, we ran `npm install` and
`npm test`: `npm install` to set up the necessary tools, and `npm test` to run
the actual test.

You'll also see some assignments that ask you to run `bundle` and `rspec` —
`bundle`, like `npm install`, will set up necessary tools and `rspec` will run
the tests. We'll include instructions indicating which commands to run. In all
cases, you can run the tests as many times as you would like. Some labs will
have many tests and may require running the tests many times while you solve
them.

## Uploading Your Work To Canvas

To register completion of an assignment in Canvas, you must submit a link to
your GitHub repository.

1. After pushing your code up following the previous steps, go to your
   repository and copy the URL link in the browser's URL bar.

2. In Canvas, navigate to the assignment you've been working on. In the upper
   right corner of the assignment, you should see a **Submit Assignment** (or
   **Start Assignment**) button. You'll be directed to the bottom of the page,
   where you can provide a URL as your submission.

3. Paste in your repository's GitHub URL and click **Submit**.

Canvas will indicate a successful submission and refresh the page. In the
Modules view of your course, you should now see a checkmark next to the
assignment, indicating a successful submission.

## Review

Let's quickly review the process for completing assignments:

**1.** Create a personal fork of the GitHub assignment by clicking the **Fork**
button in the upper right corner of the assignment on Canvas.

**2.** Once forked to your personal account, start the **cloning** for your
assignment. Do this by clicking the **Code** button in GitHub, choosing **SSH**,
then clicking the **clipboard** icon to copy the assignment's GitHub info.

**3.** Go to your local environment's terminal and navigate to where you'd like
to store your assignment locally.

**4.** Type `git clone`, then paste in what you copied from GitHub. This will
create a copy on your local machine.

**5.** Navigate into the new cloned assignment and complete any work required

**6.** Install testing tools with `npm install` (or `bundle` if tests use Ruby)

**7.** Run tests with `npm test` (or `rspec` for Ruby)

**8.** If all tests are passing, stage and commit your solution with the
following commands

```console
$ git add .
$ git commit -m 'Done with assignment'
```

**9.** Push your work to your personal fork on GitHub with the `git push`
command

**10.** Go to your repository in GitHub and copy the URL. Note, this should be
copied from the browser's address bar, and should start with
`https://github.com/`

**11.** Go to the assignment in Canvas and click **Submit Assignment** (or
**Start Assignment**)

**12.** Paste in your GitHub URL as your submission

## Conclusion

Congratulations! You've completed your first assignment! You now know how to
work on and submit assignments. We'll remind you of this process in upcoming
lessons, but we recommend bookmarking this lesson so you can refer back here in
case you forget. Equipped with this knowledge, you are now ready to tackle
greater challenges!
