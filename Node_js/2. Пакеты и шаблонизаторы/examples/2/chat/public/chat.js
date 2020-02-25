var socket;
window.onunload = () => {
  socket.disconnect();
};

window.onload = () => {
    socket = io.connect('http://localhost:8080');
    var field = document.getElementById('field');
    var form = document.getElementById('form');
    var content = document.getElementById('content');

    var name = prompt('Как вас зовут?', 'Гость');
    if(name){
        socket.emit('set nickname', {name: name})
    }

    form.onsubmit = () => {
      var text = field.value;
      console.log(text);
      socket.emit('send', {message: text});
      return false;
    };
    var messages = [];

    socket.on('message', (data) => {
        if(data.message){
            messages.push(data.message);
            var html = '';
            for(var i = 0; i< messages.length; i++){
                html += messages[i] + '<br>';
            }
            content.innerHTML = html;
        }else{
            console.log('что-то пошло не так');
        }
    });
};
