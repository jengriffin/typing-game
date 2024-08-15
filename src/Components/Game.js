import alphabet from "./Alphabet";
import letter from "./RandomLetter"
import randomLetter from "./RandomLetter";
import RandomLetter from "./RandomLetter";


let Game = () => {
    let Letters = document.getElementsByClassName('Letters');
    const generateRandomLetter = () => {
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    let letter = generateRandomLetter();

    document.addEventListener('keypress', (event) => {
        let key = String.fromCharCode(event.keyCode)
        console.log(key)
        console.log(letter)

         if (letter === key) {
             console.log("Hello! Colmack sucks")
             return generateRandomLetter()

         } else {
             console.log(letter)
         }
    })
    /* try making a Letter component
     * Letter component should accept a random letter and display it
     * then the Game component renders the Letter component (I guess)
     * so Letter is a child of Game
     */
    // return
    return <div className="bubble">{letter}</div>
}
export default Game