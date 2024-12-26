let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const boxesDisabled = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return; // Prevent overwriting a box

        if (turnO) { // playerO
            box.innerText = "O";
            turnO = false;
        } else { // playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxesDisabled();

    // Refresh the game after 15 seconds
    setTimeout(() => {
        resetGame();
    }, 15000); // 15 seconds
};

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }

    // Check for draw (if all boxes are filled)
    let allBoxesFilled = [...boxes].every((box) => box.innerText !== "");
    if (allBoxesFilled) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        boxesDisabled();

        // Refresh the game after 15 seconds
        setTimeout(() => {
            resetGame();
        }, 15000); // 15 seconds
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);