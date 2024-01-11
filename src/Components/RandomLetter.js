import alphabet from "./Alphabet";
let letter
let Letters = document.getElementsByClassName('Letters')

let randomLetter =(props)=>{
    letter= alphabet[Math.floor(Math.random() * alphabet.length)]
    //console.log(letter)
    //console.log(props)
    console.log(props)

    return Letters.innerHTML= letter

}
randomLetter()
export default randomLetter