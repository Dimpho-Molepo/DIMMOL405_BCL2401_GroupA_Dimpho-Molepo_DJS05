# DJS05: Building a Redux-Inspired Store for a Tally App

In this challenge, you will venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. Your primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, you'll subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## Project Objective
Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.


## User Stories (Gherkin Syntax)


### SCENARIO 1: Initial State Verification
```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter
```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter
```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter
```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## Requirements
- **Implement a Global Store**: Create a Redux-inspired store that holds the state of the tally counter. The store should have the ability to dispatch actions and subscribe to state changes.
- **State Management Functions**:
  - **getState**: Returns the current state.
  - **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
  - **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
- **No UI Rendering**: This challenge focuses on state management without the complexity of UI rendering. All state changes should be observable through console logs.
- **Functional Programming Principles**: Draw upon functional programming concepts as illustrated in the reference videos. While Redux is the inspiration, you're encouraged to apply these principles creatively in your implementation.

## Discussion and Reflection

### Discussion
- What are the benefits of using a global store to manage state? How does this compare to managing state in a component? What are the tradeoffs? What are the benefits of using a global store to manage state? How does this compare to managing state in a component? What are the tradeoffs? What are the benefits of using a global store to manage state? How does this compare to managing state in a component? What are the tradeoffs?

This project has introduced us to centralized state management and a global store which provides centrilized, scalable, and maintainable solution for state management but it also requires more setup and configuration. 
- In this project I initialized the initial state as an object that holds the initial state.
= I defined the add, subtract and reset functions in the actions.js file. These functions change the count property of the state.
- In the store.js I initialized the states to contain the states for the store and notifiers to contain the functions that are currrently subscribed to the store. 
- I created the subscribe function to subscribe a function to the store which is called state of the store is changed and returns the unsubscribe function.
- I created the get function to fetch the state at a certian key of the store.
- I exported the states to be used in other scripts.
- I created the script.js to console log the state of the store when the counter is incremented, decremented and reset.


### Challenges
These are the most powerful and I believe the most complex concepts that we have learned. Rome was not built in one day, with that being said I don't think I have fully grasped the underlaying concepts of this project but I really think its possible to although it will surely take time, it will happen. Understanding functional programming is a crucial skill I strongly believe we should have in our arsenal.I had to look up how to use the subscribe function to subscribe to the store and how to unsubscribe from the store. I had to look up how to use the get function to get the state of the store. I had to do extensive research to actually attempt and complete this project.

## Author
Dimpho Molepo
