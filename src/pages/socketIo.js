import React , { useEffect , useState } from 'react'

import io from 'socket.io-client';



const Socketio = () => {

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(`http://${window.location.hostname}:3000`);
        console.log(newSocket)
        setSocket(newSocket);
        return () => newSocket.close();
      }, [setSocket]);


    return (
        <div>
            
        </div>
    )
}

export default Socketio
