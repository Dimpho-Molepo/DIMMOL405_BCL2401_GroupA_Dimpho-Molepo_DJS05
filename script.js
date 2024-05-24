import { subscribe, update, get, states } from "./store.js";
import { ADD, SUBTRACT, RESET } from "./actions.js";

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