var path = require('path');

var Horseman = require('node-horseman');
var horseman = new Horseman();

var name = process.argv[2];

console.info("<<<<<@@@@@## "+name)

horseman
  .open('http://localhost:8080/faces/consultaEntradasForo.xhtml')
  .type("input[name*='id_entrada_foro']", '3')
  .click("button:first")
  .wait(3000)
  .screenshot(path.resolve(__dirname, name+'punto1.png'))

  .open('http://localhost:8080/faces/consultaForosADepurar.xhtml')
  .exists("button:first")
  .then(function(ex){
      if(ex){
        return this.click("button:first")
      }
  })  
  .wait(3000)
  .screenshot(path.resolve(__dirname, name+'punto2.png'))

  .finally(function(){    
                horseman.close();
                console.info("@@@@@##>>>> "+name)
            });
