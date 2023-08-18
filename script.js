let values = new Array(20);

function getNum(){

    let val = Math.floor(Math.random() * 1001);

    return val;
}

function open(){

}

function playRound(){

    let num = getNum();

    const displayNum = document.querySelector('.randomized-number');

    displayNum.innerHTML = `<span> ${num} </span>`;




}

