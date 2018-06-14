$(document).ready(function () {
    $('.text').click(function () {
        alert('Text: ' + $('.content').text());
    })

    $('.html').click(function () {
        alert('Html: ' + $('.content').html());
    })
})