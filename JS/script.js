// Challenge One
// Can control backround color, image, other
document.body.style.background = "white";


function ageInDays() {
    var birthYear = prompt("What year were you born?");
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement("h1");     //  <--- The tag inside the "" describes the size of the varible H1
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.')
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);  // AppendChild adds something to something for example it is adding the h1 tag to "flex-box-result"
}


function resset() {
    document.getElementById("ageInDays").remove();
}
