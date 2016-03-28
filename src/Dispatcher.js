import reducer from './Reducer'
import Store from './Store'
import Vasific from './Vasific'

export default class Dispatcher {
    static dispatch(action) {
        let state = Store.state;
        let newState = reducer(state, action);
        Store.state = newState;
        Vasific.render();
    }
}