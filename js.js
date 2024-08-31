let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");


let turnO = true;

const arrs = [
    [0,1,2], //0
    [0,4,8], //3
    [0,3,6], //5
    [1,4,7], //6
    [2,4,6], //4
    [2,5,8], //7
    [3,4,5], //1
    [6,7,8], //2
];

const reset = () =>{
    turnO = true;
    boxEnable()

    
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWInner();
    })
    
})

const checkWInner = () =>{
     for(let pattern of arrs){
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(`"winner" ${pos1Val}`);
                document.querySelector("body").classList.add("bodes");
                document.querySelector("p").innerText = `Winner Player  ${pos1Val}`
                boxDisabled()
            }
        }
     }
}

const boxDisabled = () =>{
    for(box of boxes){
        box.disabled = true
    }
}
const boxEnable = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        document.querySelector("p").innerText = ""
        document.querySelector("body").classList.remove("bodes");

    }
}

resetButton.addEventListener("click", boxEnable)

const dividend = 200;
const divisor = 20;
const result = Math.floor(dividend / divisor);
console.log(result); // Output: 10

