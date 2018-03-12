/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SIGNUP_SUCCESS = exports.SIGNUP_SUCCESS = "SIGN_UP_SUCCESS";
var LOGIN = exports.LOGIN = "LOGIN";

var CREATE_TABLE_RESULT = exports.CREATE_TABLE_RESULT = "CREATE_TABLE_RESULT";
var SHOW_TABLE_RESULT = exports.SHOW_TABLE_RESULT = "SHOW_TABLE_RESULT";
var NO_TABLE_RESULT = exports.NO_TABLE_RESULT = "NO_TABLE_RESULT";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signUpModal = signUpModal;
exports.login = login;
exports.logout = logout;

var _actionNames = __webpack_require__(3);

var _token = __webpack_require__(11);

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signUpModal(bool) {
    return function (dispatch) {
        dispatch(modalBool(bool));
    };
}

function modalBool(data) {
    var list = { type: _actionNames.SIGNUP_SUCCESS, status: data };
    return list;
}

function login(user) {
    return {
        type: _actionNames.LOGIN,
        user: user
    };
}

function logout() {
    return function (dispatch) {
        (0, _token2.default)(false);
        localStorage.removeItem('jwtToken');
        dispatch(login({}));
    };
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// adress rendering for development/production

var dev = true;
var server = void 0;

dev ? server = "http://localhost:8080/" : server = "https://task-manager-server.herokuapp.com/";

exports.default = server;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Board = exports.Boards = exports.Mainpage = exports.Login = exports.SignUp = exports.Header = exports.Home = undefined;

var _Home2 = __webpack_require__(18);

var _Home3 = _interopRequireDefault(_Home2);

var _Header2 = __webpack_require__(10);

var _Header3 = _interopRequireDefault(_Header2);

var _SignUp2 = __webpack_require__(19);

var _SignUp3 = _interopRequireDefault(_SignUp2);

var _Login2 = __webpack_require__(20);

var _Login3 = _interopRequireDefault(_Login2);

var _Mainpage2 = __webpack_require__(23);

var _Mainpage3 = _interopRequireDefault(_Mainpage2);

var _Boards2 = __webpack_require__(24);

var _Boards3 = _interopRequireDefault(_Boards2);

var _Board2 = __webpack_require__(26);

var _Board3 = _interopRequireDefault(_Board2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home3.default;
exports.Header = _Header3.default;
exports.SignUp = _SignUp3.default;
exports.Login = _Login3.default;
exports.Mainpage = _Mainpage3.default;
exports.Boards = _Boards3.default;
exports.Board = _Board3.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _signUp = __webpack_require__(5);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function Auth(props) {
    return _react2.default.createElement(
        'div',
        { className: 'd-flex' },
        _react2.default.createElement(
            'ul',
            { className: 'd-flex' },
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/boards' },
                    'Boards'
                )
            )
        ),
        _react2.default.createElement(
            'span',
            null,
            'Hello, ',
            props.user.username,
            ' '
        ),
        _react2.default.createElement(
            'span',
            { onClick: props.logout },
            'Sign Out'
        )
    );
};

var Header = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        user: state.signUp.user,
        isAuth: state.signUp.isAuth
    };
}, { logout: _signUp.logout }), _dec(_class = (0, _reactRouterDom.withRouter)(_class = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.logout = function () {
            _this.props.logout();
            _this.props.history.push('/api/login');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                isAuth = _props.isAuth,
                user = _props.user;


            var notAuth = _react2.default.createElement(
                'div',
                { className: 'd-flex' },
                _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/login' },
                        'Sign in'
                    )
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/signup' },
                        'Sign up'
                    )
                )
            );

            return _react2.default.createElement(
                'div',
                { className: 'navbar' },
                _react2.default.createElement(
                    'div',
                    { className: 'container d-flex justify-content-between' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'Logo'
                    ),
                    isAuth ? _react2.default.createElement(Auth, { user: user, logout: this.logout }) : notAuth
                )
            );
        }
    }]);

    return Header;
}(_react.Component)) || _class) || _class);
exports.default = Header;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setAuthToken;

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setAuthToken(token) {
    if (token) {
        _axios2.default.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete _axios2.default.defaults.headers.common['Authorization'];
    }
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _renderer = __webpack_require__(15);

var _renderer2 = _interopRequireDefault(_renderer);

var _rootReducer = __webpack_require__(28);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(33);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _cors = __webpack_require__(34);

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proxy = __webpack_require__(35);


var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use(_express2.default.static('public'));
process.env.NODE_ENV === "production" && app.use('/api', proxy({ target: {"api_server":"http://localhost:8080/"}.api_server, changeOrigin: true }));
app.use('/', function (req, res) {

  var store = (0, _redux.createStore)(_rootReducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  res.send((0, _renderer2.default)(req, store));
});

app.set('port', process.env.PORT || 3002);

app.listen(app.get('port'), function () {
  console.log('listen on port 3002');
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(16);

var _Routers = __webpack_require__(17);

var _Routers2 = _interopRequireDefault(_Routers);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouter.StaticRouter,
            { location: req.url, context: {} },
            (0, _Routers2.default)(store)
        )
    ));

    return '\n            <head>\n                <base href="/" />\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script >\n                    window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\n                </script>\n                <script src="bundle.js"></script> \n            </body>\n        </html>';
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(2);

var _Header = __webpack_require__(10);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (store) {
    var _store$getState = store.getState(),
        isAuth = _store$getState.signUp.isAuth;

    var PrivateRoute = function PrivateRoute(_ref) {
        var Component = _ref.component,
            rest = _objectWithoutProperties(_ref, ["component"]);

        return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
            render: function render(props) {
                return isAuth ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, {
                    to: {
                        pathname: "login",
                        state: { from: props.location }
                    }
                });
            }
        }));
    };

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _index.Home }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/signup", component: _index.SignUp }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/login", component: _index.Login }),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(PrivateRoute, { path: "/boards", exact: true, component: _index.Boards }),
            _react2.default.createElement(PrivateRoute, { path: "/boards/:id", component: _index.Board })
        )
    );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _index = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        isAuth: state.signUp.isAuth
    };
}, {}), _dec(_class = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            !this.props.isAuth && this.props.history.push('/login');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Home page'
            );
        }
    }]);

    return Home;
}(_react.Component)) || _class);
exports.default = Home;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

var _signUp = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validate = function validate(values) {
    var errors = {};

    if (!values.fullname) {
        errors.fullname = "Required";
    } else if (values.fullname.length < 7) {
        errors.fullname = "Too short full name";
    }

    if (!values.username) {
        errors.username = "Required";
    } else if (values.username.length < 7) {
        errors.username = "Too short username";
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 7) {
        errors.password = "Too short password";
    }

    if (!values.passwordCheck) {
        errors.passwordCheck = 'Required';
    } else if (values.passwordCheck !== values.password) {
        errors.passwordCheck = 'Passwords need to be identical';
    }

    return errors;
};

var renderField = function renderField(_ref) {
    var input = _ref.input,
        label = _ref.label,
        type = _ref.type,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', _extends({}, input, { placeholder: label, type: type })),
            touched && error && _react2.default.createElement(
                'span',
                null,
                error
            )
        )
    );
};

var SignUp = (_dec = (0, _reduxForm.reduxForm)({
    form: 'register',
    validate: validate
}, function (state) {
    return {};
}), _dec2 = (0, _reactRedux.connect)(function (state) {
    return {};
}, { signUpModal: _signUp.signUpModal }), _dec(_class = _dec2(_class = function (_Component) {
    _inherits(SignUp, _Component);

    function SignUp() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, SignUp);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
            submitError: false,
            errors: {}
        }, _this.handleSignUp = function (values) {
            _axios2.default.post('/api/signup', values).then(function (res) {
                if (!res.data.error) {
                    _this.props.signUpModal(true);
                    _this.props.history.push('/login');
                }
            }).catch(function (err) {
                _this.setState({ errors: err.response.data.error });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SignUp, [{
        key: 'render',
        value: function render() {
            var handleSubmit = this.props.handleSubmit;
            var errors = this.state.errors;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                this.submitError !== false && _react2.default.createElement(
                    'div',
                    null,
                    this.state.submitError
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'fullname' },
                            'Full Name'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { name: 'fullname',
                            component: renderField,
                            type: 'text' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'username' },
                            'Username'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { name: 'username', component: renderField, type: 'text' }),
                        errors.username && _react2.default.createElement(
                            'div',
                            null,
                            errors.username
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'email' },
                            'Email'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { name: 'email', component: renderField, type: 'text' }),
                        errors.email && _react2.default.createElement(
                            'div',
                            null,
                            errors.email
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'password' },
                            'Password'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { name: 'password', component: renderField, type: 'text' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'passwordCheck' },
                            'Confirm your password'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { name: 'passwordCheck', component: renderField, type: 'text' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', { type: 'submit', value: 'Create Account', onClick: handleSubmit(this.handleSignUp) })
                    )
                )
            );
        }
    }]);

    return SignUp;
}(_react.Component)) || _class) || _class);
exports.default = SignUp;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _signUp = __webpack_require__(5);

var _LoginForm = __webpack_require__(21);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        successMessage: state.signUp
    };
}, { login: _signUp.login }), _dec(_class = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                successMessage = _props.successMessage,
                history = _props.history,
                login = _props.login;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                successMessage === true && _react2.default.createElement(
                    'div',
                    null,
                    'You`re successfully registred, login'
                ),
                _react2.default.createElement(_LoginForm2.default, { history: history, login: login })
            );
        }
    }]);

    return Login;
}(_react.Component)) || _class);
exports.default = Login;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(7);

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _token = __webpack_require__(11);

var _token2 = _interopRequireDefault(_token);

