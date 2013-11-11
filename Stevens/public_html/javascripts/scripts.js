// This is the core JS file

$(document).ready(function () {
  console.log("I see the scripts.js file.");

    var posts = require('./posts');

    //var $postsbox = $('#post-box > .post');
    //# is for id, . is for class
    //get me all the html that has a class .post and is a direct child
    //of id post-box.

    //$postsbox.html(postsView(posts));

    //we are setting the postsbox.html to be the function postsView
    //that returns a string of html

    posts.forEach(function (item) {
      $('.aside ul').append("<li>" + item.title + "</li>");
       $('#post-box').append(postTemplate(item));
       console.log("I see this forEach function");
    });

    $('.post h2').css('color', 'red');
    $('.post:nth-child(2)').css('font-size', '1.2em');
    
    $('.post h2').on('click', function() {
        $(this).parent().hide();
      });

    $('.post h2').on('click', function() {
        $(this).parent().slideToggle();
    });

/*

HIGH
    $('.aside').on('click', 'btn btn-primary', function(){
      $(this).hide();
      $(this).css({'width': '100%'});
    });
HIGHER
    $('.aside').on('click', 'btn btn-primary', function() {
      $(this.).toggle(showOrHide);
    });
*/



});

/*
function postsView (posts) {
  view = "";

  posts.forEach(function (item) {
    view += postTemplate(item);
  });

  return $(view);

}
*/

function postTemplate (post) {
    return "<div class=\"post\"><h2>" + post.title + "</h2>\n" +
           "<p>" + post.text + "</p>\n" +
           "<p class=\"signature\">" + post.author + "</p></div>";
}