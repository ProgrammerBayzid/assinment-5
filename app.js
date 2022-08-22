const totalPlayerArray=[];



function selaectedPlayerDisplay (selaectPlayer){
    console.log(selaectPlayer);
    const tabelBody=document.getElementById('palyer-list');
    tabelBody.innerHTML="";

     for(let i = 0; i< selaectPlayer.length ; i++){
        const name = totalPlayerArray[i].playerNamne;
        const rank = totalPlayerArray[i].playerRank;
        const tr = document.createElement("tr");
        tr.innerHTML=`
          <th>${i+1}</th>
          <td>${name}</td>
          <td>${rank}</td>
        `;
        tabelBody.appendChild(tr);
     }
}
function addToTotalPlayer(element){
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);
    const playerNamne = element.parentNode.parentNode.children[0].innerText;
    const playerRank = element.parentNode.parentNode.children[1].children[0].innerText;
 const playerObject ={
    playerNamne: playerNamne,
    playerRank: parseFloat(playerRank)
 }

 totalPlayerArray.push(playerObject);
 
// console.log(totalPlayerArray);
// console.log(totalPlayerArray.length);

 document.getElementById("added-player").innerText=totalPlayerArray.length;

 display();
}