var _jsonwebtoken = __webpack_require__(22);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validate = function validate(values) {
    var errors = {};

    if (!values.username) {
        errors.username = "Required";
    } else if (values.username.length < 5) {
        errors.username = "Too short username or email";
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 7) {
        errors.password = "Too short password";
    }

    return errors;
};

var renderField = function renderField(_ref) {
    var input = _ref.input,
        label = _ref.label,
        type = _ref.type,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', _extends({}, input, { placeholder: label, type: type })),
            touched && error && _react2.default.createElement(
                'span',
                null,
                error
            )
        )
    );
};

var LoginForm = (_dec = (0, _reduxForm.reduxForm)({
    form: 'login',
    validate: validate
}, function (state) {
    return {};
}), _dec(_class = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, LoginForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
            submitError: false,
            errors: {}
        }, _this.handleSignUp = function (values) {
            _axios2.default.post('/api/login', values).then(function (res) {
                console.log(values);
                if (!res.data.error) {
                    localStorage.setItem('jwtToken', res.data.token);
                    (0, _token2.default)(res.data.token);
                    _this.props.login(_jsonwebtoken2.default.decode(res.data.token));
                    _this.props.history.push('/');
                }
            }).catch(function (err) {
                _this.setState({ errors: err.response.data.errors });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            var handleSubmit = this.props.handleSubmit;
            var errors = this.state.errors;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'username' },
                        'Username'
                    ),
                    _react2.default.createElement(_reduxForm.Field, { name: 'username', component: renderField, type: 'text' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'password' },
                        'Password'
                    ),
                    _react2.default.createElement(_reduxForm.Field, { name: 'password', component: renderField, type: 'password' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('input', { type: 'submit', value: 'Login', onClick: handleSubmit(this.handleSignUp) })
                ),
                errors && _react2.default.createElement(
                    'div',
                    null,
                    errors.form
                )
            );
        }
    }]);

    return LoginForm;
}(_react.Component)) || _class);
exports.default = LoginForm;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mainpage = function (_Component) {
    _inherits(Mainpage, _Component);

    function Mainpage() {
        _classCallCheck(this, Mainpage);

        return _possibleConstructorReturn(this, (Mainpage.__proto__ || Object.getPrototypeOf(Mainpage)).apply(this, arguments));
    }

    _createClass(Mainpage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'main page'
            );
        }
    }]);

    return Mainpage;
}(_react.Component);

exports.default = Mainpage;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _boards = __webpack_require__(25);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boards = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        userId: state.signUp.user.id,
        boardCreated: state.boards.success,
        boards: state.boards.tables
    };
}, { createBoard: _boards.createBoard, showBoards: _boards.showBoards }), _dec(_class = function (_Component) {
    _inherits(Boards, _Component);

    function Boards() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Boards);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Boards.__proto__ || Object.getPrototypeOf(Boards)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            createModal: false,
            boardName: ''
        }, _this.createBoard = function () {
            _this.props.createBoard(_this.props.userId, _this.state.boardName);
            _this.props.showBoards(_this.props.userId);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Boards, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.showBoards(this.props.userId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var createModal = this.state.createModal;
            var _props = this.props,
                boardCreated = _props.boardCreated,
                boards = _props.boards;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'p',
                    { onClick: function onClick() {
                            _this2.setState({ createModal: !createModal });
                        } },
                    'Create new board'
                ),
                createModal && _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('input', { type: 'text',
                        placeholder: 'Board Name', onChange: function onChange(e) {
                            return _this2.setState({ boardName: e.target.value });
                        } }),
                    _react2.default.createElement(
                        'span',
                        { onClick: this.createBoard },
                        'Create'
                    )
                ),
                boardCreated && _react2.default.createElement(
                    'div',
                    null,
                    'Board successfully created '
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'span',
                        null,
                        'Your boards:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'd-flex' },
                        boards && boards.map(function (board) {
                            return _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: 'boards/' + board.id },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        board.name
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Created at ' + board.updated_at
                                    )
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Boards;
}(_react.Component)) || _class);
exports.default = Boards;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBoard = createBoard;
exports.showBoards = showBoards;

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _actionNames = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createBoard(user, name) {
    return function (dispatch) {
        return _axios2.default.post('/api/boards/create', { user: user, name: name }).then(function (res) {
            dispatch(createBoardResult(res.data.success));
        });
    };
}

function createBoardResult(bool) {
    return {
        type: _actionNames.CREATE_TABLE_RESULT,
        success: bool
    };
}

function showBoards(userID) {
    return function (dispatch) {
        return _axios2.default.get('/api/boards/get_boards?userID=' + userID).then(function (res) {
            dispatch(showBoardsSuccess(res.data.boards));
        }).catch(function (err) {
            console.log(err.response.data);
        });
    };
}

function showBoardsSuccess(data) {
    return {
        type: _actionNames.SHOW_TABLE_RESULT,
        tables: data
    };
}

function showBoardsFailed(err) {
    return {
        type: _actionNames.NO_TABLE_RESULT,
        error: err
    };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_Component) {
    _inherits(Board, _Component);

    function Board() {
        _classCallCheck(this, Board);

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
    }

    _createClass(Board, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "p",
                        null,
                        "Add task ",
                        _react2.default.createElement(
                            "span",
                            null,
                            "+"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-flex" },
                    _react2.default.createElement(
                        "div",
                        { className: "inpup-group" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "" },
                            "Name"
                        ),
                        _react2.default.createElement("input", { type: "text" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "inpup-group" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "" },
                            "Issue"
                        ),
                        _react2.default.createElement("input", { type: "text" })
                    ),
                    _react2.default.createElement(
                        "button",
                        null,
                        "Add task"
                    )
                )
            );
        }
    }]);

    return Board;
}(_react.Component);

exports.default = Board;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(12);

var _list = __webpack_require__(29);

var _list2 = _interopRequireDefault(_list);

var _signUp = __webpack_require__(30);

var _signUp2 = _interopRequireDefault(_signUp);

var _boards = __webpack_require__(32);

var _boards2 = _interopRequireDefault(_boards);

var _reduxForm = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    list: _list2.default,
    signUp: _signUp2.default,
    boards: _boards2.default,
    form: _reduxForm.reducer
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case 'SUCCESS_LIST':
            return action.list;
        case 'ERROR_LIST':
            return {
                error: action.error,
                errorStage: true
            };
        default:
            return state;
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionNames = __webpack_require__(3);

var _isEmpty = __webpack_require__(31);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    user: {},
    isAuth: false
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _actionNames.SIGNUP_SUCCESS:
            return action.status;
        case _actionNames.LOGIN:
            return {
                user: action.user,
                isAuth: !(0, _isEmpty2.default)(action.user)
            };
        default:
            return state;
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionNames = __webpack_require__(3);

