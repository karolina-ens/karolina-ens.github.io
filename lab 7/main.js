
const ChangedAttribute = document.getElementById("Attribute1");
ChangedAttribute.setAttribute("style", "font-family:cursive");

const heading = document.createElement("h1");
heading.innerHTML = "Lab7 Assignment";
heading.style.color = "blue";
document.body.append(heading);

const underline = document.createElement("hr");
document.body.append(underline);

const h1 = document.createElement("h2");
h1.innerHTML = "Task";
h1.style.color = "red";
document.body.append(h1);

const p1 = document.createElement("p");
p1.innerHTML = "In this task, you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.append(p1);

const ul0 = document.createElement("li");
ul0.innerHTML = "find elements in the DOM (<b>5 points</b>);"
ul0.style.color = "green";
document.body.append(ul0);

const ul1 = document.createElement("li");
ul1.innerHTML = "create/add/remove elements (<b>5 points</b>);"
ul1.style.color = "purple";
document.body.append(ul1);

const ul2 = document.createElement("li");
ul2.innerHTML = "change <i>content</i> of the elements (<b>5 points</b>);"
ul2.style.color = "green";
document.body.append(ul2);
/* the word content is changed to italics font, i hope this counts for change of content hehe*/

const ul3 = document.createElement("li");
ul3.innerHTML = "change styles of the elements (<b>5 points</b>);"
ul3.style.color = "brown";
ul3.style.fontFamily = "cursive";
document.body.append(ul3);

const ul4 = document.createElement("li");
ul4.innerHTML = "change attributes of the elements (<b>5 points</b>);"
ul4.style.color = "green";
document.body.append(ul4);

const ul5 = document.createElement("li");
ul5.innerHTML = "change classes of the elements (<b>5 points</b>)."
ul5.style.color = "purple";
document.body.append(ul5);

document.getElementById("Attribute1").className = "Attribute1class";

const img = document.createElement("img");
img.src = "bunnies.jpg";
document.body.append(img);


const underline1 = document.createElement("hr");
document.body.append(underline1);

const submission = document.createElement("h2");
submission.innerHTML = "Submission";
submission.style.color = "red";
document.body.append(submission);

const instr = document.createElement("p");
instr.innerHTML = "To submit your work, follow these instructions:";
document.body.append(instr);

const line1 = document.createElement("li");
line1.innerHTML = "Create a new repository on Github, named <b>lab7 (1 point)</b>.";
line1.style.color = "green";
document.body.append(line1);

const line2 = document.createElement("li");
line2.innerHTML = "Clone this repository to your local machine and work inside it.";
line2.style.color = "purple";
document.body.append(line2);

const line3 = document.createElement("li");
line3.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with <q>Hello, World!</q> message (<b>1 point</b>).";
line3.style.color = "green";
document.body.append(line3);

const line4 = document.createElement("li");
line4.innerHTML = "Create a new JavaScript file, called <b> main.js </b>, which must contain your program (assignment) described above (<b>1 point</b>).";
line4.style.color = "purple";
document.body.append(line4);

const line5 = document.createElement("li");
line5.innerHTML = "Link this <b> main.js </b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
line5.style.color = "green";
document.body.append(line5);

const line6 = document.createElement("li");
line6.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
line6.style.color = "purple";
document.body.append(line6);

const line7 = document.createElement("li");
line7.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
line7.style.color = "green";
document.body.append(line7);

const underline2 = document.createElement("hr");
document.body.append(underline2);

