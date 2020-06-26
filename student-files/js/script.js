/**
New FSJS project 2 - List Pagination and Filter - v2 - Data version
*/

"use strict";

 Show page function - shows the selected page of students
 @param list - List of students to be paginated
 @param page - Page number to be shown
*/
function showPage(list, page) {
   // create variable for where to start and stop accessing students
   const startIndex = (page * 10) - 10
   const endIndex = page * 10
   // create variable to select student-list element
   const studentList = document.querySelector(".student-list")

   // removes any previously displayed students
   studentList.innerHTML = ""

   // loop over list array
   for (let i = 0; i < list.length; i++) {
      // add conditional to display proper students
      if (i >= startIndex && i < endIndex) {
         // create element for each student as you iterate through the list
         const studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;

         // insert above elements
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}

//* Robert's original comments with my comments added with a ? tag and - Lee at the end
// The showPage function needs to:
   // accept two parameters: list, page - (provided `dataList` variable above will get passed in for list arg when showPage is called)
   // empty the student list element - (can set innerHTML to '')
   // set the pageStart and pageEnd values - (we'll probably still provide these to students)
      // const pageStart = (page * perPage) - perPage;
      // const pageEnd = page * perPage;
   //? I like naming these startIndex and endIndex - Lee
   // loop over students
      // use template below to create DOM elements for the students that should show on the page
      // use data from list argument to add student info to DOM elements
      // format date - (the data.js file has a formatDate() function that can be used for this)
      //? if we are going to give the students a function to perform this, which they might not truly understand, I think we should remove this extra level of complexity and just format the data as expected in the individual objects - Lee
      // use insertAdjacentHTML method with 'beforeend' option to insert elements into list container
   
      // DOM TEMPLATE for list items - (Not sure if we should provide this for students or not)
      //? I think we should just provide and example of what the HTML should look like and leave it to the students to create the template literal - Lee
         /* 
            const studentTemplate = `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                     <h3>${list[i].name.first} ${list[i].name.last}</h3>
                     <span class="email">${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined ${formattedDate}</span>
                  </div>
               </li>
            `;
         */


// Call showPage(dataList, 1) and test it


/**
 Append page links function - Create and append pagination links for list
 @param list - List of students to be paginated
*/
//? since we are no longer appending, we might want to change the name of this function to addPageLinks or addPagination
function appendPageLinks(list) {
   // create variable for number of pages needed
   const numOfPages = Math.ceil(list.length / 10)
   // create variable to select link-list element
   const linkList = document.querySelector(".link-list")

   // removes any previously displayed pagination
   linkList.innerHTML = ""
   
   // create pagination buttons based on the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {
      const button = `<li><button type="button">${i}</button</li>`

      // insert above elements
      linkList.insertAdjacentHTML("beforeend", button);
   }

   // gives first pagination button a class of active
   document.querySelector("button").className = "active";

   // create event listener
   linkList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
         // remove active class from current element
         document.querySelector(".active").className = "";
         // add active class to clicked button
         e.target.className = "active"

         // show page for clicked button
         showPage(list, e.target.textContent)
      }
   });
}

//* Robert's original comments with my comments added with a ? tag and - Lee at the end
// The appendPageLinks function needs to:
   // accept one parameter: list - (provided `dataList` variable above will get passed in for list arg when appendPageLinks is called)
   // empty the link list element - (can set innerHTML to '')
   // create variable for the number of links - (Math.ceil(list.length / perPage))
   // create loop that iterates once for each link - (let i = 0; i < linkCount; i++)
      // use insertAdjacentHTML method with 'beforeend' option to insert link template below into link container
      // DOM TEMPLATE for page link - `<li><button type="button">${i + 1}</button</li>`
   // after loop, give first page link the active className
   // add click handler to link container
      // use event delegation to make only BUTTONS trigger click handler
      // create variable to target '.link-list button' elements
      //? since only one button should ever have the class of "active" you can just use querySelector for this - Lee
      // loop over buttons to remove active className from all buttons
      // after loop add active className to clicked button
      // call showPage passing in list parameter and textContent of clicked button


// Call appendPageLinks(dataList) and test it

// (Example markup for search element is in index.html file if anyone wants to try for the exceeds :) )


// create function to append search elements to see how it would look but didn't include actual search functionality
function appendSearch() {
   const header = document.querySelector(".header");

   const searchBar = `
      <label for="search" class="student-search">
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>
   `

   header.insertAdjacentHTML("beforeend", searchBar)
}

showPage(data, 1);
appendPageLinks(data);
appendSearch();
