var resultHTML;

$('.btn-shorten').on('click', function(){

    var url = encodeURIComponent($('#url-field').val();
                                 
    $.post( "/add",{ url: url }).done(function( data ) {
        if(data.responseJSON.message.key){
            var outUrl = "https://fuckthe.gop/" + data.responseJSON.message.key;
            resultHTML = '<a class="result" id="foo" target="_blank" href="' + outUrl + '">'+ outUrl + '</a>';
        }
        else{
            resultHTML = 'invalid url.'
        }
    });
    
});

$("#url-field").keyup(function(event){
    if(event.keyCode == 13){
        $(".btn-shorten").click();
    }
});
