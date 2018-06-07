$(document).ready(function () {
    $('#hide button').click(function () {
        $('p').hide()
    })

    $('#toggle button').click(function () {
        $('div').toggle(1000)
    })
})