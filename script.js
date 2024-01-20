let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector('.new');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winPattern = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); 
}
boxes.forEach((box) => {
    box.addEventListener('click',() => {
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for(let pattern of winPattern){
        let ps1 = boxes[pattern[0]].innerText;
        let ps2 = boxes[pattern[1]].innerText;
        let ps3 = boxes[pattern[2]].innerText;

    if(ps1 != "" && ps2 != "" && ps3 != ""){
        if(ps1 === ps2 && ps2 === ps3){
            console.log("Winner",ps1);
            showWinner(ps1);
        }
    }
    }
};

reset.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);