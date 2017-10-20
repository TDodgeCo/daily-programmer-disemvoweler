var input1 = 'all those who believe in psychokinesis raise my hand';

function removeVowels(s) {
    let myArray = s.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u', ' ']
    let disemvoweled = []
    for (var i = myArray.length - 1; i >= 0; i--) {
        if (myArray[i] == ' ') {
            myArray.splice(i, 1)
        }
        for (var j = 0; j <= vowels.length; j++) {
            if (myArray[i] == vowels[j]) {
                disemvoweled.push(myArray[i])
                myArray.splice(i, 1)                
            }         
        }
    }
    disemvoweledString = myArray.join('')
    vowelsArray = disemvoweled.join('')
    console.log(disemvoweledString)      
    console.log(vowelsArray)
}

removeVowels(input1);
