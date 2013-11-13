// This is the core JS file

$(function () {

    var posts = require('./posts');

    $postsbox = $('#post-box > .post');

    $postsbox.html(postsView(posts));

    $("#hide-sidebar").click(function() {
        $('.aside').slideToggle();
        $('#post-box').toggleClass('post-box-thick');
    });

    $("#sort-title").click(function() {
        $('.post').remove();

        posts.sort(function (a, b) {
          if(a.title < b.title) return -1;
          if(a.title > b.title) return 1;
          return 0;
        });

        posts.forEach(function(item){
          $('#post-box').append(postTemplate(item));
        });
    });

     $("sort-author").click(function() {
        $('.aside').slideToggle();
    });

    $('.post p').css("font-size", '1.2em');

    $('.post h2').css('color', 'red').on('click', function() {
      $(this).nextAll().slideToggle();
    });

    $('ul li').click(function(e) {
      $('.post h2:contains(\'' + this.innerText + '\')').nextAll().slideToggle();
    });
    
});

function postsView (posts) {
  view = "";

  posts.forEach(function (item) {
    $('.aside ul').append("<li>" + item.title + "</li>");
    view += postTemplate(item);
  });

  return $(view);

}

function postTemplate (post) {
    return "<div class=\"post\"><h2>" + post.title + "</h2>\n" +
           "<p>" + post.text + "</p>\n" +
           "<p class=\"signature\">" + post.author + "</p></div>";
}



$(document).ready(function() {
    var name = this
    $('.title-list').on('click', 'li', function() {
        $(".postX").slideToggle();
    });
});

