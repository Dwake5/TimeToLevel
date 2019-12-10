// This code tells you how long until a certain condition is met in a game.
// Rivals are leveled up by masters, of which there are three, in no order.
// The rival needs level*10+10 exp to level up. 
// They get each (master lvl - rival lvl) exp per min if greater than zero or zero otherwise.
// How long will it take for a rival to reach each masters level or a set target level?
// Four inputs will return 1-3 outputs for how long it takes to get to each masters level.
// Five inputs will return how long it takes to reach that target.

// I posted it to the relevant forum and explained step by step how non-coders could use it. Because it has a highly desired output. 

const timeToMax = (rival, m1, m2, m3, target=-1) => {
  [m1,m2,m3] = [m1,m2,m3].sort((a, b) => a > b ? 1 : -1)

  let totalTime = 0
  if (rival >= m3) return 'Rivals level too high'
  let messages = []

  while (rival < m3) {
    let expNeeded = rival*10+10
    let expPerMin = Math.max(m1-rival, 0) + Math.max(m2-rival, 0) + Math.max(m3-rival, 0)
    totalTime += expNeeded/expPerMin
    rival++
    if (rival == target) return (`${totalTime.toFixed(2)} minutes until the target rival level of ${target}.`)

    if (rival == m1 && m1 != m2) messages.push(`${totalTime.toFixed(2)} minutes until rival reaches ${m1}`)

    if (rival == m2 && m2 != m3) messages.push(`${totalTime.toFixed(2)} minutes until rival reaches ${m2}`)

    if (rival == m3) messages.push(`${totalTime.toFixed(2)} minutes until rival reaches ${m3}`)
  }

  return messages
}

