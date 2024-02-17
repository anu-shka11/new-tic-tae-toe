let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turno = true;
let newGameBtn = document.querySelector("#new-btn");
let newGameBtn1 = document.querySelector("#new-btn1");
let msgConatiner = document.querySelector(".msg-Container");
let matchdrawn = document.querySelector(".match-drawn");

let msg = document.querySelector("#msg");
let msg1 = document.querySelector("#msg1");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const audio1 = new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019.wav");
const audio2 = new Audio("https://assets.mixkit.co/active_storage/sfx/1110/1110.wav");
let n = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        audio.play();
    });
    box.addEventListener("click", () => {

        if (turno) {
            box.style.color = 'blue';
            box.innerText = "O";

            turno = false;

        } else {
            box.style.color = 'red';
            box.innerText = "X";

            turno = true;
        }
        n++;
        box.disabled = true;
        checkWinner();
    });
});


const resetGame = () => {
    n=0;
    turno = true;
    EnableBoxes();
    msgConatiner.classList.add("hide");
    matchdrawn.classList.add("hide");

}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const EnableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    audio1.play();
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
};
const draw = () => {
    audio2.play();
    msg1.innerText = 'The Game is Drawn';
    matchdrawn.classList.remove("hide");
    n=0;
    disableBoxes();
}

const checkWinner = () => {

    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {


                showWinner(pos1Val);
                
            }
        }
    }
    if (n == 9) draw();
};
newGameBtn.addEventListener("click", resetGame);
newGameBtn1.addEventListener("click", resetGame);


newGameBtn.addEventListener("click", () => {
    audio.play();
})
newGameBtn1.addEventListener("click", () => {
    audio.play();
})
resetBtn.addEventListener("click", () => {
    audio2.play();
})
resetBtn.addEventListener("click", resetGame);