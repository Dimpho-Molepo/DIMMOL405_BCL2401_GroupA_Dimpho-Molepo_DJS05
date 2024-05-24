import { Initial } from "./initialState.js";

let states = [Initial];
const notifiers = [];

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

export const subscribe = (notify) => {
  notifiers.push(notify)

  const unsubscribe = () => {
    const handler = (current) => current !== notify
    const result = notifiers.filter(handler)
    notifiers = result
  }
  return unsubscribe
}

export const get = (state, key) => {
    return state[key]
}

export { states };