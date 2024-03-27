const height = 7;
for (let row = 1; row <= height; row++){
    let t_row = "";
    for(let column = 0; column < row; column++){
        t_row += "# ";
    }
    console.log(t_row);
}