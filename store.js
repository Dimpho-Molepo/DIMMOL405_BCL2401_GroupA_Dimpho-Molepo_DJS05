const Initial = {
    count: 0,
}

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