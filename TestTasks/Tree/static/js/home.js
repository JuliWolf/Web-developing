Vue.component('tree-item', {
    template: '#item-template',
    props: {
        item: Object
    },
    data: function () {
        return {
            isOpen: false,
            showItems: {}
        }
    },
    computed: {
        // Проверяем если ли у элемента дочерние элементы
        isFolder: function () {
            return this.item.children &&
                this.item.children.length;
        }
    },
    methods: {
        // ПРоверяем открыт элемент или нет
        toggle: function () {
            if (this.isFolder) {
                this.isOpen = !this.isOpen;
            }
        },
        // Прежде чем эммитировать событие, проверяем точно ли элемент содержит дочерние элементы
        makeFolder: function () {
            if (!this.isFolder) {
                this.$emit('make-folder', this.item);
                this.isOpen = true;
            }
        }
    }
});

var demo = new Vue({
    el: '#demo',
    data: {
        treeData: {},
        selectedItems: [],
        showSelected: false
    },
    methods: {
        // Присваиваем значение item.children = []
        makeFolder: function (item) {
            Vue.set(item, 'children', [])
            // Вызыввем метод addItem
            this.addItem(item)
        },
        makeList: function(items, filterObj){
            for(var i = 0; i < items.length; i++){
                if(!items[i].parent_id){
                    filterObj.children = [];
                    filterObj.title = items[i].title;
                    filterObj.parentId = items[i].parent_id;
                    filterObj.unchanged = items[i].unchanged;
                    filterObj.id = items[i].id;
                    filterObj.srt = items[i].srt;
                }else{
                    this.findItemInArray(items[i], filterObj)
                }
            }
            // filterObj[0] = this.compare(filterObj)
            Vue.set(filterObj, 0, this.compare(filterObj));
            
        },
        findItemInArray: function(item, array){
            // Если у элемента нет свойства children, то добавляем ему чтобы не было ошибок
            if(!item.children){
                item.children = [];
            }
            // Если результат findInnerParent false
            if(!this.findInnerParent(item, array)){
                for (var i = 0; i < array.children.length; i++) {
                    // Если нашли дочерний элемент, то добавляем его в массив родителя children
                    if(array.children[i].id == item.parent_id){
                        item.children = [];
                        array.children[i].children.push(item);
                    }else{
                        // Иначе рекурсия, с другим родительским элементов, ищем до тех пор пока не найдем родителя, если родителя нет, то элемент никуда не записывается
                        this.findItemInArray(item, array.children[i]);
                    }
                }
            }
        },
        findInnerParent: function(item, array){
            // Если айди парента и элемента совпадают, то добавляем дочерний элемент в массив родителя children
            if(array.id == item.parent_id){
                item.children = [];
                array.children.push(item);
                return true;
            }
        },
        // Сортировка по parent_id (в интернете нашла)
        compareParent: function(a, b) {
            const itemA = a.parent_id;
            const itemB = b.parent_id;

            let comparison = 0;
            if (itemA > itemB) {
                comparison = 1;
            } else if (itemA < itemB) {
                comparison = -1;
            }
            return comparison;
        },
        compare: function(elem){
            // Если не объект, а массив
            if(!elem.length){
                // если есть свойство children и оно не 0
                if(elem.children){
                    // Сортируем все дочерние элементы
                    elem.children.sort(this.compareSRT);
                    // Снова вызываем себя
                    this.compare(elem.children);
                }
            }else{
                for(var i = 0; i < elem.length; i++){
                    // Если у элемента есть дочерние и их колтичество не 0
                    if(elem[i].children){
                        // Сортируем
                        elem[i].children.sort(this.compareSRT);
                        // Вызываем саму себя
                        this.compare(elem[i].children);
                    }
                }
            }
        },
         // Сортировка по srt (в интернете нашла)
        compareSRT: function(a, b){
            const itemA = a.srt;
            const itemB = b.srt;

            let comparison = 0;
            if (itemA > itemB) {
                comparison = 1;
            } else if (itemA < itemB) {
                comparison = -1;
            }
            return comparison;
        }

    },
    beforeCreate: function () {
        // Работает как ajax
        axios.get('https://rcslabs.ru/locations2.json')
            .then(res => {
                console.log(res.data.sort(this.compareParent))
                this.makeList(res.data.sort(this.compareParent), this.treeData);
            });
    }
});
