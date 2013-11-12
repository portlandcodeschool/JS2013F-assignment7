// This is the core JS file

function postTemplate (post) {
    return "<div class=\"post\"><h2>" + post.title + "</h2>\n" +
           "<p>" + post.text + "</p>\n" +
           "<p class=\"signature\">" + post.author + "</p></div>";
}
var posts = [
    {
        title: "The Inca Trail",
        author: "Herman Hesse",
        text: "The Inca Trail to Machu Picchu (also known as Camino Inca or Camino Inka) consists of three overlapping trails: Mollepata, Classic, and One Day. Mollepata is the longest of the three routes with the highest mountain pass and intersects with the Classic route before crossing Warmiwa&#241;usqa (\"dead woman\")."
    },
    {
        title: "Dangerous Beasts and Where to Find Them",
        author: "J. K. Rowling",
        text: "Spiders. Not tiny spiders like those surging over the leaves below. Spiders the size of carthorses, eight-eyed, eight-legged, black, hairy, gigantic. The massive specimen that was carrying Harry made its way down the steep slope toward a misty, domed web in the very centre of the hollow, while its fellows closed in all around it, clicking their pincers excitedly at the sight of its load."
    },
    {
        title: "Asteroid 4942 Munroe",
        author: "Randall Munroe",
        text: "Amazing xkcd readers Lewis Hulbert and Jordan Zhu noticed that the International Astronomical Union--the organization in charge of official astronomical naming--was taking suggestions for what to name small Solar System objects. They submitted my name for asteroid (4942) 1987 DU6, and it was subsequently renamed 4942 Munroe."
    },
    {
        title: "Strata",
        author: "Tycho Brahe",
        text: "We have turned to people &quot;in the company&quot; to sort of project manage the things we want to accomplish.  Jeff regularly harangues me about the Lookouts novel, and Mike Hayes (nee Fehlauer) prods Gabriel until he starts sanding the edges on the Thornwatch GM's Guide.  Too hard at work, frankly.  There's too much focus.  He needs to ease off the throttle a bit, to reintroduce those lumps and failures and delicious oversights that have brought me such comfort in the past, that ones that have so pleasantly situated my place in the universe."
    },
    {
        title: "Backbone.js Guide",
        author: "Julio Cesar Ody",
        text: "The rule of thumb is get the hell away from the DOM. You won't read from it ever (e.g.: getting an element's class name, or the length of a list counts as that), because your data layer knows what has what value and in what state anything is at any given time. You'll write to the DOM only by rendering views. If you like this approach, it's totally ok to use just regular JS or jQuery."
    }

];

$(document).ready(function () {

    posts.forEach(function (item) {
      $('.aside ul').append("<li>" + item.title + "</li>");
      $('#post-box').append(postTemplate(item));
    });
    
    $('.post h2').css({
      'color': '#FF0000'
    });

    $('.post p:nth-child(2)').css('font-size', '1.2em');

    $('h2').on('click', function() {
      $(this).parent().find('p').slideToggle();
    });

    var widthToggle = 0;

//Expands or Collapse the aside menu
    $('#expand').on('click', function() {
        $('.aside').toggle();
        if (widthToggle === 0) { 
            $('#post-box').width('100%');
            $('#expand').html('Expand Menu');
            widthToggle = 1;
        } else {
            $('#post-box').width('73%');
            $('#expand').html('Collapse Menu');
            widthToggle = 0;
        }
    });
    //Sorts by Title
    $('#sortTitle').on('click', function() {
        posts.sort(function(a,b) {
            if (a.title > b.title)
                return 1;
            if (a.title < b.title)
                return -1;
                return 0;
        });
        $('#post-box').html('<h1 class="blog-title">My Blog</h1>');
        posts.forEach(function (item) {
            $('#post-box').append(postTemplate(item));
        });
        $('.post h2').css({
            'color': '#FF0000'
        });

        $('.post p:nth-child(2)').css('font-size', '1.2em');

        $('h2').on('click', function() {
            $(this).parent().find('p').slideToggle();
        });
    });

    //Sorts by Author
    $('#sortAuthor').on('click', function() {
        posts.sort(function(a,b) {
            if (a.author > b.author)
                return 1;
            if (a.author < b.author)
                return -1;
                return 0;
        });
        
        $('#post-box').html('<h1 class="blog-title">My Blog</h1>');
        posts.forEach(function (item) {
            $('#post-box').append(postTemplate(item));
        });
        $('.post h2').css({
            'color': '#FF0000'
        });

        $('.post p:nth-child(2)').css('font-size', '1.2em');

        $('h2').on('click', function() {
            $(this).parent().find('p').slideToggle();
        });     
    });
});