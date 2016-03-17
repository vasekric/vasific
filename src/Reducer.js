import * as actions from './Actions'

export default function reducer(state, action) {
    switch(action.type) {
        case(actions.CLICK_HELLO): {
            const payload = action.payload;
            state.hello = payload.hello;
            return state;
        }
    }
}