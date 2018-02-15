typeof 15
// Prediction: number
// Actual: 'number'

typeof 5.5
// Prediction: number
// Actual: 'number'

typeof NaN
// Prediction: NaN
// Actual: 'number'

typeof "hello"
// Prediction: string
// Actual: 'string'

typeof true
// Prediction: boolean
// Actual: 'boolean'

typeof 1 != 2
// Prediction: boolean
// Actual: true // return boolean when typeof (1 != 2)


"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: undefined
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: undefined
// Actual: -2

"johnny" + 5
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5
// Prediction: undefined
// Actual: NaN

99 * "luftbaloons"
// Prediction: "luftbaloonsluftbaloonsluftbaloonsluftbaloonsluftbaloonsluftbaloons.....until 99th luftbaloons"
// Actual: NaN