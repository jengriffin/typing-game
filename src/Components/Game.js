import RandomLetter from "./RandomLetter";
import {type} from "@testing-library/user-event/dist/type";


let Game =()=>{
document.addEventListener('keypress', (event)=>{
    let key = String.fromCharCode(event.keyCode)
    console.log(key)
    })



    return

}
Game()

export default Game