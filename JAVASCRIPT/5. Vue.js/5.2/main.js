/*********************************First Part*******************************/
//el содержит в себе ссылку на элемент, в котором будут содержаться ссылки vue
// data содержит в себе объект с информацией, которая используется в темплейте
// атрибут v-on используется для указания на дальнейшее событие(вызов функции)
// new Vue({
//     el:'#app',
//     data:{
//         title: "Hello World!"
//     },
//     methods:{
//         'changeTitle': function(e){
//             // this указывает на объект vue
//             this.title = e.target.value;
//         }
//     }
// });


/*********************************Second Part*******************************/
//Чтобы использовать функцию в темплейте она должна возвращать что-то, что можно привести к строке
//Чтобы использовать информацию внутри атрибутов элементов, необходимо использовать v-bind
// v-once элемент рендерится только один раз
// v-html указывает на то, что данную информацию надо читать как html теги

//  new Vue({
//     el:'#app',
//     data:{
//         title: "Hello World!",
//         link: "http://google.com",
//         finishedLink: '<a href="http://google.com">Google</a>'
//     },
//     methods:{
//         'sayHello': function(){
//             // return 'Hello!';
//             this.title = 'Hello!';
//             return this.title;
//         }
//     }
// });


/*********************************Third Part*******************************/
// v-on:mousemove.stop работает как метод e.stopPropagation()
new Vue({
    el: '#app',
    data: {
        counter:0,
        x: 0,
        y: 0
    },
    methods:{
        'increase': function(step, event){
            this.counter += step;
        },
        'updateCoordinates': function(e){
            this.x = e.clientX;
            this.y = e.clientY;
        },
        alertMe: function(){
            alert('Alert!');
        }
    }
});
