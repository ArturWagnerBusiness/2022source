function addDate(){
    const date = new Date();
    $("#container #side-col .time .hour").css("transform", "rotate(" + (((date.getHours()/12)*360) + (((date.getMinutes()/60)*360)/12) + (((date.getSeconds()/60)*360)/60/12)) + "deg)");
    $("#container #side-col .time .minute").css("transform", "rotate(" + ((date.getMinutes()/60*360)+(date.getSeconds()/60*360)/60) + "deg)");
    $("#container #side-col .time .second").css("transform", "rotate(" + ((date.getSeconds()/60*360)+((date.getMilliseconds()/1000*360)/60)) + "deg)");
    $("#container #side-col .date").html(date.getDate() + "/" + (date.getMonth()+1/*Month shown 1 less error!*/) + "/" + date.getFullYear());
}