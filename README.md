# Project Instructions

## Prerequisites ("Before You Start")
<!-- step -->
#### Review the policy on [Reusing Code in a Techdegree project](https://teamtreehouse.com/library/reusing-code-in-a-techdegree-project).


<!-- step -->
#### GitHub

* Create a new repo for this project on [GitHub](https://github.com/).
* Create a `README.md` file for your repo. Add details about your project to the `README`, for example:
  * A description of the project in your own words.
  * The skills, techniques, and process used to complete the project.
  * If you’ve attempted to earn an “Exceeds Expectations” grade, list the “Extra Credit” features you added.
* If you need a reminder on how to use GitHub and GitHub Desktop app, please refer back to the workshop, [Share Your Projects with GitHub Desktop](https://teamtreehouse.com/library/share-your-techdegree-projects-with-github-desktop).


<!-- step -->
#### Download the Project Files

* You are provided with several starter files:
  * An `index.html` file contains the initial HTML markup.  ** Do not make any changes to this file.**
  * Two CSS files, `design.css` and `reset.css` inside the `css` folder. These files contain specific styling required to make the pagination features and list look good.
  * A `script.js` file in the `js` folder. You'll add code to this file. We've provided code comments to get you started.
  * A `data.js` file, which contains the data you will use for this project. This file includes a `data` variable, which you can use in the `script.js` file to access the student data.
  <!-- TODO the section below will still need to be updated once the starter files are set up -->
  * Example HTML files in the `examples` folder:
    * The `example-exceeds.html` and `example-meets.html` files demonstrate what a meets and exceeds project will look like in the browser.
    * The `44students.html` and `64 students.html` files allow you to test your solution against lists of varying length.


<!-- step -->
#### Follow the Instructions Below

* It can be a lot easier to write a program, if you break it into smaller, more manageable parts that you program one at a time. The instructions below divide the project into individual sections, which are further broken up into even smaller steps. Follow along, one step at a time, testing your code as you go.
  
***

## Instructions
<!-- step -->
#### Seeking Assistance

* If you're having trouble with a bug or moving forward with the project:  
  * Take a look at this great study guide: [List Pagination and Filter Study Guide](https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing)
  * Review the unit material again.
  * Use your Google skills to find the information you need. If you aren't finding the information you need, try rephrasing your search.
  * Reach out to your Slack team.
    * **Pro Tip:** A good “Help!” post in Slack begins with a friendly greeting, details any important info related to the problem you’re having, what you’ve tried so far to fix it, and most importantly, a link to your GitHub repository.


<!-- step -->
#### No Snippets, Plugins or Libraries, including jQuery

* Avoid using any libraries, plugins, or code snippets for any aspect of this project. All of the code for this project should be your own and in plain JavaScript, often referred to as “Vanilla JavaScript”.


<!-- step -->
#### Create your Global Variables

<!-- ? Not sure we need this section as the project can be completed without any global variables -->
* This project can be completed with just two global variables
  * Create a variable to store the student `list item` elements in the student list.  
    * **Pro Tip:** Log out the variable storing the list to ensure it equals the list of `li` items and not the container of the `li` elements.
  * Create a variable to store the number of items to show on each “page”, which for this project, is 10.


<!-- step -->
#### Display a “page”

* Create a function that will show a “page” of ten students.
* This function should have two parameters:
  * A `list` parameter to represent student data that will be passed as an argument when the function is called.
  * A `page` parameter to represent the page number that will be passed as an argument when the function is called.
* Inside the function:
  * Create two variables to store the start index and the end index of the list items to be displayed on the given page. To make this function dynamic, use the `page` parameter and some basic math to calculate the value of these variables like so:
    * Start Index = (`page` parameter * items per page) - items per page
    * End Index = `page` parameter * items per page
  * Select the `UL` element with a class of `student-list` and assign its value to a variable.
  * Use the innerHTML property set the HTML content of the `student-list` variable you just created to an empty string. This will remove any students that might have previously been displayed.
  * Loop over the `list` parameter.
  * Inside the loop:
    * Write a conditional statement that checks if the current index (`i`) is greater than or equal to the `start index` variable **and** less than the `end index` variable.
    * Inside that conditional:
      * Create the DOM elements needed to display the information for each matching student as you iterate over the `list` parameter. See lines 36-45 in the `index.html` file for an example of what the final version of these elements should look like.
      * **Pro Tip** Because you will need to create multiple elements to display the information for each student, you might consider using a template literal for this.
      <!-- TODO add link to the docs for insertAdjacentHTML in Resources -->
    * Insert the elements you have created to the `student-list` variable you created earlier. The insertAdjacentHTML method and `beforeend` option works well for this.
* **Pro Tip:** If you call this function in the early stages of building the application, you’ll be able to use console.log statements and the Chrome Dev Tools console to test and check that variables, values and indexes are working the way you expect. Don't forget to use the `data` variable and page number as arguments when you call the function!
* **Project Warm Ups:** Creating and using functions, and selecting and manipulating sections of a list can feel confusing at first. For some helpful practice, check out the [List Section Selection](https://teamtreehouse.com/library/fsjs-project-warm-up-list-section-selection) and [What's the Deal with Functions](https://teamtreehouse.com/library/fsjs-project-warm-up-whats-the-deal-with-functions) project warm-ups.


<!-- step -->
#### Add Pagination Buttons

* Create a function that creates and appends functioning pagination buttons.
* This function should accept a single `list` parameter to represent student data that will be passed as an argument when the function is called.
* Inside the function:
  * Create a variable to store the value of the number of pagination buttons needed. You can calculate this using the length of the `list` parameter. Remember, you will want to display 10 students per page.
  * Select the `UL` element with a class of `link-list` and assign its value to a variable.
  * Use the innerHTML property set the HTML content of the `link-list` variable you just created to an empty string. This will remove any pagination buttons that might have previously been displayed.
  * Loop over the variable for the number of pages needed that you created earlier.
  * Inside the loop:
    * Create the DOM elements needed to display the pagination button as you iterate over the number of pages. See the lines 58-63 in the `index.html` file for an example of what these elements should look like.
    * Insert the elements you have created to the `link-list` variable you created earlier. The insertAdjacentHTML method and `beforeend` option works well for this.
  * Select the first pagination button and give it a class name of `active`.
  * Create an event listener to listen for clicks on the `link-list` variable that you created earlier.
  * Inside this event listener:
    * If the click target is a pagination button:
      * Remove the `active` class from any other pagination button.
      * Add the `active` class to the pagination button that was just clicked.
      * Call the `showPage` function passing the `list` parameter and the page number to display as arguments.
        * **Pro Tip:** The text content of the clicked pagination button will contain the page number you want to display.
* **Pro Tip:** If you call this function in the early stages of building the application, you’ll be able to use console.log statements and the Chrome Dev Tools console to test and check that variables, event listener, and other functionality is working the way you expect. Don't forget to use the `data` variable as an argument when you call the function!
* **Project Warm Ups:** DOM manipulation and creating pagination buttons can be tricky at first. For some helpful practice, check out the [Fun DOM Manipulation](https://teamtreehouse.com/library/fsjs-project-warm-up-fun-dom-manipulation) and [Where's the Action](https://teamtreehouse.com/library/fsjs-project-warm-up-wheres-the-action) project warm-ups.


<!-- step -->
#### Call Functions

* Call the first function you created to display a “page”, passing in the `data` variable and `1` as arguments.
* Call the second function you created to add pagination buttons, passing the `data` variable as an argument.
* **Note:** You may have already called these functions in your app if you were testing things as you went along.


<!-- step -->
#### Finishing the Project

The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.

* **Code comments** - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code and what it does.
* **Code readability** - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation is consistent and in keeping with best practices. 
* **Cross browser consistency** - To pass, your project only needs to work in Chrome but it’s common for developers to test their projects in multiple browsers to know how they will perform out in the wild.
* **Quality Assurance Testing** -  This is a key step in the development process.  
  * Open and run your app.
  * Open the Chrome DevTools console.
  * Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.


<!-- step -->
#### Before Submitting the Project

Before you submit your project, check off each item in the project submissions checklist below.

<input type="checkbox"> I have read all of the project instructions, including the “**[How you’ll be graded](https://teamtreehouse.com/projects/list-pagination-and-filtering#how-you-ll-be-graded)**” section for this project.

<input type="checkbox"> I understand what is needed to receive a Meets or Exceeds Expectations grade and asked for clarification about grading requirements on Slack if necessary.

<input type="checkbox"> My GitHub repo for this project contains only this project, only files needed to make this project run, and a `README.md` file providing details about my project.

<input type="checkbox"> I wrote all of my own code for this project. Any code included in my project that I did not write myself is appropriately attributed to its source.

<input type="checkbox"> I have completed all of the project requirements and believe the project is ready to receive a Meets or Exceeds Expectations grade.

<input type="checkbox"> I have received a preliminary review of my project in Slack to catch anything I might have missed.

<input type="checkbox"> I understand that in order to receive an Exceeds Expectations grade, I must complete all extra credit items.
  
<input type="checkbox"> I understand that what I submit is what will get reviewed, and that when I submit my project, any changes I make after the submission won't be seen by my reviewer.


## Extra Credit
<!-- step -->
#### Add a Search Component

* Dynamically create and add a search bar. Avoid making any changes in the `index.html` file and instead use your JavaScript skills for this. Check out lines 21-24 of the `index.html` file for an example of what the elements for the search feature should look like.


<!-- step -->
#### Add Functionality to the Search Component

* When the "Search" icon is clicked, the student data is filtered so that only students whose name matches the search query are shown. For example, if the name `Bill` is typed into the search field, only students with "Bill" in the name should be shown. If the letter `S` is typed in, only students with an "S" in the name should be shown.
* **Pro Tip:** To improve the functionality and improve the user experience, consider adding a keyup event listener to the search input so that the list filters in real time as the user types. This should be in addition to making the search button clickable since pasting text into the search bar might not trigger the keyup event.
<!--* step number below will need to be changed if we remove global variable section -->
* **Pro Tip:** Remember you have already created a function to show 10 students per page in Step 4. All you really need to do here is create a new student list based on the search matches and then use that new list as an argument when calling the already existing function to display the students.
* **Project Warm Up:** Configuring a search feature might seem complicated at first but it's can actually be accomplished with just a few steps. For some helpful practice, check out the [Simple Search](https://teamtreehouse.com/library/fsjs-project-warm-up-simple-search) project warm-up.


<!-- step -->
#### Add Pagination for Search Results

* The pagination buttons should change based on the number of matches to the search. For example: if 10 or fewer matches are found, there should be 0 or 1 pagination button. If 22 matches are found, there should be 3 pagination buttons.
* Clicking on a pagination button should display the corresponding matching students for that page.
<!--* step number below will need to be changed if we remove global variable section -->
* **Pro Tip:** Remember you already created a function to create pagination buttons in Step 5. Use this existing pagination function along with the matching student list you created in the previous step as an argument to create pagination for your search results. 


<!-- step -->
#### Handle No Search Matches

* If no matches are found for a search, display a "No results found" type message on the page.
* **Note:** Don't use the built in `alert()` method for this. The "No results found" message should be printed to the page. 


***