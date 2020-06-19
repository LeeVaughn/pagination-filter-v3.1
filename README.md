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
  * Loop over the `list` parameter.
    * Inside the loop, display any list item with an index that is greater than or equal to the `start index` variable **and** less than the `end index` variable.
* **Pro Tip:** If you call this function in the early stages of building the application, you’ll be able to use console.log statements and the Chrome Dev Tools console to test and check that variables, values and indexes are working the way you expect. Don't forget to use the `data` variable and page number as arguments when you call the function!
* **Project Warm Ups:** Creating and using functions, and selecting and manipulating sections of a list can feel confusing at first.  For some helpful practice, check out the [List Section Selection](https://teamtreehouse.com/library/fsjs-project-warm-up-list-section-selection) and [What's the Deal with Functions](https://teamtreehouse.com/library/fsjs-project-warm-up-whats-the-deal-with-functions) project warm-ups.


<!-- step -->
#### Add Pagination Links

* Create a function that creates and appends functioning pagination links.
* This function should accept a single `list` parameter to represent the actual list of students that you’ll pass in as an argument later when you call this function.
* Inside the function:
  * Create and append the DOM elements for the pagination links.
    * Use lines 119-137 in the `examples/example-meets.html` file as your template.
    * Pay close attention to how elements are nested, any necessary class names or other element attributes, and where your additions should be appended.
  * You should end up with:
    * A container `DIV` element with a class name of “pagination”, and appended to the `div` element with the class name of `page`.
    * A nested  `UL` element containing one `LI` element for every ten students in the list.
      * **Pro Tip:** You can divide `list.length` by the max number of items per page to figure out how many pages are needed, and you can use a loop that iterates that many times to create the correct number of `LI` elements.
    * Each `LI` element should contain an `A` element with an `href` attribute of `#`, and text set to the page number each link will show.  First link is `1`.  Second link is `2`.  And so on.
      * **Pro Tip:** The loop index can be helpful in setting the text of the pagination links.
  * Add the `active` class name to the first pagination link initially.  
  * Add a “click” event listener to each `A` element.  A loop can be helpful here.
  * When a pagination link is clicked:
    * The `active` class name should be removed from all pagination links.  A loop can be helpful for this step.
    * The `active` class name should be added to the link that was just clicked.  The target property of the event object should be useful here.
    * The function to show a page should be called, passing in as arguments, the global variable for the list items, and the page number that should be shown.  The text content of the `A` element that was just clicked can be helpful here.
* **Note:** Your program needs to work for any number of list items, so your solution needs to be dynamic. You can test that your solution works for any size list by opening the `examples/44students.html` and `examples/64 students.html` files, and linking your JS file.
* **Project Warm Ups:** DOM manipulation and updating an indication that a button is active can be tricky at first.  For some helpful practice, check out the project Warm Up [Fun DOM Manipulation](https://teamtreehouse.com/library/fsjs-project-warm-up-fun-dom-manipulation) and [Where's the Action](https://teamtreehouse.com/library/fsjs-project-warm-up-wheres-the-action).


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