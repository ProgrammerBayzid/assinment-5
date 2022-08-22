const totalPlayerArray=[];



function selaectedPlayerDisplay (selaectPlayer){
    console.log(selaectPlayer);
    const tabelBody=document.getElementById("palyer-list");
    tabelBody.innerHTML="";

     for(let i = 0; i < selaectPlayer.length ; i++){
        if(selaectPlayer.length == 6 ){
            alert('You can not add more then 5 players');
        }
        const name = totalPlayerArray[i].playerNamne;
        const rank = totalPlayerArray[i].playerRank;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${rank}</td>
        `;
        tabelBody.appendChild(tr);
     }
}
function addToTotalPlayer(element){
    const playerNamne = element.parentNode.parentNode.children[0].innerText;
    const playerRank = element.parentNode.parentNode.children[1].children[0].innerText;
    
    const playerObject ={
    playerNamne: playerNamne,
    playerRank: parseFloat(playerRank),
 }

 totalPlayerArray.push(playerObject);
 let addedPlayer = document.getElementById("added-player");
 let addPlayerText= addedPlayer.innerText;
 addedPlayer.innerText= totalPlayerArray.length;

 selaectedPlayerDisplay(totalPlayerArray);
}



function getValueFromInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString)
    return inputFieldNumber
}

function getValueFromText(textId, value) {
    const textField = document.getElementById(textId);
    const textFieldString = textField.innerText;
    const textFieldNumber = parseFloat(textFieldString)
    textField.innerText = value
    return textFieldNumber;

}
function getValueFromTextNum(textId) {
    const textField = document.getElementById(textId);
    const textFieldString = textField.innerText;
    const textFieldNumber = parseFloat(textFieldString)
    return textFieldNumber;
}


document.getElementById('calculate').addEventListener('click',function(){
    const selectPlayer = totalPlayerArray.length;
    const perPlayer = getValueFromInput('Per-Player');
    const totalPlayerExpenses= perPlayer * selectPlayer;
    getValueFromText('player-expense', totalPlayerExpenses)
})

document.getElementById('total-calculate').addEventListener('click',function(){
    const selectPlayer = totalPlayerArray.length;
    const perPlayer = getValueFromInput('Per-Player');
    const totalPlayerExpenses= perPlayer * selectPlayer;
    const managerCost = getValueFromInput('manager-cost');
    const coachCost = getValueFromInput('coach-cost');
    const totalExpenses = managerCost + coachCost + totalPlayerExpenses ;
    getValueFromText('total-expense', totalExpenses)
})

