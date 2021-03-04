$(document).ready(function(){

    var arr = [];
    if(document.cookie != null){
        var tmp = document.cookie.split('; ');
        for(var i=0;i<tmp.length;i++){
            var data = tmp[i].split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
        }
    }

    //alert(arr['tweets4']);

    if( arr != null ){
        for(var n=1;n<5;n++){
            var twindex = 'tweets' + n;
            if( arr[twindex] !=null ){
                var twlink = arr[twindex].split('???');
                for(var c=0;c<twlink.length;c++){
                    if( arr[twindex] != null ){
                        $('#' + twindex + ' .row').append('<div class="col-md-4 twbox"><div class="tweetContainer"><blockquote class="twitter-tweet"><a href=' + decodeURIComponent(twlink[c]) + '></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div></div>');
                        //alert(twlink[c]);
                    }
                }
            }
        }
    }



    $('.btn-outline-secondary').on('click',function(){
        var inpval = $('.active .form-control').val();
        var id_name = $(this).parents('.active').attr('id');
        $('.active .row').append('<div class="col-md-4 twbox"><div class="tweetContainer"><blockquote class="twitter-tweet"><a href=' + inpval + '></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div></div>');
        $('.form-control').val('');
        $('script').remove();
        for(var n=1;n<5;n++){
            var twindex = 'tweets' + n;
            if( id_name == twindex ){
                if( arr[twindex] != null){
                    document.cookie = twindex + '=' + arr[twindex]+ encodeURIComponent(inpval) + '???';
                    arr[twindex] = arr[twindex]+ (encodeURIComponent(inpval)) + '???';
                }else{
                    document.cookie = twindex + '=' + encodeURIComponent(inpval) + '???';
                    arr[twindex] = (encodeURIComponent(inpval)) + '???';
                }
            }
        }
    })

})