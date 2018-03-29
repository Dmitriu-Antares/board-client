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

var CREATE_TASK = exports.CREATE_TASK = "CREATE_TASK";
var CREATE_TASK_SUCCESS = exports.CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
var CREATE_TASK_ERROR = exports.CREATE_TASK_ERROR = "CREATE_TASK_ERROR";
var SHOW_TASKS = exports.SHOW_TASKS = "SHOW_TASKS";
var SHOW_TASKS_SUCCESS = exports.SHOW_TASKS_SUCCESS = "SHOW_TASKS_SUCCESS";
var SHOW_TASKS_ERROR = exports.SHOW_TASKS_ERROR = "SHOW_TASKS_ERROR";

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
                { className: 'container' },
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
                        boards && boards.map(function (board, key) {
                            return _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: 'boards/' + board.id, key: key },
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
            dispatch(showBoardsFailed(err.response.data));
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

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _tasks = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = (_dec = (0, _reactRedux.connect)(function (state) {
    return {};
}, { createTask: _tasks.createTask }), _dec(_class = function (_Component) {
    _inherits(Board, _Component);

    function Board() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Board);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Board.__proto__ || Object.getPrototypeOf(Board)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            title: '',
            issue: '',
            warning: false
        }, _this.addTask = function () {
            var _this$state = _this.state,
                title = _this$state.title,
                issue = _this$state.issue,
                warning = _this$state.warning;


            if (title.length > 4 && issue.length > 4) {
                warning && _this.setState({ warning: false });
                _this.props.createTask({ title: title, issue: issue, boardId: _this.props.match.params.id });
            } else {
                _this.setState({ warning: true });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Board, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log();
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Add task ',
                        _react2.default.createElement(
                            'span',
                            null,
                            '+'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-flex' },
                    _react2.default.createElement(
                        'div',
                        { className: 'inpup-group' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: '' },
                            'Name'
                        ),
                        _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                                return _this2.setState({ title: e.target.value });
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'inpup-group' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: '' },
                            'Issue'
                        ),
                        _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                                return _this2.setState({ issue: e.target.value });
                            } })
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.addTask },
                        'Add task'
                    )
                )
            );
        }
    }]);

    return Board;
}(_react.Component)) || _class);
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

var _tasks = __webpack_require__(36);

var _tasks2 = _interopRequireDefault(_tasks);

var _reduxForm = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    list: _list2.default,
    signUp: _signUp2.default,
    boards: _boards2.default,
    tasks: _tasks2.default,
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionNames = __webpack_require__(3);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _actionNames.CREATE_TASK:
            return { loading: true };
        case _actionNames.CREATE_TASK_SUCCESS:
            return { loading: false, success: action.success };
        case _actionNames.CREATE_TASK_ERROR:
            return { loading: false, error: action.error };
        default:
            return state;
    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTask = createTask;

var _actionNames = __webpack_require__(3);

