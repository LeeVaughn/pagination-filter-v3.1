## Project 2 - Pagination

This Walkthrough is a step by step guide to the different sections in the Instruction tab for this project. It is meant to be a supplemental resource. For best results, you should try to build out the project on your own *before* consulting the Walkthrough. Work through each step in the Instruction tab on your own. If you get stuck, check out the resources in the Review Your Resources section of the Instructions like the [Study Guide](https://teamtreehouse.com/admin/instructions/4963), Project Warm-Ups, and Google. Then if you are still unable to make progress, reference the Walkthrough for additional details.

---


## Before You Start

Building a project can be a challenging task but it is made easier by proper planning and organization. Before you write your first line of code, be sure you have completed all of the steps on the checklist below.

<input type="checkbox"> Complete all Unit 2 curriculum.

<input type="checkbox"> Create a GitHub repository for your project.

<input type="checkbox"> Download the starter files for the project and push them to your GitHub repo. Review these files to familiarize yourself with them.

<input type="checkbox"> Review the steps in the Instruction tab for the project. Consider what each step does and how the different parts of the application work together.

---


## Instruction Walkthrough

### 1. Review Your Resources

You will find a list of resources on the right side of the project page, just below the “**Download files**” section. Be sure to review these resources and become familiar with them before beginning the project.

---


### 2. Getting Started with the Project Files

If you haven't already, open up the project in your text editor. Now open the project in Chrome and open up the Dev Tools console. If you don't remember how to open the project in a browser, check out this lesson for a refresher: [Preview Files in a Browser](https://teamtreehouse.com/library/preview-files-in-a-browser).

Now return to your text editor and check out the `data.json` file. This file contains a `data` variable, which is an array of objects. Each of these objects contains information on a student. We will be using this data to display students and create pagination buttons.

Now access the `script.js` file in your text editor. Let's start by using the `console.log()` method to log out the `data` variable. This snippet of code should look like `console.log(data);`. Now return to your browser, refresh the page, and take a look at what logs out to the Dev Tools console. You should see an array containing 42 objects.

Now that you know how to access the student information using the `data` variable, let's start building our application.

For best results, we are going to take it one small step at a time, testing our code as we go.

---


### 3. Display a “page”

We are going to start by creating a function that will display a page of ten students. We will name this function `showPage`. This function will take two parameters: `list`, and `page`. The `list` parameter will represent the array student data we are working with and `page` parameter will be the page number that we want to show.

This is what your function should look like, including placeholder comments for the functionality that we will be adding later in this step.

```javascript
function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page

  // select the element with a class of `student-list` and assign it to a variable

  // set the innerHTML property of the variable you just created to an empty string

  // loop over the length of the `list` parameter
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert or append the above elements
}
```

<!--TODO check if the br element is needed for formatting in admin -->
<div class="secondary box">
  <strong>Pro Tip:</strong> It is a good idea to regularly test your code as you are writing it. Using `console.log()` statements is a great way to do this. Before we go any farther, lets test our `showPage` function. First, add <code>console.log(list);</code> and <code>console.log(page);</code> inside of the function. Then call the function by adding <code>showPage(data, 1);</code> just below where you created the function. Now if you open the Dev Tools console you should see an array with 42 objects and the number "1" logged out. Once you confirm that your function is working you can remove the two <code>console.log</code> statements but leave the call of the <code>showPage</code> function as that will come in handy later.
</div>
<br>

Now create two variables, `startIndex` and `endIndex`, which will calculate the index for the first and last student to display on the page. Use the `page` parameter and some basic math to calculate the value of these variables like so:
  * startIndex = (`page` parameter * items per page) - items per page
  * endIndex = `page` parameter * items per page

<!--TODO check if the br element is needed for formatting in admin -->
<div class="secondary box">
  <strong>Pro Tip:</strong> Remember, JavaScript is zero-indexed so the index of the first student object in `data` array would be 0. Before moving on, it would be a good idea to use <code>console.log()</code> statements to make sure these new variables are working as expected.
</div>
<br>

Next use the [querySelector method](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to select the `UL` element with a class of `student-list` and assign it to a new variable named `studentList`. This is the element we will be adding our student data to.

Now set the [innerHTML property](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) of the `studentList` variable to an empty string. This will remove any existing students that might have been displayed previously.

Next we will create a for loop that will run once for each object in the `list` parameter. We can do this by using the `length` property of `list`.

Inside the loop, create a conditional statement that checks if `i` is greater than or equal to the `startIndex` variable **and** less than the `endIndex` variable. These are the students we want to display on the page.

If that condition is met, we will create the DOM elements needed to display that student, which we will assign to a variable named `studentItem`. We will create these elements using a template literal. You will use bracket notation to access the student object at a certain index and dot notation to access the specific properties of that student object. The end result should be elements that look like this:
```html
  <li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
      <h3>Ethel Dean</h3>
      <span class="email">ethel.dean@example.com</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined 12-15-2005</span>
    </div>
  </li>
```
Once the template literal is created, we want to insert it into the DOM on the `studentList` variable using the [insertAdjacentHTML method](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) and `beforeend` position.

Now that we have finished the `showPage` function we want to test it to make sure everything is working as expected before we move on. To do this, call the `showPage` function and pass `data` and `1` as arguments, which you might already be doing if you tested your code previously. Refresh the application in the browser and you should see the first 10 students displayed on the page.

---


### 4. Add Pagination Buttons

---


### 5. Call Functions

---


### 6. Finishing the Project

---


### 7. Before Submitting the Project

---
