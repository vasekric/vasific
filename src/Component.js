import Resak from './Resak'

export default class Component {
    constructor(props) {
        this.props = props || {};
        this.state = {};
        this.children = {};
    }
    render() {
        return '';
    }
    bindEvents($dom) {
        const names = Object.getOwnPropertyNames(this.children); //get all method names
        for(let i=0,l=names.length; i<l; i++) {
            this.children[names[i]].bindEvents($dom); //call all of them
        }
    }
    setState(partOfState) {
        this.state = Object.assign(this.state, partOfState);
        Resak.update();
    }
}