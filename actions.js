/** Adds one to the count property of the state.
 * 
 * @param {Object} state - the current state of the store.
 * @returns {Object}
 */
export const ADD = (state) => {
    return {
        ...state,
        count: state.count + 1,
    };
}

/** Subtracts one from the count property of the state.
 * 
 * @param {Object} state - the current state of the store.
 * @returns {Object}
*/
export const SUBTRACT = (state) => {
    return {
        ...state,
        count: state.count - 1,
    };
}

/** Resets the count property of the state to zero.
 * 
 * @param {Object} state - the current state of the store.
 * @returns {Object}
*/
export const RESET = (state) => {
    return {
        count: 0,
    };
}