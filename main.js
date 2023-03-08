//click
$(document).ready(function() {
    $('.thumb a').click(function(e) {
        e.preventDefault();
        $('.imgBox img').attr('src', $(this).attr('href'));
    })
})

/*
//mouseover
$(document).ready(function() {
    $('.thumb a').mouseover(function(e) {
        e.preventDefault();
        $('.imgBox img').attr('src', $(this).attr('href'));
    })
})
 */