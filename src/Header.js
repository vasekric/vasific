import Component from './Component'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {hello} = this.props;
        return `<div>
                    <p>Header is: ${hello}</p>
                    <hr/>
                </div>`
    }
}
