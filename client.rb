require 'socket'     
hostname = 'localhost'
port = 8080

sock = TCPSocket.open(hostname, port) # reliable connection
while msg = sock.gets  
   msg = msg.chop 
   puts "Message" , msg  
end


sock.close          