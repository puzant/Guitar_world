   $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip(); 
   })

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
    var id = $(this).find( 'p.id' ).attr('data-id');
    console.log(id);
})


$('.id').click(function() {
    let ID = $(this).attr('data-id')
    console.log(ID)
    $('#update').on('click', function() {
        alert(ID);
        var obj = {
            name: $('#tab-name').val(),
            composer: $('#composer-name').val(),
            genre: $('#genre-name').val(),
            image: $('#image-url').val()
        }
        console.log(obj);        
    })
})


$('.switch').change(function() {     //toggle function to change the background-color
    $('body').toggleClass('night')
    $('.card').toggleClass('night');
    $('input[type="text"]').toggleClass('night');
})

$('.X').hide()

$('.submit').keypress(function() {
    $('.X').fadeIn('slow');
    $(this).focus();
});

$(".X").click(function() {
    $(this).closest('.submit').find("input[type=text]").val("");
        $('.X').fadeOut();
});

