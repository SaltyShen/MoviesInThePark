/* NOTE
   Querying RESTAPI cannot have null fields. 
   -----------------------------------------
   Make sure to have seperate query for every
   case where some fields would be null.
*/

function ValidationEvent() {
    
    // names returns node list - get[0] element for actual value
    park = document.getElementsByName("park"); park = park[0].value;
    title = document.getElementsByName("title"); title = title[0].value;
    day = document.getElementsByName("day"); day = day[0].value;

    if(park == null){console.log("park is null");}

    limiter = $("#upcomingonly").attr("checked"); /*1 : 0*/
    var date=new Date();
    var today=new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().replace(/T/, ' ').replace(/\..+/, ''); 

    
        $.ajax({
            url: "https://data.cityofchicago.org/resource/7piw-z6r6.json",
            type: "GET",
            data: {

                "$limit" : 5000,
                "$$app_token" : "uLSbrg4uzRCHZyb0hogPfnljL"
                //"day" :  day,
                //"title" : title,
                //"park" : park

            },
            success: function(data){
                alert("Request Successful! \nFound: " + data.length + " entry points.");
            },
            error: function(){
                alert("No values found.");
            }

        }).done(function(data) {
        console.log(data);
        $("#movietable").append(data);
        });

}
