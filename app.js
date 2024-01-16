let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#new-game");

let turn0=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turn0=true;
    enableBox();
    msgcontainer.classList.add("hide");
};

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
    box.disabled=true;

    checkwinner();
});
 });

    const disableBox=()=>{
        for(let box of boxes)
        {
            box.disabled=true;
        }
    };
    const enableBox=()=>{
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    };

    const showwinner=(winner)=>{
        msg.innerText=`Congratulation, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableBox();
    }

 const checkwinner=()=>{
    for(let pattern of winpattern)
    {
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" &&pos3!="" )
    {
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("Winner",pos1);
            showwinner(pos1);
        }   
    }
    }
 };

 newgame.addEventListener("click",resetGame);
 reset.addEventListener("click",resetGame);