

var arr = Array.apply(null, Array(20))
var curVal
let total = 0;




function getNum(){

    let val = Math.floor(Math.random() * 1001);
    for(ii=0;ii<20;ii++)

    curVal=val;
    return val;
}

function open(val){

    for(let i = 0; i < 20; i++){
        if(arr[i]==null){
            document.getElementById(`num` + `${i+1}`).classList.add("open");
                document.getElementById(`num` + `${i+1}`).classList.remove("closed");
                document.getElementById(`num` + `${i+1}`).disabled = false;
        }
    }


    for(let i = 0; i < 20; i ++){
        if(arr[i] != null){
        if(curVal > arr[i]){

            for(let j = 0; j < i; j++){
                if(!(document.getElementById(`num` + `${j+1}`).classlist.contains("filled"))){
                document.getElementById(`num` + `${j+1}`).classList.add("closed");
                document.getElementById(`num` + `${j+1}`).classList.remove("open");
                document.getElementById(`num` + `${j+1}`).disabled = true;
                }
                
            }
            i++;
        }
    }
    }

    for(let i = 19; i > -1; i --){

        if(arr[i] != null){
            if(curVal < arr[i]){
               

                for(let j = 19; j > i; j --){
                    
                    if(!(document.getElementById(`num` + `${j+1}`).classList.contains("filled"))){
                    document.getElementById(`num` + `${j+1}`).classList.add("closed");
                    document.getElementById(`num` + `${j+1}`).classList.remove("open");
                    document.getElementById(`num` + `${j+1}`).disabled = true;
                    }
                    
                }
                i--;
            }
        }
    } 
   
}



function BtnClick(ctrl,iR)
{
    
    total++;
    ctrl.innerHTML=curVal;
    arr[iR]=curVal;
    open(curVal);
    ctrl.classList.add("filled");
    ctrl.classList.remove("open");
    ctrl.disabled = true;
    
    
    newNum();
    open(curVal);

    if(total == 20){
        alert("you won!");
    }

}

function newNum(){

    
    

    let num = getNum();

    const displayNum = document.querySelector('.randomized-number');

    displayNum.innerHTML = `<span> ${num} </span>`;
    document.querySelector(".playButton").style.display = "none";
  
}




/*  for(let i = 0; i <20; i++){
       
        if(arr[i] != null){
            if(curVal > arr[i]){
                for(let j = 0; j < i ; j++ ){ 
                    document.getElementById(`num` + `${j+1}`).classList.add("closed");
                    document.getElementById(`num` + `${j+1}`).classList.remove("open");
                    document.getElementById(`num` + `${j+1}`).disabled = true;
                }
            }
            for(let k = 19; k > -1; k--){
                if(curVal <arr[k] ){
                    for(let l = 19; l > k; l--){
                        document.getElementById(`num` + `${l+1}`).classList.add("closed");
                        document.getElementById(`num` + `${l+1}`).classList.remove("open");
                        document.getElementById(`num` + `${l+1}`).disabled = true;
                    }
                }
            
        }
    }
    }*/