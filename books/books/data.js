// /books/data.js
// Minimal data to power the Sivers-style list
const BOOKS = [
  {
    title: "The Myth of Sisyphus",
    author: "Albert Camus",
    slug: "the-myth-of-sisyphus",      // must match your review filename (without .html)
    date_read: "2025-10-08",           // YYYY-MM-DD
    rating: 8,                         // 1–10
    blurb: "Absurdism 101: life has no inherent meaning; revolt, freedom, and passion are the response.",
    amazon: ""                         // optional URL
    // cover: "/books/covers/sisyphus.jpg" // optional local or external image
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    slug: "thinking-fast-and-slow",
    date_read: "2025-10-08",
    rating: 8,
    blurb: "Two systems of thought; common cognitive biases; practical ways to think a bit clearer.",
    amazon: ""
  }
];
