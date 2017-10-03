var quoteString;
var quote;
var dupQuotes = [];
//this will make the quote automatically change every 30 seconds
var intervalQuote = window.setInterval(printQuote, 30000);


//generate random quote
function getRandomQuote() {
	//check to see if quotes exist in the array so duplicates do not appear
	if (quotes.length === 0) {
		quotes = dupQuotes.splice(0, dupQuotes.length);
	}
	//get a random index from the array of quotes
  	var randomIndex = Math.floor(Math.random() * quotes.length);
  	//retrieve the quote object from the index number
  	var randomQuote = quotes[randomIndex];
  	//add quote to a new array
    dupQuotes.push(randomQuote);
    //remove quote from the original array
    quotes.splice(randomIndex, 1);
  	//return the quote
  	return randomQuote;
  
}
//get a random color using hex color codes
function getRandomColor() {
	//create a variable with a random letter or number
    var letters = "0123456789ABCDEF".split('');
    //create a variable starting with #
    var color = "#";
    //run a loop 6 times to add 6 random numbers and letters to the #
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function printQuote () {
  //call the random color and apply it to the body of the document	
  document.body.style.backgroundColor = getRandomColor();
  //call the random quote object and add it to a variable
  quote = getRandomQuote();
  //add the quote to a string
  quoteString = '<p class="quote">' + quote.quote + '</p>';
  quoteString += '<p class="source">' + quote.source;
  //see if optional keys have data
  if (quote.citation === undefined) {

  }else {
  	quoteString += '<span class="citation">'  + quote.citation + '</span>';
  }
  if (quote.year === undefined) {

  }else {
  	quoteString += '<span class="year">' + quote.year +  '</span></p>';
  }
  if (quote.tag === undefined) {

  }else {
  	quoteString += '<p><span class="tag">' + quote.tag + '</span></p>'
  }

  //print html to document
  document.getElementById('quote-box').innerHTML = quoteString; 
  }

  

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

