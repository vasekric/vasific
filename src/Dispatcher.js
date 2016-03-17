import reducer from './Reducer'
import Store from './Store'
import Resak from './Resak'

export default class Dispatcher {
    static dispatch(action) {
        let state = Store.state;
        let newState = reducer(state, action);
        Store.state = newState;
        Resak.update();
    }
}