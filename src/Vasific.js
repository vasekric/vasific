import diffDOM from 'diff-dom'
import Component from './Component'

export default class Vasific {
    static render(app: Component, appID: String) {
        if(arguments.length >= 2) {
            Vasific.app = app;
            Vasific.appID = appID;
        }
        Vasific.updateDiff();
        $(`#${Vasific.appID}, #${Vasific.appID} *`).off();
        Vasific.bindEvents($(`#${Vasific.appID}`));
    }
    static updateDiff():void {
        let newInnerDOM = Vasific.app.render();
        let oldDOM = document.getElementById(Vasific.appID);
        let newDOM = document.createElement('div');
        let dd = new diffDOM();

        newDOM.innerHTML = newInnerDOM;
        newDOM.id = Vasific.appID;
        Vasific.dd.apply(oldDOM, dd.diff(oldDOM, newDOM));
    }
    static bindEvents($dom: $):void {
        Vasific.app.bindEvents($dom);
    }
    static get dd() {  //Read-only static property
        return new diffDOM();
    }
}