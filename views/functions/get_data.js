$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$('.card').hide();
$('.btn.btn-danger').hide()

$(".btn.btn-primary").click(function() {
    $('.card').fadeIn(1000);
    $('.btn.btn-danger').fadeIn(1000);
})

$('.btn.btn-danger').click(function() {
    $('.card').fadeOut(1000);
    $('.btn.btn-danger').fadeOut(2000)    
})

$("#delete").on('click', function() {
    alert('hello delete');
})


$('#update').click(function() {
    let ID = $('.id').attr('data-id')
    console.log(ID)
})

$('.switch').change(function() {     //toggle function to change the background-color
    $('body').toggleClass('night')
    $('.card').toggleClass('night');
    $('input[type="text"]').toggleClass('night');
    // $('.fa-sun').Toggle();
})
