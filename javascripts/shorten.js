var resultHTML;

$('.btn-shorten').on('click', function(){

    var callback = function(result){
        if(result.status_code == 200){
            var data = result.data;    
            data.url = data.url.replace(/^(http:\/\/)/, 'https://');
            resultHTML = '<a class="result" id="foo" target="_blank" href="' + data.url + '">'+ data.url + '</a>';
        }else{
            resultHTML = 'invalid url.'
        }
        $('#link').html(resultHTML);
        $('#link').hide().fadeIn('slow');
        $('#url-field').focus();
    };
    //https://api-ssl.bitly.com/v3/shorten?access_token=edad456550011a6323775d4ca83f4e459ee2028b&domain=fuckthe.gop&longUrl=http%3A%2F%2Fgoogle.com%2F&format=json
    
    if(!/^(https?:\/\/)/.test($('#url-field').val())){
        $('#url-field').val('http://' + $('#url-field').val());
    }
    
    $.getJSON("https://api-ssl.bitly.com/v3/shorten?longUrl="+encodeURIComponent($('#url-field').val())+"&domain=fuckthe.gop&access_token=69a54c096240838a7d09a908fc021a5f12fca7e8&callback=?", callback);

});

$("#url-field").keyup(function(event){
    if(event.keyCode == 13){
        $(".btn-shorten").click();
    }
});
