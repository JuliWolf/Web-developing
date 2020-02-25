//*******************-Express-***********************

// *** node server.js
// *** node app.js

// *** node lab-5.js


//*******************-Client-server-***********************

// AJAX - не постоянное соединение
// comet - как ajax только с постоянным соединением
// WebSocket

// Socket.Io - библиотека для socket

// *** node socket-server.js


//*******************-Full Site-***********************

// *** node app.js

// config
// nconf


//*******************-Mongodb-***********************

// подключиться к базе
mongo

//создать колонку и добавить значение
db.lettes.save({a:1})

//посмотреть значения в базе
db.letters.find()

//посмотреть все базы
show dbs

// посмотреть коллекции
show collections

//создать свою базу данных
use mydb

//очистить базу
db.test.remove()

//удалить базу
db.test.drop()

//добавление значений в базу
x = {name: 'John', age: 25}
y = {name: 'Mike', age: 33}
db.test.insert(x)
db.test.save(y)

//Обновление значений в базе
db.test.update({name: 'John'}, {$set: {age:26}})

// *** Mongoose

