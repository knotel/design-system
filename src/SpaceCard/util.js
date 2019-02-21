export const transformFloorNumber = (floorNumber) => {
    // Check if the value is either a string primitive or a string Object.
    // Everything else does not get processed and an empty string is returned.
  if (typeof floorNumber !== 'string' && Object.prototype.toString.call(floorNumber) !== '[object String]') {
    return ''
  }

    // Remove extra spaces and some some unnecessary characters
  const f1 = floorNumber.replace(/\s{2,}|\(|\)|\s-\s/g, ' ')

    // Match the suite with a word 'Suite'
  let suiteMatch = (f1.match(/suite\s.+/i) || [''])[0]
  let suite = ''
  if (!suiteMatch) {
      // Try matching `:S0005`
    suiteMatch = (f1.match(/:s\d+/i) || [''])[0]
    if (suiteMatch) {
        suite = `Suite ${suiteMatch.match(/\d+/)}`
      }
  } else {
    suite = suiteMatch.replace('suite', 'Suite')
  }

    // Remove the Suite match
  const f2 = f1.replace(suiteMatch, '')

    // Match floor
  let floor = (f2.match(/^[EPF]?\d+/i) || [''])[0]
  const remain = f2.replace(floor, '')

  floor = (floor.match(/\d+/) || [''])[0]
  if (!floor && !suite) {
      // Explicit cast to string in case od string Objects
    return floorNumber.toString()
  }

  if (floor) {
    floor = parseInt(floor)
  }

  if (floor && !suite && remain) {
    suite = remain
  }

  suite = suite.replace(/^(-|_)+/g, '')
  return `${floor ? `Floor ${floor}` : ''}${suite ? `${floor ? ' - ' : ''}${suite}` : ''}`.trim()
}
