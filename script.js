const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    author: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor",
    author: "Eleanor Roosevelt",
  },
];

const quoteContent = document.querySelector("#quote-content");
const quoteAuthor = document.querySelector("#quote-author");
const btn = document.querySelector("#button");

btn.addEventListener("click", function (e) {
  const randomNumber = Math.floor(Math.random() * 4);
  quoteContent.textContent = quotes[randomNumber].quote;
  quoteAuthor.textContent = quotes[randomNumber].author;
});
