function ValidationEvent() {

    /*
    park = document.getElementById("park").value;
    title = document.getElementById("title").value;
    day = document.getElementById("day").value;     */
$(document).ready(function(){
    $.getJSON = ("https://data.cityofchicago.org/resource/7piw-z6r6.json", function(data) {
        console.log();
        var queries = '';
        $.each(data, function(key, value){
            queries += '<tr>';
            queries += '<td>'+value.park+'<td>';
            queries += '<td>'+value.title+'<td>';
            queries += '<td>'+value.day+'<td>';
        
        });
        $('#movietable').append(value);
    });
});
}