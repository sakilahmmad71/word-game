window.addEventListener('load', init)

// available lavels
const levels = {
    easy : 5,
    medium : 3,
    hard : 1
}
const currentLevel = levels.medium
let time  = currentLevel
let score = 0
let isplaying

// dom elements variables.
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = ['hat', 'river', 'lucky', 'statue', 'hand', 'book', 'fan', 'mobile', 'shower', 'electronics', 'communication', 'generate', 'cocktail', 'runaway', 'developer', 'engineer', 'establishment', 'annoying', 'disturbed', 'car', 'shoe', 'hero', 'javascript', 'revolver', 'echo', 'sibling', 'parents', 'daughter', 'brother', 'father', 'mother', 'store', 'house', 'go', 'fun', 'magic', 'symptom', 'joke', 'bucket', 'natural', 'plural', 'single', 'married', 'friend', 'girl', 'boy', 'old', 'young', 'telephone', 'culture', 'performance', 'problem', 'solution', 'enjoy', 'picnic', 'journey', 'abstruct', 'abuse', 'fault', 'false', 'fuel', 'fool', 'light', 'loop', 'lot', 'love', 'life', 'live', 'rice', 'rose', 'digree', 'defence', 'defrastructure', 'demonstrate', 'demolish', 'eat', 'egg', 'null', 'undefined', 'not', 'no', 'nope', 'fall', 'fail', 'choose', 'chase', 'use', 'user', 'moon', 'sun', 'earth', 'world', 'hello', 'hi', 'battery', 'ram', 'rom', 'laptop', 'internet', 'broadband', 'ethernet', 'other', 'oponent', 'obligue', 'obstacle', 'read', 'write', 'crate', 'delete', 'update', 'insert', 'male', 'female', 'gender', 'better', 'best', 'java', 'python', 'go', 'scala', 'react', 'vue', 'angular', 'program', 'code', 'debug', 'refactor', 'electron', 'facebook', 'youtube', 'google', 'instagram', 'yahoo', 'gmail', 'blender', 'cooker', 'cook', 'cheif', 'noodles', 'random', 'math', 'physics', 'chemistry', 'biology', 'psychology', 'computer', 'disk', 'space', 'between', 'inside', 'narration', 'essay', 'banana', 'apple', 'mango', 'fruit','orange', 'taste', 'nasty', 'extra', 'thank', 'you', 'more', 'less', 'heavy', 'rain', 'cloud', 'notification', 'thunder', 'exception', 'experiance', 'level', 'continue', 'population', 'people', 'paper', 'pen', 'poison', 'culprit', 'casual', 'could', 'covar', 'cleaver', 'cancel', 'cause', 'reason', 'battle', 'bounce', 'port', 'portfolio']

// initialize game 
function init() {
    // show number of seconds
    seconds.innerHTML = currentLevel
    // load word from array
    showWord(words)
    // start matching word input
    wordInput.addEventListener('input', startMatch)
    // call countdown every second
    setInterval(countdown, 1000)
    // check the game status
    setInterval(checkStatus, 50)
}

// start matching 
function startMatch() {
    if(matchWords()) {
        isplaying = true
        time = currentLevel + 1
        showWord(words)
        wordInput.value = ''
        score++
    }
    // if score -1
    if(score === -1) {
    scoreDisplay.innerHTML = 0 
    } else {
    scoreDisplay.innerHTML = score 
    }
}

// match current item from dom
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Yahoo Correct!!!'
        return true
    } else {
        message.innerHTML = ''
        return false
    }
}

function showWord(words) {
    // generate random word
    const randIndex = Math.floor(Math.random() * words.length)
    // output random word
    currentWord.innerHTML = words[randIndex]
    
}

// countdown timer
function countdown() {
    // make sure time is not run out
    if(time > 0) {
        time--
    } else if(time === 0){
        isplaying = false
    }
    timeDisplay.innerHTML = time
}

function checkStatus() {
    if(!isplaying && time === 0) {
        message.innerHTML = 'Game Over!!!'
        score = -1
    }
}