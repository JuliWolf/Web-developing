function getCollection(url, num = 10){
    return new Promise((resolve, rejected)=>{
        let perPage = '?per_page='+num+'&';
        var xhr = new XMLHttpRequest();
        var clientId = 'd0052fd5ff2ffb9e0b7fbab869fd004fcb65750e0a084350909c7afb3c61f03b';
        xhr.open('Get', 'https://api.unsplash.com/'+url+perPage+'client_id='+clientId, true);
        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                rejected(error);
            }
        };
        xhr.onerror = function() {
            rejected(new Error("Network Error"));
        };

        xhr.send();
    });
}

getCollection("collections", 100)
    .then(
        response => {
            let collection = JSON.parse(response);
            return collection;
        },
        error => console.log(`${error}`)
    )
    .then(
        collection => {
            sortData(collection)
        },
        error => alert('Не удалось загрузить коллекции')
    );





