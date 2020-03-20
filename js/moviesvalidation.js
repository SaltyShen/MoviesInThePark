$(document).ready(function(){
    var api_url = "https://data.cityofchicago.org/resource/7piw-z6r6.json";
    var key = "uLSbrg4uzRCHZyb0hogPfnljL";
    park = document.getElementsByName("park").value;
    title = document.getElementByName("title").value;
    day = document.getElementByName("day").value;

    $(".content a").each(function(index, element){
        $.ajax({
            url: api_url,
            type: "GET",
            data: {
            "$limit" : 5000,
            "$$app_token" : key,
            "day" :  day,
            "title" : title,
            "park" : park,
                success: function(result){
                    console.log(result);
                }
            }
    });
  });
});