/*
https://adventofcode.com/2020/day/1
 */

// Read Input file and convert all entries to integers
const path = require('path')
const fs = require('fs')
const input = fs.readFileSync(path.resolve(__dirname, 'Day1_Input.txt'), 'utf-8')
  .split('\n')
  .map(x => parseInt(x))

// Part 1 - Find two entries that fulfill the criterion
function firstSolution () {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (i === j) continue
      if (input[i] + input[j] === 2020) {
        console.log(`Solution found at ${input[i]} + ${input[j]}! The solution is ${input[i] * input[j]}`)
        return
      }
    }
  }
}

// Part 2 - Find three entries that fulfill the criterion
function secondSolution () {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (i === j || i === k || j === k) continue
        if (input[i] + input[j] + input[k] === 2020) {
          console.log(`Solution found at ${input[i]} + ${input[j]} + ${input[k]}! The solution is ${input[i] * input[j] * input[k]}`)
          return
        }
      }
    }
  }
}

firstSolution()
secondSolution()
