import './App.scss';
import {useEffect} from "react";
import socket from "./socket";
import {getHorses} from "./redux/horseReducer";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch()

    useEffect(()=>{
        socket.emit("start")
        dispatch(getHorses())
    },[])

    const horses = useSelector(state => state.horsePage.horses)

    return (
        <div className="App">
           <div className={"content"}>
               {horses.map(horse=> <div key={horse.name} className={horse.distance === 1000?"horse win":"horse"}>
                   <span className={"name"}>{horse.name}: </span>
                   <span className={"distance"}>{horse.distance}</span>
               </div>)}
           </div>
        </div>
    );
}

export default App;
