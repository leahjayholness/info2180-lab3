document.addEventListener('DOMContentLoaded', function(){
    let board = document.getElementById("board");
    for(const child of board.children){
        child.classList.add("square");
    }
})

