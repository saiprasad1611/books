// const books = [
//   {
//     title: "Atomic Habits",
//     author: "James Clear",
//     price: 250,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "Clean Code",
//     author: "Robert C. Martin",
//     price: 350,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 180,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "Deep Work",
//     author: "Cal Newport",
//     price: 299,
//     img: "assets/sample-book.jpg"
//   }
//   ,
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 180,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 180,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 180,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 180,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 180,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 180,
//     img: "assets/sample-book.jpg"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 180,
//     img: "assets/sample-book.jpg"
//   }
// ];

// window.onload = () => {
//   const list = document.getElementById("bookList");

//   books.forEach(book => {
//     const col = document.createElement("div");
//     col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

//     const card = document.createElement("div");
//     card.className = "card h-100 shadow-sm";

//     card.innerHTML = `
//       <img src="${book.img}" class="card-img-top book-img" alt="${book.title}">
//       <div class="card-body d-flex flex-column">
//         <h5 class="card-title text-primary">${book.title}</h5>
//         <p class="card-text text-muted mb-1">by ${book.author}</p>
//         <p class="fw-bold text-dark mb-3">₹${book.price}</p>
//         <button class="btn btn-primary mt-auto">Buy Now</button>
//       </div>
//     `;

//     col.appendChild(card);
//     list.appendChild(col);
//   });
// };
