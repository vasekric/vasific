import Vasific from './Vasific'

export default class Component {
    constructor(props: Object) {
        this.props = props || {};
        this.state = {};
        this.children = {};
    }
    render():String {
        return '';
    }
    bindEvents($dom: $):void {
        const names = Object.getOwnPropertyNames(this.children); //get all method names
        for(let i=0,l=names.length; i<l; i++) {
            this.children[names[i]].bindEvents($dom); //call all of them
        }
    }
    setState(partOfState: Object):void {
        this.state = Object.assign(this.state, partOfState);
        Vasific.render();
    }
}