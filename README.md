# Complete Your First Software Engineering Assignment

## Learning Goals

- Understand the steps needed to complete an assignment and submit it in Canvas

## Introduction

During this course, you will work on various assignments as you learn to code.
All assignments will be interactive pieces of curriculum that require some work.
Some assignments may ask you to follow a set of instructions, while others will
ask you to figure out your own solution to pass specific tests. This lesson is
your first assignment!

All assignments are hosted on GitHub. In order to work on them, however, you
will need to complete work on your local machine. The general process is:

- Click the blue "Fork" button in Canvas
- Create a personal copy (a 'fork') of the assignment in GitHub
- Download your personal copy (referred to as 'cloning') to your computer
- Complete the required work
- Submit your completed work to Canvas

In this assignment, you'll learn the workflow that you will be using to complete
your assignments. You can follow along with the steps in the videos below, or
continue reading to get a more detailed explanation of the process of working on
lessons in Canvas.

## WSL: Completing Assignments Code Along

For Windows users, follow along with this video:

<iframe width="640" height="480" src="https://www.youtube.com/embed/wkM_3VZT2Nw" frameborder="0" allowfullscreen></iframe>

## MacOS: Completing Assignments Code Along

For Mac users, follow along with this video:

<iframe width="640" height="480" src="https://www.youtube.com/embed/otfhhI-5qtM" frameborder="0" allowfullscreen></iframe>

### A Quick Note on Organizing Work on Your Machine

