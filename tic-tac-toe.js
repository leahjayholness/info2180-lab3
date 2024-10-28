document.addEventListener('DOMContentLoaded', function(){
    let board = document.getElementById("board");
    let num = 0;
    for(const child of board.children){
        child.classList.add("square");
        child.id = String(num);
        num += 1;

        child.addEventListener('click', function(){
            if(currentPlayer=="X"){
                child.classList.add("X");
                child.innerHTML = "X";
                array1[Number(child.id)] = "X";
            }
            else{
                child.classList.add("O");
                child.innerHTML = "O";
                array1[Number(child.id)] = "O";
            }
            currentPlayer = currentPlayer == "X" ? "O" : "X";
            checkStatus();
        })

        child.addEventListener('mouseover', function(){
            child.classList.add("hover");
        })

        child.addEventListener('mouseout', function(){
            child.classList.remove("hover");
        })
    }

    document.getElementsByClassName('btn')[0].addEventListener('click', function(){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        laststatus.classList.remove('you-won');
    
        let board = document.getElementById("board");
        for(const child of board.children){
            child.classList.remove("X");
            child.classList.remove("O");
            child.innerHTML = "";
        }
    
        currentPlayer = "X";
        array1 = ['0','1','2','3','4','5','6','7','8'];
    
    })
})

let currentPlayer = "X";
let array1 = ['0','1','2','3','4','5','6','7','8'];

function checkStatus(){
    if(array1[0] == array1[1] && array1[1] == array1[2]){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Congratulations! " + array1[0] + " is the Winner!";
        laststatus.classList.add('you-won');
    }

    else if(array1[3] == array1[4] && array1[4] == array1[5]){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Congratulations! " + array1[3] + " is the Winner!";
        laststatus.classList.add('you-won');
    }

    else if(array1[6] == array1[7] && array1[7] == array1[8]){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Congratulations! " + array1[8] + " is the Winner!";
        laststatus.classList.add('you-won');
    }

    else if(array1[0] == array1[3] && array1[3] == array1[6]){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Congratulations! " + array1[3] + " is the Winner!";
        laststatus.classList.add('you-won');
    }

    else if(array1[1] == array1[4] && array1[4] == array1[7]){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Congratulations! " + array1[7] + " is the Winner!";
        laststatus.classList.add('you-won');
    }

    else if(array1[2] == array1[5] && array1[5] == array1[8]){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Congratulations! " + array1[8] + " is the Winner!";
        laststatus.classList.add('you-won');
    }

    else if(array1[0] == array1[4] && array1[4] == array1[8]){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Congratulations! " + array1[8] + " is the Winner!";
        laststatus.classList.add('you-won');
    }

    else if(array1[2] == array1[4] && array1[4] == array1[6]){
        let laststatus = document.getElementById("status");
        laststatus.innerHTML = "Congratulations! " + array1[6] + " is the Winner!";
        laststatus.classList.add('you-won');
    }
}