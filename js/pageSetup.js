$(document).ready(function () {

    var cardCounter = 0;

    $("#footer").html("<p>report improvements and bugs <a href='https://github.com/madcap/griftlands-starting-card-upgrades'>here</a></p>");

   $(".table").on('click', '.choiceSelect', function() {
       let cardId = this.name.replace('choice-', '');
       let row = $("#"+cardId);
       let leftCell = $("#"+cardId+'-left');
       let rightCell = $("#"+cardId+'-right');
       if(this.value === 'destroy') {
           console.log("destroy " + cardId);
           row.addClass('table-dark');

           leftCell.removeClass('table-danger');
           rightCell.removeClass('table-danger');
           leftCell.removeClass('table-success');
           rightCell.removeClass('table-success')
       }
       if(this.value === 'keepLeft') {
           console.log("keep left " + cardId);
           row.removeClass('table-dark');

           leftCell.removeClass('table-danger');
           leftCell.addClass('table-success');
           rightCell.removeClass('table-success');
           rightCell.addClass('table-danger');
       }
       if(this.value === 'keepRight') {
           console.log("keep right " + cardId);
           row.removeClass('table-dark');

           leftCell.removeClass('table-success');
           leftCell.addClass('table-danger');
           rightCell.removeClass('table-danger');
           rightCell.addClass('table-success');
       }
   });

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
        let cardId = cardName + cardCounter;
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


        tableBody.append("<tr id='" + cardId + "'><th scope='row'>" + cardName + destroy + "</th><td id='" + cardId + "-left'>" + select + keepLeft + "</td><td id='" + cardId + "-right'>" + select + keepRight + "</td></tr>");
    }

    negotiationCards.forEach(setupNegotiationCard);
    battleCards.forEach(setupBattleCard);

});