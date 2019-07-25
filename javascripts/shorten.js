var resultHTML;

$('.btn-shorten').on('click', function(){
    var url = $('#url-field').val();
    if(url){
        if(!/^(https?:\/\/)/.test(url)){
            url = 'http://' + $('#url-field').val();
            $('#url-field').val(url);
        }                             
        $.post( "/add",{ url: url }).done(function( data ) {
            if(data.message.key){
                var outUrl = "https://fuckthe.gop/" + data.message.key;
                resultHTML = '<a class="result" id="foo" target="_blank" href="' + outUrl + '">'+ outUrl + '</a>';
            }
            else{
                resultHTML = 'invalid url.'
            }
            $('#link').html(resultHTML);
            $('#link').hide().fadeIn('slow');
            $('#url-field').focus();
        });
    }    
});

$("#url-field").keyup(function(event){
    if(event.keyCode == 13){
        $(".btn-shorten").click();
    }
});

$('.btn-copy').on('click', function(){
    copyToClipboard($('#link'));
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
