
function getElementTextValue(playerAmount) {

    const givenAmountOfPlayers = document.getElementById(playerAmount);
    const totalamountStrings = givenAmountOfPlayers.value;
    const totalamounts = parseFloat(totalamountStrings);

    return totalamounts;
}



function getElementTextAmount(amount) {

    const givenAmountOfPlayer = document.getElementById(amount);
    const totalamountString = givenAmountOfPlayer.innerText;
    const totalamount = parseFloat(totalamountString);

    return totalamount;
}

function getElementText(amountPlayer, playerValue) {

    const playerAmount = document.getElementById(amountPlayer);
    playerAmount.innerText = playerValue;

}
