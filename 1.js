let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset');
let newbtn=document.querySelector('#new-btn');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let turnO=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add('hide');
}
boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if (turnO){
            box.innerText='O';
            box.style.color='grey';
            turnO=false;
        }else{
            box.innerText='X';
            box.style.color='purple';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        count++;
        console.log(count)
        if (count===9){
            alert('The Game is a Draw, please reset the game')
        }
    })
});

    

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false ;
        box.innerText='';
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
}
const checkWinner=()=>{
    for(pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !='' && pos2val != '' && pos3val != ''){
            if (pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }    
    }
};
newbtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame)