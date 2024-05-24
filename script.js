import { subscribe, update, get, states } from "./store.js";
import { ADD, SUBTRACT, RESET } from "./actions.js";

/** A function that logs the previous and next states of the store.
 * 
 * @param {Object} prev - The previous state.
 * @param {Object} next - The next state.
*/
const handler = (prev, next) => console.log(prev, next)
const unsubscribe = subscribe(handler)

// SCENARIO 1: Initial State Verification
console.log("Current state: ", get(states[0], 'count')); 

// SCENARIO 2: Incrementing the Counter
update(ADD);
update(ADD);
console.log("Current state: ", get(states[0], 'count')); 

// SCENARIO 3: Decrementing the Counter
update(SUBTRACT);
console.log("Current state: ", get(states[0], 'count'));

// SCENARIO 4: Resetting the Counter
update(RESET);
console.log("Current state: ", get(states[0], 'count')); 