document.addEventListener('DOMContentLoaded', function(){
    let board = document.getElementById("board");
    for(const child of board.children){
        child.classList.add("square");

        child.addEventListener('click', function(){
            if(currentPlayer==1){
                child.classList.add("X");
                child.innerHTML = "X";
            }
            else{
                child.classList.add("O");
                child.innerHTML = "O";
            }
            currentPlayer *= -1;
        })

        child.addEventListener('mouseover', function(){
            child.classList.add("hover");
        })

        child.addEventListener('mouseout', function(){
            child.classList.remove("hover");
        })
    }
})

let currentPlayer = 1;
let array1 = ['','','','','','','','',''];