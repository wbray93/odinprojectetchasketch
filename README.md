# odinprojectetchasketch
This is one of the foundations, course projects for theodinproject curriculum.

In this project I got to learn a couple key things outside of stuff I already learned in course content. One of those key things is that it is always a good idea to console.log any value I am unsure of to doublecheck my return values to see what I am actually getting. This leads into one of the things I had to push and struggle through and finally overcome in this project. Initially I was having tons of issues with my second function for the custom grid size. I realized the reason for this was I was trying to remove the old createdDivs by utilizing createdDivs hence the lesson of knowing what my return values are I had incorrectly assumed that createdDivs would hold the value of all of those children when in fact at the end of the createdGrid Function its return value is set to that of a div which is why my removal techniques were not working. I after struggling through and many google searches later realized I was initially right with my earlier thought the day I worked on this that I did need to use a document.querySelectorAll and then use a foreach loop over that list however this did not seem to be the most sound implementation and upon later fresh mind I decided to use a while loop instead with the firstChild target which made more sense and performance wise I felt would be faster and more efficient. Overall this project was a lot of fun to practice the DOM manipulation and event handling techniques that I learned in previous lessons such as event delegation and event concepts like bubbling and capturing. Was an interesting and thought provoking learning experience.

Refactoring:
1. I simplified a lot of the functions
    -I refactored both the createdGrid and userCreatedGrid to be more dynamic taking a global variable called squaresPerSide which would be default set for the default createdGrid function to 16. I then also manually set the size of my container in javascript rather than CSS which I felt made it cleaner and also allowed me to do math to adjust the square sizes based on the container. 
    -I implemented a const in both functions called numOfSquares that takes the value of squaresPerSide and multiplies it against itself to get our grid size.
    -I set a second const in each function titled widthOrHeight and set that to containerSize / squarePerSide which is to adjust the squares as the grid becomes larger.
    -Lastly I edited the for loops to match the newly refactored code.

Next Steps:
1. Ways to improve the project.
    -I plan to enhance this project further during breaks between my Odin Project course assignments. One improvement I'm considering is implementing a mobile-friendly feature with event listeners, eliminating the need for users to tap each square individually on mobile devices.
    -I could stand to go back and put a more interesting background I feel as well but this was not one of the objectives on the course so i kept it a simple grey but would like to make a color blind mode potentially for accessibility reasons.
    -I also have considered adding a color picker option possibly at a later time as well though I do not know if I will have time to get back and do this as the projects continue to get more involved in theodinproject course curriculum.
