(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CLICK_HELLO = undefined;
exports.handleHelloClick = handleHelloClick;

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLICK_HELLO = exports.CLICK_HELLO = 'CLICK_HELLO';

function handleHelloClick(e) {
    var hello = Math.random();
    var action = {
        type: CLICK_HELLO,
        payload: { hello: hello }
    };
    _Dispatcher2.default.dispatch(action);
}

},{"./Dispatcher":5}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Resak = require('./Resak');

var _Resak2 = _interopRequireDefault(_Resak);

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

        _this.props = _Store2.default.state;
        _this.children = {
            header: new _Header2.default(_this.props),
            body: new _Body2.default(_this.props)
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return '<div>\n                    ' + this.children.header.render() + '\n                    ' + this.children.body.render() + '\n                </div>';
        }
    }]);

    return App;
}(_Component3.default);

var app = new App();
_Resak2.default.render(app, $("#App"));

},{"./Body":3,"./Component":4,"./Header":6,"./Resak":8,"./Store":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Actions = require('./Actions');

var actions = _interopRequireWildcard(_Actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_Component) {
    _inherits(Body, _Component);

    function Body(props) {
        _classCallCheck(this, Body);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Body).call(this, props));

        _this.state = {
            what: "WHAAAAAT"
        };
        return _this;
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            return '<div>\n                    <button id="clickMe">\n                        ClickMe\n                    </button>\n                    <p>\n                        ' + this.state.what + '\n                    </p>\n                    <p>\n                        ' + JSON.stringify(this.state) + '\n                    </p>\n                    <button id="changeHeader">\n                        Change Header\n                    </button>\n                </div>';
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents($dom) {
            $dom.find("#clickMe").click(this.buttonClicked.bind(this));
            $dom.find("#changeHeader").click(actions.handleHelloClick);
        }
    }, {
        key: 'buttonClicked',
        value: function buttonClicked(e) {
            var what = "The F@#&";
            this.setState({ what: what });
        }
    }]);

    return Body;
}(_Component3.default);

exports.default = Body;

},{"./Actions":1,"./Component":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Resak = require('./Resak');

var _Resak2 = _interopRequireDefault(_Resak);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
    function Component(props) {
        _classCallCheck(this, Component);

        this.props = props || {};
        this.state = {};
        this.children = {};
    }

    _createClass(Component, [{
        key: 'render',
        value: function render() {
            return '';
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents($dom) {
            var names = Object.getOwnPropertyNames(this.children); //get all method names
            for (var i = 0, l = names.length; i < l; i++) {
                this.children[names[i]].bindEvents($dom); //call all of them
            }
        }
    }, {
        key: 'setState',
        value: function setState(partOfState) {
            this.state = Object.assign(this.state, partOfState);
            _Resak2.default.update();
        }
    }]);

    return Component;
}();

exports.default = Component;

},{"./Resak":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Reducer = require('./Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

var _Resak = require('./Resak');

var _Resak2 = _interopRequireDefault(_Resak);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dispatcher = function () {
    function Dispatcher() {
        _classCallCheck(this, Dispatcher);
    }

    _createClass(Dispatcher, null, [{
        key: 'dispatch',
        value: function dispatch(action) {
            var state = _Store2.default.state;
            var newState = (0, _Reducer2.default)(state, action);
            _Store2.default.state = newState;
            _Resak2.default.update();
        }
    }]);

    return Dispatcher;
}();

exports.default = Dispatcher;

},{"./Reducer":7,"./Resak":8,"./Store":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var hello = this.props.hello;

            return '<div>\n                    <p>' + hello + '</p>\n                    <hr/>\n                </div>';
        }
    }]);

    return Header;
}(_Component3.default);

