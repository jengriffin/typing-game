import alphabet from "./Alphabet";
import {useState} from "react";
import letter from "./RandomLetter"
import randomLetter from "./RandomLetter";
import RandomLetter from "./RandomLetter";


let Game = () => {
    let Letters = document.getElementsByClassName('Letters');

    const generateRandomLetter = () => {
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    // const [input, setInput] = useState('');

    let letter = generateRandomLetter();
    <div className="bubble" id="type">letter</div>
    console.log("hello")


    document.addEventListener('keypress', (event) => {
        let key = String.fromCharCode(event.keyCode)
        console.log("Key press: " + key)
        console.log("Desired letter: " + letter)

        // for (;;) {
            if (letter === key) {
                letter = generateRandomLetter()

                 //letter=document.getElementsByClassName("bubble");
                document.getElementById("type").textContent=letter;
                console.log("Hello! Colmack sucks")
             } else {
                console.log("Yas")
                console.log("Yas letter: " + letter)
            }

    })
    /* try making a Letter component
     * Letter component should accept a random letter and display it
     * then the Game component renders the Letter component (I guess)
     * so Letter is a child of Game
     * Grab div by classname to update in the correct loop. Jury out about whether or not
     * a loop is needed.
     */
    // return
    return <div className="bubble" id="type">{letter}</div>

}
export default Game