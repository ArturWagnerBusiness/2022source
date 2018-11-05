function addDate(){
    const date = new Date();
    $("#container #side-col .date").html(+ date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
    $("#container #side-col .time").html(+ date.getHours() + ":" + date.getMinutes() + " (" + date.getSeconds() + ")");
}