exports.default = Header;

},{"./Component":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reducer;

var _Actions = require('./Actions');

var actions = _interopRequireWildcard(_Actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function reducer(state, action) {
    switch (action.type) {
        case actions.CLICK_HELLO:
            {
                var payload = action.payload;
                state.hello = payload.hello;
                return state;
            }
    }
}

},{"./Actions":1}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resak = function () {
    function Resak() {
        _classCallCheck(this, Resak);
    }

    _createClass(Resak, null, [{
        key: "render",
        value: function render(app, domElement) {
            if (arguments.length >= 2) {
                Resak.app = app;
                Resak.dom = domElement;
            }
            Resak.dom.empty();
            Resak.dom.append(Resak.app.render());
            Resak.bindEvents(Resak.dom);
        }
    }, {
        key: "update",
        value: function update() {
            Resak.render();
        }
    }, {
        key: "bindEvents",
        value: function bindEvents($dom) {
            Resak.app.bindEvents($dom);
        }
    }]);

    return Resak;
}();

exports.default = Resak;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function Store() {
    _classCallCheck(this, Store);
};

exports.default = Store;

Store.state = {
    hello: "Hepsik"
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXEFjdGlvbnMuanMiLCJzcmNcXEFwcC5qcyIsInNyY1xcQm9keS5qcyIsInNyY1xcQ29tcG9uZW50LmpzIiwic3JjXFxEaXNwYXRjaGVyLmpzIiwic3JjXFxIZWFkZXIuanMiLCJzcmNcXFJlZHVjZXIuanMiLCJzcmNcXFJlc2FrLmpzIiwic3JjXFxTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztRQ0lnQjs7QUFKaEI7Ozs7OztBQUVPLElBQU0sb0NBQWMsYUFBZDs7QUFFTixTQUFTLGdCQUFULENBQTBCLENBQTFCLEVBQTZCO0FBQ2hDLFFBQU0sUUFBUSxLQUFLLE1BQUwsRUFBUixDQUQwQjtBQUVoQyxRQUFNLFNBQVM7QUFDWCxjQUFNLFdBQU47QUFDQSxpQkFBUyxFQUFDLFlBQUQsRUFBVDtLQUZFLENBRjBCO0FBTWhDLHlCQUFXLFFBQVgsQ0FBb0IsTUFBcEIsRUFOZ0M7Q0FBN0I7Ozs7Ozs7QUNKUDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHTTs7O0FBQ0YsYUFERSxHQUNGLENBQVksS0FBWixFQUFtQjs4QkFEakIsS0FDaUI7OzJFQURqQixnQkFFUSxRQURTOztBQUVmLGNBQUssS0FBTCxHQUFhLGdCQUFNLEtBQU4sQ0FGRTtBQUdmLGNBQUssUUFBTCxHQUFnQjtBQUNaLG9CQUFRLHFCQUFXLE1BQUssS0FBTCxDQUFuQjtBQUNBLGtCQUFNLG1CQUFTLE1BQUssS0FBTCxDQUFmO1NBRkosQ0FIZTs7S0FBbkI7O2lCQURFOztpQ0FTTztBQUNMLG1EQUNjLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsTUFBckIsZ0NBQ0EsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixNQUFuQiwrQkFGZCxDQURLOzs7O1dBVFA7OztBQWlCTixJQUFNLE1BQU0sSUFBSSxHQUFKLEVBQU47QUFDTixnQkFBTSxNQUFOLENBQWEsR0FBYixFQUFrQixFQUFFLE1BQUYsQ0FBbEI7Ozs7Ozs7Ozs7O0FDMUJBOzs7O0FBQ0E7O0lBQVk7Ozs7Ozs7Ozs7OztJQUVTOzs7QUFDakIsYUFEaUIsSUFDakIsQ0FBWSxLQUFaLEVBQW1COzhCQURGLE1BQ0U7OzJFQURGLGlCQUVQLFFBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxrQkFBTSxVQUFOO1NBREosQ0FGZTs7S0FBbkI7O2lCQURpQjs7aUNBT1I7QUFDTCwyTEFLa0IsS0FBSyxLQUFMLENBQVcsSUFBWCxxRkFHQSxLQUFLLFNBQUwsQ0FBZSxLQUFLLEtBQUwsOEtBUmpDLENBREs7Ozs7bUNBZ0JFLE1BQU07QUFDYixpQkFBSyxJQUFMLENBQVUsVUFBVixFQUFzQixLQUF0QixDQUE0QixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBNUIsRUFEYTtBQUViLGlCQUFLLElBQUwsQ0FBVSxlQUFWLEVBQTJCLEtBQTNCLENBQWlDLFFBQVEsZ0JBQVIsQ0FBakMsQ0FGYTs7OztzQ0FLSCxHQUFHO0FBQ2IsZ0JBQUksT0FBTyxVQUFQLENBRFM7QUFFYixpQkFBSyxRQUFMLENBQWMsRUFBQyxVQUFELEVBQWQsRUFGYTs7OztXQTVCQTs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7Ozs7O0lBRXFCO0FBQ2pCLGFBRGlCLFNBQ2pCLENBQVksS0FBWixFQUFtQjs4QkFERixXQUNFOztBQUNmLGFBQUssS0FBTCxHQUFhLFNBQVMsRUFBVCxDQURFO0FBRWYsYUFBSyxLQUFMLEdBQWEsRUFBYixDQUZlO0FBR2YsYUFBSyxRQUFMLEdBQWdCLEVBQWhCLENBSGU7S0FBbkI7O2lCQURpQjs7aUNBTVI7QUFDTCxtQkFBTyxFQUFQLENBREs7Ozs7bUNBR0UsTUFBTTtBQUNiLGdCQUFNLFFBQVEsT0FBTyxtQkFBUCxDQUEyQixLQUFLLFFBQUwsQ0FBbkM7QUFETyxpQkFFVCxJQUFJLElBQUUsQ0FBRixFQUFJLElBQUUsTUFBTSxNQUFOLEVBQWMsSUFBRSxDQUFGLEVBQUssR0FBakMsRUFBc0M7QUFDbEMscUJBQUssUUFBTCxDQUFjLE1BQU0sQ0FBTixDQUFkLEVBQXdCLFVBQXhCLENBQW1DLElBQW5DO0FBRGtDLGFBQXRDOzs7O2lDQUlLLGFBQWE7QUFDbEIsaUJBQUssS0FBTCxHQUFhLE9BQU8sTUFBUCxDQUFjLEtBQUssS0FBTCxFQUFZLFdBQTFCLENBQWIsQ0FEa0I7QUFFbEIsNEJBQU0sTUFBTixHQUZrQjs7OztXQWZMOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCOzs7Ozs7O2lDQUNELFFBQVE7QUFDcEIsZ0JBQUksUUFBUSxnQkFBTSxLQUFOLENBRFE7QUFFcEIsZ0JBQUksV0FBVyx1QkFBUSxLQUFSLEVBQWUsTUFBZixDQUFYLENBRmdCO0FBR3BCLDRCQUFNLEtBQU4sR0FBYyxRQUFkLENBSG9CO0FBSXBCLDRCQUFNLE1BQU4sR0FKb0I7Ozs7V0FEUDs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7Ozs7Ozs7OztJQUVxQjs7O0FBQ2pCLGFBRGlCLE1BQ2pCLENBQVksS0FBWixFQUFtQjs4QkFERixRQUNFOztzRUFERixtQkFFUCxRQURTO0tBQW5COztpQkFEaUI7O2lDQUlSO2dCQUNFLFFBQVMsS0FBSyxLQUFMLENBQVQsTUFERjs7QUFFTCxzREFDaUIsaUVBRGpCLENBRks7Ozs7V0FKUTs7Ozs7Ozs7Ozs7a0JDQUc7O0FBRnhCOztJQUFZOzs7O0FBRUcsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLE1BQXhCLEVBQWdDO0FBQzNDLFlBQU8sT0FBTyxJQUFQO0FBQ0gsYUFBSyxRQUFRLFdBQVI7QUFBc0I7QUFDdkIsb0JBQU0sVUFBVSxPQUFPLE9BQVAsQ0FETztBQUV2QixzQkFBTSxLQUFOLEdBQWMsUUFBUSxLQUFSLENBRlM7QUFHdkIsdUJBQU8sS0FBUCxDQUh1QjthQUEzQjtBQURKLEtBRDJDO0NBQWhDOzs7Ozs7Ozs7Ozs7O0lDRk07Ozs7Ozs7K0JBQ0gsS0FBSyxZQUFZO0FBQzNCLGdCQUFHLFVBQVUsTUFBVixJQUFvQixDQUFwQixFQUF1QjtBQUN0QixzQkFBTSxHQUFOLEdBQVksR0FBWixDQURzQjtBQUV0QixzQkFBTSxHQUFOLEdBQVksVUFBWixDQUZzQjthQUExQjtBQUlBLGtCQUFNLEdBQU4sQ0FBVSxLQUFWLEdBTDJCO0FBTTNCLGtCQUFNLEdBQU4sQ0FBVSxNQUFWLENBQWlCLE1BQU0sR0FBTixDQUFVLE1BQVYsRUFBakIsRUFOMkI7QUFPM0Isa0JBQU0sVUFBTixDQUFpQixNQUFNLEdBQU4sQ0FBakIsQ0FQMkI7Ozs7aUNBU2Y7QUFDWixrQkFBTSxNQUFOLEdBRFk7Ozs7bUNBR0UsTUFBTTtBQUNwQixrQkFBTSxHQUFOLENBQVUsVUFBVixDQUFxQixJQUFyQixFQURvQjs7OztXQWJQOzs7Ozs7Ozs7Ozs7OztJQ0FBOzs7Ozs7QUFFckIsTUFBTSxLQUFOLEdBQWM7QUFDVixXQUFPLFFBQVA7Q0FESiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRGlzcGF0Y2hlciBmcm9tICcuL0Rpc3BhdGNoZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMSUNLX0hFTExPID0gJ0NMSUNLX0hFTExPJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVIZWxsb0NsaWNrKGUpIHtcclxuICAgIGNvbnN0IGhlbGxvID0gTWF0aC5yYW5kb20oKTtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgICAgICB0eXBlOiBDTElDS19IRUxMTyxcclxuICAgICAgICBwYXlsb2FkOiB7aGVsbG99XHJcbiAgICB9O1xyXG4gICAgRGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCdcclxuaW1wb3J0IFJlc2FrIGZyb20gJy4vUmVzYWsnXHJcbmltcG9ydCBTdG9yZSBmcm9tICcuL1N0b3JlJ1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi9Cb2R5J1xyXG5cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnByb3BzID0gU3RvcmUuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHtcclxuICAgICAgICAgICAgaGVhZGVyOiBuZXcgSGVhZGVyKHRoaXMucHJvcHMpLFxyXG4gICAgICAgICAgICBib2R5OiBuZXcgQm9keSh0aGlzLnByb3BzKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5jaGlsZHJlbi5oZWFkZXIucmVuZGVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNoaWxkcmVuLmJvZHkucmVuZGVyKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuUmVzYWsucmVuZGVyKGFwcCwgJChcIiNBcHBcIikpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgd2hhdDogXCJXSEFBQUFBVFwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gYDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsaWNrTWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xpY2tNZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuc3RhdGUud2hhdH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjaGFuZ2VIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlIEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgIH1cclxuICAgIGJpbmRFdmVudHMoJGRvbSkge1xyXG4gICAgICAgICRkb20uZmluZChcIiNjbGlja01lXCIpLmNsaWNrKHRoaXMuYnV0dG9uQ2xpY2tlZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAkZG9tLmZpbmQoXCIjY2hhbmdlSGVhZGVyXCIpLmNsaWNrKGFjdGlvbnMuaGFuZGxlSGVsbG9DbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uQ2xpY2tlZChlKSB7XHJcbiAgICAgICAgbGV0IHdoYXQgPSBcIlRoZSBGQCMmXCI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2hhdH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZXNhayBmcm9tICcuL1Jlc2FrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgYmluZEV2ZW50cygkZG9tKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmNoaWxkcmVuKTsgLy9nZXQgYWxsIG1ldGhvZCBuYW1lc1xyXG4gICAgICAgIGZvcihsZXQgaT0wLGw9bmFtZXMubGVuZ3RoOyBpPGw7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW25hbWVzW2ldXS5iaW5kRXZlbnRzKCRkb20pOyAvL2NhbGwgYWxsIG9mIHRoZW1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShwYXJ0T2ZTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHBhcnRPZlN0YXRlKTtcclxuICAgICAgICBSZXNhay51cGRhdGUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vUmVkdWNlcidcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4vU3RvcmUnXHJcbmltcG9ydCBSZXNhayBmcm9tICcuL1Jlc2FrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGF0Y2hlciB7XHJcbiAgICBzdGF0aWMgZGlzcGF0Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gU3RvcmUuc3RhdGU7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgICBTdG9yZS5zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgIFJlc2FrLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aGVsbG99ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gYDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtoZWxsb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vQWN0aW9ucydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZShhY3Rpb25zLkNMSUNLX0hFTExPKToge1xyXG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHN0YXRlLmhlbGxvID0gcGF5bG9hZC5oZWxsbztcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2FrIHtcclxuICAgIHN0YXRpYyByZW5kZXIoYXBwLCBkb21FbGVtZW50KSB7XHJcbiAgICAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIFJlc2FrLmFwcCA9IGFwcDtcclxuICAgICAgICAgICAgUmVzYWsuZG9tID0gZG9tRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgUmVzYWsuZG9tLmVtcHR5KCk7XHJcbiAgICAgICAgUmVzYWsuZG9tLmFwcGVuZChSZXNhay5hcHAucmVuZGVyKCkpO1xyXG4gICAgICAgIFJlc2FrLmJpbmRFdmVudHMoUmVzYWsuZG9tKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgUmVzYWsucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYmluZEV2ZW50cygkZG9tKSB7XHJcbiAgICAgICAgUmVzYWsuYXBwLmJpbmRFdmVudHMoJGRvbSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XHJcbn1cclxuU3RvcmUuc3RhdGUgPSB7XHJcbiAgICBoZWxsbzogXCJIZXBzaWtcIlxyXG59OyJdfQ==
