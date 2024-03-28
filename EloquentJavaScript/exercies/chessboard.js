/* for (let count = 0; count < 8; count++){
    let row = "";
    for (let space = 0; space < count; space++){
        console.log(" ");
    }
    for (let counter = 0; counter < count; counter++){
        console.log("#");
    }
}  */

let size = 8;
let chessboard = "";

for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n";
}

console.log(chessboard);

/*
let size = 8;
let chessboard = "";

for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        // Toggle between space and "#" based on even or odd row/column indices
        if ((row + col) % 2 === 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    // Add a newline character after each row
    chessboard += "\n";
}

console.log(chessboard);
*/