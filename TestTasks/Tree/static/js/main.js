$(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "https://rcslabs.ru/locations2",
            dataType: "json",
            headers: {
               'Access-Control-Allow-Origin': 'http://localhost',
               'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
               'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
            },
            success: function (data) {
                createTree(container, data);
            },
            error: function (e) {
                console.log(e)
            }
        })
    }
);

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}
function createTreeDom(obj) {
  // если нет дочерних элементов, то вызов возвращает undefined
  // и элемент <ul> не будет создан
  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

let container = document.getElementById('app');
