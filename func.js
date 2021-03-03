$(document).ready(function(){
    var cookies = document.cookie;
    var cookiesArray = cookies.split(';');
    for(var c of cookiesArray){
        var cArray = c.split('=');
        if( cArray[0] == 'tweeturl1'){
            $('#tweets1 .row').append('<div class="col-md-4 twbox"><div class="tweetContainer">'+decodeURIComponent(cArray[1])+'</div></div>')
        }
    }


    $('.btn-outline-secondary').on('click',function(){
        var inpval = $('.active .form-control').val();
        var containedinp = '<div class="col-md-4 twbox"><div class="tweetContainer">' + inpval + '</div></div>';
        var id_name = $(this).parents('.active').attr('id');
        $('.active .row').append(containedinp);
        $('.form-control').val('');
        $('script').remove();
        if( id_name == 'tweets1' ){
            for(var c of cookiesArray){
                var cArray = c.split('=');
                if( cArray[0] == 'tweeturl1'){
                    //リスト１にcookieが存在する場合
                    var cookie1 = cArray[1] + encodeURIComponent(containedinp);
                    document.cookie = "tweeturl1=" + cookie1;//cookieに情報を上書き
                }else{//リスト1にcookieがない場合cookieに書き込み
                    document.cookie = "tweeturl1=" + encodeURIComponent(containedinp);
                }
            }
        }

    })

})