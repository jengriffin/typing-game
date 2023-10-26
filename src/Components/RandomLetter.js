import alphabet from "./Alphabet";
let letter
let Letters = document.getElementsByClassName('Letters')

let randomLetter =()=>{
    letter= alphabet[Math.floor(Math.random() * alphabet.length)]
    console.log(letter)

    return Letters.innerHTML= letter

}
randomLetter()
export default randomLetter