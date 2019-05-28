// Открытие списка изображений

$('.collection a').one('click', function(e){
    getCollection('collections/'+e.target.dataset.id+'/photos', 50)
        .then(
            response => {
                let photos = JSON.parse(response);
                return photos;
            },
            error => alert(`${error}`)
        )
        .then(
            photos => {
                makeList(photos, e.target.dataset.id);
                photos = [];
            },
            error => alert('Не удалось загрузить список изображений')
        );
});

// Открытие информации об изображении
$('.collection ol').on('click', function(e){
    getCollection('photos/'+e.target.id)
        .then(
            response => {
                let photo = JSON.parse(response);
                return photo;
            },
            error => alert(`${error}`)
        )
        .then(
            photo => {
                openPhoto(photo);
            }
        )
})



