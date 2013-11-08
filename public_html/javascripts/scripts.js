// This is the core JS file

$(function () {

    var posts = require('./posts');

    $postsbox = $('#post-box > .post');

    $postsbox.html(postsView(posts));

    // posts.forEach(function (item) {
    //   $('.aside ul').append("<li>" + item.title + "</li>");
    //   $('#post-box').append(postTemplate(item));
    // });
    
});

function postsView (posts) {
  view = "";

  posts.forEach(function (item) {
    view += postTemplate(item);
  });

  return $(view);

}

function postTemplate (post) {
    return "<div class=\"post\"><h2>" + post.title + "</h2>\n" +
           "<p>" + post.text + "</p>\n" +
           "<p class=\"signature\">" + post.author + "</p></div>";
}