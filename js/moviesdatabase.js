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
            //success and error method depreciated.
            //ajax 1.8 uses .done and .fail down below.
            
            /*success: function(data){
                alert("Request Successful! \nFound: " + data.length + " entry points.");
                //insertData(data);
            },
            error: function(){
                alert("No values found.");
            }*/

        }).done(function(data){
            alert("Request Successful! \nFound: " + data.length + " entry points.");
            let table = document.getElementById("movieTable");
            let tbody = table.getElementsByTagName('tbody');
            data.forEach(entry => {
            //dynamically add to table.
            let newRow = table.insertRow();
            let newCell = newRow.insertCell(0);
            let newText = '<tr><td>${entry[0]}</td> <td>${entry[1]}</td> <td>${entry[0]}</td></tr>';
            newCell.append(newText);
            })

        })
        .fail(function(){ alert("API Call failed: No data returned.")});
}
/*function insertData(data){

    console.log(table.values());
    //let tbody = table.getElementByTagName('tbody');

    /*data.forEach(entry => {
        var newRow = tbody.insertRow(table.rows.length-1);
        var newCell = newRow.insertCell(newRow.cells.length);
        newCell.innerHTML = "Something";
    }*/



