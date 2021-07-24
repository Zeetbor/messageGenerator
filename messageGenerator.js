let randomNum = (num) => {
  return Math.floor(Math.random() * num)
}

const words = {
    adjective: ["quick", "slow", "bouncy", "dumb", "clever", "friendly", "mean"],
    colour: ["red", "brown", "green", "blue", "black", "grey", "yellow"],
    animal: ["fox", "rabbit", "sheep", "dog", "mouse", "goat", "horse", "cat", "pig"],
    verb: ["jumped", "ran", "flew", "flipped", "rolled"],
}

let sentence = () => {
  return `The ${words.adjective[randomNum(words.adjective.length)]}, ${words.colour[randomNum(words.colour.length)]} ${words.animal[randomNum(words.animal.length)]} ${words.verb[randomNum(words.verb.length)]} over the ${words.adjective[randomNum(words.adjective.length)]}, ${words.colour[randomNum(words.colour.length)]} ${words.animal[randomNum(words.animal.length)]}.`
}
