function translate(input){
    if(input.length <= 1){
        return translateWord(input);
    }
    else{
        return translatePhrase(input);
    }
}

function translateWord(toTranslate) {
    let word = toTranslate.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const symbol = toTranslate.match(/[!?.:;]+/g);
    let firstLetter = word.charAt(0);
    let firstVowel = word.indexOf(vowels.find(function(vowel) {
      return word.indexOf(vowel) > -1;
    }));
    if (vowels.indexOf(firstLetter) > -1) {
      return toTranslate + 'way';
    } 
    else if (toTranslate.match(/[1234567890@#$]+/g)){
        return toTranslate;
    }
    else if (toTranslate.match(/[!?.:;]+/g)){
        let symbol = toTranslate.slice
        return toTranslate.slice;
    }
    else if(firstVowel === -1){
        return toTranslate + "ay";
    }
    else {
        let findVows = toTranslate.match(/[aeiou]+/g) || 0;
        let vowel = toTranslate.indexOf(findVows[0]);
        translated = toTranslate.substring(vowel) + toTranslate.substring(0, vowel) + "ay";
        return translated;
    }
  }

function translatePhrase(phrase){
    let phraseArr = phrase.split(" ")
    let newArr = [];
    for (let i = 0; i < phraseArr.length; i++){
        let translated = translateWord(phraseArr[i])
        newArr.push(translated)
    }
    return newArr.join(" ");
}

module.exports = {translate, translatePhrase, translateWord};