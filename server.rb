require 'socket'            

server = TCPServer.open(8080)  # reliable connection
loop {                         
   myClient = server.accept       
   myClient.puts("Hello This is a test")  
   myClient.close                 
}