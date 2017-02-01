$('.btn-shorten').on('click', function(){

var callback = function(data){
    data = data.data;
    console.log(data);
        var resultHTML = '<a class="result" id="foo" target="_blank" href="' + data.url + '">'
            + data.url;
        $('#link').html(resultHTML);
        $('#link').hide().fadeIn('slow');
    };
//https://api-ssl.bitly.com/v3/shorten?access_token=edad456550011a6323775d4ca83f4e459ee2028b&domain=fuckthe.gop&longUrl=http%3A%2F%2Fgoogle.com%2F&format=json
 $.getJSON("https://api-ssl.bitly.com/v3/shorten?longUrl="+encodeURIComponent($('#url-field').val())+"&domain=fuckthe.gop&access_token=edad456550011a6323775d4ca83f4e459ee2028b&callback=?", callback);

});
