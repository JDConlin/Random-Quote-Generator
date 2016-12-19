/* This script creates an array of famous quote objects.
It displays a random quote every 3 seconds and
also displays a random quote when the "Show another quote" button is pushed.
It does not redisplay a quote until all the quotes have been displayed.
It changes the background color to a random color every time a new quote is displayed.
This was tested with the Safari, Chrome and Firefox browsers.
*/
// Array of quote objects created with object literal notation.
// The objects include the extra properties: 'quoteTags' and 'quoteVintage' that are not used yet
//
var quotes = [
{quoteText : 'Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.',
quoteSource : 'Scott Adams',
quoteCitation : 'The Dilbert Principle',
quoteDate : 1997,
quoteTags : 'humor',
quoteVintage : 'new'},
{quoteText : '...when you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
quoteSource : 'Sir Arthur Conan Doyle',
quoteCitation : 'Sherlock Holmes',
quoteDate : 1887,
quoteTags : 'literature',
quoteVintage : 'old'},
{quoteText : 'All that we see or seem is but a dream within a dream.',
quoteSource : 'Edgar Allan Poe',
quoteCitation : 'A Dream Within a Dream',
quoteDate : 1848,
quoteTags : 'poetry',
quoteVintage : 'old'},
{quoteText : 'I became insane, with long intervals of horrible sanity.',
quoteSource : 'Edgar Allan Poe',
quoteTags : 'literature',
quoteVintage : 'old'},
{quoteText : 'The human brain starts working the moment you are born and never stops until you stand up to speak in public.',
quoteSource : 'George Jessel',
quoteTags : 'humor',
quoteVintage : 'old'},
{quoteText : 'The Only Easy Day Was Yesterday',
quoteSource : 'Navy Seals',
quoteTags : 'military quote',
quoteVintage : 'old'},
{quoteText : 'a card laid is a card played',
quoteSource : 'unknown',
quoteTags : 'unknown',
quoteVintage : 'old'},
{quoteText : "This is everybody's fault but mine",
quoteSource : 'Homer J. Simpson',
quoteTags : 'humor',
quoteVintage : 'new'}
];
//
// variables for functions to return
var randomQuote = {};
var randomColor = '';
// background colors array with more colors than a big bag of skittles (some are very light and make reading the quote which is in white difficult
// a production web page should not have very light or white text against a very light background!
var colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen' ];
//empty temporary array to store random quotes for test to see if it is a repeat
var randomQuotesRepeat = [ ];
//
// display a random quote every 3 seconds
setInterval(function(){ printQuote(); }, 3000);
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//
// function to get a random quote object and return it to calling function
function getRandomQuote ()
{
var isRandomQuoteUsed = 'Yes';
while (isRandomQuoteUsed === 'Yes')
{
var randomNumber = Math.floor(Math.random() * (quotes.length) );
randomQuote = quotes[randomNumber];
randomQuoteToTest = randomQuote;
// call the function to test to see if quote is a repeat
testForRepeatedQuote(randomQuoteToTest);
}
// display the quote to the console
console.log(randomQuote.quoteText);
// Add the quote to the temp array used to test for repeated quotes
randomQuotesRepeat.push(randomQuote);
// test to see if this is the last unused quote, if so reset the temp array to empty
if (quotes.length === randomQuotesRepeat.length) {
randomQuotesRepeat = [ ];
}
//return to calling function with random quote to display
return (randomQuote);
// function to test to see if quote is a repeat
function testForRepeatedQuote(randomQuote) {
    if (randomQuotesRepeat.length === 0) { // see if no quotes have been used yet this cycle
    isRandomQuoteUsed = "No";
    return false;  // return false to say no this random quote has not been used yet
    }

    for (var i = 0; i < randomQuotesRepeat.length; i++) { // if at least one random quote had been used
        if (randomQuotesRepeat[i] === randomQuote) {  // test to see if this used one is the same as the one sent to this function
            return true;     // and return true to say yes this random quotes has been used so go get another random quote
        }
    }
    isRandomQuoteUsed = "No";
    return false;  // return false to say no this random quote has not been used yet
    }
}

//function to get random backround color
function getRandomBackgroundColor () {
randomColor = colors[Math.floor(Math.random() * colors.length)];
return randomColor;
}

// function that gets random quote and quote related info, then formats and displays the quote & info
function printQuote () {
// get the random quote and info, and make sure the quote has not been displayed more than once until ALL quotes have been displayed
getRandomQuote();
// get the random background colors
getRandomBackgroundColor();
//
document.body.style.backgroundColor = randomColor;
// HTML string template to display quote and quote info
// document.body.style.backgroundColor = randomColor;
  var quoteAndInfoToPrint = '';
  quoteAndInfoToPrint +=
  '<p class="quote">' + randomQuote.quoteText + '</p>' +
   '<p class="source">' + randomQuote.quoteSource ;
   if ( randomQuote.hasOwnProperty('quoteCitation') ) {
    quoteAndInfoToPrint += '<span class="citation">' + randomQuote.quoteCitation + '</span>' ;
   }
 if (randomQuote.hasOwnProperty('quoteDate') ) {
    quoteAndInfoToPrint += '<span class="Date">' + randomQuote.quoteDate + '</span>' ;
}
    quoteAndInfoToPrint += '</p>' ;

  document.getElementById('quote-box').innerHTML = quoteAndInfoToPrint;
}
