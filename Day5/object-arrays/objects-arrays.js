darthVader = {
    allegiance: "Empire",
    weapon: "Light Sabre",
    sith: true,
}

console.log(darthVader)


console.log(`Dath Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log("Darth Vader is a Sith?", darthVader.sith)
console.log("Darth vader is a jedi?", !darthVader.sith)