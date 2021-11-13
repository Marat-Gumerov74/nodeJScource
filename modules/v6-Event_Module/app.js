// const EventEmitter = require('events');
//
// const emitter =  new EventEmitter();


//-----------вариант 1
//сщздаем слежение за событием методом ON

// emitter.on('some_event', (text) => {
//   console.log(text);
// })
//
// //вызываем событие методом emit
// emitter.emit('some_event', 'event test text!')


// //-----------вариант 2
// //сщздаем слежение за событием методом ON
//
// emitter.on('some_event', (args) => {
//   const {id, text} = args
//   console.log(id, text);
// })
//
// //вызываем событие методом emit
// emitter.emit('some_event', {id: 1, text: 'Hello'})

// логирование пользователя


const Logger = require('./log')
const logger = new Logger()

logger.on('some_event', (args) => {
  const {id, text} = args
  console.log(id, text);
})
logger.log('User Logged!')