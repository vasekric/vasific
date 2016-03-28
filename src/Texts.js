import Component from './Component';
import * as actions from './Actions';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hi there! Change me!"
        };
    }
    render() {
        return `<div>
                    <hr />
                    <input id="inputText" value="${this.state.text}" />
                    <p>
                        ${this.state.text}
                    </p>
                </div>`;
    }
    bindEvents($dom) {
        $dom.find("#inputText").on("keyup", (e) => {
            const text = e.target.value;
            this.setState({text});
        });
    }
}
