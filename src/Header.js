import Component from './Component'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {hello} = this.props;
        return `<div>
                    <p>${hello}</p>
                    <hr/>
                </div>`
    }
}
