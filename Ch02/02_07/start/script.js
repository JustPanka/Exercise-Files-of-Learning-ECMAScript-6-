let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("War and Peace");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
books.forEach(function(item) {
    console.log(item);
});

console.log("has Oliver Twist", books.has("Oliver Twist"));