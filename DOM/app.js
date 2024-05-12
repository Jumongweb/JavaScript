// const bookList = document.querySelector("#book-list ul")
// bookList.addEventListener('click', (e)=>{
//     console.log(e);
// })
/*
const bookList = document.querySelector("#book-list ul")
bookList.addEventListener('click', (e)=>{
    console.log(e);
    let className = e.target.className;
    console.log(className);
    if (className === "delete"){
        let li = e.target.parentElement;
        // li.parentElement.removeChild(li);
        bookList.removeChild(li);
    }
}) */

// console.log(bookList[1].textContent);
// console.log(bookList[1].innerHTML);


// bookList.forEach((book) => {
//     book.textContent += " (Praise to String)";
//     console.log(book.textContent)
// })

// for (const book of bookList){
//     console.log(book)
// }
/*
const addBook = document.getElementById("add-book");
console.log(addBook.textContent);
console.log(addBook.parentNode);
console.log(addBook.previousSibling);
console.log(addBook.previousElementSibling);
console.log(addBook.lastElementChild.textContent);
addBook.innerHTML = "addBookForMe";
*/


const bookList = document.querySelector("#book-list ul")
bookList.addEventListener('click', (e)=>{
    let className = e.target.className;
    if (className === "delete"){
        let li = e.target.parentElement;
        bookList.removeChild(li);
        alert("Delete successful")
    } else {
        alert("Oga, click the button")
    }
})

const searchBook = document.forms["search-books"];
const listOfBooks = document.querySelectorAll("#book-list li .name")

searchBook.addEventListener('keyup', (e)=>{
    let inputText = e.target.value.toLowerCase();
    listOfBooks.forEach((book) =>{
        let title = book.textContent.toLowerCase();
        let isIncludeInputText = title.includes(inputText);
        let parentNode = book.parentNode;
        if (isIncludeInputText){
            parentNode.style.display = "block"
        } else {
            parentNode.style.display = "none"
        }
    })
})

const addBook = document.forms["add-book"];
console.log(addBook);

addBook.addEventListener("submit", (e)=> {
    e.preventDefault();
    const inputValue = addBook.querySelector("input").value.trim();
    if (inputValue){
        const liTag = document.createElement("li");
        const firstSpan = document.createElement("span");
        const secondSpan = document.createElement("span");

        firstSpan.classList = "name";
        secondSpan.className = "delete";
    
        liTag.appendChild(firstSpan);
        liTag.appendChild(secondSpan);
        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";

        bookList.append(liTag);
        addBook.reset();

    // add to the beginning
    // bookList.prepend(liTag);
    }
    
})



