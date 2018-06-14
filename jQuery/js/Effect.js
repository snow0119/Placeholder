$(document).ready(function () {
    $('#hide button').click(function () {
        $('#hide p').hide()
    })

    $('#toggle button').click(function () {
        $('#toggle p').toggle(1000)
    })

    $('#fadeIn').click(function () {
        $('#first').fadeIn();
        $('#second').fadeIn(3000);
        $('#third').fadeIn("slow");
    })

    $('#fadeOut').click(function () {
        $('#first').fadeOut();
        $('#second').fadeOut(3000);
        $('#third').fadeOut("slow");
    })

    $('#fadeToggle').click(function () {
        $('#first').fadeToggle();
        $('#second').fadeToggle(3000);
        $('#third').fadeToggle('fast');
    })

    $('#fadeTo').click(function () {
        $('#first').fadeTo(3000, 0.5);
        $('#second').fadeTo(300);
        $('#third').fadeTo('fast');
    })

    $('#slideDown').click(function () {
        $('.content').slideDown("slow");
    })

    $('#slideUp').click(function () {
        $('.content').slideUp("slow");
    })


    $('#slideToggle').click(function () {
        $('.content').slideToggle("fast")
    })

    $('#move').click(function () {
        $('.color-block').animate({left: '200px'}, 5000)
    })

    $('.stop').click(function () {
        $('.color-block').stop();
    })

    $('.bigger').click(function () {
        $('.color-block').animate({
            left: '600px',
            width: '300px',
            height: '+=10px'
        })
    })

    $('.toggle').click(function () {
        $('.color-block').animate({
            height: 'toggle'
        })
    })

    $('.change').click(function () {
        var div = $('.color-block');
        div.animate({width: '100px', left: '200px', backgroundColor: 'green'}, 'slow')
        div.animate({width: '150px', left: '200px', top: '200px', backgroundColor: 'purple'}, 'slow')
        div.animate({width: '100px', left: '20px', top: '200px', backgroundColor: 'gray'}, 'slow')
        div.animate({width: '80px', left: '20px', top: '30px', backgroundColor: 'pink'}, 'slow')
        div.animate({fontSize: '40px'})
    })
})