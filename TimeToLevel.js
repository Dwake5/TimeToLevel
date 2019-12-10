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

