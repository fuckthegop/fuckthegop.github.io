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
                resultHTML = '<a class="result" id="url" target="_blank" href="' + outUrl + '">'+ outUrl + '</a>';
                resultHTML += '<button type="button" class="btn btn-info btn-clipboard" title="">Copy</button>'
            }
            else{
                resultHTML = 'invalid url.'
            }
            $('#link').html(resultHTML);
            $('#link').hide().fadeIn('slow');
            $('#url-field').focus();
            $('.btn-clipboard').on('click', function(){
                copyToClipboard($('#url'));
            });
        });
    }    
});

$("#url-field").keyup(function(event){
    if(event.keyCode == 13){
        $(".btn-shorten").click();
    }
});



function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
