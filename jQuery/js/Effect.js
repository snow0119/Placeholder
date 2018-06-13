$(document).ready(function () {
    $('#hide button').click(function () {
        $('#hide p').hide()
    })

    $('#toggle button').click(function () {
        $('#toggle p').toggle(1000)
    })

    $('#fadeIn button').click(function () {
        $('#first').fadeIn();
        $('#second').fadeIn(3000);
        $('#third').fadeIn("slow");
    })
})