var initialState = {
    tables: []
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _actionNames.CREATE_TABLE_RESULT:
            return { success: action.success };
        case _actionNames.SHOW_TABLE_RESULT:
            return { tables: action.tables };
        case _actionNames.NO_TABLE_RESULT:
            return { err: action.error };
        default:
            return state;
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTkwZTM2NDM3N2I4YTM5M2YwZTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHV4L2FjdGlvbk5hbWVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25zL3NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL3Rva2VuLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L1JvdXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvU2lnblVwL1NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL0xvZ2luL0xvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvTWFpbnBhZ2UvTWFpbnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL0JvYXJkcy9Cb2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25zL2JvYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcm9vdC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdXgvcmVkdWNlci9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdXgvcmVkdWNlci9zaWduVXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHV4L3JlZHVjZXIvYm9hcmRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHAtcHJveHktbWlkZGxld2FyZVwiIl0sIm5hbWVzIjpbIlNJR05VUF9TVUNDRVNTIiwiTE9HSU4iLCJDUkVBVEVfVEFCTEVfUkVTVUxUIiwiU0hPV19UQUJMRV9SRVNVTFQiLCJOT19UQUJMRV9SRVNVTFQiLCJzaWduVXBNb2RhbCIsImxvZ2luIiwibG9nb3V0IiwiYm9vbCIsImRpc3BhdGNoIiwibW9kYWxCb29sIiwiZGF0YSIsImxpc3QiLCJ0eXBlIiwic3RhdHVzIiwidXNlciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkZXYiLCJzZXJ2ZXIiLCJIb21lIiwiSGVhZGVyIiwiU2lnblVwIiwiTG9naW4iLCJNYWlucGFnZSIsIkJvYXJkcyIsIkJvYXJkIiwiQXV0aCIsInByb3BzIiwidXNlcm5hbWUiLCJzdGF0ZSIsInNpZ25VcCIsImlzQXV0aCIsImhpc3RvcnkiLCJwdXNoIiwibm90QXV0aCIsInNldEF1dGhUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicHJveHkiLCJyZXF1aXJlIiwiYXBwIiwidXNlIiwic3RhdGljIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidGFyZ2V0IiwiX19FTlZfXyIsImFwaV9zZXJ2ZXIiLCJjaGFuZ2VPcmlnaW4iLCJyZXEiLCJyZXMiLCJzdG9yZSIsInNlbmQiLCJzZXQiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJyZW5kZXJUb1N0cmluZyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTdGF0ZSIsIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJwYXRobmFtZSIsImZyb20iLCJsb2NhdGlvbiIsInZhbGlkYXRlIiwiZXJyb3JzIiwidmFsdWVzIiwiZnVsbG5hbWUiLCJsZW5ndGgiLCJlbWFpbCIsInRlc3QiLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJyZW5kZXJGaWVsZCIsImlucHV0IiwibGFiZWwiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwiZm9ybSIsInN1Ym1pdEVycm9yIiwiaGFuZGxlU2lnblVwIiwicG9zdCIsInRoZW4iLCJjYXRjaCIsInNldFN0YXRlIiwiZXJyIiwicmVzcG9uc2UiLCJoYW5kbGVTdWJtaXQiLCJzdWNjZXNzTWVzc2FnZSIsIkxvZ2luRm9ybSIsInNldEl0ZW0iLCJkZWNvZGUiLCJ1c2VySWQiLCJpZCIsImJvYXJkQ3JlYXRlZCIsImJvYXJkcyIsInN1Y2Nlc3MiLCJ0YWJsZXMiLCJjcmVhdGVCb2FyZCIsInNob3dCb2FyZHMiLCJjcmVhdGVNb2RhbCIsImJvYXJkTmFtZSIsImUiLCJ2YWx1ZSIsIm1hcCIsImJvYXJkIiwibmFtZSIsInVwZGF0ZWRfYXQiLCJjcmVhdGVCb2FyZFJlc3VsdCIsInVzZXJJRCIsInNob3dCb2FyZHNTdWNjZXNzIiwic2hvd0JvYXJkc0ZhaWxlZCIsImFjdGlvbiIsImVycm9yU3RhZ2UiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxrQzs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7Ozs7QUNBTyxJQUFNQSwwQ0FBaUIsaUJBQXZCO0FBQ0EsSUFBTUMsd0JBQVEsT0FBZDs7QUFFQSxJQUFNQyxvREFBc0IscUJBQTVCO0FBQ0EsSUFBTUMsZ0RBQW9CLG1CQUExQjtBQUNBLElBQU1DLDRDQUFrQixpQkFBeEIsQzs7Ozs7O0FDTFAsa0M7Ozs7Ozs7Ozs7OztRQ0dnQkMsVyxHQUFBQSxXO1FBV0FDLEssR0FBQUEsSztRQU9BQyxNLEdBQUFBLE07O0FBckJoQjs7QUFDQTs7Ozs7O0FBRU8sU0FBU0YsV0FBVCxDQUFxQkcsSUFBckIsRUFBMkI7QUFDOUIsV0FBTyxvQkFBWTtBQUNmQyxpQkFBU0MsVUFBVUYsSUFBVixDQUFUO0FBQ0gsS0FGRDtBQUdIOztBQUVELFNBQVNFLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3JCLFFBQU1DLE9BQU8sRUFBQ0MsaUNBQUQsRUFBc0JDLFFBQU9ILElBQTdCLEVBQWI7QUFDQSxXQUFPQyxJQUFQO0FBQ0g7O0FBRU0sU0FBU04sS0FBVCxDQUFlUyxJQUFmLEVBQXFCO0FBQ3hCLFdBQU87QUFDSEYsZ0NBREc7QUFFSEU7QUFGRyxLQUFQO0FBSUg7O0FBRU0sU0FBU1IsTUFBVCxHQUFrQjtBQUNyQixXQUFPLG9CQUFZO0FBQ2YsNkJBQWEsS0FBYjtBQUNBUyxxQkFBYUMsVUFBYixDQUF3QixVQUF4QjtBQUNBUixpQkFBU0gsTUFBTSxFQUFOLENBQVQ7QUFDSCxLQUpEO0FBS0gsQzs7Ozs7Ozs7Ozs7O0FDM0JEOztBQUVBLElBQU1ZLE1BQU0sSUFBWjtBQUNBLElBQUlDLGVBQUo7O0FBRUFELE1BQ01DLFNBQU8sd0JBRGIsR0FFTUEsU0FBTyw0Q0FGYjs7a0JBSWVBLE07Ozs7OztBQ1RmLHVDOzs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNBT0MsSTtRQUNBQyxNO1FBQ0FDLE07UUFDQUMsSztRQUNBQyxRO1FBQ0FDLE07UUFDQUMsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLFFBQVM7QUFDbEIsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSSxXQUFVLFFBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsc0JBQU0sSUFBRyxTQUFUO0FBQUE7QUFBQTtBQUFKO0FBREosU0FESjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQWNDLGtCQUFNYixJQUFOLENBQVdjLFFBQXpCO0FBQUE7QUFBQSxTQUpKO0FBS0k7QUFBQTtBQUFBLGNBQU0sU0FBU0QsTUFBTXJCLE1BQXJCO0FBQUE7QUFBQTtBQUxKLEtBREo7QUFTSCxDQVZEOztJQXVCcUJjLE0sV0FWcEIseUJBQ0c7QUFBQSxXQUFVO0FBQ05OLGNBQU1lLE1BQU1DLE1BQU4sQ0FBYWhCLElBRGI7QUFFTmlCLGdCQUFRRixNQUFNQyxNQUFOLENBQWFDO0FBRmYsS0FBVjtBQUFBLENBREgsRUFLRyxFQUFFekIsc0JBQUYsRUFMSCxDOzs7Ozs7Ozs7Ozs7OzswTEFZR0EsTSxHQUFTLFlBQU07QUFDWCxrQkFBS3FCLEtBQUwsQ0FBV3JCLE1BQVg7QUFDQSxrQkFBS3FCLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkMsSUFBbkI7QUFDSCxTOzs7OztpQ0FFTztBQUFBLHlCQUNxQixLQUFLTixLQUQxQjtBQUFBLGdCQUNJSSxNQURKLFVBQ0lBLE1BREo7QUFBQSxnQkFDWWpCLElBRFosVUFDWUEsSUFEWjs7O0FBR0osZ0JBQU1vQixVQUNGO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQUE7QUFBTTtBQUFBO0FBQUEsMEJBQU0sSUFBRyxRQUFUO0FBQUE7QUFBQTtBQUFOLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQU07QUFBQTtBQUFBLDBCQUFNLElBQUcsU0FBVDtBQUFBO0FBQUE7QUFBTjtBQUZKLGFBREo7O0FBT0EsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFNLElBQUcsR0FBVDtBQUFBO0FBQUEscUJBREo7QUFFTUgsNkJBQ0ksOEJBQUMsSUFBRCxJQUFNLE1BQU1qQixJQUFaLEVBQWtCLFFBQVEsS0FBS1IsTUFBL0IsR0FESixHQUVJNEI7QUFKVjtBQURKLGFBREo7QUFVSDs7Ozs7a0JBM0JnQmQsTTs7Ozs7Ozs7Ozs7O2tCQzVCR2UsWTs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3hDLFFBQUlBLEtBQUosRUFBVztBQUNQLHdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlELFlBQVlILEtBQTdEO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsZUFBTyxnQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixDQUE4QixlQUE5QixDQUFQO0FBQ0g7QUFDSixDOzs7Ozs7QUNURCxrQzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFKQSxJQUFJQyxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjs7O0FBTUEsSUFBTUMsTUFBTSx3QkFBWjs7QUFJQUEsSUFBSUMsR0FBSixDQUFRLHFCQUFSOztBQUVBRCxJQUFJQyxHQUFKLENBQVEsa0JBQVFDLE1BQVIsQ0FBZSxRQUFmLENBQVI7QUFDQUMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXpCLElBQXlDTCxJQUFJQyxHQUFKLENBQVEsTUFBUixFQUFnQkgsTUFBTSxFQUFDUSxRQUFRLHVDQUFBQyxDQUFRQyxVQUFqQixFQUE2QkMsY0FBYyxJQUEzQyxFQUFOLENBQWhCLENBQXpDO0FBQ0FULElBQUlDLEdBQUosQ0FBUSxHQUFSLEVBQVksVUFBQ1MsR0FBRCxFQUFLQyxHQUFMLEVBQWE7O0FBRXZCLE1BQU1DLFFBQVEsK0NBRVYsaURBRlUsQ0FBZDtBQUlBRCxNQUFJRSxJQUFKLENBQVMsd0JBQVNILEdBQVQsRUFBYUUsS0FBYixDQUFUO0FBRUQsQ0FSRDs7QUFZQVosSUFBSWMsR0FBSixDQUFRLE1BQVIsRUFBaUJYLFFBQVFDLEdBQVIsQ0FBWVcsSUFBWixJQUFvQixJQUFyQzs7QUFFQWYsSUFBSWdCLE1BQUosQ0FBV2hCLElBQUlpQixHQUFKLENBQVEsTUFBUixDQUFYLEVBQTRCLFlBQU07QUFDaENDLFVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNELENBRkQsRTs7Ozs7O0FDaENBLG9DOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7a0JBR2UsVUFBQ1QsR0FBRCxFQUFLRSxLQUFMLEVBQWU7QUFDMUIsUUFBTVEsVUFBVSxpQkFBZUMsY0FBZixDQUNaO0FBQUE7QUFBQSxVQUFVLE9BQU9ULEtBQWpCO0FBQ0k7QUFBQTtBQUFBLGNBQWMsVUFBVUYsSUFBSVksR0FBNUIsRUFBaUMsU0FBUyxFQUExQztBQUNLLG1DQUFPVixLQUFQO0FBREw7QUFESixLQURZLENBQWhCOztBQVFBLGlKQUs2QlEsT0FMN0Isc0ZBT3lDRyxLQUFLQyxTQUFMLENBQWVaLE1BQU1hLFFBQU4sRUFBZixDQVB6QztBQVlILEM7Ozs7OztBQzdCRCx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7a0JBSWUsaUJBQVM7QUFBQSwwQkFDY2IsTUFBTWEsUUFBTixFQURkO0FBQUEsUUFDRXBDLE1BREYsbUJBQ1JELE1BRFEsQ0FDRUMsTUFERjs7QUFHaEIsUUFBTXFDLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFlBQWNDLFNBQWQsUUFBR0MsU0FBSDtBQUFBLFlBQTRCQyxJQUE1Qjs7QUFBQSxlQUNqQixrRUFDUUEsSUFEUjtBQUVJLG9CQUFRO0FBQUEsdUJBQ0p4QyxTQUNJLDhCQUFDLFNBQUQsRUFBZUosS0FBZixDQURKLEdBR0k7QUFDSSx3QkFBSTtBQUNJNkMsa0NBQVUsT0FEZDtBQUVJM0MsK0JBQU8sRUFBRTRDLE1BQU05QyxNQUFNK0MsUUFBZDtBQUZYO0FBRFIsa0JBSkE7QUFBQTtBQUZaLFdBRGlCO0FBQUEsS0FBckI7O0FBa0JBLFdBQ0E7QUFBQTtBQUFBO0FBQ1EsNkRBRFI7QUFFUSwrREFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQixFQUFzQixzQkFBdEIsR0FGUjtBQUdRLCtEQUFPLE1BQUssU0FBWixFQUFzQix3QkFBdEIsR0FIUjtBQUlRLCtEQUFPLE1BQUssUUFBWixFQUFxQix1QkFBckIsR0FKUjtBQUtRO0FBQUE7QUFBQTtBQUNRLDBDQUFDLFlBQUQsSUFBYyxNQUFLLFNBQW5CLEVBQTZCLFdBQTdCLEVBQW1DLHdCQUFuQyxHQURSO0FBRVEsMENBQUMsWUFBRCxJQUFjLE1BQUssYUFBbkIsRUFBaUMsdUJBQWpDO0FBRlI7QUFMUixLQURBO0FBYVAsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNEOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFLcUJ2RCxJLFdBSnBCLHlCQUFRO0FBQUEsV0FBVTtBQUNmWSxnQkFBT0YsTUFBTUMsTUFBTixDQUFhQztBQURMLEtBQVY7QUFBQSxDQUFSLEVBRUcsRUFGSCxDOzs7Ozs7Ozs7Ozs0Q0FNc0I7QUFDZixhQUFDLEtBQUtKLEtBQUwsQ0FBV0ksTUFBWixJQUFzQixLQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFFBQXhCLENBQXRCO0FBQ0g7OztpQ0FDUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUtIOzs7OztrQkFYZ0JkLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHJCOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztBQUdBLElBQU13RCxXQUFXLFNBQVhBLFFBQVcsU0FBVTtBQUN2QixRQUFNQyxTQUFTLEVBQWY7O0FBRUEsUUFBRyxDQUFDQyxPQUFPQyxRQUFYLEVBQW9CO0FBQ2hCRixlQUFPRSxRQUFQLEdBQWtCLFVBQWxCO0FBQ0gsS0FGRCxNQUVPLElBQUlELE9BQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQ25DSCxlQUFPRSxRQUFQLEdBQWtCLHFCQUFsQjtBQUNIOztBQUVELFFBQUcsQ0FBQ0QsT0FBT2pELFFBQVgsRUFBb0I7QUFDaEJnRCxlQUFPaEQsUUFBUCxHQUFrQixVQUFsQjtBQUNILEtBRkQsTUFFTyxJQUFJaUQsT0FBT2pELFFBQVAsQ0FBZ0JtRCxNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUNuQ0gsZUFBT2hELFFBQVAsR0FBa0Isb0JBQWxCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDaUQsT0FBT0csS0FBWixFQUFtQjtBQUNmSixlQUFPSSxLQUFQLEdBQWUsVUFBZjtBQUNILEtBRkQsTUFFTyxJQUFJLENBQUMsNENBQTRDQyxJQUE1QyxDQUFpREosT0FBT0csS0FBeEQsQ0FBTCxFQUFxRTtBQUN4RUosZUFBT0ksS0FBUCxHQUFlLHVCQUFmO0FBQ0g7O0FBRUQsUUFBRyxDQUFDSCxPQUFPSyxRQUFYLEVBQXFCO0FBQ2pCTixlQUFPTSxRQUFQLEdBQWtCLFVBQWxCO0FBQ0gsS0FGRCxNQUVPLElBQUlMLE9BQU9LLFFBQVAsQ0FBZ0JILE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQ25DSCxlQUFPTSxRQUFQLEdBQWtCLG9CQUFsQjtBQUNIOztBQUVELFFBQUcsQ0FBQ0wsT0FBT00sYUFBWCxFQUEwQjtBQUN0QlAsZUFBT08sYUFBUCxHQUF1QixVQUF2QjtBQUNILEtBRkQsTUFFTyxJQUFHTixPQUFPTSxhQUFQLEtBQXlCTixPQUFPSyxRQUFuQyxFQUE2QztBQUNoRE4sZUFBT08sYUFBUCxHQUF1QixnQ0FBdkI7QUFDSDs7QUFFRCxXQUFPUCxNQUFQO0FBQ0gsQ0FsQ0Q7O0FBb0NBLElBQU1RLGNBQWMsU0FBZEEsV0FBYztBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFFBQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFFBQWlCMUUsSUFBakIsUUFBaUJBLElBQWpCO0FBQUEseUJBQXVCMkUsSUFBdkI7QUFBQSxRQUErQkMsT0FBL0IsYUFBK0JBLE9BQS9CO0FBQUEsUUFBd0NDLEtBQXhDLGFBQXdDQSxLQUF4QztBQUFBLFdBQ2hCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJLGdFQUFXSixLQUFYLElBQWtCLGFBQWFDLEtBQS9CLEVBQXNDLE1BQU0xRSxJQUE1QyxJQURKO0FBRUs0RSx1QkFBV0MsS0FBWCxJQUFvQjtBQUFBO0FBQUE7QUFBT0E7QUFBUDtBQUZ6QjtBQURKLEtBRGdCO0FBQUEsQ0FBcEI7O0lBbUJxQnBFLE0sV0FWcEIsMEJBQVU7QUFDUHFFLFVBQUssVUFERTtBQUVQZjtBQUZPLENBQVYsRUFHRTtBQUFBLFdBQVUsRUFBVjtBQUFBLENBSEYsQyxVQUtBLHlCQUNHO0FBQUEsV0FBVSxFQUFWO0FBQUEsQ0FESCxFQUVHLEVBQUV2RSxnQ0FBRixFQUZILEM7Ozs7Ozs7Ozs7Ozs7OzRMQU1HeUIsSyxHQUFRO0FBQ0o4RCx5QkFBYSxLQURUO0FBRUpmLG9CQUFRO0FBRkosUyxRQUtSZ0IsWSxHQUFlLGtCQUFVO0FBQ3JCLDRCQUFNQyxJQUFOLGdCQUF5QmhCLE1BQXpCLEVBQ0tpQixJQURMLENBQ1csZUFBTztBQUNWLG9CQUFHLENBQUN6QyxJQUFJM0MsSUFBSixDQUFTK0UsS0FBYixFQUFtQjtBQUNmLDBCQUFLOUQsS0FBTCxDQUFXdkIsV0FBWCxDQUF1QixJQUF2QjtBQUNBLDBCQUFLdUIsS0FBTCxDQUFXSyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixRQUF4QjtBQUNIO0FBQ0osYUFOTCxFQU9LOEQsS0FQTCxDQU9ZLGVBQU87QUFDWCxzQkFBS0MsUUFBTCxDQUFjLEVBQUVwQixRQUFPcUIsSUFBSUMsUUFBSixDQUFheEYsSUFBYixDQUFrQitFLEtBQTNCLEVBQWQ7QUFDSCxhQVRMO0FBVUgsUzs7Ozs7aUNBRVE7QUFBQSxnQkFDR1UsWUFESCxHQUNvQixLQUFLeEUsS0FEekIsQ0FDR3dFLFlBREg7QUFBQSxnQkFFR3ZCLE1BRkgsR0FFYyxLQUFLL0MsS0FGbkIsQ0FFRytDLE1BRkg7OztBQUlMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFdBQWY7QUFDTyxxQkFBS2UsV0FBTCxLQUFxQixLQUF0QixJQUFnQztBQUFBO0FBQUE7QUFBTSx5QkFBSzlELEtBQUwsQ0FBVzhEO0FBQWpCLGlCQUR0QztBQUVJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLHlCQURKO0FBRUksMEVBQU8sTUFBSyxVQUFaO0FBQ08sdUNBQVdQLFdBRGxCO0FBRU8sa0NBQUssTUFGWjtBQUZKLHFCQURKO0FBT0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFNBQVEsVUFBZjtBQUFBO0FBQUEseUJBREo7QUFFSSwwRUFBTyxNQUFLLFVBQVosRUFBdUIsV0FBV0EsV0FBbEMsRUFBK0MsTUFBSyxNQUFwRCxHQUZKO0FBR01SLCtCQUFPaEQsUUFBUCxJQUFtQjtBQUFBO0FBQUE7QUFBTWdELG1DQUFPaEQ7QUFBYjtBQUh6QixxQkFQSjtBQVlJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLHlCQURKO0FBRUksMEVBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVd3RCxXQUEvQixFQUE0QyxNQUFLLE1BQWpELEdBRko7QUFHTVIsK0JBQU9JLEtBQVAsSUFBZ0I7QUFBQTtBQUFBO0FBQU1KLG1DQUFPSTtBQUFiO0FBSHRCLHFCQVpKO0FBaUJJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLHlCQURKO0FBRUksMEVBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVdJLFdBQWxDLEVBQStDLE1BQUssTUFBcEQ7QUFGSixxQkFqQko7QUFxQkk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFNBQVEsZUFBZjtBQUFBO0FBQUEseUJBREo7QUFFSSwwRUFBTyxNQUFLLGVBQVosRUFBNEIsV0FBV0EsV0FBdkMsRUFBb0QsTUFBSyxNQUF6RDtBQUZKLHFCQXJCSjtBQXlCSTtBQUFBO0FBQUE7QUFDSSxpRUFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxnQkFBM0IsRUFBNEMsU0FBU2UsYUFBYSxLQUFLUCxZQUFsQixDQUFyRDtBQURKO0FBekJKO0FBRkosYUFESjtBQWtDSDs7Ozs7a0JBekRnQnZFLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EckI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBUXFCQyxLLFdBTnBCLHlCQUNHO0FBQUEsV0FBUTtBQUNKOEUsd0JBQWV2RSxNQUFNQztBQURqQixLQUFSO0FBQUEsQ0FESCxFQUlHLEVBQUN6QixvQkFBRCxFQUpILEM7Ozs7Ozs7Ozs7O2lDQU9ZO0FBQUEseUJBQ3NDLEtBQUtzQixLQUQzQztBQUFBLGdCQUNHeUUsY0FESCxVQUNHQSxjQURIO0FBQUEsZ0JBQ21CcEUsT0FEbkIsVUFDbUJBLE9BRG5CO0FBQUEsZ0JBQzRCM0IsS0FENUIsVUFDNEJBLEtBRDVCOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFdBQWY7QUFDTStGLG1DQUFtQixJQUFuQixJQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURqQztBQUVJLHFFQUFXLFNBQVNwRSxPQUFwQixFQUE2QixPQUFPM0IsS0FBcEM7QUFGSixhQURKO0FBTUg7Ozs7O2tCQVRnQmlCLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHJCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1xRCxXQUFXLFNBQVhBLFFBQVcsU0FBVTtBQUN2QixRQUFNQyxTQUFTLEVBQWY7O0FBRUEsUUFBRyxDQUFDQyxPQUFPakQsUUFBWCxFQUFvQjtBQUNoQmdELGVBQU9oRCxRQUFQLEdBQWtCLFVBQWxCO0FBQ0gsS0FGRCxNQUVPLElBQUlpRCxPQUFPakQsUUFBUCxDQUFnQm1ELE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQ25DSCxlQUFPaEQsUUFBUCxHQUFrQiw2QkFBbEI7QUFDSDs7QUFFRCxRQUFHLENBQUNpRCxPQUFPSyxRQUFYLEVBQXFCO0FBQ2pCTixlQUFPTSxRQUFQLEdBQWtCLFVBQWxCO0FBQ0gsS0FGRCxNQUVPLElBQUlMLE9BQU9LLFFBQVAsQ0FBZ0JILE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQ25DSCxlQUFPTSxRQUFQLEdBQWtCLG9CQUFsQjtBQUNIOztBQUVELFdBQU9OLE1BQVA7QUFDSCxDQWhCRDs7QUFrQkEsSUFBTVEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsUUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsUUFBaUIxRSxJQUFqQixRQUFpQkEsSUFBakI7QUFBQSx5QkFBdUIyRSxJQUF2QjtBQUFBLFFBQStCQyxPQUEvQixhQUErQkEsT0FBL0I7QUFBQSxRQUF3Q0MsS0FBeEMsYUFBd0NBLEtBQXhDO0FBQUEsV0FDaEI7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksZ0VBQVdKLEtBQVgsSUFBa0IsYUFBYUMsS0FBL0IsRUFBc0MsTUFBTTFFLElBQTVDLElBREo7QUFFSzRFLHVCQUFXQyxLQUFYLElBQW9CO0FBQUE7QUFBQTtBQUFPQTtBQUFQO0FBRnpCO0FBREosS0FEZ0I7QUFBQSxDQUFwQjs7SUFjcUJZLFMsV0FMcEIsMEJBQVU7QUFDUFgsVUFBSyxPQURFO0FBRVBmO0FBRk8sQ0FBVixFQUdFO0FBQUEsV0FBVSxFQUFWO0FBQUEsQ0FIRixDOzs7Ozs7Ozs7Ozs7OztrTUFNRzlDLEssR0FBUTtBQUNKOEQseUJBQWEsS0FEVDtBQUVKZixvQkFBUTtBQUZKLFMsUUFLUmdCLFksR0FBZSxrQkFBVTtBQUNyQiw0QkFBTUMsSUFBTixlQUF3QmhCLE1BQXhCLEVBQWdDaUIsSUFBaEMsQ0FBc0MsZUFBTztBQUN6Q2xDLHdCQUFRQyxHQUFSLENBQVlnQixNQUFaO0FBQ0Esb0JBQUcsQ0FBQ3hCLElBQUkzQyxJQUFKLENBQVMrRSxLQUFiLEVBQW1CO0FBQ2YxRSxpQ0FBYXVGLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNqRCxJQUFJM0MsSUFBSixDQUFTMEIsS0FBMUM7QUFDQSx5Q0FBYWlCLElBQUkzQyxJQUFKLENBQVMwQixLQUF0QjtBQUNBLDBCQUFLVCxLQUFMLENBQVd0QixLQUFYLENBQWlCLHVCQUFJa0csTUFBSixDQUFXbEQsSUFBSTNDLElBQUosQ0FBUzBCLEtBQXBCLENBQWpCO0FBQ0EsMEJBQUtULEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7QUFFSDtBQUNKLGFBVEQsRUFVSzhELEtBVkwsQ0FVWSxlQUFPO0FBQ1gsc0JBQUtDLFFBQUwsQ0FBYyxFQUFFcEIsUUFBT3FCLElBQUlDLFFBQUosQ0FBYXhGLElBQWIsQ0FBa0JrRSxNQUEzQixFQUFkO0FBQ0gsYUFaTDtBQWFILFM7Ozs7O2lDQUVRO0FBQUEsZ0JBQ0d1QixZQURILEdBQ29CLEtBQUt4RSxLQUR6QixDQUNHd0UsWUFESDtBQUFBLGdCQUVHdkIsTUFGSCxHQUVjLEtBQUsvQyxLQUZuQixDQUVHK0MsTUFGSDs7O0FBSUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLHFCQURKO0FBRUksc0VBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVdRLFdBQWxDLEVBQStDLE1BQUssTUFBcEQ7QUFGSixpQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLHFCQURKO0FBRUksc0VBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVdBLFdBQWxDLEVBQStDLE1BQUssVUFBcEQ7QUFGSixpQkFMSjtBQVNJO0FBQUE7QUFBQTtBQUNJLDZEQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLE9BQTNCLEVBQW1DLFNBQVNlLGFBQWEsS0FBS1AsWUFBbEIsQ0FBNUM7QUFESixpQkFUSjtBQVlNaEIsMEJBQVU7QUFBQTtBQUFBO0FBQU1BLDJCQUFPYztBQUFiO0FBWmhCLGFBREo7QUFnQkg7Ozs7O2tCQTFDZ0JXLFM7Ozs7OztBQ3ZDckIseUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCOUUsUTs7Ozs7Ozs7Ozs7aUNBQ1Q7QUFDSixtQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFLSDs7Ozs7O2tCQVBnQkEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFPcUJDLE0sV0FMcEIseUJBQVM7QUFBQSxXQUFRO0FBQ2RnRixnQkFBUTNFLE1BQU1DLE1BQU4sQ0FBYWhCLElBQWIsQ0FBa0IyRixFQURaO0FBRWRDLHNCQUFjN0UsTUFBTThFLE1BQU4sQ0FBYUMsT0FGYjtBQUdkRCxnQkFBUTlFLE1BQU04RSxNQUFOLENBQWFFO0FBSFAsS0FBUjtBQUFBLENBQVQsRUFJRSxFQUFFQyxnQ0FBRixFQUFlQyw4QkFBZixFQUpGLEM7Ozs7Ozs7Ozs7Ozs7OzBMQU1HbEYsSyxHQUFRO0FBQ0ptRix5QkFBYSxLQURUO0FBRUpDLHVCQUFXO0FBRlAsUyxRQVNSSCxXLEdBQWMsWUFBTTtBQUNoQixrQkFBS25GLEtBQUwsQ0FBV21GLFdBQVgsQ0FBdUIsTUFBS25GLEtBQUwsQ0FBVzZFLE1BQWxDLEVBQXlDLE1BQUszRSxLQUFMLENBQVdvRixTQUFwRDtBQUNBLGtCQUFLdEYsS0FBTCxDQUFXb0YsVUFBWCxDQUFzQixNQUFLcEYsS0FBTCxDQUFXNkUsTUFBakM7QUFDSCxTOzs7Ozs0Q0FQa0I7QUFDZixpQkFBSzdFLEtBQUwsQ0FBV29GLFVBQVgsQ0FBc0IsS0FBS3BGLEtBQUwsQ0FBVzZFLE1BQWpDO0FBQ0g7OztpQ0FPTztBQUFBOztBQUFBLGdCQUNJUSxXQURKLEdBQ29CLEtBQUtuRixLQUR6QixDQUNJbUYsV0FESjtBQUFBLHlCQUU2QixLQUFLckYsS0FGbEM7QUFBQSxnQkFFSStFLFlBRkosVUFFSUEsWUFGSjtBQUFBLGdCQUVrQkMsTUFGbEIsVUFFa0JBLE1BRmxCOzs7QUFJSixtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFHLFNBQVMsbUJBQU07QUFBQyxtQ0FBS1gsUUFBTCxDQUFjLEVBQUVnQixhQUFZLENBQUNBLFdBQWYsRUFBZDtBQUE0Qyx5QkFBL0Q7QUFBQTtBQUFBLGlCQURKO0FBRU1BLCtCQUFlO0FBQUE7QUFBQTtBQUNiLDZEQUFPLE1BQUssTUFBWjtBQUNPLHFDQUFZLFlBRG5CLEVBQ2dDLFVBQVc7QUFBQSxtQ0FBSyxPQUFLaEIsUUFBTCxDQUFjLEVBQUVpQixXQUFXQyxFQUFFbEUsTUFBRixDQUFTbUUsS0FBdEIsRUFBZCxDQUFMO0FBQUEseUJBRDNDLEdBRGE7QUFHYjtBQUFBO0FBQUEsMEJBQU0sU0FBUyxLQUFLTCxXQUFwQjtBQUFBO0FBQUE7QUFIYSxpQkFGckI7QUFPTUosZ0NBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUHRCO0FBU0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUVJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFFBQWY7QUFDTUMsa0NBQVVBLE9BQU9TLEdBQVAsQ0FBWSxpQkFBUztBQUM3QixtQ0FDSTtBQUFBO0FBQUEsa0NBQU0sZ0JBQWNDLE1BQU1aLEVBQTFCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUlZLDhDQUFNQztBQUFWLHFDQURKO0FBRUk7QUFBQTtBQUFBO0FBQUEsd0RBQWtCRCxNQUFNRTtBQUF4QjtBQUZKO0FBREosNkJBREo7QUFRSCx5QkFUVztBQURoQjtBQUZKO0FBVEosYUFESjtBQTJCSDs7Ozs7a0JBOUNnQi9GLE07Ozs7Ozs7Ozs7OztRQ05Mc0YsVyxHQUFBQSxXO1FBZUFDLFUsR0FBQUEsVTs7QUFuQmhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVPLFNBQVNELFdBQVQsQ0FBcUJoRyxJQUFyQixFQUEwQndHLElBQTFCLEVBQStCO0FBQ2xDLFdBQU8sb0JBQVk7QUFDZixlQUFPLGdCQUFNekIsSUFBTix1QkFBZ0MsRUFBQy9FLFVBQUQsRUFBTXdHLFVBQU4sRUFBaEMsRUFBNkN4QixJQUE3QyxDQUFtRCxlQUFPO0FBQzdEdEYscUJBQVNnSCxrQkFBa0JuRSxJQUFJM0MsSUFBSixDQUFTa0csT0FBM0IsQ0FBVDtBQUNILFNBRk0sQ0FBUDtBQUdILEtBSkQ7QUFLSDs7QUFFRCxTQUFTWSxpQkFBVCxDQUEyQmpILElBQTNCLEVBQWdDO0FBQzVCLFdBQU87QUFDSEssOENBREc7QUFFSGdHLGlCQUFTckc7QUFGTixLQUFQO0FBSUg7O0FBRU0sU0FBU3dHLFVBQVQsQ0FBb0JVLE1BQXBCLEVBQTJCO0FBQzlCLFdBQU8sb0JBQVk7QUFDZixlQUFPLGdCQUFNOUQsR0FBTixvQ0FBMkM4RCxNQUEzQyxFQUNGM0IsSUFERSxDQUNJLGVBQU87QUFDVnRGLHFCQUFTa0gsa0JBQWtCckUsSUFBSTNDLElBQUosQ0FBU2lHLE1BQTNCLENBQVQ7QUFDSCxTQUhFLEVBSUZaLEtBSkUsQ0FJSSxlQUFPO0FBQ1ZuQyxvQkFBUUMsR0FBUixDQUFZb0MsSUFBSUMsUUFBSixDQUFheEYsSUFBekI7QUFDSCxTQU5FLENBQVA7QUFPSCxLQVJEO0FBU0g7O0FBRUQsU0FBU2dILGlCQUFULENBQTJCaEgsSUFBM0IsRUFBZ0M7QUFDNUIsV0FBTztBQUNIRSw0Q0FERztBQUVIaUcsZ0JBQVFuRztBQUZMLEtBQVA7QUFJSDs7QUFFRCxTQUFTaUgsZ0JBQVQsQ0FBMEIxQixHQUExQixFQUE4QjtBQUMxQixXQUFPO0FBQ0hyRiwwQ0FERztBQUVINkUsZUFBT1E7QUFGSixLQUFQO0FBSUgsQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRDs7Ozs7Ozs7Ozs7O0lBRXFCeEUsSzs7Ozs7Ozs7Ozs7aUNBQ1Q7QUFDSixtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVo7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxhQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFNBQVEsRUFBZjtBQUFBO0FBQUEseUJBREo7QUFFSSxpRUFBTyxNQUFLLE1BQVo7QUFGSixxQkFESjtBQUtJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sU0FBUSxFQUFmO0FBQUE7QUFBQSx5QkFESjtBQUVJLGlFQUFPLE1BQUssTUFBWjtBQUZKLHFCQUxKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBSkosYUFESjtBQWtCSDs7Ozs7O2tCQXBCZ0JBLEs7Ozs7OztBQ0ZyQixnRDs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O2tCQUVlLDRCQUFnQjtBQUMzQmQsd0JBRDJCO0FBRTNCbUIsNEJBRjJCO0FBRzNCNkUsNEJBSDJCO0FBSTNCakI7QUFKMkIsQ0FBaEIsQzs7Ozs7Ozs7Ozs7OztrQkNOQSxZQUF5QjtBQUFBLFFBQXhCN0QsS0FBd0IsdUVBQWhCLEVBQWdCO0FBQUEsUUFBYitGLE1BQWEsdUVBQU4sRUFBTTs7QUFDcEMsWUFBT0EsT0FBT2hILElBQWQ7QUFDSSxhQUFLLGNBQUw7QUFDSSxtQkFBT2dILE9BQU9qSCxJQUFkO0FBQ0osYUFBSyxZQUFMO0FBQ0ksbUJBQU87QUFDSDhFLHVCQUFPbUMsT0FBT25DLEtBRFg7QUFFSG9DLDRCQUFZO0FBRlQsYUFBUDtBQUlKO0FBQVMsbUJBQU9oRyxLQUFQO0FBUmI7QUFVSCxDOzs7Ozs7Ozs7Ozs7O0FDWEQ7O0FBQ0E7Ozs7OztBQUVBLElBQU1pRyxlQUFlO0FBQ2pCaEgsVUFBTSxFQURXO0FBRWpCaUIsWUFBUTtBQUZTLENBQXJCOztrQkFJZSxZQUFvQztBQUFBLFFBQW5DRixLQUFtQyx1RUFBM0JpRyxZQUEyQjtBQUFBLFFBQWJGLE1BQWEsdUVBQU4sRUFBTTs7QUFDL0MsWUFBT0EsT0FBT2hILElBQWQ7QUFDSTtBQUNJLG1CQUFPZ0gsT0FBTy9HLE1BQWQ7QUFDSjtBQUNJLG1CQUFPO0FBQ0hDLHNCQUFNOEcsT0FBTzlHLElBRFY7QUFFSGlCLHdCQUFRLENBQUMsdUJBQVE2RixPQUFPOUcsSUFBZjtBQUZOLGFBQVA7QUFJSjtBQUFTLG1CQUFPZSxLQUFQO0FBUmI7QUFVSCxDOzs7Ozs7QUNsQkQsMkM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQSxJQUFNaUcsZUFBZTtBQUNqQmpCLFlBQVE7QUFEUyxDQUFyQjs7a0JBSWUsWUFBMkI7QUFBQSxRQUF6QmhGLEtBQXlCLHVFQUFuQixFQUFtQjtBQUFBLFFBQWYrRixNQUFlLHVFQUFSLEVBQVE7O0FBQ3RDLFlBQU9BLE9BQU9oSCxJQUFkO0FBQ0k7QUFDSSxtQkFBTyxFQUFFZ0csU0FBU2dCLE9BQU9oQixPQUFsQixFQUFQO0FBQ0o7QUFDSSxtQkFBTyxFQUFFQyxRQUFRZSxPQUFPZixNQUFqQixFQUFQO0FBQ0o7QUFDSSxtQkFBTyxFQUFFWixLQUFLMkIsT0FBT25DLEtBQWQsRUFBUDtBQUNKO0FBQVMsbUJBQU81RCxLQUFQO0FBUGI7QUFTSCxDOzs7Ozs7QUNoQkQsd0M7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxrRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTkwZTM2NDM3N2I4YTM5M2YwZTkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNJR05VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dJTiA9IFwiTE9HSU5cIjtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9UQUJMRV9SRVNVTFQgPSBcIkNSRUFURV9UQUJMRV9SRVNVTFRcIjtcbmV4cG9ydCBjb25zdCBTSE9XX1RBQkxFX1JFU1VMVCA9IFwiU0hPV19UQUJMRV9SRVNVTFRcIjtcbmV4cG9ydCBjb25zdCBOT19UQUJMRV9SRVNVTFQgPSBcIk5PX1RBQkxFX1JFU1VMVFwiO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdXgvYWN0aW9uTmFtZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU0lHTlVQX1NVQ0NFU1MsIExPR0lOLCBMT0dPVVQgfSBmcm9tICcuLi9hY3Rpb25OYW1lcyc7XG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gJy4uLy4uL3V0aWxzL3Rva2VuJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25VcE1vZGFsKGJvb2wpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgICAgICBkaXNwYXRjaChtb2RhbEJvb2woYm9vbCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbW9kYWxCb29sKGRhdGEpIHtcbiAgICBjb25zdCBsaXN0ID0ge3R5cGU6U0lHTlVQX1NVQ0NFU1MsIHN0YXR1czpkYXRhfTtcbiAgICByZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBMT0dJTixcbiAgICAgICAgdXNlclxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgICAgICBzZXRBdXRoVG9rZW4oZmFsc2UpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnand0VG9rZW4nKTtcbiAgICAgICAgZGlzcGF0Y2gobG9naW4oe30pKTtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdXgvYWN0aW9ucy9zaWduVXAuanMiLCIvLyBhZHJlc3MgcmVuZGVyaW5nIGZvciBkZXZlbG9wbWVudC9wcm9kdWN0aW9uXG5cbmNvbnN0IGRldiA9IHRydWU7XG5sZXQgc2VydmVyO1xuXG5kZXZcbiAgICA/IHNlcnZlcj1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIlxuICAgIDogc2VydmVyPVwiaHR0cHM6Ly90YXNrLW1hbmFnZXItc2VydmVyLmhlcm9rdWFwcC5jb20vXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3NlcnZlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWZvcm1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC1mb3JtXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgSG9tZSBmcm9tICcuL0hvbWUvSG9tZSc7XG5leHBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyL0hlYWRlcic7XG5leHBvcnQgU2lnblVwIGZyb20gJy4vU2lnblVwL1NpZ25VcCc7XG5leHBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi9Mb2dpbic7XG5leHBvcnQgTWFpbnBhZ2UgZnJvbSAnLi9NYWlucGFnZS9NYWlucGFnZSc7XG5leHBvcnQgQm9hcmRzIGZyb20gJy4vQm9hcmRzL0JvYXJkcyc7XG5leHBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZC9Cb2FyZCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3NpZ25VcCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc2VydmVyIGZyb20gJy4uLy4uL3NlcnZlcic7XG5cbmNvbnN0IEF1dGggPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9ib2FyZHNcIj5Cb2FyZHM8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3Bhbj5IZWxsbywge3Byb3BzLnVzZXIudXNlcm5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3Byb3BzLmxvZ291dH0+U2lnbiBPdXQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cblxuQGNvbm5lY3QoXG4gICAgc3RhdGUgPT4gKHtcbiAgICAgICAgdXNlcjogc3RhdGUuc2lnblVwLnVzZXIsXG4gICAgICAgIGlzQXV0aDogc3RhdGUuc2lnblVwLmlzQXV0aFxuICAgIH0pLFxuICAgIHsgbG9nb3V0IH1cbilcblxuQHdpdGhSb3V0ZXJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hcGkvbG9naW5gKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgaXNBdXRoLCB1c2VyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IG5vdEF1dGggPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxMaW5rIHRvPVwiL2xvZ2luXCI+U2lnbiBpbjwvTGluaz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+PExpbmsgdG89XCIvc2lnbnVwXCI+U2lnbiB1cDwvTGluaz48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+TG9nbzwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgeyBpc0F1dGhcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEF1dGggdXNlcj17dXNlcn0gbG9nb3V0PXt0aGlzLmxvZ291dH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBub3RBdXRoIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvY29udGFpbmVycy9IZWFkZXIvSGVhZGVyLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QXV0aFRva2VuKHRva2VuKSB7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvdXRpbHMvdG9rZW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcmVyJztcbnZhciBwcm94eSA9IHJlcXVpcmUoJ2h0dHAtcHJveHktbWlkZGxld2FyZScpO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9jbGllbnQvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuXG5cbmFwcC51c2UoY29ycygpKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmIGFwcC51c2UoJy9hcGknLCBwcm94eSh7dGFyZ2V0OiBfX0VOVl9fLmFwaV9zZXJ2ZXIsIGNoYW5nZU9yaWdpbjogdHJ1ZX0pKTtcbmFwcC51c2UoJy8nLChyZXEscmVzKSA9PiB7XG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJlZHVjZXIsXG4gICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICApO1xuICByZXMuc2VuZChyZW5kZXJlcihyZXEsc3RvcmUpKTtcblxufSk7XG5cblxuXG5hcHAuc2V0KCdwb3J0JywgKHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMikpO1xuXG5hcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnbGlzdGVuIG9uIHBvcnQgMzAwMicpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vY2xpZW50L1JvdXRlcnMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcblxuXG5leHBvcnQgZGVmYXVsdCAocmVxLHN0b3JlKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e3t9fT5cbiAgICAgICAgICAgICAgICB7Um91dGVzKHN0b3JlKX1cbiAgICAgICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgPGJhc2UgaHJlZj1cIi9cIiAvPlxuICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInJvb3RcIj4ke2NvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCA+XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5JTklUSUFMX1NUQVRFID0gJHtKU09OLnN0cmluZ2lmeShzdG9yZS5nZXRTdGF0ZSgpKX1cbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImJ1bmRsZS5qc1wiPjwvc2NyaXB0PiBcbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPmBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIb21lLCBTaWduVXAsIExvZ2luLCBCb2FyZCwgQm9hcmRzIH0gZnJvbSAnLi9jb250YWluZXJzL2luZGV4JztcbmltcG9ydCB7IFN3aXRjaCAsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29udGFpbmVycy9IZWFkZXIvSGVhZGVyJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IHtcbiAgICAgICAgY29uc3QgeyBzaWduVXA6IHsgaXNBdXRoIH19ID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICBjb25zdCBQcml2YXRlUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICByZW5kZXI9e3Byb3BzID0+XG4gICAgICAgICAgICAgICAgICAgIGlzQXV0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlZGlyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcImxvZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogeyBmcm9tOiBwcm9wcy5sb2NhdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NpZ251cFwiIGNvbXBvbmVudD17U2lnblVwfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgICAgICAgICAgICA8U3dpdGNoID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcml2YXRlUm91dGUgcGF0aD1cIi9ib2FyZHNcIiBleGFjdCBjb21wb25lbnQ9e0JvYXJkc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL2JvYXJkcy86aWRcIiBjb21wb25lbnQ9e0JvYXJkfSAvPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L1JvdXRlcnMuanMiLCJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9pbmRleC5qcyc7XG5AY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIGlzQXV0aDpzdGF0ZS5zaWduVXAuaXNBdXRoXG59KSwge30pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgIXRoaXMucHJvcHMuaXNBdXRoICYmIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIEhvbWUgcGFnZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvSG9tZS9Ib21lLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSwgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBzaWduVXBNb2RhbCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvc2lnblVwJztcblxuXG5jb25zdCB2YWxpZGF0ZSA9IHZhbHVlcyA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgICBpZighdmFsdWVzLmZ1bGxuYW1lKXtcbiAgICAgICAgZXJyb3JzLmZ1bGxuYW1lID0gXCJSZXF1aXJlZFwiXG4gICAgfSBlbHNlIGlmICh2YWx1ZXMuZnVsbG5hbWUubGVuZ3RoIDwgNykge1xuICAgICAgICBlcnJvcnMuZnVsbG5hbWUgPSBcIlRvbyBzaG9ydCBmdWxsIG5hbWVcIlxuICAgIH1cblxuICAgIGlmKCF2YWx1ZXMudXNlcm5hbWUpe1xuICAgICAgICBlcnJvcnMudXNlcm5hbWUgPSBcIlJlcXVpcmVkXCJcbiAgICB9IGVsc2UgaWYgKHZhbHVlcy51c2VybmFtZS5sZW5ndGggPCA3KSB7XG4gICAgICAgIGVycm9ycy51c2VybmFtZSA9IFwiVG9vIHNob3J0IHVzZXJuYW1lXCJcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgICAgICBlcnJvcnMuZW1haWwgPSAnUmVxdWlyZWQnXG4gICAgfSBlbHNlIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgfVxuXG4gICAgaWYoIXZhbHVlcy5wYXNzd29yZCkge1xuICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSAnUmVxdWlyZWQnXG4gICAgfSBlbHNlIGlmICh2YWx1ZXMucGFzc3dvcmQubGVuZ3RoIDwgNykge1xuICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBcIlRvbyBzaG9ydCBwYXNzd29yZFwiXG4gICAgfVxuXG4gICAgaWYoIXZhbHVlcy5wYXNzd29yZENoZWNrKSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZENoZWNrID0gJ1JlcXVpcmVkJ1xuICAgIH0gZWxzZSBpZih2YWx1ZXMucGFzc3dvcmRDaGVjayAhPT0gdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZENoZWNrID0gJ1Bhc3N3b3JkcyBuZWVkIHRvIGJlIGlkZW50aWNhbCdcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xufTtcblxuY29uc3QgcmVuZGVyRmllbGQgPSAoeyBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4uaW5wdXR9IHBsYWNlaG9sZGVyPXtsYWJlbH0gdHlwZT17dHlwZX0gLz5cbiAgICAgICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbkByZWR1eEZvcm0oe1xuICAgIGZvcm06J3JlZ2lzdGVyJyxcbiAgICB2YWxpZGF0ZVxufSwgc3RhdGUgPT4gKHt9KSlcblxuQGNvbm5lY3QoXG4gICAgc3RhdGUgPT4gKHt9KSxcbiAgICB7IHNpZ25VcE1vZGFsIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3VibWl0RXJyb3I6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHt9XG4gICAgfTtcblxuICAgIGhhbmRsZVNpZ25VcCA9IHZhbHVlcyA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvc2lnbnVwYCx2YWx1ZXMpXG4gICAgICAgICAgICAudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZighcmVzLmRhdGEuZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNpZ25VcE1vZGFsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzOmVyci5yZXNwb25zZS5kYXRhLmVycm9yIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgeyAodGhpcy5zdWJtaXRFcnJvciAhPT0gZmFsc2UpICYmIDxkaXY+e3RoaXMuc3RhdGUuc3VibWl0RXJyb3J9PC9kaXY+IH1cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdWxsbmFtZVwiPkZ1bGwgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImZ1bGxuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlckZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJ1c2VybmFtZVwiIGNvbXBvbmVudD17cmVuZGVyRmllbGR9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3JzLnVzZXJuYW1lICYmIDxkaXY+e2Vycm9ycy51c2VybmFtZX08L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZW1haWxcIiBjb21wb25lbnQ9e3JlbmRlckZpZWxkfSB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycm9ycy5lbWFpbCAmJiA8ZGl2PntlcnJvcnMuZW1haWx9PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInBhc3N3b3JkXCIgY29tcG9uZW50PXtyZW5kZXJGaWVsZH0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRDaGVja1wiPkNvbmZpcm0geW91ciBwYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInBhc3N3b3JkQ2hlY2tcIiBjb21wb25lbnQ9e3JlbmRlckZpZWxkfSB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNyZWF0ZSBBY2NvdW50XCIgb25DbGljaz17aGFuZGxlU3VibWl0KHRoaXMuaGFuZGxlU2lnblVwKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvY29udGFpbmVycy9TaWduVXAvU2lnblVwLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvc2lnblVwJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9Mb2dpbkZvcm0nO1xuXG5AY29ubmVjdChcbiAgICBzdGF0ZT0+KHtcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6c3RhdGUuc2lnblVwXG4gICAgfSksXG4gICAge2xvZ2lufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdWNjZXNzTWVzc2FnZSwgaGlzdG9yeSwgbG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHsgc3VjY2Vzc01lc3NhZ2UgPT09IHRydWUgJiYgPGRpdj5Zb3VgcmUgc3VjY2Vzc2Z1bGx5IHJlZ2lzdHJlZCwgbG9naW48L2Rpdj59XG4gICAgICAgICAgICAgICAgPExvZ2luRm9ybSBoaXN0b3J5PXtoaXN0b3J5fSBsb2dpbj17bG9naW59Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvY29udGFpbmVycy9Mb2dpbi9Mb2dpbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZWR1eEZvcm0sIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcnZlciBmcm9tICcuLi8uLi9zZXJ2ZXInO1xuaW1wb3J0IHNldEF1dGhUb2tlbiBmcm9tICcuLi8uLi91dGlscy90b2tlbic7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICAgIGlmKCF2YWx1ZXMudXNlcm5hbWUpe1xuICAgICAgICBlcnJvcnMudXNlcm5hbWUgPSBcIlJlcXVpcmVkXCJcbiAgICB9IGVsc2UgaWYgKHZhbHVlcy51c2VybmFtZS5sZW5ndGggPCA1KSB7XG4gICAgICAgIGVycm9ycy51c2VybmFtZSA9IFwiVG9vIHNob3J0IHVzZXJuYW1lIG9yIGVtYWlsXCJcbiAgICB9XG5cbiAgICBpZighdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdSZXF1aXJlZCdcbiAgICB9IGVsc2UgaWYgKHZhbHVlcy5wYXNzd29yZC5sZW5ndGggPCA3KSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwiVG9vIHNob3J0IHBhc3N3b3JkXCJcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xufTtcblxuY29uc3QgcmVuZGVyRmllbGQgPSAoeyBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4uaW5wdXR9IHBsYWNlaG9sZGVyPXtsYWJlbH0gdHlwZT17dHlwZX0gLz5cbiAgICAgICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbkByZWR1eEZvcm0oe1xuICAgIGZvcm06J2xvZ2luJyxcbiAgICB2YWxpZGF0ZVxufSwgc3RhdGUgPT4gKHt9KSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3VibWl0RXJyb3I6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHt9XG4gICAgfTtcblxuICAgIGhhbmRsZVNpZ25VcCA9IHZhbHVlcyA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvbG9naW5gLHZhbHVlcykudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgICAgICAgICBpZighcmVzLmRhdGEuZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3RUb2tlbicsIHJlcy5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICBzZXRBdXRoVG9rZW4ocmVzLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9naW4oand0LmRlY29kZShyZXMuZGF0YS50b2tlbikpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzOmVyci5yZXNwb25zZS5kYXRhLmVycm9ycyB9KVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoYW5kbGVTdWJtaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJ1c2VybmFtZVwiIGNvbXBvbmVudD17cmVuZGVyRmllbGR9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInBhc3N3b3JkXCIgY29tcG9uZW50PXtyZW5kZXJGaWVsZH0gdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTaWduVXApfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyBlcnJvcnMgJiYgPGRpdj57ZXJyb3JzLmZvcm19PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL0xvZ2luL0xvZ2luRm9ybS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzb253ZWJ0b2tlblwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlucGFnZSBleHRlbmRzIENvbXBvbmVudHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBtYWluIHBhZ2VcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvY29udGFpbmVycy9NYWlucGFnZS9NYWlucGFnZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVCb2FyZCwgc2hvd0JvYXJkcyB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvYm9hcmRzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbkBjb25uZWN0KCBzdGF0ZT0+KHtcbiAgICB1c2VySWQ6IHN0YXRlLnNpZ25VcC51c2VyLmlkLFxuICAgIGJvYXJkQ3JlYXRlZDogc3RhdGUuYm9hcmRzLnN1Y2Nlc3MsXG4gICAgYm9hcmRzOiBzdGF0ZS5ib2FyZHMudGFibGVzXG59KSx7IGNyZWF0ZUJvYXJkLCBzaG93Qm9hcmRzIH0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjcmVhdGVNb2RhbDogZmFsc2UsXG4gICAgICAgIGJvYXJkTmFtZTogJydcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Qm9hcmRzKHRoaXMucHJvcHMudXNlcklkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVCb2FyZCh0aGlzLnByb3BzLnVzZXJJZCx0aGlzLnN0YXRlLmJvYXJkTmFtZSlcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Qm9hcmRzKHRoaXMucHJvcHMudXNlcklkKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgY3JlYXRlTW9kYWwgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgYm9hcmRDcmVhdGVkLCBib2FyZHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IGNyZWF0ZU1vZGFsOiFjcmVhdGVNb2RhbCB9KX19PkNyZWF0ZSBuZXcgYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVNb2RhbCAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCb2FyZCBOYW1lXCIgb25DaGFuZ2U9eyBlID0+IHRoaXMuc2V0U3RhdGUoeyBib2FyZE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuY3JlYXRlQm9hcmR9PkNyZWF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgeyBib2FyZENyZWF0ZWQgJiYgPGRpdj5Cb2FyZCBzdWNjZXNzZnVsbHkgY3JlYXRlZCA8L2Rpdj4gfVxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+WW91ciBib2FyZHM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBib2FyZHMgJiYgYm9hcmRzLm1hcCggYm9hcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgYm9hcmRzLyR7Ym9hcmQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib2FyZC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YENyZWF0ZWQgYXQgJHtib2FyZC51cGRhdGVkX2F0fWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQm9hcmRzL0JvYXJkcy5qcyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VydmVyIGZyb20gJy4uLy4uL3NlcnZlcic7XG5pbXBvcnQgeyBDUkVBVEVfVEFCTEVfUkVTVUxULFNIT1dfVEFCTEVfUkVTVUxULCBOT19UQUJMRV9SRVNVTFQgfSBmcm9tICcuLi9hY3Rpb25OYW1lcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2FyZCh1c2VyLG5hbWUpe1xuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL2JvYXJkcy9jcmVhdGVgLHt1c2VyLG5hbWV9KS50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goY3JlYXRlQm9hcmRSZXN1bHQocmVzLmRhdGEuc3VjY2VzcykpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRSZXN1bHQoYm9vbCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQ1JFQVRFX1RBQkxFX1JFU1VMVCxcbiAgICAgICAgc3VjY2VzczogYm9vbFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCb2FyZHModXNlcklEKXtcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL2JvYXJkcy9nZXRfYm9hcmRzP3VzZXJJRD0ke3VzZXJJRH1gKVxuICAgICAgICAgICAgLnRoZW4oIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2hvd0JvYXJkc1N1Y2Nlc3MocmVzLmRhdGEuYm9hcmRzKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Qm9hcmRzU3VjY2VzcyhkYXRhKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTSE9XX1RBQkxFX1JFU1VMVCxcbiAgICAgICAgdGFibGVzOiBkYXRhXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Qm9hcmRzRmFpbGVkKGVycil7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTk9fVEFCTEVfUkVTVUxULFxuICAgICAgICBlcnJvcjogZXJyXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25zL2JvYXJkcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5BZGQgdGFzayA8c3Bhbj4rPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHVwLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1cC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5Jc3N1ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkFkZCB0YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQm9hcmQvQm9hcmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL3JlZHV4L3JlZHVjZXIvbGlzdCc7XG5pbXBvcnQgc2lnblVwIGZyb20gJy4vcmVkdXgvcmVkdWNlci9zaWduVXAnO1xuaW1wb3J0IGJvYXJkcyBmcm9tICcuL3JlZHV4L3JlZHVjZXIvYm9hcmRzJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGxpc3QsXG4gICAgc2lnblVwLFxuICAgIGJvYXJkcyxcbiAgICBmb3JtOiBmb3JtUmVkdWNlclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3Jvb3QtcmVkdWNlci5qcyIsImV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IFtdLGFjdGlvbj17fSk9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSAnU1VDQ0VTU19MSVNUJzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ubGlzdFxuICAgICAgICBjYXNlICdFUlJPUl9MSVNUJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgICAgICAgICBlcnJvclN0YWdlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1eC9yZWR1Y2VyL2xpc3QuanMiLCJpbXBvcnQgeyBTSUdOVVBfU1VDQ0VTUywgTE9HSU4gfSBmcm9tICcuLi9hY3Rpb25OYW1lcyc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB1c2VyOiB7fSxcbiAgICBpc0F1dGg6IGZhbHNlXG59XG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbj17fSk9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBTSUdOVVBfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uc3RhdHVzO1xuICAgICAgICBjYXNlIExPR0lOOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24udXNlcixcbiAgICAgICAgICAgICAgICBpc0F1dGg6ICFpc0VtcHR5KGFjdGlvbi51c2VyKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHV4L3JlZHVjZXIvc2lnblVwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2lzRW1wdHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFbXB0eVwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDUkVBVEVfVEFCTEVfUkVTVUxULCBTSE9XX1RBQkxFX1JFU1VMVCwgTk9fVEFCTEVfUkVTVUxUIH0gZnJvbSAnLi4vYWN0aW9uTmFtZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdGFibGVzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCBzdGF0ZT17fSwgYWN0aW9uPXt9ICkgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgQ1JFQVRFX1RBQkxFX1JFU1VMVDpcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGFjdGlvbi5zdWNjZXNzIH07XG4gICAgICAgIGNhc2UgU0hPV19UQUJMRV9SRVNVTFQ6XG4gICAgICAgICAgICByZXR1cm4geyB0YWJsZXM6IGFjdGlvbi50YWJsZXMgfTtcbiAgICAgICAgY2FzZSBOT19UQUJMRV9SRVNVTFQ6XG4gICAgICAgICAgICByZXR1cm4geyBlcnI6IGFjdGlvbi5lcnJvcn07XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdXgvcmVkdWNlci9ib2FyZHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtcHJveHktbWlkZGxld2FyZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHAtcHJveHktbWlkZGxld2FyZVwiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9