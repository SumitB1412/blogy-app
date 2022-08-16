import { LOGIN } from "./actions";

const initState = {
    token: "",
    userId: "",
};

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            return {
                ...state,
                token: payload.token,
                userId: payload.id
            };
        }
        default: {
            return state;
        }
    }
};