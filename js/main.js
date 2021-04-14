/*******************************************
 * TODO APP
 *******************************************/
 $(document).ready(function () {

    // LISTA PRECOMPILATA
    var todoItems = [
        {
            text: 'Pane di segale',
            completed: false,
        },
        {
            text: 'Yogurt greco',
            completed: false,
        },
        {
            text: 'Insalata',
            completed: true,
        },
        {
            text: 'Pomodorini',
            completed: false,
        },
    ];    

    // Refereces
    var list = $('.todos');
    var newInput = $('.add-todo')
    var template = $('#template li') // riferimento al template in HTML

    // POPOLAZIONE TODO LIST
    for(var i = 0; i < todoItems.length; i++){
        var todo = todoItems[i];
        // template 
        var item = template.clone();
        item.find('.text').text(todo.text);

        // Aggiunsta class completed per todo completati
        if(todo.completed){
            item.find('.text').addClass('completed');
        }


        // Aggiunta alla lista
        list.append(item);
    }

    // INSERIMENTO NUOVO TODO
    newInput.keyup(function(event) {

        // Nuovo inserimento con tasto invio
        if(event.which == 13){
            var text = newInput.val().trim();

            if(text !== ''){
                // templete
                 var item = template.clone();
                 item.find('.text').text(text);
                 list.append(item);

                 //reset
                 newInput.val('');
            }
        }
    });

    // RIMOZIONE TODO ITEM
    $('body').on('click', '.todos li i', function(){
        $(this).parent().remove();
    });
    
    // TODO COMPLETATO
    $('body').on('click', '.todos li span', function(){
        $(this).toggleClass('completed');
    });

//End doc ready
});