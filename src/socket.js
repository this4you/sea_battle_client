import io from 'socket.io-client';
//socket.emit('join', currentUserId.toString());
const socket = io("http://" + window.location.hostname + ":9009");
export  default socket;