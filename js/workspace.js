/**
 * Jonathan Reed Mevs
 * July 31, 2017
 * Beginning stages of the News App
 */


// var newsapiKEY = 2461bdbe914f4494a27aa8374d7d976a;



var cnnURL = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=2461bdbe914f4494a27aa8374d7d976a";
var huffingtonpostURL = " https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=top&apiKey=2461bdbe914f4494a27aa8374d7d976a";
var reutersURL = "https://newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=2461bdbe914f4494a27aa8374d7d976a";
var breitbartURL = "https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=2461bdbe914f4494a27aa8374d7d976a";


var CNN = new NewsSource("cnn", cnnURL, "#cnn-news-col", "#cnn-twitter-col", 
            "<a class=\"twitter-timeline\" href=\"https://twitter.com/CNN\">Tweets by CNN</a>" + 
            "<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>", 
            "cnn-top-link");

var HuffingtonPost = new NewsSource("huffpost", huffingtonpostURL, "#huff-post-news-col", "#huff-post-twitter-col",
            "<a class=\"twitter-timeline\" href=\"https://twitter.com/HuffPost\">Tweets by HuffPost</a>" +
            "<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>", 
            "huff-post-top-link");

var Reuters = new NewsSource("reuters", reutersURL, "#reuters-news-col", "#reuters-twitter-col", 
                            "<a class=\"twitter-timeline\" href=\"https://twitter.com/Reuters\">Tweets by Reuters</a>" + 
                            "<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>",
                            "reuters-top-link");            

var Breitbart = new NewsSource("breitbart", breitbartURL, "#breitbart-news-col", "#breitbart-twitter-col", 
                                "<a class=\"twitter-timeline\" href=\"https://twitter.com/BreitbartNews\">Tweets by BreitbartNews</a>" + 
                                "<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>",
                                "breitbart-top-link")                            

display(CNN);
display(HuffingtonPost);
display(Reuters);
display(Breitbart);


function display(news) {
    $.get(news.newsSourceURL, function (data) {
        doEverything(news, data);
    });
}


function doEverything(news, data){
    var article = data.articles[0];
    var headline = article.title;
    displayHeadline(headline, news.newsColID);
    var author = article.author;
    displayAuthor(author, news.newsColID);
    var description = article.description;
    displayDescription(description, news.newsColID);
    var articleLink = article.url; var topLinkName = news.topArticleLink;
    linkToArticle(articleLink, topLinkName, news.newsColID);
    var picID = "\"" + news.source + "-pic\""; var imgSource = article.urlToImage;
    displayImage(picID, imgSource, news.newsColID);
    var dataHeight = " data-height=" + $("#".concat(news.source)).height();
    //returns updated twitter HTML
    news.embeddedTwitterHTML = formatAndDisplayTwitterTimeline(news.embeddedTwitterHTML, dataHeight, news.newsTwitterID);
}
