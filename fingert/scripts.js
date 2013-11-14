// This is the core JS file
var posts = require('./posts');
$(function () {

  var posts = require('./posts');
  

  $postsbox = $('#post-box > .post');
  $postsbox.html(postsView(posts));


   $('.post h2').css('color','red').click(function (e) {
    $(this).nextAll().slideToggle('slow');
  });
  $('.post h2 + p').css('font-size', '2em');


  posts.forEach(function (item) {
    $('.aside ul').append("<li>" + item.title + "</li>");
    $('#post-box').append(postTemplate(item));
  });



     $('.post p').not('.signature').css('font-size', '1.2em');
    // $('.aside li').click(function (e) {
    // $('.post h2:contains(\'' + this.innerText + '\')').nextAll().slideToggle();
    // });


//   $('.aside ul li').on('click', function(event) {
//   console.log("YO!");
//   $('.post').each(function(thisElement){
//     if (event.target.innerText  === $(thisElement.title).text()) {
//       $(thisElement).parent().remove();
//     }
//   });
// });



function postsView (posts) {
  view = "";

  posts.forEach(function (item) {
    view += postTemplate(item);
  });
  return $(view);
}


var isAsideHidden = false;
$('#page-toggler').click(function() {
  $('.aside').slideToggle("slow", function () {
    if (isAsideHidden === false) {
      isAsideHidden = true;
      $('#post-box').width("100%");
    } else {
      isAsideHidden = false;
      $('#post-box').width("73%");
    }

  });
});


$('#sort-title').click(function () {
    $('.post').remove();

    posts.sort(function (a, b) {
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
   });

    posts.forEach(function (item) {
      $('#post-box').append(postTemplate(item));
    });

  });

  $('#sort-author').click(function () {
  $('.post').remove();

  posts.sort(function (a, b) {
    if(a.author < b.author) return -1;
    if(a.author > b.author) return 1;
    return 0;
  });

  posts.forEach(function (item) {
    $('#post-box').append(postTemplate(item));
  });

  });

});


function postTemplate (post) {
  return "<div class=\"post\"><h2>" + post.title + "</h2>\n" +
  "<p>" + post.text + "</p>\n" +
  "<p class=\"signature\">" + post.author + "</p></div>";
}

}); //end ready!