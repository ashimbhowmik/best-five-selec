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
