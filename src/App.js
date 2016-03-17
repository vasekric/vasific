import Component from './Component'
import Resak from './Resak'
import Store from './Store'

import Header from './Header'
import Body from './Body'


class App extends Component {
    constructor(props) {
        super(props);
        this.props = Store.state;
        this.children = {
            header: new Header(this.props),
            body: new Body(this.props)
        };
    }
    render() {
        return `<div>
                    ${this.children.header.render()}
                    ${this.children.body.render()}
                </div>`
    }
}

const app = new App();
Resak.render(app, $("#App"));




