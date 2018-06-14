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
})