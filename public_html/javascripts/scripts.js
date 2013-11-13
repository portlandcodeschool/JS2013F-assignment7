// This is the core JS file

$(function () {

  var posts = require('./posts');

  posts.forEach(function (item) {
    $('.aside ul').append("<li>" + item.title + "</li>");
    $('#post-box').append(postTemplate(item));
  });

  $('.aside li').click(function (e) {
    $('.post h2:contains(\'' + this.innerText + '\')').nextAll().slideToggle();
  });

  $('.post h2').css('color','red').click(function (e) {
    $(this).nextAll().slideToggle();
  });

  $('.post p').not('.signature').css('font-size', '1.2em');

  var asideIsHidden = false;
  $('#hide-sidebar').click(function () {

    if (!asideIsHidden) {
      asideIsHidden = true;
      $('#post-box').animate({width: "100%"}, { duration: 200, queue: false });

      $('.aside').toggle();
    } else {
      asideIsHidden = false;
      $('#post-box').animate({width: "73%"}, 200, function () {
        $('.aside').toggle();
      });
    }
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