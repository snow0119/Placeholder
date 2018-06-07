$(document).ready(function () {
    $('#hide button').click(function () {
        $('#hide p').hide()
    })

    $('#toggle button').click(function () {
        $('#toggle p').toggle(1000)
    })
})