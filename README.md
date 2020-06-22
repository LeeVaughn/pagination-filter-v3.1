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
  * Use your Google skills to find the information you need. Try rephrasing your search if you aren't finding the information you need.
  * Reach out to your Slack team.
    * **Pro Tip:** A good “Help!” post in Slack begins with a friendly greeting, details any important info related to the problem you’re having, what you’ve tried so far to fix it, and most importantly, a link to your repo.


<!-- step -->
#### No Snippets, Plugins or Libraries, including jQuery

* Avoid using any libraries, plugins, or code snippets for any aspect of this project. All of the code for this project should be your own and in plain JavaScript, often referred to as "Vanilla JavaScript".


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
  * A `page` parameter to represent the page number that will be passed in as an argument when the function is called.
* Inside the function:
  * Create two variables to store the start index and the end index of the list items to be displayed on the given page. To make this function dynamic, use the `page` parameter and some basic math to calculate the value of these variables like so:
    * Start Index = (`page` parameter * items per page) - items per page
    * End Index = `page` parameter * items per page
  * Select the `UL` element with a class of `student-list` and assign its value to a variable.
  * Use the innerHTML property set the HTML content of the variable you just created to an empty string. This will remove any students that might have previously been displayed.
  * Loop over the `list` parameter.
  * Inside the loop:
    * Write a conditional statement that checks if the current index (`i`) is greater than or equal to the `start index` variable **and** less than the `end index` variable.
    * Inside that conditional:
      <!-- TODO include line numbers for example code once starter files are done -->
      * Create the DOM elements needed to display the information for each matching student as you iterate over the `list` parameter. See the comments in the index.html file for an example of what the final version of these elements should look like.
      * **Pro Tip** Because you will need to create multiple elements to display the student information, you might consider using a template literal for this.
      <!-- TODO add link to the docs for insertAdjacentHTML in Resources -->
    * Insert the elements you have created to the `UL` element with a class of `student-list`. The insertAdjacentHTML method and `beforeend` option works well for this.
* **Pro Tip:** If you call this function in the early stages of building the application, you’ll be able to use console.log statements and the Chrome Dev Tools console to test and check that variables, values and indexes are working the way you expect. Don't forget to use the `data` variable and page number as arguments when you call the function!
* **Project Warm Ups:** Creating and using functions, and selecting and manipulating sections of a list can feel confusing at first. For some helpful practice, check out the [List Section Selection](https://teamtreehouse.com/library/fsjs-project-warm-up-list-section-selection) and [What's the Deal with Functions](https://teamtreehouse.com/library/fsjs-project-warm-up-whats-the-deal-with-functions) project warm-ups.


<!-- step -->
#### Add Pagination Buttons

* Create a function that creates and appends functioning pagination buttons.
* This function should accept a single `list` parameter to represent student data that will be passed as an argument when the function is called.
* Inside the function:
  * Create a variable to store the value of the number of pagination buttons needed. You can calculate this using the length of the `list` parameter.
  * Select the `UL` element with a class of `link-list` and assign its value to a variable.
  * Use the innerHTML property set the HTML content of the variable you just created to an empty string. This will remove any pagination that might have previously been displayed.
  * Loop over the variable for the number of pages needed that you created earlier.
  * Inside the loop:
    <!-- TODO include line numbers for example code once starter files are done -->
    * Create the DOM elements needed to display the pagination button as you iterate over the number of pages. See the comments in the index.html file for an example of what this element should look like.
    * Insert the element you have created to the `UL` element with a class of `link-list`. The insertAdjacentHTML method and `beforeend` option works well for this.
  * Select the first pagination button and give it a class name of `active`.
  * Create an event listener to listen for clicks on the `UL` element that contains the pagination buttons that you created above.
  * Inside this event listener:
    * If the click target is a pagination button:
      * Remove the `active` class from any other pagination button.
      * Add the `active` class to the pagination button that was just clicked.
      * Call the `showPage` function passing the `list` parameter and the page number that should be shown as arguments.
        * **Pro Tip:** The text content of the clicked pagination button will contain the page number you want to display.
* **Pro Tip:** If you call this function in the early stages of building the application, you’ll be able to use console.log statements and the Chrome Dev Tools console to test and check that variables, event listener, and other functionality is working the way you expect. Don't forget to use the `data` variable as an argument when you call the function!
* **Project Warm Ups:** DOM manipulation and creating pagination buttons can be tricky at first. For some helpful practice, check out the [Fun DOM Manipulation](https://teamtreehouse.com/library/fsjs-project-warm-up-fun-dom-manipulation) and [Where's the Action](https://teamtreehouse.com/library/fsjs-project-warm-up-wheres-the-action) project warm-ups.


<!-- step -->
#### Call your functions

* Call the show page function, passing in as arguments, the global variable for the list items, and the number 1 for the first page, which should be shown initially.
* Call the append page links function, passing in as an argument, the global variable for the list items.


<!-- step -->
#### Add code comments

* Replace the code comments in the file with your own code comments.
* The key to creating good code comments is to keep them brief, but clear, so that your fellow developers can get an idea of what's going on in your code at a glance, without having to review every line of your code.


<!-- step -->
#### Review the "How you'll be graded" section

* Check out the "How you'll be graded" section, located above, next to the instructions tab, just below the project title. This section lists specifically what will be considered and checked when your project is being reviewed, and your project grade is being determined.


<!-- step -->
#### Cross-Browser consistency:

* Google Chrome has become the default development browser for most developers. With such a selection of browsers for users to choose from, it's a good idea to get in the habit of testing your projects in all modern browsers.


<!-- step -->
#### Quality Assurance and the Student Project Submission Checklist

* Take the time for thorough quality assurance testing.  Before you submit your project for review, please check off all of the items on the [Student Project Submission Checklist](http://treehouse-techdegree.s3.amazonaws.com/Student-Project-Submission-Checklist.pdf).
* Share your project in Slack in the `#review-my-project` channel to get a preliminary review and catch anything you might have missed.


<!-- step -->
**NOTE: What you submit is what will get reviewed**

* When you submit your project, a snapshot is taken of your repository, and that is what the reviewer will see.  Consequently, the reviewer won't see any changes you make to your repo **after** you submit the project.  

***


## Extra Credit
<!-- step -->
#### Add search component

* Dynamically create and append a search bar.  Avoid making any changes in the `index.html` file.  You can reference the `examples/example-exceeds.html` file, lines 16-19, to see an example of the markup you'll create.


<!-- step -->
#### Add functionality to the search component

* When the "Search" button is clicked, the list is filtered by student name for those that include the search value. For example, if the name `Phillip` is typed into the box, list all items with a name that includes Phillip.  If the letter `S` is typed in, all items with an `S` in the name will show.

* **Pro Tip:** To improve the functionality and add to the user experience, consider adding a keyup event listener to the search input so that the list filters in real time as the user types.  This would be in addition to making the search button clickable since pasting text into the search bar might not trigger the keyup event.
* **Project Warm Up:** Configuring a search feature can seem complex at first, but it's really just a few fundamental steps.   For some helpful practice, check out the project Warm Up [Simple Search](https://teamtreehouse.com/library/fsjs-project-warm-up-simple-search).


<!-- step -->
#### Paginate search results

* Display pagination links based on how many search results are returned.  For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.

* **Pro Tip:** To paginate the search results, try storing the search results in an array that can act as a list, on which you can call your functions to show a page and append pagination links. 


<!-- step -->
#### Handle no results returned

* If no matches are found by the search, include a message in the HTML to tell the user there are no matches.

* **Note** Don't use the built in alert() method here.  The "No results" message must be printed to the page. 


***