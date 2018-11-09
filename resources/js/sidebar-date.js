function addDate(){
    const date = new Date();
    $("#container #side-col .time .hour").css("transform", "rotate(" + (date.getHours()/12*360) + "deg)");
    $("#container #side-col .time .minute").css("transform", "rotate(" + (date.getMinutes()/60*360) + "deg)");
    $("#container #side-col .date").html(date.getDate() + "/" + (date.getMonth()+1/*Month shown 1 less error!*/) + "/" + date.getFullYear());
}