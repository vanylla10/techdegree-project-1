// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//quote object in the quotes array
var viewQuotes = [];
var quotes = [
  {quote: 'he only way to get through life is to laugh your way through it. You either have to laugh or cry. I prefer to laugh. Crying gives me a headache.', source: ' Marjorie Pay Hinckley'},
  {quote: 'With the new day comes new strength and new thoughts.', source: 'Eleanor Roosevelt'},
  {quote: 'We realize the importance of our voices only when we are silenced.', source: 'Malala Yousafzai'},
  {quote: 'One child, one teacher, one book, one pen can change the world.', source: 'Malala Yousafzai'},
  {quote: 'We learned about honesty and integrity - that the truth matters... that you dont take shortcuts or play by your own set of rules... and success doesnt count unless you earn it fair and square.', source: 'Michelle Obama'},
  {quote: 'Watch your thoughts, for they become words. Watch your words, for they become actions. Watch your actions, for they become habits. Watch your habits, for they become your character. And watch your character, for it becomes your destiny. What we think, we become. My father always said that. And I think I am fine.', source: 'Margaret Thatcher'},
  {quote: 'Let us forget with generosity those who cannot love us', source: 'Pablo Neruda'},
  {quote: 'Listen, and you will realize that we are made not from cells or from atoms. We are made from stories.', source:'Mia Couto'}
];

// selects a random quote object from the quotes array
// returns the randomly selected quote object

function getRandomQuote (){
  var randomNumber = Math.floor(Math.random()* quotes.lenght);
  var splicedQuote = quotes.splice(randomNumber, 1)[0];
  viewQuotes.push(splicedQuote);
  if (quotes.length == 0) {
      quotes = viewQuotes;
      viewQuotes = [];
  }
  return splicedQuote;
};

//printQuote calls the getRandomQuote function and stores the returned quote object in a variable
//displays the final HTML string to the page

function printQuote() {
  var theRandomQuote = getRandomQuote();
  var html = '<p class="quote">' + theRandomQuote.quote + '</p>'
  + '<p class="source">' + theRandomQuote.source +'</p>';
  document.getElementById('quote-box').innerHTML = html;

};
