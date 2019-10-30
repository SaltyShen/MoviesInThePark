function ValidationEvent() {

    park = document.getElementById("park").value;
    title = document.getElementById("title").value;
    day = document.getElementById("day").value;

    $.getJSON = ("https://data.cityofchicago.org/resource/7piw-z6r6.json", function(park, title, day) {
        console.log(data);
        var queries = '';
        $.each(data, function(key, value){
            queries += '<tr>';
            queries += '<td>'+value.park+'<td>';
            queries += '<td>'+value.title+'<td>';
            queries += '<td>'+value.day+'<td>';
            queries += '</tr>'
        });
        $('#movietable').append(queries);
    });
}