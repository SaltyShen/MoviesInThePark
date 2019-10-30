function ValidationEvent() {
    
    park = document.getElementById("park").value;
    title = document.getElementById("title").value;
    day = document.getElementById("day").value;
    limiter = $("#upcomingonly").attr("checked"); /*1 : 0*/
    var date=new Date();
    var today=new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().replace(/T/, ' ').replace(/\..+/, ''); 


    $.ajax({
        url: "https://data.cityofchicago.org/resource/7piw-z6r6.json",
        type: "GET",
        data: {
        "$limit" : 5000,
        "$$app_token" : "uLSbrg4uzRCHZyb0hogPfnljL",
        "day" :  day,
        "title" : title,
        "park" : park
        }

    }).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
    $("#movietable").append(data);
    });

}
