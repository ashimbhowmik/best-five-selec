
const selectionPlayerDiasbled = document.getElementsByClassName('player-selection');
for ( let i = 0 ; i < selectionPlayerDiasbled.length ; i++ ){
    let selectionPlayer = selectionPlayerDiasbled[i];
    selectionPlayer.addEventListener('click',function(event){
        event.target.style.backgroundColor = 'gray';
        document.getElementById('selectionPlayer');
        selectionPlayer.setAttribute('disabled',true);
        
    })
}

function addToSelectedPlayer(element) {
    
    const playerSelected = element.parentNode.children[1].innerText;



    const addPlayer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = playerSelected;
    li.classList.add('listPlayer');
    addPlayer.appendChild(li);
  
    // const listed = document.querySelectorAll('li');
    // for (const lists of listed) {
    //     lists.style.margin = '100px';
    // }

    const listed = document.getElementsByClassName('listPlayer');
    for (const lists of listed) {
        lists.style.margin = '10px';
    }
}

document.getElementById('calculate-btn').addEventListener('click',function(){
   
     
    const perPlayerAmount = getElementTextValue('per-player');
    

    const playerExpenses = perPlayerAmount * 5 ;
    
    getElementText('player-expenses',playerExpenses);

});


document.getElementById('calculate-total').addEventListener('click',function(){
    
     
    const managerAmount = getElementTextValue('manager-amount');

    const cocahAmount = getElementTextValue('cocah-amount');


    const totalExpenses = getElementTextAmount('player-expenses');

    const calculateTotalAMount = managerAmount + cocahAmount + totalExpenses ;

    getElementText('total-cost',calculateTotalAMount);
    
});

