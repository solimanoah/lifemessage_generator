
const wordInputs = {
    adjectiveArray: ['short', 'overrated', 'aspiring', 'productive', 'defiant'],
    pluralNounArray: ['entertainment', 'ideas', 'cookies', 'diseases', 'failures'],
    companionshipArray: ['dogs', 'friendships', 'enemies', 'spouses', 'camaraderie']
};

const generatedMessage = () => {
    let randomAdjective = wordInputs.adjectiveArray[Math.floor(Math.random() * 5)];
    let randomPluralNoun = wordInputs.pluralNounArray[Math.floor(Math.random() * 5)];
    let randomCompanionship = wordInputs.companionshipArray[Math.floor(Math.random() * 5)];

    if (randomAdjective[0] === 'a') {
        return (`You will have an ${randomAdjective} life, blessed with ${randomPluralNoun} and ${randomCompanionship}`)
    } else {
        return (`You will have a ${randomAdjective} life, blessed with ${randomPluralNoun} and ${randomCompanionship}`)
    };
};

console.log(generatedMessage());