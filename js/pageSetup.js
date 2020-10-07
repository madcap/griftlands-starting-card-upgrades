$(document).ready(function () {
    console.log("ready!");

    var cardCounter = 0;

    function setupNegotiationCard(cardName) {
        let tableBody = $("#negotiationTableBody");
        setupCard(cardName, tableBody);
    }

    function setupBattleCard(cardName) {
        let tableBody = $("#battleTableBody");
        setupCard(cardName, tableBody);
    }

    function setupCard(cardName, tableBody) {
        cardCounter++;
        let cardId = cardName+cardCounter
        console.log("adding card " + cardId + " to tableBody " + tableBody.attr("id"));
        let choices = cards[cardName].choices;

        // build a select dropdown
        let select = "<select id='" + cardId + "'><option></option>";
        choices.forEach(function (choice) {
            let option = "<option>" + choice + "</option>";
            select = select + option;
        });
        select = select + "</select>";

        // radio buttons
        let destroy = ' &nbsp; <input class="choiceSelect" type="radio" name="choice-' + cardId + '" value="destroy">';
        let keepLeft = ' &nbsp; <input class="choiceSelect" type="radio" name="choice-' + cardId + '" value="keepLeft">';
        let keepRight = ' &nbsp; <input class="choiceSelect" type="radio" name="choice-' + cardId + '" value="keepRight">';


        tableBody.append("<tr id='" + cardId + "'><th scope='row'>" + cardName + destroy + "</th><td>" + select + keepLeft + "</td><td>" + select + keepRight + "</td></tr>")
    }

    negotiationCards.forEach(setupNegotiationCard);
    battleCards.forEach(setupBattleCard);

});