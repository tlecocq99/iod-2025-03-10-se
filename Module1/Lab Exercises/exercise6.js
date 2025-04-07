let book = {
  title: "The Tattooist of Auschwitz",
  author: "Heather Morris",
  description:
    "The Tattooist of Auschwitz is a 2018 Holocaust novel by New Zealand novelist Heather Morris. The book tells the story of how Slovakian Jew Lale Sokolov, who was imprisoned at Auschwitz in 1942, fell in love with a girl he was tattooing at the concentration camp. The story is based on the real lives of Sokolov and his wife, Gita Furman. There has been mixed criticism of the book, with some complimenting the novel’s compelling story based on real-life events, while claims of factual inaccuracies that may lead to miseducation around historical events have been made by the Auschwitz Memorial Research Center.",
  numberOfPages: 288,
};
console.log(book.title); // The Tattooist of Auschwitz
console.log(book.author); // Heather Morris
console.log(book.description); // Description of the book
console.log(book.numberOfPages); // 288
console.log(book);
book.description =
  "A novel by Heather Morris about the tale of 2 lovers in Auschwitz.";
console.log(book.description);
let bookObject = ["Pages", "Plot", "Characters", "Setting", "Theme"];
console.log(bookObject);
