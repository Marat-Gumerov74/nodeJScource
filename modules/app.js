const fs = require("fs");

fs.readFile('./text.txt', 'utf8', (error, data) => {
  fs.mkdir('./files', ()=>{
    fs.writeFile('./files/test2.txt', `${data}New text!`, () => {
      error ? console.log(error) : null;
    })
  })
  console.log(data)
});

//fs.unlink -  удаляает каталог и файлы