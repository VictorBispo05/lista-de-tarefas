$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefaInput').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);
        $(novaTarefa).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefaInput').val('')

        $('li').click(function() {
            $(this).addClass("Concluido")
        })
    })
})
