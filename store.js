import { Initial } from "./initialState.js";

/** The states array holds the current and previous states of the store.
 * 
 * @type {Array<Object>}
 */
let states = [Initial];

/** The notifiers array holds the functions that are subscribed to the store.
 * 
 * @type {Array<Function>}
 */
const notifiers = [];

/** Updates the state of the store with a given action.
 * 
 * @param {Function} action - A function that takes the current state as an argument and returns the next state.
 * @returns {void} This function doesn't return anything
 */
export const update = (action) => {
  if (typeof action !== 'function'){
    throw new Error('action is required to be a function')
  }

  const prev = Object.freeze({...states[0]})
  const next = Object.freeze({...action(prev)})

  const handler = (notify) => notify(prev, next)
  notifiers.forEach(handler)
  states.unshift(next)
}

/** Subscribes a function to the store, which will be called whenever the state of the store is updated.
 * 
 * @param {Function} notify - A function that takes the previous and next states as arguments.
 * @returns {Function} unsubscribe - A function that unsubscribes the given function from the store.
 */
export const subscribe = (notify) => {
  notifiers.push(notify)

  const unsubscribe = () => {
    const handler = (current) => current !== notify
    const result = notifiers.filter(handler)
    notifiers = result
  }
  return unsubscribe
}

/** Retrieves a value from the current state of the store.
 * 
 * @param {Object} state - The current state of the store.
 * @param {string} key - The key of the value to retrieve.
 * @returns {*} The value associated with the given key in the current state.
*/
export const get = (state, key) => {
    return state[key]
}

/** Exports the states array.
 * 
 * @type {Array<Object>}
*/
export { states };