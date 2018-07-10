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

$('#delete').click(function() {
    //do an ajax request to delete this tab
    var id = $('.id').attr("data-id")
    console.log(id);
    $.ajax({
        type:'DELETE',
        url:'/tabsLibrary/' + id,
        success: function(res) {
            alert('item was deleted');
        },
        error: function() {
            alert('there was an error');
        }
    })
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
