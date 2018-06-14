$(document).ready(function () {
    $('.text').click(function () {
        alert('Text: ' + $('.content').text());
    })

    $('.html').click(function () {
        alert('Html: ' + $('.content').html());
    })

    $('.value').click(function () {
        alert('Value: ' + $('#weather').val());
    })

    $('.attr').click(function () {
        alert('Href: ' + $('a').attr('href'));
    })
})