Throughout this course, you will be downloading many assignments, so it is
important to keep your code organized. If you haven't yet, we recommend that you
go through the steps in
[the previous lesson](https://github.com/learn-co-curriculum/phase-0-organizing-work-on-your-computer)
to set up a directory where you can keep all of your work for this course.

> **Note:** The process we'll go through in this lesson will create sub-folders
> automatically. Whenever you are starting a new assignment, navigate back to
> your main `prework` folder (`cd ~/Development/code/prework`) before cloning
> the assignment to ensure these sub-folders don't get created
> _within each other_.

### Accessing GitHub and Forking

All the lessons in this course have a corresponding repository (repo) in GitHub.
On this page in Canvas, you should see three icons in the **upper right**
corner. The first says **Fork**. The second is a button that looks like a
large-headed cat (GitHub's 'Octocat' icon), which will open the lesson's GitHub
repo _without_ forking. The third is a flag, which you can use to submit an
_issue_ for the lesson (e.g., if you find a typo or other error).

One way to fork an assignment is to click the Octocat button to go to the
assignment's GitHub repo and fork directly from that page. (We'll go through
that process in a later lesson.) However, when completing your Canvas
assignments, you should use the **Fork** button. Doing so will automate several
steps for you and ensure that, when you complete a lab, it is registered as
complete in Canvas.

Go ahead and fork this assignment by clicking the **Fork** button at the top of
the page.

<figure>
  <img src="https://curriculum-content.s3.amazonaws.com/fork-link.png" alt="fork link" height="25px">
  <figcaption><sm>This is just a picture, the button is up at the top of the page.</sm></figcaption>
</figure>

Clicking the **Fork** button will do one of two things — it will either start
the forking process or bring you to a page where you select where to create your
fork. If you're prompted to choose, select your personal GitHub account. The
forking process will begin and may take a few moments. When complete, you will
be redirected to a new copy of the assignment that exists under _your_ GitHub
account. The `README.md` file in your copy of the repository contains these
instructions, so you can continue this lesson here or in GitHub.

Forking is a process which creates an exact copy of a collection of code and
files. Once you've created a fork on your own GitHub account, you will be able
to edit the files in the repository and write your own code solution without
interfering with the original copy.

Once your fork is ready, the next step is to download (**clone**) your new
repository to your local machine.

### Cloning to Your Local Machine

To download the repository for this lesson, make sure you're in your personal
fork on GitHub, then click the **Code** button. A pop-up will appear which shows
several options for cloning: **HTTPS**, **SSH**, and **GitHub CLI**. **Before
doing anything else**, be sure to switch to **SSH**. With **SSH** selected, you
should see what looks sort of like an email in the box below, starting with
`git@github.com:`. You should see your GitHub name after the `:`.

> **Aside:** Why SSH? If you followed the setup instructions, you have added
> your personal SSH key to GitHub. GitHub will store your personal copies of all
> the work you do in this course. Because you've added your SSH key, GitHub will
> know who you are when you send work from your local machine to GitHub to be
> stored. Using HTTPS instead would require you to sign in from your terminal
> using your log-in credentials each time you try to push your code to GitHub;
> it also may not work at all for some assignments.

From here, click the copy button.

![clone-repo](https://curriculum-content.s3.amazonaws.com/phase-0/completing-assignments/clone-repo.gif)

Now, open your terminal and navigate to where you'd like to download the
assignment (e.g. `cd ~/Development/code`). Type `git clone` and a space, then
paste in the copied SSH link from GitHub. It should look something like this:

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
name of the assignment will have been created. Change directory into this folder
to access the assignment files.

```console
$ cd phase-0-completing-assignments
```

Now type `code .` to open up a text editor window with access to all of the
assignment's files. These instructions are now also available on your local
machine in `README.md`.

> Note: the first time you open a directory in Visual Studio Code, you'll see a
> message asking "Do you trust the authors of the files in this folders?" This
> is a [security feature][workspace-trust] of Visual Studio Code. It's safe to
> choose "Yes", and we recommend selecting the "Trust the authors of all the
> files in the parent folder" option to prevent this warning from coming up
> every time you open a lesson. Just be sure to download your code from trusted
> sources!

[workspace-trust]: https://code.visualstudio.com/docs/editor/workspace-trust

### Completing an Assignment

Most assignments will have tests that check your work and provide immediate
feedback in the terminal. We'll walk through some examples in upcoming lessons.

This assignment has a single test: check to see if you've correctly cloned this
assignment to your local machine. If you've followed the steps above, you've
completed everything you need to do to pass the test; all that is left to do is
run it.

Run `learn test` in the terminal. This command will install all the lesson
dependencies and run the test. You should again see a flurry of text as
dependencies are installed. Then you'll see the results of your test. By cloning
this assignment down, you've already passed the test!

```console
This assignment
    ✓ has been correctly cloned to your local environment


  1 passing (5ms)
```

> **Note:** If you did not receive a passing test, or if your terminal produced
> some sort of error, walk through the steps in this lesson again and make sure
> you've followed each one. If you got a "command not found" error, go back to
> the [Configuring the Flatiron Student Portal](https://github.com/learn-co-curriculum/phase-0-configuring-the-flatiron-student-portal)
> lesson and go through the steps provided there to make sure the `learn-co` gem
> was installed correctly. If you're still receiving errors, we recommend going
> back through the local environment setup instructions again to ensure
> everything is set up properly.

Once the test is passing, you can head back to the assignment on Canvas. Refresh
the assignment page and you should see that Canvas now registers the assignment
as both **Submitted** and **Complete**. A URL to your fork of the assignment has
been submitted in Canvas, so you are ready to move on to the next lesson.

Each assignment will be different and will include instructions on what is
required to complete it. Some labs will have many tests. You can run
`learn test` as many times as you'd like while working to solve these labs. You
will submit your work to Canvas each time you do, but the assignment will be
marked **Incomplete** until all tests are passing.

### Your Work in GitHub

Every time you run `learn test`, all the changes you've made locally will be
automatically pushed to your GitHub fork of the repo. If you head back to your
repo after running `learn test`, you should see a message that a new branch,
`fis-wip`, has been created:

![pr_prompt](https://curriculum-content.s3.amazonaws.com/phase-0/configuring-the-student-portal/fis-wip.jpg)

**Note:** you should **disregard** the **Compare & pull request** button.

This branch contains the work you've done so far. If you ever want to go back to
a previous solution, go to your repository on GitHub and switch to the `fis-wip`
branch.

## Types of Assignments

For most assignments, you will go through the process we just walked through. In
our curriculum, these assignments are often referred to as **labs** — coding
lessons that include tests. There are a few other types of assignments, though,
that require slightly different submission steps:

- **Code-alongs:** These also require code, but will guide you through what
  needs to be written. There are no tests to pass, but you will still need to go
  through forking, cloning, and running `learn test`. You should see a message
  stating that no tests were found, but if you check the assignment in Canvas,
  you should see it is marked as **Complete**.
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

Congratulations! You've completed your first assignment using the `learn-co`
gem! You now know how to work on and submit assignments going forward:

- Click the **Fork** button on the Canvas assignment
- Once the assignment is forked, clone it down to your local machine
- Complete any required work, then run `learn test`
- When all tests pass, the assignment will be submitted to Canvas and marked as
  **Complete**
- Your work will also be pushed to GitHub and will be available on the `fis-wip`
  branch

Equipped with this knowledge, you are now ready to tackle greater challenges!
