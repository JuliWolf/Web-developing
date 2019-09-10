function deleteLead(leadId){
    $.ajax({
        url: '/lead/' + leadId + '/delete-json',
        contentRype: 'applications/json; charset=utf-8',
        datatype: 'json',
        data: JSON.stringify({leadId}),
        type: 'POST',
        success: ((res) => {
            console.log('Result: ' , res);
            $('#'+leadId).remove();
        }),
        error: ((error) => {
            console.log("Error: ", error);
        })
    });
}