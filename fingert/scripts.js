// This is the core JS file
var posts = require('./posts');
$(function () {

  var posts = require('./posts');
  

  $postsbox = $('#post-box > .post');
  $postsbox.html(postsView(posts));


  $('.post h2').css('color', 'red');
  $('.post h2 + p').css('font-size', '2em');

//trying to display all post titles in aside bar
  $aside = $('.title-list');
  $aside.html(postsTitle(posts));


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

//trying to display posts titles in aside bar
function postTitle (post) {
  return "<ul class=\"title-list\">" + post.title + "</ul>\n";
}

//removes corresponding post 
$('.title-list li').on('click', function(event) {

  $('h2').each(function(thisElement){
    if (event.target.innerText  === $(this).text()) {
      $(this).parent().remove();
    }
  });

});


//trying to order the titles for button event, not currently being called
function titleOrder (post) {
  // var titleArray = [];
  // posts.forEach(function (title){
  //   titleArray.push(posts.title);
  //   var sortedTitles = titleArray.sort();
  //   });
  // return sortedTitles;

  return post.sort();
}



//this button won't toggle the post-box back to normal size
     $('.btn-info').click(function() {
      $('.aside').slideToggle("slow", function () {
        $('#post-box').width("100%");
        //   function (){
        //   $('#post-box').width("73%");
        // });
        // });
        });
      });

//this is the post-alphabetizing button
     // $('btn-inverse').click(function(){
     //    titleOrder ();
     //    }

     
/*
<script>
var modWidth = 50;
$( "div" ).one( "click", function() {
  $( this ).width( modWidth ).addClass( "mod" );
  modWidth -= 8;
});
</script> */


// beefy ./javascripts/scripts.js:js/main.js --live
