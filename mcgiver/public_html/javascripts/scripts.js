// This is the core JS file

$(function () {

    var posts = require('./posts');

    var $postsbox = $('#post-box > .post');

    // $postsbox.html(postsView(posts));

    posts.forEach(function (item) {
      $('.aside ul').append("<li>" + item.title + "</li>");
        $(.aside ul).on(click(function(){
          $
        }
      $('#post-box').append(postTemplate(item));

    });

      $('.post > h2').css('color', 'red');
      $('.post > p').css("font-size", '1.2em');
    
});

// function postsView (posts) {
//   view = "";

//   posts.forEach(function (item) {
//     view += postTemplate(item);
//   });

//   return $(view);

// }

function postTemplate (post) {
    return "<div class=\"post\"><h2 data-id=0>" + post.title + "</h2>\n" +
           "<p>" + post.text + "</p>\n" +
           "<p class=\"signature\">" + post.author + "</p></div>";
}