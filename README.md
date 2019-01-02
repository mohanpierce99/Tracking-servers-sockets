# Tracking-servers-sockets
A socket io node server that would track the status of express servers


Main server.js file is the master server  which is an express socket server

other express servers or normal servers connect to the main server with their name,  now this server is being monitored by main server

So when the server goes down,mainserver is aware of this event and manipulations can be done
