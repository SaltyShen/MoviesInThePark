/* NOTE
   Querying RESTAPI cannot have null fields. 
   -----------------------------------------
   Make sure to have seperate query for every
   case where some fields would be null.
*/

function ValidationEvent() {

    var park = document.getElementById("park").value;
    var title = document.getElementById("title").value;
    var day = document.getElementById("day").value;

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

        }).done(function(data){
            alert("API Call Successful! \nFound: " + data.length + " entry points.");
            insertData(data);
        })
        .fail(function(){ alert("API Call failed: No data returned.")});
    }
function insertData(data){

    let table = document.getElementById("movieTable").getElementsByTagName('tbody')[0];
    data.forEach(movie => {

        let newRow = table.insertRow(-1);     
        let parkCell = newRow.insertCell(0);
        let titleCell = newRow.insertCell(1);
        let dayCell = newRow.insertCell(2);

        let parkText = document.createTextNode(movie.park);
        let titleText = document.createTextNode(movie.title);
        let dayText = document.createTextNode(movie.day);

        parkCell.appendChild(parkText);
        titleCell.appendChild(titleText);
        dayCell.appendChild(dayText);

        entireCell = newRow.insertCell();

        addMarker(movie);
    });


}



