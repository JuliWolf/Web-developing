var addedCategoriesText;
var addedCategoriesIDs;

$('document').ready(function(){
    var addCategoryBtn = $('.btn')[0];console.log(addCategoryBtn);
    addedCategoriesIDs = document.getElementById('categories');
    addCategoryBtn.addEventListener('click', addCategoryToPost);
    addedCategoriesText = $('.added-category')[0];
    console.log()

    for(i = 0; i < addedCategoriesText.firstElementChild.children.length; i++){
        addedCategoriesText.firstElementChild.children[i].firstElementChild.addEventListener('click', removeCategoryFromPost)
    }
});

function addCategoryToPost(e){
    e.preventDefault();
    var select = document.getElementById('category_select');
    console.log(select);
    var selectedCategoryId = select.options[select.selectedIndex].value;
    var selectedCategoryName = select.options[select.selectedIndex].text;
    if(addedCategoriesIDs.value.split(',').indexOf(selectedCategoryId) != -1){
        return;
    }
    if(addedCategoriesIDs.value.length > 0){
        addedCategoriesIDs.value = addedCategoriesIDs.value + ','+ selectedCategoryId;
    }else{
        addedCategoriesIDs.value = selectedCategoryId;
    }
    var newCategoryLi = document.createElement('li');
    var newCategoryLink = document.createElement('a');
    newCategoryLink.href = '#';
    newCategoryLink.innerText = selectedCategoryName;
    newCategoryLink.dataset['category_id'] = selectedCategoryId;
    newCategoryLink.addEventListener('click', removeCategoryFromPost);
    newCategoryLi.appendChild(newCategoryLink);
    addedCategoriesText.firstElementChild.appendChild(newCategoryLi);
}

function removeCategoryFromPost(e){
    e.preventDefault();
    e.target.removeEventListener('click', removeCategoryFromPost);
    var categoryId = e.target.dataset['category_id'];
    var categoryIdArray = addedCategoriesIDs.value.split(',');
    var index = categoryIdArray.indexOf(categoryId);
    categoryIdArray.splice(index, 1);
    var newCategoriesIDs = categoryIdArray.join(',');
    addedCategoriesIDs.value = newCategoriesIDs;
    e.target.parentElement.remove();
}