function createTask(data) {
    return {
        types: [_actionNames.CREATE_TASK, _actionNames.CREATE_TASK_SUCCESS, _actionNames.CREATE_TASK_ERROR],
        promise: function promise(client) {
            return client.post('/api/tasks/add', data).then(function (result) {
                return result;
            });
        }
    };
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDFiOWRjNjlhMTFhYjg2MDk1MzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHV4L2FjdGlvbk5hbWVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25zL3NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL3Rva2VuLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L1JvdXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvU2lnblVwL1NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvTG9naW4vTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL0xvZ2luL0xvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvTWFpbnBhZ2UvTWFpbnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL0JvYXJkcy9Cb2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25zL2JvYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQm9hcmQvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcm9vdC1yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdXgvcmVkdWNlci9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdXgvcmVkdWNlci9zaWduVXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHV4L3JlZHVjZXIvYm9hcmRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHAtcHJveHktbWlkZGxld2FyZVwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdXgvcmVkdWNlci90YXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHV4L2FjdGlvbnMvdGFza3MuanMiXSwibmFtZXMiOlsiU0lHTlVQX1NVQ0NFU1MiLCJMT0dJTiIsIkNSRUFURV9UQUJMRV9SRVNVTFQiLCJTSE9XX1RBQkxFX1JFU1VMVCIsIk5PX1RBQkxFX1JFU1VMVCIsIkNSRUFURV9UQVNLIiwiQ1JFQVRFX1RBU0tfU1VDQ0VTUyIsIkNSRUFURV9UQVNLX0VSUk9SIiwiU0hPV19UQVNLUyIsIlNIT1dfVEFTS1NfU1VDQ0VTUyIsIlNIT1dfVEFTS1NfRVJST1IiLCJzaWduVXBNb2RhbCIsImxvZ2luIiwibG9nb3V0IiwiYm9vbCIsImRpc3BhdGNoIiwibW9kYWxCb29sIiwiZGF0YSIsImxpc3QiLCJ0eXBlIiwic3RhdHVzIiwidXNlciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkZXYiLCJzZXJ2ZXIiLCJIb21lIiwiSGVhZGVyIiwiU2lnblVwIiwiTG9naW4iLCJNYWlucGFnZSIsIkJvYXJkcyIsIkJvYXJkIiwiQXV0aCIsInByb3BzIiwidXNlcm5hbWUiLCJzdGF0ZSIsInNpZ25VcCIsImlzQXV0aCIsImhpc3RvcnkiLCJwdXNoIiwibm90QXV0aCIsInNldEF1dGhUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicHJveHkiLCJyZXF1aXJlIiwiYXBwIiwidXNlIiwic3RhdGljIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidGFyZ2V0IiwiX19FTlZfXyIsImFwaV9zZXJ2ZXIiLCJjaGFuZ2VPcmlnaW4iLCJyZXEiLCJyZXMiLCJzdG9yZSIsInNlbmQiLCJzZXQiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJyZW5kZXJUb1N0cmluZyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTdGF0ZSIsIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJwYXRobmFtZSIsImZyb20iLCJsb2NhdGlvbiIsInZhbGlkYXRlIiwiZXJyb3JzIiwidmFsdWVzIiwiZnVsbG5hbWUiLCJsZW5ndGgiLCJlbWFpbCIsInRlc3QiLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJyZW5kZXJGaWVsZCIsImlucHV0IiwibGFiZWwiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwiZm9ybSIsInN1Ym1pdEVycm9yIiwiaGFuZGxlU2lnblVwIiwicG9zdCIsInRoZW4iLCJjYXRjaCIsInNldFN0YXRlIiwiZXJyIiwicmVzcG9uc2UiLCJoYW5kbGVTdWJtaXQiLCJzdWNjZXNzTWVzc2FnZSIsIkxvZ2luRm9ybSIsInNldEl0ZW0iLCJkZWNvZGUiLCJ1c2VySWQiLCJpZCIsImJvYXJkQ3JlYXRlZCIsImJvYXJkcyIsInN1Y2Nlc3MiLCJ0YWJsZXMiLCJjcmVhdGVCb2FyZCIsInNob3dCb2FyZHMiLCJjcmVhdGVNb2RhbCIsImJvYXJkTmFtZSIsImUiLCJ2YWx1ZSIsIm1hcCIsImJvYXJkIiwia2V5IiwibmFtZSIsInVwZGF0ZWRfYXQiLCJjcmVhdGVCb2FyZFJlc3VsdCIsInVzZXJJRCIsInNob3dCb2FyZHNTdWNjZXNzIiwic2hvd0JvYXJkc0ZhaWxlZCIsImNyZWF0ZVRhc2siLCJ0aXRsZSIsImlzc3VlIiwid2FybmluZyIsImFkZFRhc2siLCJib2FyZElkIiwibWF0Y2giLCJwYXJhbXMiLCJ0YXNrcyIsImFjdGlvbiIsImVycm9yU3RhZ2UiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwidHlwZXMiLCJwcm9taXNlIiwiY2xpZW50IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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QUFDSSxtQkFBTyxFQUFFQSxTQUFTLEtBQVgsRUFBa0I3QixTQUFTMEIsT0FBTzFCLE9BQWxDLEVBQVA7QUFDSjtBQUNJLG1CQUFPLEVBQUU2QixTQUFTLEtBQVgsRUFBa0JoRCxPQUFPNkMsT0FBTzdDLEtBQWhDLEVBQVA7QUFDSjtBQUFTLG1CQUFPNUQsS0FBUDtBQVBiO0FBU0gsQzs7Ozs7Ozs7Ozs7O1FDVGVnRyxVLEdBQUFBLFU7O0FBSGhCOztBQUdPLFNBQVNBLFVBQVQsQ0FBb0JuSCxJQUFwQixFQUEwQjtBQUM3QixXQUFPO0FBQ0hnSSxlQUFPLDRGQURKO0FBRUhDLGlCQUFTLGlCQUFDQyxNQUFEO0FBQUEsbUJBQVlBLE9BQU8vQyxJQUFQLG1CQUE2Qm5GLElBQTdCLEVBQ2hCb0YsSUFEZ0IsQ0FDWCxrQkFBVTtBQUFDLHVCQUFPK0MsTUFBUDtBQUFlLGFBRGYsQ0FBWjtBQUFBO0FBRk4sS0FBUDtBQUtILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQxYjlkYzY5YTExYWI4NjA5NTMyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HSU4gPSBcIkxPR0lOXCI7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfVEFCTEVfUkVTVUxUID0gXCJDUkVBVEVfVEFCTEVfUkVTVUxUXCI7XG5leHBvcnQgY29uc3QgU0hPV19UQUJMRV9SRVNVTFQgPSBcIlNIT1dfVEFCTEVfUkVTVUxUXCI7XG5leHBvcnQgY29uc3QgTk9fVEFCTEVfUkVTVUxUID0gXCJOT19UQUJMRV9SRVNVTFRcIjtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9UQVNLID0gXCJDUkVBVEVfVEFTS1wiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9UQVNLX1NVQ0NFU1MgPSBcIkNSRUFURV9UQVNLX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfVEFTS19FUlJPUiA9IFwiQ1JFQVRFX1RBU0tfRVJST1JcIjtcbmV4cG9ydCBjb25zdCBTSE9XX1RBU0tTID0gXCJTSE9XX1RBU0tTXCI7XG5leHBvcnQgY29uc3QgU0hPV19UQVNLU19TVUNDRVNTID0gXCJTSE9XX1RBU0tTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTSE9XX1RBU0tTX0VSUk9SID0gXCJTSE9XX1RBU0tTX0VSUk9SXCI7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25OYW1lcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTSUdOVVBfU1VDQ0VTUywgTE9HSU4sIExPR09VVCB9IGZyb20gJy4uL2FjdGlvbk5hbWVzJztcbmltcG9ydCBzZXRBdXRoVG9rZW4gZnJvbSAnLi4vLi4vdXRpbHMvdG9rZW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2lnblVwTW9kYWwoYm9vbCkge1xuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgICAgIGRpc3BhdGNoKG1vZGFsQm9vbChib29sKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb2RhbEJvb2woZGF0YSkge1xuICAgIGNvbnN0IGxpc3QgPSB7dHlwZTpTSUdOVVBfU1VDQ0VTUywgc3RhdHVzOmRhdGF9O1xuICAgIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4odXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IExPR0lOLFxuICAgICAgICB1c2VyXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgICAgIHNldEF1dGhUb2tlbihmYWxzZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdqd3RUb2tlbicpO1xuICAgICAgICBkaXNwYXRjaChsb2dpbih7fSkpO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25zL3NpZ25VcC5qcyIsIi8vIGFkcmVzcyByZW5kZXJpbmcgZm9yIGRldmVsb3BtZW50L3Byb2R1Y3Rpb25cblxuY29uc3QgZGV2ID0gdHJ1ZTtcbmxldCBzZXJ2ZXI7XG5cbmRldlxuICAgID8gc2VydmVyPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiXG4gICAgOiBzZXJ2ZXI9XCJodHRwczovL3Rhc2stbWFuYWdlci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9cIjtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvc2VydmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZm9ybVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LWZvcm1cIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBIb21lIGZyb20gJy4vSG9tZS9Ib21lJztcbmV4cG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIvSGVhZGVyJztcbmV4cG9ydCBTaWduVXAgZnJvbSAnLi9TaWduVXAvU2lnblVwJztcbmV4cG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luL0xvZ2luJztcbmV4cG9ydCBNYWlucGFnZSBmcm9tICcuL01haW5wYWdlL01haW5wYWdlJztcbmV4cG9ydCBCb2FyZHMgZnJvbSAnLi9Cb2FyZHMvQm9hcmRzJztcbmV4cG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkL0JvYXJkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvc2lnblVwJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzZXJ2ZXIgZnJvbSAnLi4vLi4vc2VydmVyJztcblxuY29uc3QgQXV0aCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2JvYXJkc1wiPkJvYXJkczwvTGluaz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxzcGFuPkhlbGxvLCB7cHJvcHMudXNlci51c2VybmFtZX0gPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17cHJvcHMubG9nb3V0fT5TaWduIE91dDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuXG5AY29ubmVjdChcbiAgICBzdGF0ZSA9PiAoe1xuICAgICAgICB1c2VyOiBzdGF0ZS5zaWduVXAudXNlcixcbiAgICAgICAgaXNBdXRoOiBzdGF0ZS5zaWduVXAuaXNBdXRoXG4gICAgfSksXG4gICAgeyBsb2dvdXQgfVxuKVxuXG5Ad2l0aFJvdXRlclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgbG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FwaS9sb2dpbmApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBpc0F1dGgsIHVzZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qgbm90QXV0aCA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+PExpbmsgdG89XCIvbG9naW5cIj5TaWduIGluPC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48TGluayB0bz1cIi9zaWdudXBcIj5TaWduIHVwPC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Mb2dvPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICB7IGlzQXV0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8QXV0aCB1c2VyPXt1c2VyfSBsb2dvdXQ9e3RoaXMubG9nb3V0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5vdEF1dGggfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL0hlYWRlci9IZWFkZXIuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBdXRoVG9rZW4odG9rZW4pIHtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRva2VuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ11cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC91dGlscy90b2tlbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCByZW5kZXJlciBmcm9tICcuL2hlbHBlcnMvcmVuZGVyZXInO1xudmFyIHByb3h5ID0gcmVxdWlyZSgnaHR0cC1wcm94eS1taWRkbGV3YXJlJyk7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL2NsaWVudC9yb290LXJlZHVjZXInO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5cblxuYXBwLnVzZShjb3JzKCkpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgJiYgYXBwLnVzZSgnL2FwaScsIHByb3h5KHt0YXJnZXQ6IF9fRU5WX18uYXBpX3NlcnZlciwgY2hhbmdlT3JpZ2luOiB0cnVlfSkpO1xuYXBwLnVzZSgnLycsKHJlcSxyZXMpID0+IHtcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgcmVkdWNlcixcbiAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gICk7XG4gIHJlcy5zZW5kKHJlbmRlcmVyKHJlcSxzdG9yZSkpO1xuXG59KTtcblxuXG5cbmFwcC5zZXQoJ3BvcnQnLCAocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAyKSk7XG5cbmFwcC5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdsaXN0ZW4gb24gcG9ydCAzMDAyJyk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuLi9jbGllbnQvUm91dGVycyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsc3RvcmUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17e319PlxuICAgICAgICAgICAgICAgIHtSb3V0ZXMoc3RvcmUpfVxuICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcblxuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8YmFzZSBocmVmPVwiL1wiIC8+XG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2NyaXB0ID5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LklOSVRJQUxfU1RBVEUgPSAke0pTT04uc3RyaW5naWZ5KHN0b3JlLmdldFN0YXRlKCkpfVxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYnVuZGxlLmpzXCI+PC9zY3JpcHQ+IFxuICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+YFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzL3JlbmRlcmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhvbWUsIFNpZ25VcCwgTG9naW4sIEJvYXJkLCBCb2FyZHMgfSBmcm9tICcuL2NvbnRhaW5lcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3dpdGNoICwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb250YWluZXJzL0hlYWRlci9IZWFkZXInO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4ge1xuICAgICAgICBjb25zdCB7IHNpZ25VcDogeyBpc0F1dGggfX0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIHJlbmRlcj17cHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgaXNBdXRoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVkaXJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwibG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB7IGZyb206IHByb3BzLmxvY2F0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtTaWduVXB9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL2JvYXJkc1wiIGV4YWN0IGNvbXBvbmVudD17Qm9hcmRzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIHBhdGg9XCIvYm9hcmRzLzppZFwiIGNvbXBvbmVudD17Qm9hcmR9IC8+XG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvUm91dGVycy5qcyIsImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2luZGV4LmpzJztcbkBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgaXNBdXRoOnN0YXRlLnNpZ25VcC5pc0F1dGhcbn0pLCB7fSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAhdGhpcy5wcm9wcy5pc0F1dGggJiYgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgSG9tZSBwYWdlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvY29udGFpbmVycy9Ib21lL0hvbWUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkdXhGb3JtLCBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHNpZ25VcE1vZGFsIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9zaWduVXAnO1xuXG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICAgIGlmKCF2YWx1ZXMuZnVsbG5hbWUpe1xuICAgICAgICBlcnJvcnMuZnVsbG5hbWUgPSBcIlJlcXVpcmVkXCJcbiAgICB9IGVsc2UgaWYgKHZhbHVlcy5mdWxsbmFtZS5sZW5ndGggPCA3KSB7XG4gICAgICAgIGVycm9ycy5mdWxsbmFtZSA9IFwiVG9vIHNob3J0IGZ1bGwgbmFtZVwiXG4gICAgfVxuXG4gICAgaWYoIXZhbHVlcy51c2VybmFtZSl7XG4gICAgICAgIGVycm9ycy51c2VybmFtZSA9IFwiUmVxdWlyZWRcIlxuICAgIH0gZWxzZSBpZiAodmFsdWVzLnVzZXJuYW1lLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgZXJyb3JzLnVzZXJuYW1lID0gXCJUb28gc2hvcnQgdXNlcm5hbWVcIlxuICAgIH1cblxuICAgIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgICAgIGVycm9ycy5lbWFpbCA9ICdSZXF1aXJlZCdcbiAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlcy5lbWFpbCkpIHtcbiAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcydcbiAgICB9XG5cbiAgICBpZighdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdSZXF1aXJlZCdcbiAgICB9IGVsc2UgaWYgKHZhbHVlcy5wYXNzd29yZC5sZW5ndGggPCA3KSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwiVG9vIHNob3J0IHBhc3N3b3JkXCJcbiAgICB9XG5cbiAgICBpZighdmFsdWVzLnBhc3N3b3JkQ2hlY2spIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkQ2hlY2sgPSAnUmVxdWlyZWQnXG4gICAgfSBlbHNlIGlmKHZhbHVlcy5wYXNzd29yZENoZWNrICE9PSB2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkQ2hlY2sgPSAnUGFzc3dvcmRzIG5lZWQgdG8gYmUgaWRlbnRpY2FsJ1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG59O1xuXG5jb25zdCByZW5kZXJGaWVsZCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5pbnB1dH0gcGxhY2Vob2xkZXI9e2xhYmVsfSB0eXBlPXt0eXBlfSAvPlxuICAgICAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4+e2Vycm9yfTwvc3Bhbj59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuQHJlZHV4Rm9ybSh7XG4gICAgZm9ybToncmVnaXN0ZXInLFxuICAgIHZhbGlkYXRlXG59LCBzdGF0ZSA9PiAoe30pKVxuXG5AY29ubmVjdChcbiAgICBzdGF0ZSA9PiAoe30pLFxuICAgIHsgc2lnblVwTW9kYWwgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduVXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBzdWJtaXRFcnJvcjogZmFsc2UsXG4gICAgICAgIGVycm9yczoge31cbiAgICB9O1xuXG4gICAgaGFuZGxlU2lnblVwID0gdmFsdWVzID0+IHtcbiAgICAgICAgYXhpb3MucG9zdChgL2FwaS9zaWdudXBgLHZhbHVlcylcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCFyZXMuZGF0YS5lcnJvcil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2lnblVwTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnM6ZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7ICh0aGlzLnN1Ym1pdEVycm9yICE9PSBmYWxzZSkgJiYgPGRpdj57dGhpcy5zdGF0ZS5zdWJtaXRFcnJvcn08L2Rpdj4gfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZ1bGxuYW1lXCI+RnVsbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZnVsbG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInVzZXJuYW1lXCIgY29tcG9uZW50PXtyZW5kZXJGaWVsZH0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnJvcnMudXNlcm5hbWUgJiYgPGRpdj57ZXJyb3JzLnVzZXJuYW1lfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIGNvbXBvbmVudD17cmVuZGVyRmllbGR9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3JzLmVtYWlsICYmIDxkaXY+e2Vycm9ycy5lbWFpbH08L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9e3JlbmRlckZpZWxkfSB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZENoZWNrXCI+Q29uZmlybSB5b3VyIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRDaGVja1wiIGNvbXBvbmVudD17cmVuZGVyRmllbGR9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIEFjY291bnRcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTaWduVXApfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL1NpZ25VcC9TaWduVXAuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9zaWduVXAnO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL0xvZ2luRm9ybSc7XG5cbkBjb25uZWN0KFxuICAgIHN0YXRlPT4oe1xuICAgICAgICBzdWNjZXNzTWVzc2FnZTpzdGF0ZS5zaWduVXBcbiAgICB9KSxcbiAgICB7bG9naW59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN1Y2Nlc3NNZXNzYWdlLCBoaXN0b3J5LCBsb2dpbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgeyBzdWNjZXNzTWVzc2FnZSA9PT0gdHJ1ZSAmJiA8ZGl2PllvdWByZSBzdWNjZXNzZnVsbHkgcmVnaXN0cmVkLCBsb2dpbjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8TG9naW5Gb3JtIGhpc3Rvcnk9e2hpc3Rvcnl9IGxvZ2luPXtsb2dpbn0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL0xvZ2luL0xvZ2luLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSwgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VydmVyIGZyb20gJy4uLy4uL3NlcnZlcic7XG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gJy4uLy4uL3V0aWxzL3Rva2VuJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuXG4gICAgaWYoIXZhbHVlcy51c2VybmFtZSl7XG4gICAgICAgIGVycm9ycy51c2VybmFtZSA9IFwiUmVxdWlyZWRcIlxuICAgIH0gZWxzZSBpZiAodmFsdWVzLnVzZXJuYW1lLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgZXJyb3JzLnVzZXJuYW1lID0gXCJUb28gc2hvcnQgdXNlcm5hbWUgb3IgZW1haWxcIlxuICAgIH1cblxuICAgIGlmKCF2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1JlcXVpcmVkJ1xuICAgIH0gZWxzZSBpZiAodmFsdWVzLnBhc3N3b3JkLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gXCJUb28gc2hvcnQgcGFzc3dvcmRcIlxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG59O1xuXG5jb25zdCByZW5kZXJGaWVsZCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5pbnB1dH0gcGxhY2Vob2xkZXI9e2xhYmVsfSB0eXBlPXt0eXBlfSAvPlxuICAgICAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4+e2Vycm9yfTwvc3Bhbj59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuQHJlZHV4Rm9ybSh7XG4gICAgZm9ybTonbG9naW4nLFxuICAgIHZhbGlkYXRlXG59LCBzdGF0ZSA9PiAoe30pKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBzdWJtaXRFcnJvcjogZmFsc2UsXG4gICAgICAgIGVycm9yczoge31cbiAgICB9O1xuXG4gICAgaGFuZGxlU2lnblVwID0gdmFsdWVzID0+IHtcbiAgICAgICAgYXhpb3MucG9zdChgL2FwaS9sb2dpbmAsdmFsdWVzKS50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgICAgIGlmKCFyZXMuZGF0YS5lcnJvcil7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dFRva2VuJywgcmVzLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIHNldEF1dGhUb2tlbihyZXMuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dpbihqd3QuZGVjb2RlKHJlcy5kYXRhLnRva2VuKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnM6ZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInVzZXJuYW1lXCIgY29tcG9uZW50PXtyZW5kZXJGaWVsZH0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9e3JlbmRlckZpZWxkfSB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNpZ25VcCl9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IGVycm9ycyAmJiA8ZGl2PntlcnJvcnMuZm9ybX08L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvTG9naW4vTG9naW5Gb3JtLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianNvbndlYnRva2VuXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5wYWdlIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIG1haW4gcGFnZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL01haW5wYWdlL01haW5wYWdlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUJvYXJkLCBzaG93Qm9hcmRzIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9ib2FyZHMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuQGNvbm5lY3QoIHN0YXRlPT4oe1xuICAgIHVzZXJJZDogc3RhdGUuc2lnblVwLnVzZXIuaWQsXG4gICAgYm9hcmRDcmVhdGVkOiBzdGF0ZS5ib2FyZHMuc3VjY2VzcyxcbiAgICBib2FyZHM6IHN0YXRlLmJvYXJkcy50YWJsZXNcbn0pLHsgY3JlYXRlQm9hcmQsIHNob3dCb2FyZHMgfSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiBmYWxzZSxcbiAgICAgICAgYm9hcmROYW1lOiAnJ1xuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnByb3BzLnNob3dCb2FyZHModGhpcy5wcm9wcy51c2VySWQpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZUJvYXJkKHRoaXMucHJvcHMudXNlcklkLHRoaXMuc3RhdGUuYm9hcmROYW1lKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Qm9hcmRzKHRoaXMucHJvcHMudXNlcklkKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgY3JlYXRlTW9kYWwgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgYm9hcmRDcmVhdGVkLCBib2FyZHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IGNyZWF0ZU1vZGFsOiFjcmVhdGVNb2RhbCB9KX19PkNyZWF0ZSBuZXcgYm9hcmQ8L3A+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVNb2RhbCAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCb2FyZCBOYW1lXCIgb25DaGFuZ2U9eyBlID0+IHRoaXMuc2V0U3RhdGUoeyBib2FyZE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuY3JlYXRlQm9hcmR9PkNyZWF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgeyBib2FyZENyZWF0ZWQgJiYgPGRpdj5Cb2FyZCBzdWNjZXNzZnVsbHkgY3JlYXRlZCA8L2Rpdj4gfVxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+WW91ciBib2FyZHM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBib2FyZHMgJiYgYm9hcmRzLm1hcCggKGJvYXJkLGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgYm9hcmRzLyR7Ym9hcmQuaWR9YH0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9hcmQubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2BDcmVhdGVkIGF0ICR7Ym9hcmQudXBkYXRlZF9hdH1gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL0JvYXJkcy9Cb2FyZHMuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHNlcnZlciBmcm9tICcuLi8uLi9zZXJ2ZXInO1xuaW1wb3J0IHsgQ1JFQVRFX1RBQkxFX1JFU1VMVCxTSE9XX1RBQkxFX1JFU1VMVCwgTk9fVEFCTEVfUkVTVUxUIH0gZnJvbSAnLi4vYWN0aW9uTmFtZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9hcmQodXNlcixuYW1lKXtcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9ib2FyZHMvY3JlYXRlYCx7dXNlcixuYW1lfSkudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGNyZWF0ZUJvYXJkUmVzdWx0KHJlcy5kYXRhLnN1Y2Nlc3MpKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkUmVzdWx0KGJvb2wpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IENSRUFURV9UQUJMRV9SRVNVTFQsXG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Qm9hcmRzKHVzZXJJRCl7XG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9ib2FyZHMvZ2V0X2JvYXJkcz91c2VySUQ9JHt1c2VySUR9YClcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dCb2FyZHNTdWNjZXNzKHJlcy5kYXRhLmJvYXJkcykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dCb2FyZHNGYWlsZWQoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Qm9hcmRzU3VjY2VzcyhkYXRhKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTSE9XX1RBQkxFX1JFU1VMVCxcbiAgICAgICAgdGFibGVzOiBkYXRhXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Qm9hcmRzRmFpbGVkKGVycil7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTk9fVEFCTEVfUkVTVUxULFxuICAgICAgICBlcnJvcjogZXJyXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25zL2JvYXJkcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdGFza3MnO1xuXG5AY29ubmVjdCggc3RhdGUgPT4gKHt9KSx7Y3JlYXRlVGFza30pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBpc3N1ZTogJycsXG4gICAgICAgIHdhcm5pbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHt0aXRsZSxpc3N1ZSwgd2FybmluZ30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmKHRpdGxlLmxlbmd0aCA+IDQgJiYgaXNzdWUubGVuZ3RoID4gNCApe1xuICAgICAgICAgICAgd2FybmluZyAmJiB0aGlzLnNldFN0YXRlKHsgd2FybmluZzpmYWxzZSB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlVGFzayh7IHRpdGxlOnRpdGxlLCBpc3N1ZTppc3N1ZSwgYm9hcmRJZDp0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdhcm5pbmc6dHJ1ZSB9KSA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCk7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWRkIHRhc2sgPHNwYW4+Kzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1cC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsgZSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6ZS50YXJnZXQudmFsdWUgfSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXAtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+SXNzdWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyBlID0+IHRoaXMuc2V0U3RhdGUoeyBpc3N1ZTplLnRhcmdldC52YWx1ZSB9KX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRhc2t9PkFkZCB0YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQm9hcmQvQm9hcmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL3JlZHV4L3JlZHVjZXIvbGlzdCc7XG5pbXBvcnQgc2lnblVwIGZyb20gJy4vcmVkdXgvcmVkdWNlci9zaWduVXAnO1xuaW1wb3J0IGJvYXJkcyBmcm9tICcuL3JlZHV4L3JlZHVjZXIvYm9hcmRzJztcbmltcG9ydCB0YXNrcyBmcm9tICcuL3JlZHV4L3JlZHVjZXIvdGFza3MnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgbGlzdCxcbiAgICBzaWduVXAsXG4gICAgYm9hcmRzLFxuICAgIHRhc2tzLFxuICAgIGZvcm06IGZvcm1SZWR1Y2VyXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcm9vdC1yZWR1Y2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gW10sYWN0aW9uPXt9KT0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlICdTVUNDRVNTX0xJU1QnOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5saXN0XG4gICAgICAgIGNhc2UgJ0VSUk9SX0xJU1QnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICAgICAgICAgIGVycm9yU3RhZ2U6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHV4L3JlZHVjZXIvbGlzdC5qcyIsImltcG9ydCB7IFNJR05VUF9TVUNDRVNTLCBMT0dJTiB9IGZyb20gJy4uL2FjdGlvbk5hbWVzJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXI6IHt9LFxuICAgIGlzQXV0aDogZmFsc2Vcbn1cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uPXt9KT0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFNJR05VUF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5zdGF0dXM7XG4gICAgICAgIGNhc2UgTE9HSU46XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi51c2VyLFxuICAgICAgICAgICAgICAgIGlzQXV0aDogIWlzRW1wdHkoYWN0aW9uLnVzZXIpXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdXgvcmVkdWNlci9zaWduVXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFbXB0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9pc0VtcHR5XCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENSRUFURV9UQUJMRV9SRVNVTFQsIFNIT1dfVEFCTEVfUkVTVUxULCBOT19UQUJMRV9SRVNVTFQgfSBmcm9tICcuLi9hY3Rpb25OYW1lcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0YWJsZXM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoIHN0YXRlPXt9LCBhY3Rpb249e30gKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBDUkVBVEVfVEFCTEVfUkVTVUxUOlxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogYWN0aW9uLnN1Y2Nlc3MgfTtcbiAgICAgICAgY2FzZSBTSE9XX1RBQkxFX1JFU1VMVDpcbiAgICAgICAgICAgIHJldHVybiB7IHRhYmxlczogYWN0aW9uLnRhYmxlcyB9O1xuICAgICAgICBjYXNlIE5PX1RBQkxFX1JFU1VMVDpcbiAgICAgICAgICAgIHJldHVybiB7IGVycjogYWN0aW9uLmVycm9yfTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1eC9yZWR1Y2VyL2JvYXJkcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcnNcIlxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1wcm94eS1taWRkbGV3YXJlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cC1wcm94eS1taWRkbGV3YXJlXCJcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENSRUFURV9UQVNLLCBDUkVBVEVfVEFTS19TVUNDRVNTLCBDUkVBVEVfVEFTS19FUlJPUn0gZnJvbSAnLi4vYWN0aW9uTmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoIHN0YXRlPXt9LCBhY3Rpb249e30gKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBDUkVBVEVfVEFTSzpcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IHRydWUgfTtcbiAgICAgICAgY2FzZSBDUkVBVEVfVEFTS19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIHN1Y2Nlc3M6IGFjdGlvbi5zdWNjZXNzfTtcbiAgICAgICAgY2FzZSBDUkVBVEVfVEFTS19FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdXgvcmVkdWNlci90YXNrcy5qcyIsImltcG9ydCB7IENSRUFURV9UQVNLLCBDUkVBVEVfVEFTS19TVUNDRVNTLCBDUkVBVEVfVEFTS19FUlJPUn0gZnJvbSAnLi4vYWN0aW9uTmFtZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlczogW0NSRUFURV9UQVNLLCBDUkVBVEVfVEFTS19TVUNDRVNTLCBDUkVBVEVfVEFTS19FUlJPUl0sXG4gICAgICAgIHByb21pc2U6IChjbGllbnQpID0+IGNsaWVudC5wb3N0KGAvYXBpL3Rhc2tzL2FkZGAsZGF0YSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7cmV0dXJuIHJlc3VsdDt9KSxcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9yZWR1eC9hY3Rpb25zL3Rhc2tzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==