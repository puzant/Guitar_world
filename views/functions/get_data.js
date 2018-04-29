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

$('.upload-btn').click(function() {
    var ID = $(".id").attr("data-id");
    console.log(ID)

})

$("#update").click(function() {
    var ID = $('.id').attr("data-id");
    var name = $("input[name=name]").val();
    var composer = $("input[name=composer]").val();
    var genre = $("input[name=genre]").val();
    var image = $("input[name=image]").val();
    var data = {
        name: name,
        composer: composer,
        genre: genre,
        image: image
    }
    $.ajax({
        type:'PUT', 
        data: data,
        url: '/tabsLibrary/' + id,
        success: function(res) {
            alert('itme was updated');
        }
    })
})