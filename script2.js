var app = require('http').createServer(handler),
     io = require('socket.io').listen(app),
     fs = require('fs'),
   five = require('johnny-five');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

board = new five.Board();



board.on("ready", function() 
  {
      led1 = new five.Led(3),
      led2 = new five.Led(5),
      led3 = new five.Led(6),
      led4 = new five.Led(9),
      led5 = new five.Led(10),
      led6 = new five.Led(11);

      io.sockets.on
        (
          'connection', function (socket) 
            {
              socket.on
                (
                  'click', function () 
                    {
                      console.log('button1 pressed');
                      led1.toggle(3);
                    }
                );

              socket.on
                (
                  
                  'click', function () 
                    {
                      console.log('button2 pressed');
                      led2.toggle(5);
                    }
                );         

              socket.on
                (
                  
                  'click', function () 
                    {
                      console.log('button3 pressed');
                      led3.toggle(6);
                    }
                );


              socket.on
                (
                  
                  'click', function () 
                    {
                      console.log('button4 pressed');
                      led4.toggle(9);
                    }
                );


              socket.on
                (
                  
                  'click', function () 
                    {
                      
                      console.log('button5 pressed');
                      led5.toggle(10);
                    }
                );



              socket.on
                (
                  
                  'click', function () 
                    {
            
                      console.log('button6 pressed');
                      led6.toggle(11);
                    }
                );


            }
        ); 



         }
        ); 
      
    

  