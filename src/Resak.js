export default class Resak {
    static render(app, domElement) {
        if(arguments.length >= 2) {
            Resak.app = app;
            Resak.dom = domElement;
        }
        Resak.dom.empty();
        Resak.dom.append(Resak.app.render());
        Resak.bindEvents(Resak.dom);
    }
    static update() {
        Resak.render();
    }
    static bindEvents($dom) {
        Resak.app.bindEvents($dom);
    }
}