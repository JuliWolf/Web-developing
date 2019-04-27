var docReady = setInterval(function(){
    if(document.readyState !== 'complete'){
        return;
    }
    clearInterval(docReady);

    var editSection = $('.edit');
    for(var i = 0; i < editSection.length; i++){
        editSection[i].firstElementChild.firstElementChild.children[1].firstChild.addEventListener('click', startEdit);
        editSection[i].firstElementChild.firstElementChild.children[2].firstChild.addEventListener('click', startDelete);
    }
    document.getElementsByClassName('btn')[0].addEventListener('click', createNewCategory);
}, 100);

function createNewCategory(event){
    event.preventDefault();
    var name = event.target.previousElementSibling.value;
    if(name.length === 0){
        alert('Please enter a valid category name!');
        return;
    }
    ajaxRequest('POST', '/admin/blog/category/create', {name: name, _token: token}, newCategoryCreated, [name]);
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

function newCategoryCreated(){
    location.reload();
}
function startEdit(e){
    e.preventDefault();
    e.target.innerText = 'Save';
    var li = e.path[2].children[0];
    li.children[0].value = e.path[4].previousElementSibling.children[0].innerText;
    li.style.display = 'inline-block';
    setTimeout(function(){
        li.children[0].style.maxWidth = '110px';
    }, 1);
    e.target.removeEventListener('click', startEdit);
    e.target.addEventListener('click', saveEdit);
}

function saveEdit(e){
    e.preventDefault();
    console.log(e);
    var li = e.path[2].children[0];
    var categoryName = li.children[0].value;
    var categoryId = e.path[4].previousElementSibling.dataset['id'];
    if(categoryName.length === 0){
        alert('Please enter a valid category name!');
        return;
    }
    ajaxRequest('POST', '/admin/blog/categories/update', {'name': categoryName, '_token': token, 'category_id': categoryId}, endEdit, [e])
}

function startDelete(e){
    deleteCategory(e);
}

function deleteCategory(e){
    e.preventDefault();
    e.target.removeEventListener('click', startDelete);
    var categoryId = e.path[4].previousElementSibling.dataset['id'];
    ajaxRequest('GET', '/admin/blog/category/'+categoryId+'/delete', {'_token': token}, categoryDeleted, [e.path[5]])
}

function categoryDeleted(params, success, responseObj){
    var article = params[0];
    if(success){
        article.style.backgroundColor = '#ffc4be';
        setTimeout(function(){
            article.remove();
            location.reload();
        }, 300)
    }
}


function endEdit(params, success, responseObj){
    var e = params[0];
    if(success){
        var newName = responseObj.new_name;
        var article = e.path[5];
        article.style.backgroundColor = '#afefac';
        setTimeout(function(){
            article.style.backgroundColor = 'white';
        }, 300);
        article.firstElementChild.firstElementChild.innerHTML = newName;
    }
    e.target.innerText = 'Edit';
    var li = e.path[2].children[0];
    li.children[0].style.maxWidth = '0px';
    setTimeout(function(){
        li.style.display = 'none';
    }, 310);
    e.target.removeEventListener('click', saveEdit);
    e.target.addEventListener('click', startEdit);

}


