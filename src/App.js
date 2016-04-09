import Component from './Component'
import Vasific from './Vasific'
import Store from './Store'

import Header from './Header'
import Body from './Body'
import Texts from './Texts'


class App extends Component {
    constructor(props) {
        super(props);
        this.props = Store.state;
        this.children = {
            header: new Header(this.props),
            index: new Body(this.props),
            texts: new Texts(this.props),
            page404: new Component()
        };
        this.router = new Router(this.children, "index", "page404");
    }
    render() {
        return `<div>
                    ${this.children.header.render()}
                    ${this.router.render()}
                    ${this.children.texts.render()}
                </div>`
    }
}

const app = new App();
Vasific.render(app, "App");



