$('document').ready(function(){
    var contactMessages = document.getElementsByClassName('contact-message');
    for( i = 0; i < contactMessages.length; i++){
        contactMessages[i].getElementsByTagName('li')[0].firstElementChild.addEventListener('click', modalOpen);
        contactMessages[i].getElementsByTagName('li')[0].firstElementChild.addEventListener('click', modalContent);
        contactMessages[i].getElementsByTagName('li')[1].firstElementChild.addEventListener('click', deleteContactMessage);
    }
    $('#modal-close').on('click', modalClose);
});

function modalContent(e){
    e.preventDefault();
    var subject = e.path[5].firstElementChild.firstElementChild.innerText;
    var sender = e.path[5].lastElementChild.firstElementChild.innerText;
    var message = e.path[5].dataset['message'];
    var modal = $('.modal')[0];
    var modalSubject = document.createElement('h1');
    var modalSender = document.createElement('h3');
    var modalMssage = document.createElement('p');
    modalSubject.innerText = subject;
    modalSender.innerText = sender;
    modalMssage.innerText = message;
    modal.insertBefore(modalMssage, modal.childNodes[0]);
    modal.insertBefore(modalSender, modal.childNodes[0]);
    modal.insertBefore(modalSubject, modal.childNodes[0]);
}

function deleteContactMessage(e){
    e.preventDefault();
    e.target.removeEventListener('click', deleteContactMessage);
    var messageId = e.path[5].dataset['id'];
    ajaxRequest('GET', '/admin/contact/message/' + messageId+ '/delete', null, messageDeleted, [e.path[5]]);
}

function messageDeleted(params, success, res){
    var article = params[0];
    if(success){
        article.style.backgroundColor = '#ffc4be';
        setTimeout(function(){
            article.remove();
            location.reload();
        }, 300)
    }
}

function ajaxRequest(method, url, data, fun, params){
    $.ajax({
        method: method,
        url: url,
        data: data,
        success: function(res){
            fun(params, true, res);
        }
    })
}