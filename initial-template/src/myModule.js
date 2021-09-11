//myModule.js

//A Module for editing
const DisplayController  = (()=>{
    let aVariable = "hello"

    //privates is better to declare starting with _
    //set popup to visible
    let _showPopUp = (something)=>{
        console.log(something);
    }

    let saySomething = (something) =>{
        _showPopUp(something);
    }

    let addFavIcon =(Icon) =>{
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/ico";
        document.getElementsByTagName("head")[0].appendChild(link);
        }
        link.href = Icon;
    }

    return {saySomething, addFavIcon}
})();


//A factory function
const Player = (human = "Hi Player") =>{
    //human param is boolean, false for computers, stored in closure
    let counter = 0;
    //setting default choices
    let choice = "X";
    let player = human;
    const setChoice = (newChoice) =>{ choice = newChoice};
    const getChoice = () => {return choice};
    const addCounter = () => {counter++};
    const getCounter = () => {return counter};
    const getPlayer = () => player;

    return {setChoice, getChoice, addCounter, getCounter, getPlayer}
}

const testeableFunction = (()=>{
    
    let sum = (a, b) =>{
        return a + b;
      }

    return {sum}
})();

//const human = Player("Alan");

export {Player, DisplayController, testeableFunction};