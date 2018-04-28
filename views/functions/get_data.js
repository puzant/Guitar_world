$('.card').hide();
$('.btn.btn-danger').hide()

$(".btn.btn-primary").click(function() {
    $('.card').fadeIn(1000);
    $('.btn.btn-danger').fadeIn(1000);
})

$('.btn.btn-danger').click(function() {
    $('.card').fadeOut(1000);
})

$('#deleteTab').click(function() {
    //do an ajax request to delete this tab
    alert('ok');
})