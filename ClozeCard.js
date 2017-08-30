var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var command = process.argv[2];
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var partialArray = [];

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function () {
        partialArray.push(this.text, this.cloze);
        for (i = 0; i < 1;) {
            partialArray.forEach(function (value) {
                partialArray[i] = value.replace("George Washington", "");
                i++;
            })
            var spliced = partialArray.join("");
            console.log("..." + spliced);
        }
    }
    this.fullText = function () {
        console.log(this.text);
    }
}

switch (command) {
    case 'partial':
        firstPresidentCloze.partial();
        break;
    case 'cloze':
        console.log(firstPresidentCloze.cloze);
        break;
    case 'text':
        firstPresidentCloze.text;
    case 'full':
        firstPresidentCloze.fullText();
        break;
    case 'front':
        console.log(firstPresident.front);
        break;
    case 'back':
        console.log(firstPresident.back);
        break;
    default:
        console.log(firstPresident.front);
        break;
}

module.exports = ClozeCard;

// function flashCard() {
//     inquirer.prompt([
//         {
//             name: "firstQuestion",
//             message: "Who was the first president of the U.S.?",
//             choices: ["0", "1", "2"]
//         }
//     ])

// }