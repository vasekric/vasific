import Dispatcher from './Dispatcher';

export const CLICK_HELLO = 'CLICK_HELLO';

export function handleHelloClick(e) {
    const hello = Math.random();
    const action = {
        type: CLICK_HELLO,
        payload: {hello}
    };
    Dispatcher.dispatch(action);
}