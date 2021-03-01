$(document).ready(function(){
    $('#button-addon1').on('click',function(){
        var inpval = $('#input1').val();
        $('#tweets1 .row').append('<div class="col-md-4 twbox"><div class="tweetContainer">'+inpval+'</div></div>')
        $('#input1').val('');
        $('script').remove();
    })
    $('#button-addon2').on('click',function(){
        var inpval = $('#input2').val();
        $('#tweets2 .row').append('<div class="col-md-4 twbox"><div class="tweetContainer">'+inpval+'</div></div>')
        $('#input2').val('');
        $('script').remove();
    })
    $('#button-addon3').on('click',function(){
        var inpval = $('#input3').val();
        $('#tweets3 .row').append('<div class="col-md-4 twbox"><div class="tweetContainer">'+inpval+'</div></div>')
        $('#input3').val('');
        $('script').remove();
    })
    $('#button-addon4').on('click',function(){
        var inpval = $('#input4').val();
        $('#tweets4 .row').append('<div class="col-md-4 twbox"><div class="tweetContainer">'+inpval+'</div></div>')
        $('#input4').val('');
        $('script').remove();
    })

})