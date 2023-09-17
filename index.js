// Write your code here!
const main = document.getElementById("main");
main.remove();

//add new header

const newHeader = document.createElement("h1");

newHeader.id="victory";
newHeader.textContent="Walter is the champion";
document.body.append(newHeader);
