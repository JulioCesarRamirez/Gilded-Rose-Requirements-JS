Hello!

This README.md covers the requirements for completing our take-home challenge. We hope you enjoy it and please make sure to spend no more than 2 hours of your time tackling this. If you have questions at any point, be sure to email us at [takehomechallenge@unbounce.com](mailto:takehomechallenge@unbounce.com). Please note that the email address is not monitored outside of our regular working hours in Vancouver, Canada; so you may need to wait until the next business day for a response. The 2 hour time frame is a recommendation, but will not be strictly enforced. We trust you to stick to these guidelines. :)

## Goals
We want to get a sense of how you approach refactor code. Yes, there are *technical* skills we want to see, but we also want to get a sense of how you work "in real life".

Aim to spend roughly up to 2 hours on this exercise (remember to allow yourself some time to test, document, etc).

If you don't manage to get things working 100%, that's OK! Anything that you can provide to give us some insight into your thought process (for example, a README describing what you had trouble with, things you would improve, etc.) would be helpful.

Again, showing *how* you work is as important as getting to a working solution.

## Submission
Once you are finished, create a zip archive containing your solution and upload it back to the same Google drive folder we provided to you.

Your submission should include:
* The code! Also remember to include any files required to get your code running
* Any documentation (e.g. README) files you want us to have a look at
* A sample of the output from your program, if applicable
* (Optional) the Git history for your code

We'll have some developers review your assessment and if things look good, we'll contact you to set up an in-house interview with the team to review your code in-person.

## The Problem

**Based on the Gilded Rose Refactoring Kata - originally created by Emily Bache**

At Unbounce, we're looking at how work as a Software Developer when you are asked to refactor a piece of code. 

It is available in the language of your choice, as listed by the subfolders. Pick the language you are most comfortable working in.

You'll also need to read the ["Gilded Rose Requirements"](GildedRoseRequirements.txt) which explains what the code is for, before you start hacking away to improve the design.

You could write some unit tests yourself, using the requirements to identify suitable test cases. Bache provided a failing unit test in a popular test framework as a starting point for most languages.  Alternatively, use the "Text-Based" tests provided in this repository. (Read more about that in the next section)

Whichever testing approach you choose, the idea of the exercise is to do some deliberate practice, and improve your skills at designing test cases and refactoring. The idea is not to re-write the code from scratch, but rather to practice designing tests, taking small steps, running the tests often, and incrementally improving the design. 

Last but not least, we are always appreciative of a good README, a clean git history, in addition to some unit tests, but we understand it is a stretch.  We value quality over quantity. :)

#### Text-Based Approval Testing

This is a testing approach which is very useful when refactoring legacy code. Before you change the code, you run it, and gather the output of the code as a plain text file. You review the text, and if it correctly describes the behaviour as you understand it, you can "approve" it, and save it as a "Golden Master". Then after you change the code, you run it again, and compare the new output against the Golden Master. Any differences, and the test fails.

It's basically the same idea as "assertEquals(expected, actual)" in a unit test, except the text you are comparing is typically much longer, and the "expected" value is saved from actual output, rather than being defined in advance.

Typically a piece of legacy code may not produce suitable textual output from the start, so you may need to modify it before you can write your first text-based approval test. That could involve inserting log statements into the code, or just writing a "main" method that executes the code and prints out what the result is afterwards. It's this latter approach we are using here to test GildedRose.

The Text-Based tests in this repository are designed to be used with the tool "TextTest" (http://texttest.org). This tool helps you to organize and run text-based tests. There is more information in the README file in the "texttests" subdirectory.

### Get going quickly using Cyber-Dojo (OPTIONAL)

Optionally, Bache also set this kata up on [cyber-dojo](http://cyber-dojo.org) for several languages, so you can get going really quickly (only as applicable):

- [JUnit, Java](http://cyber-dojo.org/forker/fork/751DD02C4C?avatar=snake&tag=8)
- [C#](http://cyber-dojo.org/forker/fork/5C5AC766B0?avatar=koala&tag=3)
- [C++](http://cyber-dojo.org/forker/fork/AA86ECBCC9?avatar=rhino&tag=7)
- [Ruby](http://cyber-dojo.org/forker/fork/A8943EAF92?avatar=hippo&tag=9)
- [RSpec, Ruby](http://cyber-dojo.org/forker/fork/8E58B0AD16?avatar=raccoon&tag=3)
- [Python](http://cyber-dojo.org/forker/fork/297041AA7A?avatar=lion&tag=4)
- [Cucumber, Java](http://cyber-dojo.org/forker/fork/0F82D4BA89?avatar=gorilla&tag=48) - for this one I've also written some step definitions for you

We hope you enjoy the exercise!
