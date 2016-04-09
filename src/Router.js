import Vasific from './Vasific'
import Component from './Component'

export default class Router extends Component {
    constructor(children: Array<Component>, defaultPageName: String, page404Name: String) {
        super();
        this.children = children;
        this.page404Name = page404Name;
        this.pageName = defaultPageName;
        this.setPage(window.location.href);

        window.onhashchange = this.handleRouteChange.bind(this);
    }
    render() {
        if (this.children.hasOwnProperty(this.pageName)) {
            return this.children[this.pageName].render();
        }
        else if (this.children.hasOwnProperty(this.page404Name)) {
            return this.children[this.page404Name].render();
        }
        else {
            return "";
        }
    }
    handleRouteChange(e: HashChangeEvent):void {
        const url:String = e.newURL;
        this.setPage(url);
        Vasific.render();
    }
    setPage(url: String):void {
        const splittedUrl: Array<String> = url.split("#/");
        if (splittedUrl.length != 2) {
            return;
        }
        this.pageName = splittedUrl[1];
    }
}