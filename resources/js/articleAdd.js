function artilceAdd(link){
    $("#content").append("<article class=\"post-" + link.replace(/[-\/\\^$*+?.()|[\]{}]/g, "-") + "\"> </article>");
    $("#content .post-" + link.replace(/[-\/\\^$*+?.()|[\]{}]/g, "-")).load("/resources/articles/" + link + "/post.html");
};
function articleLoad(){
    postnumber = postnumber + 5;
    for (var i = 0; i <= 4; i++) {
        artilceAdd(articleList[(i + postnumber)]);
    };
}