export const ADD = (state) => {
    return {
        ...state,
        count: state.count + 1,
    };
}

export const SUBTRACT = (state) => {
    return {
        ...state,
        count: state.count - 1,
    };
}

export const RESET = (state) => {
    return {
        count: 0,
    };
}