$(':submit').on("click", function () {
    var name = $('#name').val();
    var subject = $('#subject').val()
    var message = $('#message').val()
    var form = $('form')

    var mail = `mailto:eddyyang@berkeley.edu?subject=${subject}&body=${message}`

    form.attr("action", mail)    
})

