/**
 * @param array
 *
 */
function sortData(data){
    $.each(data, function(q,w){

        $('#1').clone(true).attr('id', w['id']).appendTo($('.collections'));
        $('#'+w['id']+' a').attr('data-id', w['id']);
        $('#'+w['id']+' h2.title').html(w['title']);
        $('#'+w['id']+' p.description').html(w['description']);
        $('#'+w['id']+' p.pubTime').html(dateConvers(w['published_at']));
    })
}


/**
 * @param array
 *
 */
function makeList(data, id){
   $('#'+id+' ol').html('');
    $.each(data, function(q,w){
        $('#'+id+' ol')
            .append($('<li></li>'))
                .children().eq(q)
                    .attr('id', w['id'])
                    .html('id: '+w['id']+' width: '+w['width']+' height: '+ w['height']);
    })
}


/**
 * @param array
 *
 */
function openPhoto(data){
    $('.inf').html('');
    $('.collections').css('display', 'none');
    $('.imageInf').css('display', 'block');
    var img = $('.imageInf img');
    img.attr({'src': data['urls']['small'], 'id': data['id']});
    for(var key in data){
        if(key == 'urls' || key == 'links'|| key == 'user' || key == 'exif' || key == 'location' || data[key] == null)
            return false;
        else
            $('.imageInf .inf').append($('<p></p>').html('<b>'+key+':</b> '+data[key]));
    }
}


/**
 * @param string with dataTime
 * @return string
 */
function dateConvers(date){
    let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    let data = new Date(date.slice(0, date.indexOf('T')));
    return data.getDate()+"."+months[data.getMonth()]+"."+data.getFullYear();
}


/**
 *
 * change style
 */
function returnList(){
    $('.collections').css('display', 'block');
    $('.imageInf').css('display', 'none');
}




