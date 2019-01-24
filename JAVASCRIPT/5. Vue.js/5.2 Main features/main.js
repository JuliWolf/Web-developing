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
// Внутри {{}} можно использовать js код, например, для написания дополнительных условий выполнения

// new Vue({
//     el: '#app',
//     data: {
//         counter:0,
//         x: 0,
//         y: 0
//     },
//     methods:{
//         'increase': function(step, event){
//             this.counter += step;
//         },
//         'updateCoordinates': function(e){
//             this.x = e.clientX;
//             this.y = e.clientY;
//         },
//         alertMe: function(){
//             alert('Alert!');
//         }
//     }
// });


/*********************************Forth Part*******************************/
// Директива v-on="(data)" заменяет v-on:input и функцию заменяющую текущее значение на нововведенное

// new Vue({
//     el: '#app',
//     data: {
//         name: 'Max'
//     }
// });


/*********************************Fifth Part*******************************/
// computed вызывается только тогда, когда происходит изменение
// watch вызывается при любом изменении того объекта, аз которым он следит (counter)

// new Vue({
//     el: '#app',
//     data: {
//         counter: 0,
//         secondCounter: 0
//     },
//     computed: {
//       output: function(){
//           console.log('Computed');
//           return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
//       }
//     },
//     watch:{
//       counter: function(value){
//           var self = this;
//           setTimeout(function(){
//               self.counter = 0;
//           }, 2000)
//       }
//     },
//     methods:{
//         'result': function(){
//             console.log('Method');
//             return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
//         }
//     }
// });


/*********************************Sixth Part*******************************/
// @ - v-on:
//: - v-bind

// new Vue({
//     el: '#app',
//     data: {
//         link: 'http://google.com'
//     },
//     methods: {
//         changeLink: function(){
//             this.link = "http://apple.com"
//         }
//     }
// });


/*********************************Seventh Part*******************************/

// new Vue({
//     el:'#app',
//     data:{
//         attachRed: false,
//         color: 'green'
//     },
//     computed:{
//         divClasses: function(){
//             return{
//                 red: this.attachRed,
//                 blue: !this.attachRed
//             };
//         }
//     }
// });


/*********************************Eighth Part*******************************/

// new Vue({
//     el: '#app',
//     data: {
//         color: 'gray',
//         width:100
//     },
//     computed:{
//         myStyle: function(){
//             return{
//                 background:this.color,
//                 width: this.width + 'px'
//             }
//         }
//     }
// });


/*********************************Nineth Part*******************************/
//v-if убирает элементы из DOM
// template используется тогда, когда необходимо объединить элементы
// v-show - скрывает элементы на странице

// new Vue({
//     el: '#app',
//     data:{
//         show: true
//     }
// });


/*********************************Tenth Part*******************************/
// Директива v-for позволяет перебрать массив и вывести его на страницу
// new Vue({
//     el:'#app',
//     data:{
//         ingredients:['meat', 'fruit', 'cookies'],
//         persons: [
//             {name: 'Max', age: 27, color: 'red'},
//             {name: 'Anna', age: 'unknown', color: 'blue'}
//         ]
//     }
// });


/*********************************Monster Game*******************************/

