let selectElementsStartingWithA = (array) => {
    const tab = []
    array.forEach(mots => {if (mots.charAt(0) === "a") tab.push(mots)});
    return tab;
}

let selectElementsStartingWithVowel = (array) => {
    const tab = []
    array.forEach(mots => {if (mots.charAt(0) === "a" || mots.charAt(0) === "e" || mots.charAt(0) === "i" || mots.charAt(0) === "o" || mots.charAt(0) === "u" || mots.charAt(0) === "y") tab.push(mots)});
    return tab;
}

let removeNullElements = (array) => {
    return array.filter(item => item != null)


}

let removeNullAndFalseElements = (array) => {
    // return array.filter (item => item === "a" || item === "b" ||item === 0  ) 
    return array.filter(item => {return (item !==null && item !==false)})
    //return array.filter (boolean)
    
}

let reverseWordsInArray = (array) => {
    let tab = []
    array.forEach(element => {
        tab.push(element.split("").reverse().join(""))
    })
    return tab
}

let everyPossiblePair = (array) => {
    pair = []
    pair.push([array[2],array[0]])
    pair.push([array[2],array[1]])
    pair.push([array[0],array[1]])
    
    return pair;
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3, 9);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array
}

let sortByLastLetter = (array) => {
    let tab = []
    let end = []
    array.forEach(element => {
        tab.push(element.split("").reverse().join(""))
    })
    tab.sort()
    tab.forEach(item => {
        end.push(item.split("").reverse().join(""))
    })
    return end;
}

let getFirstHalf = (string) => {
    return string.split("").splice(0, Math.ceil(string.length / 2)).join("");
}

let makeNegative = (number) => {
    return -(Math.abs(number));
}

let numberOfPalindromes = (array) => {
    let tab = []
    let number = 0
    array.forEach(element => {tab.push(element.split("").reverse().join(""))})
    for(let i=0;i<array.length;i++){if(array[i] === tab[i]){number++}};
    return number
    
    
}

let shortestWord = (array) => {
    array.sort(function(a, b) {return a.length - b.length
    })
    return array[0]
}

let longestWord = (array) => {
    array.sort(function(a, b) {return b.length - a.length
    });
    return array[0]
}

let sumNumbers = (array) => {
    return (array.reduce((acc, value) => acc + value));
}

let repeatElements = (array) => {
    array.forEach(element => {
        array.push(element)
    });
    return array
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((acc, value) => (acc + value)) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {  
    tab  =[]
    let i=0
        while(array[i]<=5){
            tab.push(array[i]);i++
        }
    return tab
}

let convertArrayToObject = (array) => {
    obj = {}
    for(let i=0;i<array.length;i+=2){obj [array[i]] = array[i+1]}
   return obj
}

let getAllLetters = (array) => {
    arr = new Set (array)
    arr = Array.from(arr)
    return arr.flatMap(element => element.split("")).sort()
}

let swapKeysAndValues = (object) => {
    objet = {}
    for (let prop in object) {if(object.hasOwnProperty(prop)) {
        objet[object[prop]] = prop;
        }
    }
    return objet;
}

let sumKeysAndValues = (object) => {
    let key = Object.keys(object)
    let value = Object.values(object)
    value = value.reduce((acc, value) => (acc + value))
    key = key.reduce((acc, value) => (parseInt(acc) +parseInt(value)))
    return key+value
    
    // console.log(Object.keys(object)+Object.values(object));
    ;
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, "")
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return `0${date.getDate()}/0${date.getDay()}/${date.getFullYear()}`;
}

let getDomainName = (string) => {
    return string.slice(6, string.length - 4);
}

let titleize = (string) => {
    return string.replace(/(?<=the\s|\.\s)\w|^[t]/g, (word) => {
        return word.toUpperCase()
    });
}

let checkForSpecialCharacters = (string) => {
    return (/\W/g).test(string)
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
        let f=1
        for (let i = 1; i <= number; i ++ ){
            f= f*i;
        }
        return f
}



let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    const ascii = []
    array.forEach(element => {ascii.push(element.toUpperCase().charCodeAt()-64)});
    return ascii
}