# Complete Your First Software Engineering Assignment

## Introduction

During this course, you will work on various assignments as you learn to code.
All assignments will be interactive pieces of curriculum that require some work.
Some assignments may ask you to follow a set of instructions, while others will
ask you to figure out your own solution to pass specific tests.

All assignments are hosted on GitHub. In order to work on them, however, you
will need to complete work on your local machine. The general process for all
assignments will be:

- Go to the assignment's GitHub page
- Create a personal copy (a 'fork') of the assignment
- Download your personal copy (referred to as 'cloning') to your environment
- Complete the required work
- Upload the work you've done to your personal copy of the assignment on GitHub

For this lesson, we'll do a quick walkthrough of these steps so you will know
what to do in future assignments. In fact, this lesson is the first assignment
you'll be completing on your own!

### A Quick Note on Organizing Work on Your Machine

Through this course, you will be downloading many assignments, so it is
important to take a moment now to think about how you'll organize this work on
your computer. You are welcome to do what you like, but we recommend setting up
a directory where you can keep all of your work for this course.

- Go to your terminal and navigate to your home directory by typing `cd ~`
- Create a `Development` folder by typing `mkdir Development` (if you're a mac
  user, this folder already exists)
- Navigate into this folder with `cd Development`
- In here, create a `code` folder with `mkdir code`
- Navigate into this folder with `cd code`

You'll be going through multiple phases in this course, so it may also be
helpful to go one step further and create folders for phases 0 through 5 within
`code`.

Having a specific place for your work will make it easier to find if you ever
need to look back at an earlier project. It'll also keep the rest of your
computer's folders clear of random code.

> **Note:** The process we'll go through in this lesson will create sub-folders
> automatically. Whenever you are starting a new assignment, navigate back to
> your main `code` folder (`cd ~/Development/code`) to ensure these sub-folders
> don't get created _within each other_.

### Accessing GitHub and Forking

All the lessons in this course have a corresponding repository in GitHub. In
order to fork this assignment, you'll first need to go to that repository. On
this page in Canvas, you should see three icons in the **upper right** corner of
the assignment's text. The first says **Fork**. The second is a button that
looks like a large headed cat. The third is a flag. All three buttons will bring
you to GitHub, but we only need to deal with the **Fork** button. 

<figure>
  <img src="https://curriculum-content.s3.amazonaws.com/fork-link.png" alt="fork link" height="25px">
  <figcaption><sm>This is just a picture, the button is up at the top of the page</sm></figcaption>
</figure>

Clicking the **Fork** button will do one of two things - it will either start
the forking process or bring you to a page where you select where you to create
your fork. If you're prompted to choose, select your personal GitHub account.
The forking process will begin and may take a few moments. When complete, you
will be redirected to a new copy of the assignment that exists under _your_
GitHub account.

Forking is a process where an exact copy is made of a collection of code and
files. Once you've created a fork on your own GitHub account, you will be able
to edit the files in the repository and write your own code solution without
interfering with the original copy.

Go ahead and fork this assignment. The `README.md` file in the repository
contains these instructions, so you can continue here or in GitHub.

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
email, starting with `git@github.com:`.