// new Vue({
//     el:'#app',
//     data:{
//         playerHealth:100,
//         monsterHealth:100,
//         gameIsRunning: false,
//         turns: []
//     },
//     methods: {
//         startGame: function () {
//             this.gameIsRunning = true;
//             this.playerHealth = 100;
//             this.monsterHealth = 100;
//             this.turns= [];
//         },
//         attack: function () {
//             var damage = this.calculateDamage(3, 10);
//             this.monsterHealth -= damage;
//             this.turns.unshift({
//                 isPlayer: true,
//                 text: 'Player hits Monster for ' + damage
//             });
//             if(this.checkWin()){
//                 return;
//             }
//             this.monsterAttacks();
//         },
//         specialAttack: function () {
//             var damage = this.calculateDamage(10, 20);
//             this.monsterHealth -= damage;
//             this.turns.unshift({
//                 isPlayer: true,
//                 text: 'Player hits Monster hard for ' + damage
//             });
//             if(this.checkWin()){
//                 return;
//             }
//             this.monsterAttacks();
//         },
//         heal: function () {
//             if(this.playerHealth <= 90){
//                 this.playerHealth += 10;
//             }else{
//                 this.playerHealth = 100;
//             }
//             this.turns.unshift({
//                 isPlayer: true,
//                 text: 'Player hals for 10 '
//             });
//             this.monsterAttacks();
//         },
//         giveUp: function () {
//             this.gameIsRunning = false;
//         },
//         monsterAttacks: function(){
//             var damage = this.calculateDamage(5, 12);
//             this.playerHealth -= damage;
//             this.checkWin();
//             this.turns.unshift({
//                 isPlayer: false,
//                 text: 'Monster hits Player for ' + damage
//         });
//         },
//         calculateDamage: function (min, max) {
//             return Math.max(Math.floor(Math.random() * max) + 1, min);
//         },
//         checkWin: function () {
//             if (this.monsterHealth <= 0) {
//                 if (confirm('You won! New Game?')) {
//                     this.startGame();
//                 } else {
//                     this.gameIsRunning = false;
//                 }
//                 return true;
//             } else if (this.playerHealth <= 0) {
//                 if (confirm('You lost! New Game?')) {
//                     this.startGame();
//                 } else {
//                     this.gameIsRunning = false;
//                 }
//                 return true;
//             }
//             return false;
//         }
//     }
// });


/*********************************The Vue.js Instance*******************************/
// на странице может содержаться сколько угодно Vue.ja instances если они не мешают работе друг друга
// на свойства одного Vue.ja instance можно влиять с помощью второго Vue.ja instance или с помощью любой функции
// $el - с каким элементом в доме работает
// $data - объект data внутри объекта Vue
// ref - ссылка на любьой объект дома, в котором будет указана
// $ref - все ссылки, указанные в доме
// $mount используется, чтобы указать элемент, к которому будут применяться свойства

// var data = {
//     title: 'The VueJS Instance',
//     showParagraph: false
// };
//
// // Vue.component('hello', {
// //   template: '<h1>Hello!</h1>>'
// // });
// var vm1 = new Vue({
//     el:'#app1',
//     data:data,
//     methods: {
//         show: function(){
//             this.showParagraph = true;
//             this.updateTitle('The VueJS Instance (updated)');
//             this.$refs.myButton.innerText = 'Test';
//         },
//         updateTitle: function(title){
//             this.title = title;
//         }
//     },
//     computed: {
//         lowercaseTitle: function(){
//             return this.title.toLowerCase();
//         }
//     },
//     watch: {
//         title: function(value){
//             alert('Title changed, new value' + value);
//         }
//     }
// });
//
// setTimeout(function(){
//     vm1.title = 'Changed by Timer';
// }, 3000);
//
// vm1.newProp = 'New';
//
// console.log(vm1);
//
// vm1.$refs.heading.innerText = 'Something else';
//
// vm1.$mount('#app1');
//
// var vm2 = new Vue({
//     el:'#app2',
//     data:{
//         title: 'The second Instance'
//     },
//     methods:{
//         onChange: function(){
//             vm1.title = 'Changed!';
//         }
//     }
// });
//
//
// var vm3 = new Vue({
//     template: '<h1> Hello </h1>>'
// });
//
// vm3.$mount('#app3');
// // document.getElementById('app3').appendChild(vm3.$el);


/*********************************How Vue.JS updates the DOM*******************************/
//Жизненный цикл Vue JS

// new Vue({
//     el:'#app',
//     data:{
//         title: 'The VueJs Instance'
//     },
//     beforeCreate:function(){
//         console.log('beforeCreate()');
//     },
//     created:function(){
//         console.log('created()');
//     },
//     beforeMount:function(){
//         console.log('beforeMount()');
//     },
//     mounted:function(){
//         console.log('mounted()');
//     },
//     beforeUpdate:function(){
//         console.log('beforeUpdate()');
//     },
//     updated:function(){
//         console.log('updated()');
//     },
//     beforeDestroy:function(){
//         console.log('beforeDestroy()');
//     },
//     destroyed:function(){
//         console.log('destroyed()');
//     },
//     methods:{
//         destroy: function(){
//             this.$destroy();
//         }
//     }
// });


/*********************************Vue CLI $ Workflows*******************************/

