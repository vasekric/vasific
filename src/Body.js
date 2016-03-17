import Component from './Component';
import * as actions from './Actions';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            what: "WHAAAAAT"
        };
    }
    render() {
        return `<div>
                    <button id="clickMe">
                        ClickMe
                    </button>
                    <p>
                        ${this.state.what}
                    </p>
                    <p>
                        ${JSON.stringify(this.state)}
                    </p>
                    <button id="changeHeader">
                        Change Header
                    </button>
                </div>`;
    }
    bindEvents($dom) {
        $dom.find("#clickMe").click(this.buttonClicked.bind(this));
        $dom.find("#changeHeader").click(actions.handleHelloClick);
    }

    buttonClicked(e) {
        let what = "The F@#&";
        this.setState({what});
    }
}
