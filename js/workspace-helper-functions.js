function NewsSource(source, newsSourceURL, newsColID, newsTwitterID, embeddedTwitterHTML, topArticleLink){
    //News Source Name
    this.source = source;
    //API Request URL
    this.newsSourceURL = newsSourceURL;
    //HTML news Column ID
    this.newsColID = newsColID;
    //HTML news Twitter Feed ID
    this.newsTwitterID = newsTwitterID;
    //Embedded twitter HTML. Provided by publish.twitter.com
    this.embeddedTwitterHTML = embeddedTwitterHTML;
    //HTML ID for the top article
    this.topArticleLink = topArticleLink;
}

function displayHeadline(headline, newsColID){
    $(newsColID).append("<h1>" + headline + "</h1>");
}

function displayAuthor(author, newsColID){
    if(author != null){
        $(newsColID).append("<h2>Written by: " + author + ".");
    }
}

function displayDescription(description, newsColID){
    $(newsColID).append("<p>" + description + "</p>");
}

function linkToArticle(articleLink, topLinkName, newsColID){
    $(newsColID).append("<a target=\"_blank\" id=\"" + topLinkName + "\"href=" + "\"" + articleLink + "\"" + ">");
    //for id referencing
    topLinkName = "#".concat(topLinkName);
    $(topLinkName).append("View Article Here");
}

function displayImage(picID, imgSource, newsColID){
    $(newsColID).append("<img class=\"news-pic\" id=" + picID + "src=" + imgSource + ">");
}

function formatAndDisplayTwitterTimeline(embeddedTwitterHTML, dataHeight, newsTwitterID){
    var tempHTML = embeddedTwitterHTML.substring(0,2) + dataHeight + embeddedTwitterHTML.substring(2, embeddedTwitterHTML.length + 1);
    $(newsTwitterID).append(tempHTML);
    return tempHTML;
}