![clone with ssh option](https://curriculum-content.s3.amazonaws.com/canvas-welcome/clone-with-ssh.png)

> **Aside:** Why SSH? If you followed the setup instructions, you have added
> your personal SSH key to GitHub. GitHub will store your personal copies of all
> the work you do in this course. Because you've added your SSH key, GitHub will
> know who you are when you send work from your local machine to GitHub to be
> stored. HTTPS may not work for all assignments and will require you to sign-in
> from your terminal.

From here, click the clipboard icon.

![copy to clipboard button](https://curriculum-content.s3.amazonaws.com/copy-clone-command-button.png)

Now, open to your terminal and navigate to where you'd like to download the
assignment (e.g. `cd ~/Development/code`).

Once you've navigated to where you'd like to store assignments, type `git clone`
then paste in the copied text from GitHub. It should look something like this:

```bash
git clone git@github.com:<your-user-name>/welcome-completing-assignments.git
```

Press enter, and you should see a flurry of terminal activity. Once the terminal
gives you control to type again, a new folder with the GitHub name of the
assignment will be present. Change directory into this folder to access the
assignment files.

```sh
cd welcome-completing-assignments
```

Now, if you've set up VS Code, type `code .` to open up a text editor window
with access to all of the assignment's files. The instructions are now also
available on your local machine in `README.md`.

### Completing an Assignment

Most assignments will have tests that check your work and provide immediate
feedback in the terminal. We'll walk through some examples in upcoming lessons.

This assignment has a single test: check to see if you've correctly cloned this
assignment to your local machine. If you've followed the steps above, you've
completed everything you need to do to pass the test, all that is left to do is
run it.

To run an assignment's tests, first you'll need to set up the tools used to run
the test. Fortunately, all the tools required are included as part of the
assignment, so all you need to do is type the following:

```sh
npm install
```

This command will again cause a flurry of activity in your terminal. You may see
some warnings in the mix of output, but that is normal. After a few moments, you
should see some messaging about packages being added and regain control of the
command-line. You're now ready to run this assignment's tests. Type the
following to do so:

```sh
npm test
```

You should see the test results print out. For this assignment, they'll look
like this:

```sh
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

When all tests are passing, the last step is to upload your work. To do this, we
run three commands in the terminal. First, type the following, then press
`<Enter>`:

```sh
git add .
```

This 'stages' any work you've done (changes to your local copy of an assignment)
so it will be ready to upload.

Second, we create a record of these changes that includes a message describing
the change. Type the following, then press `<Enter>`:

```sh
git commit -m 'Done with assignment'
```

This is known as creating a 'commit.' A commit preserves all _staged_ changes
from the previous command. Any work you've done is now recorded as part of your
copy of the assignment. This copy, however, is still only on your local
environment.

To upload your completed assignment, there is one final command to run. Type the
following, then press `<Enter>`:

```sh
git push
```

This command sends the changes you've made to GitHub. If you revisit your
personal copy of the assignment on GitHub, the commit you just created (with the
message 'Done with assignment') will be the most recent commit on the
assignment.

Each assignment will be slightly different and will include instructions on what
is required to complete it. Depending on the testing tools in an assignment, the
specific commands may change. For this lesson, we ran `npm install` and `npm
test`; `npm install` to set up the necessary tools, and `npm test` run the
actual test.

You'll also see some assignments that ask you to run `bundle` and `rspec` -
`bundle`, like `npm install`, will set up necessary tools and `rspec` will run
the tests. We'll include instructions indicating which commands to run. In all
cases, you can run the tests as many times as you would like. Some labs will
have many tests and may require running the tests many times while you solve
them.

## Uploading Your Work To Canvas

To register completion of an assignment in Canvas, you must submit a link to
your GitHub repository.

1) After pushing your code up following the previous steps, go to your
   repository and copy the URL link.

2) In Canvas, navigate to the assignment you've been working on. In the upper
   right corner of the assignment, you should see a **Submit Assignment**
   button. You'll be directed to the bottom of the page, where you can provide a
   URL as your submission.

3) Paste in your repository's GitHub URL and click **Submit**.

Canvas will indicate a successful submission and refresh the page. In the
Modules view of your course, you should now see a checkmark next to the
assignment, indicating a successful submission.

## Review

Let's quickly review the process for completing assignments:

1) When viewing an assignment here, click the **Octocat** GitHub icon in the
   upper right corner of an assignment to navigate to the GitHub copy.

2) Create a personal fork of the GitHub assignment by clicking the **Fork**
   button.

3) Once forked to your personal account, start the **cloning** for your
   assignment. Do this by clicking the **Code** button in GitHub, choosing
   **SSH**, then clicking the **clipboard** icon to copy the assignment's GitHub
   info.

4) Go to your local environment's terminal and navigate to where you'd like to
   store your assignment locally.

5) Type `git clone`, then paste in what you copied from GitHub. This will
   create a copy on your local machine.

6) Navigate into the new cloned assignment and complete any work required

7) Install testing tools with `npm install` (or `bundle` if tests use Ruby)

8) Run tests with `npm test` (or `rspec` for Ruby)

9) If all tests are passing, stage and commit your solution with the following
   commands

  ```sh
  git add .
  git commit -m 'Done with assignment'
  ```
  
10) Push your work to your personal fork on GitHub with the `git push` command

11) Go to your repository in GitHub and copy the URL

12) Go to the assignment in Canvas and click **Submit Assignment**

13) Paste in your GitHub URL as your submission

## Conclusion

You've completed your first assignment! You now know how to work on and submit
assignments. We'll remind you of this process in upcoming lessons, but we
recommend bookmarking this lesson so you can refer back here in case you forget.
Equipped with this knowledge, you are now ready to tackle greater challenges!

[github to learn]: https://help.learn.co/en/articles/493055-connecting-github-with-learn
