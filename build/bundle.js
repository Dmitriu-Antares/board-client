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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signUpModal = signUpModal;
exports.login = login;
exports.logout = logout;

var _token = __webpack_require__(10);

var _token2 = _interopRequireDefault(_token);

var _isEmpty = __webpack_require__(20);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIGNUP_SUCCESS = "SIGN_UP_SUCCESS";
var LOGIN = "LOGIN";

var initialState = {
    user: {},
    isAuth: false
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case SIGNUP_SUCCESS:
            return action.status;
        case LOGIN:
            return {
                user: action.user,
                isAuth: !(0, _isEmpty2.default)(action.user)
            };
        default:
            return state;
    }
};

function signUpModal(bool) {
    return function (dispatch) {
        dispatch(modalBool(bool));
    };
}

function modalBool(data) {
    var list = { type: SIGNUP_SUCCESS, status: data };
    return list;
}

function login(user) {
    return {
        type: LOGIN,
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addUser = addUser;
exports.createBoard = createBoard;
exports.showBoards = showBoards;
exports.showUsers = showUsers;

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_TABLE_RESULT = "CREATE_TABLE_RESULT";
var SHOW_TABLE_RESULT = "SHOW_TABLE_RESULT";
var NO_TABLE_RESULT = "NO_TABLE_RESULT";

var SHOW_USERS = "SHOW_USERS";
var SHOW_USERS_SUCCESS = "SHOW_USERS_SUCCESS";
var SHOW_USERS_ERROR = "SHOW_USERS_ERROR";

var ADD_USER = "ADD_USER";
var ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
var ADD_USER_FAIL = "ADD_USER_FAIL";

var initialState = {
    tables: [],
    users: []
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case CREATE_TABLE_RESULT:
            return _extends({}, state, { success: action.success });
        case SHOW_TABLE_RESULT:
            return _extends({}, state, { tables: action.tables });
        case NO_TABLE_RESULT:
            return _extends({}, state, { err: action.error });
        case SHOW_USERS_SUCCESS:
            return _extends({}, state, { users: action.users });
        case SHOW_USERS_ERROR:
            return _extends({}, state, { err: action.err });
        default:
            return state;
    }
};

function addUser(userId, boardId) {
    return {
        types: [ADD_USER, ADD_USER_SUCCESS, ADD_USER_FAIL],
        promise: function promise(client) {
            return client.post("/api/boards/add_users", { userId: userId, boardId: boardId }).then(function (result) {
                return result;
            });
        }
    };
}

function createBoard(user, name) {
    return function (dispatch) {
        return _axios2.default.post("/api/boards/create", { user: user, name: name }).then(function (res) {
            dispatch(createBoardResult(res.data.success));
        });
    };
}

function createBoardResult(bool) {
    return {
        type: CREATE_TABLE_RESULT,
        success: bool
    };
}

function showBoards(userID) {
    return function (dispatch) {
        return _axios2.default.get("/api/boards/get_boards?userID=" + userID).then(function (res) {
            dispatch(showBoardsSuccess(res.data.boards));
        }).catch(function (err) {
            dispatch(showBoardsFailed(err.response.data));
        });
    };
}

function showBoardsSuccess(data) {
    return {
        type: SHOW_TABLE_RESULT,
        tables: data
    };
}

function showBoardsFailed(err) {
    return {
        type: NO_TABLE_RESULT,
        error: err
    };
}

function showUsers(userId, boardId) {
    return {
        types: [SHOW_USERS, SHOW_USERS_SUCCESS, SHOW_USERS_ERROR],
        promise: function promise(client) {
            return client.get("/api/boards/get_users?currentId=" + userId + "&boardId=" + boardId).then(function (result) {
                return result;
            });
        }
    };
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Board = exports.Boards = exports.Mainpage = exports.Login = exports.SignUp = exports.Header = exports.Home = undefined;

var _Home2 = __webpack_require__(19);

var _Home3 = _interopRequireDefault(_Home2);

var _Header2 = __webpack_require__(9);

var _Header3 = _interopRequireDefault(_Header2);

var _SignUp2 = __webpack_require__(21);

var _SignUp3 = _interopRequireDefault(_SignUp2);

var _Login2 = __webpack_require__(22);

var _Login3 = _interopRequireDefault(_Login2);

var _Mainpage2 = __webpack_require__(25);

var _Mainpage3 = _interopRequireDefault(_Mainpage2);

var _Boards2 = __webpack_require__(26);

var _Boards3 = _interopRequireDefault(_Boards2);

var _Board2 = __webpack_require__(27);

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
/* 9 */
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

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _auth = __webpack_require__(4);

var _server = __webpack_require__(11);

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
        user: state.auth.user,
        isAuth: state.auth.isAuth
    };
}, { logout: _auth.logout }), _dec(_class = (0, _reactRouterDom.withRouter)(_class = function (_Component) {
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setAuthToken;

var _axios = __webpack_require__(2);

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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createTask = createTask;
exports.showTasks = showTasks;

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_TASK = "CREATE_TASK";
var CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
var CREATE_TASK_ERROR = "CREATE_TASK_ERROR";
var SHOW_TASKS = "SHOW_TASKS";

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case CREATE_TASK:
            return _extends({}, state, { loading: true });
        case CREATE_TASK_SUCCESS:
            return _extends({}, state, { loading: false, success: action.success });
        case CREATE_TASK_ERROR:
            return _extends({}, state, { loading: false, error: action.error });
        case SHOW_TASKS:
            return _extends({}, state, { tasksList: action.tasks });
        default:
            return state;
    }
};

function createTask(data) {
    return {
        types: [CREATE_TASK, CREATE_TASK_SUCCESS, CREATE_TASK_ERROR],
        promise: function promise(client) {
            return client.post("/api/tasks/add", data).then(function (result) {
                return result;
            });
        }
    };
};

function showTasks(id) {
    return function (dispatch) {
        _axios2.default.get("api/tasks/show?boardID=" + id).then(function (res) {
            dispatch(showTasksSuccess(res));
        });
    };
};

var showTasksSuccess = function showTasksSuccess(res) {
    return {
        type: SHOW_TASKS,
        tasks: res.data
    };
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(15);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _renderer = __webpack_require__(16);

var _renderer2 = _interopRequireDefault(_renderer);

var _rootReducer = __webpack_require__(33);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _redux = __webpack_require__(13);

var _reduxThunk = __webpack_require__(34);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _cors = __webpack_require__(35);

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proxy = __webpack_require__(36);


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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(17);

var _Routers = __webpack_require__(18);

var _Routers2 = _interopRequireDefault(_Routers);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(32);

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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(3);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (store) {
    var _store$getState = store.getState(),
        isAuth = _store$getState.auth.isAuth;

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
/* 19 */
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

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _index = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        isAuth: state.auth.isAuth
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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 21 */
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

var _reduxForm = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _auth = __webpack_require__(4);

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
}, { signUpModal: _auth.signUpModal }), _dec(_class = _dec2(_class = function (_Component) {
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
                err.response.data && _this.setState({ errors: err.response.data.error });
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
/* 22 */
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

var _auth = __webpack_require__(4);

var _LoginForm = __webpack_require__(23);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        successMessage: state.auth.signUp
    };
}, { login: _auth.login }), _dec(_class = function (_Component) {
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

// antares11
// modern11

exports.default = Login;

/***/ }),
/* 23 */
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

var _reduxForm = __webpack_require__(5);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _server = __webpack_require__(11);

var _server2 = _interopRequireDefault(_server);

var _token = __webpack_require__(10);

var _token2 = _interopRequireDefault(_token);

var _jsonwebtoken = __webpack_require__(24);

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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 25 */
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

var _boards = __webpack_require__(6);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boards = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        userId: state.auth.user.id,
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
/* 27 */
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

var _tasks = __webpack_require__(12);

var _boards = __webpack_require__(6);

var _reactTrello = __webpack_require__(28);

var _reactTrello2 = _interopRequireDefault(_reactTrello);

var _TaskCard = __webpack_require__(29);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        tasks: state.tasks,
        userId: state.auth.user.id,
        users: state.boards.users
    };
}, { createTask: _tasks.createTask, showTasks: _tasks.showTasks, showUsers: _boards.showUsers, addUser: _boards.addUser }), _dec(_class = function (_Component) {
    _inherits(Board, _Component);

    function Board(props) {
        _classCallCheck(this, Board);

        var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

        _this.state = {
            title: '',
            issue: '',
            warning: false,
            data: {
                lanes: [{
                    id: 'lane1',
                    title: 'Todo',
                    label: '0',
                    cards: []
                }, {
                    id: 'lane2',
                    title: 'In progress',
                    label: '0',
                    cards: []
                }, {
                    id: 'lane3',
                    title: 'QA',
                    label: '0',
                    cards: []
                }, {
                    id: 'lane4',
                    title: 'Done',
                    label: '0',
                    cards: []
                }]
            }
        };

        _this.addTask = function () {
            var _this$state = _this.state,
                title = _this$state.title,
                issue = _this$state.issue,
                warning = _this$state.warning;

            if (title.length > 4 && issue.length > 4) {
                _this.addingTask = true;
                warning && _this.setState({ warning: false });
                _this.props.createTask({ title: title, issue: issue, boardId: _this.props.match.params.id });
            } else {
                _this.setState({ warning: true });
            }
        };

        _this.addTasksToLine = function (tasks) {
            var cards = [[], [], [], []];
            if (tasks && tasks.length > 0) {
                tasks.map(function (task) {
                    task.id = task.id.toString();
                    task.laneId = _this.state.data.lanes[0].id;
                    if (task.state === "lane1") {
                        cards[0].push(task);
                    } else if (task.state === "lane2") {
                        cards[1].push(task);
                    } else if (task.state === "lane3") {
                        cards[2].push(task);
                    } else if (task.state === "lane4") {
                        cards[3].push(task);
                    }
                });
                _this.tasksConstructor(cards);
            }
        };

        _this.tasksConstructor = function (cards) {
            var lanes = {
                lanes: [{
                    id: 'lane1',
                    title: 'Todo',
                    label: cards[0].length.toString(),
                    cards: cards[0]
                }, {
                    id: 'lane2',
                    title: 'In progress',
                    label: cards[1].length.toString(),
                    cards: cards[1]
                }, {
                    id: 'lane3',
                    title: 'QA',
                    label: cards[2].length.toString(),
                    cards: cards[2]
                }, {
                    id: 'lane4',
                    title: 'Done',
                    label: cards[3].length.toString(),
                    cards: cards[3]
                }]
            };
            _this.setState({ data: lanes });
        };

        _this.handleDrug = function (cardId, sourceLaneId, targetLaneId, position) {
            console.log(cardId, sourceLaneId, targetLaneId, position);
            _axios2.default.post('api/tasks/change_lane', { cardId: cardId, sourceLaneId: sourceLaneId, targetLaneId: targetLaneId }).then(function (res) {
                console.log(res.body);
            }).catch(function (err) {
                console.log(err);
            });
        };

        _this.addingTask = false;
        return _this;
    }

    _createClass(Board, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.showTasks(this.props.match.params.id);
            this.props.showUsers(this.props.userId, this.props.match.params.id);
            this.addTasksToLine(this.props.tasks);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _props = this.props,
                tasks = _props.tasks,
                showTasks = _props.showTasks;

            if (prevProps.tasks.tasksList !== tasks.tasksList) {
                this.addTasksToLine(tasks.tasksList);
            };
            if (this.addingTask && !tasks.loading && tasks.success) {
                this.addingTask = false;
                showTasks(this.props.match.params.id);
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                tasks = _props2.tasks,
                users = _props2.users,
                addUser = _props2.addUser;
            var data = this.state.data;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
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
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            'Add people ',
                            _react2.default.createElement(
                                'span',
                                null,
                                '+'
                            )
                        )
                    ),
                    _react2.default.createElement(_index.Select, { users: users,
                        addUser: addUser,
                        board: this.props.match.params.id })
                ),
                _react2.default.createElement(
                    _reactTrello2.default,
                    { data: this.state.data,
                        editable: true,
                        draggable: true,
                        customCardLayout: true,
                        handleDragEnd: this.handleDrug },
                    _react2.default.createElement(_TaskCard.TaskCard, null)
                )
            );
        }
    }]);

    return Board;
}(_react.Component)) || _class);
exports.default = Board;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-trello");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TaskCard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskCard = exports.TaskCard = function TaskCard(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            null,
            props.name
        ),
        _react2.default.createElement(
            'p',
            null,
            props.text
        )
    );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = undefined;

var _Select2 = __webpack_require__(31);

var _Select3 = _interopRequireDefault(_Select2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Select = _Select3.default;

/***/ }),
/* 31 */
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

var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    _createClass(Select, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                users = _props.users,
                addUser = _props.addUser,
                board = _props.board;

            return _react2.default.createElement(
                'div',
                null,
                users && users.map(function (user, id) {
                    return _react2.default.createElement(
                        'div',
                        { key: id },
                        _react2.default.createElement(
                            'span',
                            { 'user-id': user.id, onClick: function onClick() {
                                    return addUser(user.id, board);
                                } },
                            user.username
                        )
                    );
                })
            );
        }
    }]);

    return Select;
}(_react.Component);

exports.default = Select;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(13);

var _auth = __webpack_require__(4);

var _auth2 = _interopRequireDefault(_auth);

var _boards = __webpack_require__(6);

var _boards2 = _interopRequireDefault(_boards);

var _tasks = __webpack_require__(12);

var _tasks2 = _interopRequireDefault(_tasks);

var _reduxForm = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    auth: _auth2.default,
    boards: _boards2.default,
    tasks: _tasks2.default,
    form: _reduxForm.reducer
});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzYyMjY0YjkwYmU4ZDUxYjE1MmEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdXgvbW9kdWxlcy9hdXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWZvcm1cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHV4L21vZHVsZXMvYm9hcmRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy90b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHV4L21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvUm91dGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvSG9tZS9Ib21lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9pc0VtcHR5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL1NpZ25VcC9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9Mb2dpbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL01haW5wYWdlL01haW5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9Cb2FyZHMvQm9hcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9Cb2FyZC9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmVsbG9cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQm9hcmQvVGFza0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TZWxlY3QvU2VsZWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3Jvb3QtcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLXByb3h5LW1pZGRsZXdhcmVcIiJdLCJuYW1lcyI6WyJzaWduVXBNb2RhbCIsImxvZ2luIiwibG9nb3V0IiwiU0lHTlVQX1NVQ0NFU1MiLCJMT0dJTiIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJpc0F1dGgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJzdGF0dXMiLCJib29sIiwiZGlzcGF0Y2giLCJtb2RhbEJvb2wiLCJkYXRhIiwibGlzdCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJhZGRVc2VyIiwiY3JlYXRlQm9hcmQiLCJzaG93Qm9hcmRzIiwic2hvd1VzZXJzIiwiQ1JFQVRFX1RBQkxFX1JFU1VMVCIsIlNIT1dfVEFCTEVfUkVTVUxUIiwiTk9fVEFCTEVfUkVTVUxUIiwiU0hPV19VU0VSUyIsIlNIT1dfVVNFUlNfU1VDQ0VTUyIsIlNIT1dfVVNFUlNfRVJST1IiLCJBRERfVVNFUiIsIkFERF9VU0VSX1NVQ0NFU1MiLCJBRERfVVNFUl9GQUlMIiwidGFibGVzIiwidXNlcnMiLCJzdWNjZXNzIiwiZXJyIiwiZXJyb3IiLCJ1c2VySWQiLCJib2FyZElkIiwidHlwZXMiLCJwcm9taXNlIiwiY2xpZW50IiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJuYW1lIiwiY3JlYXRlQm9hcmRSZXN1bHQiLCJyZXMiLCJ1c2VySUQiLCJnZXQiLCJzaG93Qm9hcmRzU3VjY2VzcyIsImJvYXJkcyIsImNhdGNoIiwic2hvd0JvYXJkc0ZhaWxlZCIsInJlc3BvbnNlIiwiSG9tZSIsIkhlYWRlciIsIlNpZ25VcCIsIkxvZ2luIiwiTWFpbnBhZ2UiLCJCb2FyZHMiLCJCb2FyZCIsIkF1dGgiLCJwcm9wcyIsInVzZXJuYW1lIiwiYXV0aCIsImhpc3RvcnkiLCJwdXNoIiwibm90QXV0aCIsInNldEF1dGhUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGV2Iiwic2VydmVyIiwiY3JlYXRlVGFzayIsInNob3dUYXNrcyIsIkNSRUFURV9UQVNLIiwiQ1JFQVRFX1RBU0tfU1VDQ0VTUyIsIkNSRUFURV9UQVNLX0VSUk9SIiwiU0hPV19UQVNLUyIsImxvYWRpbmciLCJ0YXNrc0xpc3QiLCJ0YXNrcyIsImlkIiwic2hvd1Rhc2tzU3VjY2VzcyIsInByb3h5IiwicmVxdWlyZSIsImFwcCIsInVzZSIsInN0YXRpYyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInRhcmdldCIsIl9fRU5WX18iLCJhcGlfc2VydmVyIiwiY2hhbmdlT3JpZ2luIiwicmVxIiwic3RvcmUiLCJzZW5kIiwic2V0IiwiUE9SVCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwicmVuZGVyVG9TdHJpbmciLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U3RhdGUiLCJQcml2YXRlUm91dGUiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwicGF0aG5hbWUiLCJmcm9tIiwibG9jYXRpb24iLCJ2YWxpZGF0ZSIsImVycm9ycyIsInZhbHVlcyIsImZ1bGxuYW1lIiwibGVuZ3RoIiwiZW1haWwiLCJ0ZXN0IiwicGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwicmVuZGVyRmllbGQiLCJpbnB1dCIsImxhYmVsIiwibWV0YSIsInRvdWNoZWQiLCJmb3JtIiwic3VibWl0RXJyb3IiLCJoYW5kbGVTaWduVXAiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsInN1Y2Nlc3NNZXNzYWdlIiwic2lnblVwIiwiTG9naW5Gb3JtIiwic2V0SXRlbSIsImRlY29kZSIsImJvYXJkQ3JlYXRlZCIsImNyZWF0ZU1vZGFsIiwiYm9hcmROYW1lIiwiZSIsInZhbHVlIiwibWFwIiwiYm9hcmQiLCJrZXkiLCJ1cGRhdGVkX2F0IiwidGl0bGUiLCJpc3N1ZSIsIndhcm5pbmciLCJsYW5lcyIsImNhcmRzIiwiYWRkVGFzayIsImFkZGluZ1Rhc2siLCJtYXRjaCIsInBhcmFtcyIsImFkZFRhc2tzVG9MaW5lIiwidGFzayIsInRvU3RyaW5nIiwibGFuZUlkIiwidGFza3NDb25zdHJ1Y3RvciIsImhhbmRsZURydWciLCJjYXJkSWQiLCJzb3VyY2VMYW5lSWQiLCJ0YXJnZXRMYW5lSWQiLCJwb3NpdGlvbiIsImJvZHkiLCJwcmV2UHJvcHMiLCJUYXNrQ2FyZCIsInRleHQiLCJTZWxlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FB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QVY7QUFGSixLQURKO0FBTUgsQ0FQTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ0ZBQyxNOzs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7aUNBQ1I7QUFBQSx5QkFDNkIsS0FBS2pILEtBRGxDO0FBQUEsZ0JBQ0c5QixLQURILFVBQ0dBLEtBREg7QUFBQSxnQkFDVWQsT0FEVixVQUNVQSxPQURWO0FBQUEsZ0JBQ21CbUksS0FEbkIsVUFDbUJBLEtBRG5COztBQUVMLG1CQUNJO0FBQUE7QUFBQTtBQUNNckgseUJBQVNBLE1BQU1vSCxHQUFOLENBQVUsVUFBQy9JLElBQUQsRUFBTStFLEVBQU4sRUFBYTtBQUM5QiwyQkFDSTtBQUFBO0FBQUEsMEJBQUssS0FBS0EsRUFBVjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFTL0UsS0FBSytFLEVBQXJCLEVBQXlCLFNBQVM7QUFBQSwyQ0FBS2xFLFFBQVFiLEtBQUsrRSxFQUFiLEVBQWdCaUUsS0FBaEIsQ0FBTDtBQUFBLGlDQUFsQztBQUFnRWhKLGlDQUFLMEQ7QUFBckU7QUFESixxQkFESjtBQUlGLGlCQUxTO0FBRGYsYUFESjtBQVVIOzs7Ozs7a0JBYmdCZ0gsTTs7Ozs7O0FDRnJCLGdEOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7a0JBRWUsNEJBQWdCO0FBQzNCL0csd0JBRDJCO0FBRTNCZCw0QkFGMkI7QUFHM0JpQywwQkFIMkI7QUFJM0JrRDtBQUoyQixDQUFoQixDOzs7Ozs7QUNOZix3Qzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNjIyNjRiOTBiZThkNTFiMTUyYSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHNldEF1dGhUb2tlbiBmcm9tICcuLi8uLi91dGlscy90b2tlbic7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmNvbnN0IFNJR05VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcbmNvbnN0IExPR0lOID0gXCJMT0dJTlwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjoge30sXG4gICAgaXNBdXRoOiBmYWxzZVxufVxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb249e30pPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgU0lHTlVQX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnN0YXR1cztcbiAgICAgICAgY2FzZSBMT0dJTjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnVzZXIsXG4gICAgICAgICAgICAgICAgaXNBdXRoOiAhaXNFbXB0eShhY3Rpb24udXNlcilcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduVXBNb2RhbChib29sKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobW9kYWxCb29sKGJvb2wpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1vZGFsQm9vbChkYXRhKSB7XG4gICAgY29uc3QgbGlzdCA9IHt0eXBlOlNJR05VUF9TVUNDRVNTLCBzdGF0dXM6ZGF0YX07XG4gICAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih1c2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTE9HSU4sXG4gICAgICAgIHVzZXJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICAgICAgc2V0QXV0aFRva2VuKGZhbHNlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2p3dFRva2VuJyk7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luKHt9KSk7XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdXgvbW9kdWxlcy9hdXRoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZm9ybVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LWZvcm1cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDUkVBVEVfVEFCTEVfUkVTVUxUID0gXCJDUkVBVEVfVEFCTEVfUkVTVUxUXCI7XG5jb25zdCBTSE9XX1RBQkxFX1JFU1VMVCA9IFwiU0hPV19UQUJMRV9SRVNVTFRcIjtcbmNvbnN0IE5PX1RBQkxFX1JFU1VMVCA9IFwiTk9fVEFCTEVfUkVTVUxUXCI7XG5cbmNvbnN0IFNIT1dfVVNFUlMgPSBcIlNIT1dfVVNFUlNcIjtcbmNvbnN0IFNIT1dfVVNFUlNfU1VDQ0VTUyA9IFwiU0hPV19VU0VSU19TVUNDRVNTXCI7XG5jb25zdCBTSE9XX1VTRVJTX0VSUk9SID0gXCJTSE9XX1VTRVJTX0VSUk9SXCI7XG5cbmNvbnN0IEFERF9VU0VSID0gXCJBRERfVVNFUlwiO1xuY29uc3QgQUREX1VTRVJfU1VDQ0VTUyA9IFwiQUREX1VTRVJfU1VDQ0VTU1wiO1xuY29uc3QgQUREX1VTRVJfRkFJTCA9IFwiQUREX1VTRVJfRkFJTFwiO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0YWJsZXM6IFtdLFxuICAgIHVzZXJzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCBzdGF0ZT17fSwgYWN0aW9uPXt9ICkgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgQ1JFQVRFX1RBQkxFX1JFU1VMVDpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdWNjZXNzOiBhY3Rpb24uc3VjY2VzcyB9O1xuICAgICAgICBjYXNlIFNIT1dfVEFCTEVfUkVTVUxUOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRhYmxlczogYWN0aW9uLnRhYmxlcyB9O1xuICAgICAgICBjYXNlIE5PX1RBQkxFX1JFU1VMVDpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnI6IGFjdGlvbi5lcnJvcn07XG4gICAgICAgIGNhc2UgU0hPV19VU0VSU19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJzOiBhY3Rpb24udXNlcnN9O1xuICAgICAgICBjYXNlIFNIT1dfVVNFUlNfRVJST1I6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyOiBhY3Rpb24uZXJyIH07XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVXNlcih1c2VySWQsYm9hcmRJZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGVzOiBbQUREX1VTRVIsIEFERF9VU0VSX1NVQ0NFU1MsIEFERF9VU0VSX0ZBSUxdLFxuICAgICAgICBwcm9taXNlOiAoY2xpZW50KSA9PiBjbGllbnQucG9zdChgL2FwaS9ib2FyZHMvYWRkX3VzZXJzYCx7dXNlcklkLGJvYXJkSWR9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtyZXR1cm4gcmVzdWx0O30pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9hcmQodXNlcixuYW1lKXtcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9ib2FyZHMvY3JlYXRlYCx7dXNlcixuYW1lfSkudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGNyZWF0ZUJvYXJkUmVzdWx0KHJlcy5kYXRhLnN1Y2Nlc3MpKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkUmVzdWx0KGJvb2wpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IENSRUFURV9UQUJMRV9SRVNVTFQsXG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Qm9hcmRzKHVzZXJJRCl7XG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9ib2FyZHMvZ2V0X2JvYXJkcz91c2VySUQ9JHt1c2VySUR9YClcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dCb2FyZHNTdWNjZXNzKHJlcy5kYXRhLmJvYXJkcykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dCb2FyZHNGYWlsZWQoZXJyLnJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Qm9hcmRzU3VjY2VzcyhkYXRhKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTSE9XX1RBQkxFX1JFU1VMVCxcbiAgICAgICAgdGFibGVzOiBkYXRhXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Qm9hcmRzRmFpbGVkKGVycil7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTk9fVEFCTEVfUkVTVUxULFxuICAgICAgICBlcnJvcjogZXJyXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1VzZXJzKHVzZXJJZCxib2FyZElkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZXM6IFtTSE9XX1VTRVJTLCBTSE9XX1VTRVJTX1NVQ0NFU1MsIFNIT1dfVVNFUlNfRVJST1JdLFxuICAgICAgICBwcm9taXNlOiAoY2xpZW50KSA9PiBjbGllbnQuZ2V0KGAvYXBpL2JvYXJkcy9nZXRfdXNlcnM/Y3VycmVudElkPSR7dXNlcklkfSZib2FyZElkPSR7Ym9hcmRJZH1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtyZXR1cm4gcmVzdWx0O30pLFxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcmVkdXgvbW9kdWxlcy9ib2FyZHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBIb21lIGZyb20gJy4vSG9tZS9Ib21lJztcbmV4cG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIvSGVhZGVyJztcbmV4cG9ydCBTaWduVXAgZnJvbSAnLi9TaWduVXAvU2lnblVwJztcbmV4cG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luL0xvZ2luJztcbmV4cG9ydCBNYWlucGFnZSBmcm9tICcuL01haW5wYWdlL01haW5wYWdlJztcbmV4cG9ydCBCb2FyZHMgZnJvbSAnLi9Cb2FyZHMvQm9hcmRzJztcbmV4cG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkL0JvYXJkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL3JlZHV4L21vZHVsZXMvYXV0aCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc2VydmVyIGZyb20gJy4uLy4uL3NlcnZlcic7XG5cbmNvbnN0IEF1dGggPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9ib2FyZHNcIj5Cb2FyZHM8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3Bhbj5IZWxsbywge3Byb3BzLnVzZXIudXNlcm5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3Byb3BzLmxvZ291dH0+U2lnbiBPdXQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cblxuQGNvbm5lY3QoXG4gICAgc3RhdGUgPT4gKHtcbiAgICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICAgICAgICBpc0F1dGg6IHN0YXRlLmF1dGguaXNBdXRoXG4gICAgfSksXG4gICAgeyBsb2dvdXQgfVxuKVxuXG5Ad2l0aFJvdXRlclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgbG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FwaS9sb2dpbmApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBpc0F1dGgsIHVzZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qgbm90QXV0aCA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+PExpbmsgdG89XCIvbG9naW5cIj5TaWduIGluPC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj48TGluayB0bz1cIi9zaWdudXBcIj5TaWduIHVwPC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Mb2dvPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICB7IGlzQXV0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8QXV0aCB1c2VyPXt1c2VyfSBsb2dvdXQ9e3RoaXMubG9nb3V0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5vdEF1dGggfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL0hlYWRlci9IZWFkZXIuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBdXRoVG9rZW4odG9rZW4pIHtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRva2VuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ11cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC91dGlscy90b2tlbi5qcyIsIi8vIGFkcmVzcyByZW5kZXJpbmcgZm9yIGRldmVsb3BtZW50L3Byb2R1Y3Rpb25cblxuY29uc3QgZGV2ID0gdHJ1ZTtcbmxldCBzZXJ2ZXI7XG5cbmRldlxuICAgID8gc2VydmVyPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiXG4gICAgOiBzZXJ2ZXI9XCJodHRwczovL3Rhc2stbWFuYWdlci1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9cIjtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvc2VydmVyLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQ1JFQVRFX1RBU0sgPSBcIkNSRUFURV9UQVNLXCI7XG5jb25zdCBDUkVBVEVfVEFTS19TVUNDRVNTID0gXCJDUkVBVEVfVEFTS19TVUNDRVNTXCI7XG5jb25zdCBDUkVBVEVfVEFTS19FUlJPUiA9IFwiQ1JFQVRFX1RBU0tfRVJST1JcIjtcbmNvbnN0IFNIT1dfVEFTS1MgPSBcIlNIT1dfVEFTS1NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCBzdGF0ZT17fSwgYWN0aW9uPXt9ICkgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgQ1JFQVRFX1RBU0s6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgICAgICBjYXNlIENSRUFURV9UQVNLX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHN1Y2Nlc3M6IGFjdGlvbi5zdWNjZXNzfTtcbiAgICAgICAgY2FzZSBDUkVBVEVfVEFTS19FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5lcnJvciB9O1xuICAgICAgICBjYXNlIFNIT1dfVEFTS1M6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGFza3NMaXN0OiBhY3Rpb24udGFza3MgfTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlczogW0NSRUFURV9UQVNLLCBDUkVBVEVfVEFTS19TVUNDRVNTLCBDUkVBVEVfVEFTS19FUlJPUl0sXG4gICAgICAgIHByb21pc2U6IChjbGllbnQpID0+IGNsaWVudC5wb3N0KGAvYXBpL3Rhc2tzL2FkZGAsZGF0YSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7cmV0dXJuIHJlc3VsdDt9KSxcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKGlkKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KGBhcGkvdGFza3Mvc2hvdz9ib2FyZElEPSR7aWR9YCkudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNob3dUYXNrc1N1Y2Nlc3MocmVzKSk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuY29uc3Qgc2hvd1Rhc2tzU3VjY2VzcyA9IHJlcyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0hPV19UQVNLUyxcbiAgICAgICAgdGFza3M6IHJlcy5kYXRhXG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L3JlZHV4L21vZHVsZXMvdGFza3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi9oZWxwZXJzL3JlbmRlcmVyJztcbnZhciBwcm94eSA9IHJlcXVpcmUoJ2h0dHAtcHJveHktbWlkZGxld2FyZScpO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9jbGllbnQvcm9vdC1yZWR1Y2VyJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuXG5cbmFwcC51c2UoY29ycygpKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmIGFwcC51c2UoJy9hcGknLCBwcm94eSh7dGFyZ2V0OiBfX0VOVl9fLmFwaV9zZXJ2ZXIsIGNoYW5nZU9yaWdpbjogdHJ1ZX0pKTtcbmFwcC51c2UoJy8nLChyZXEscmVzKSA9PiB7XG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJlZHVjZXIsXG4gICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICApO1xuICByZXMuc2VuZChyZW5kZXJlcihyZXEsc3RvcmUpKTtcblxufSk7XG5cblxuXG5hcHAuc2V0KCdwb3J0JywgKHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMikpO1xuXG5hcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnbGlzdGVuIG9uIHBvcnQgMzAwMicpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vY2xpZW50L1JvdXRlcnMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcblxuXG5leHBvcnQgZGVmYXVsdCAocmVxLHN0b3JlKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e3t9fT5cbiAgICAgICAgICAgICAgICB7Um91dGVzKHN0b3JlKX1cbiAgICAgICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgPGJhc2UgaHJlZj1cIi9cIiAvPlxuICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInJvb3RcIj4ke2NvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCA+XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5JTklUSUFMX1NUQVRFID0gJHtKU09OLnN0cmluZ2lmeShzdG9yZS5nZXRTdGF0ZSgpKX1cbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImJ1bmRsZS5qc1wiPjwvc2NyaXB0PiBcbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPmBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIb21lLCBTaWduVXAsIExvZ2luLCBCb2FyZCwgQm9hcmRzIH0gZnJvbSAnLi9jb250YWluZXJzL2luZGV4JztcbmltcG9ydCB7IFN3aXRjaCAsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29udGFpbmVycy9IZWFkZXIvSGVhZGVyJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IHtcbiAgICAgICAgY29uc3QgeyBhdXRoOiB7IGlzQXV0aCB9fSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgY29uc3QgUHJpdmF0ZVJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgICAgcmVuZGVyPXtwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICBpc0F1dGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCJsb2dpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHsgZnJvbTogcHJvcHMubG9jYXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zaWdudXBcIiBjb21wb25lbnQ9e1NpZ25VcH0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICAgICAgICAgICAgPFN3aXRjaCA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIHBhdGg9XCIvYm9hcmRzXCIgZXhhY3QgY29tcG9uZW50PXtCb2FyZHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcml2YXRlUm91dGUgcGF0aD1cIi9ib2FyZHMvOmlkXCIgY29tcG9uZW50PXtCb2FyZH0gLz5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9Sb3V0ZXJzLmpzIiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuQGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBpc0F1dGg6c3RhdGUuYXV0aC5pc0F1dGhcbn0pLCB7fSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAhdGhpcy5wcm9wcy5pc0F1dGggJiYgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgSG9tZSBwYWdlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvY29udGFpbmVycy9Ib21lL0hvbWUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFbXB0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9pc0VtcHR5XCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZWR1eEZvcm0sIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgc2lnblVwTW9kYWwgfSBmcm9tICcuLi8uLi9yZWR1eC9tb2R1bGVzL2F1dGgnO1xuXG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICAgIGlmKCF2YWx1ZXMuZnVsbG5hbWUpe1xuICAgICAgICBlcnJvcnMuZnVsbG5hbWUgPSBcIlJlcXVpcmVkXCJcbiAgICB9IGVsc2UgaWYgKHZhbHVlcy5mdWxsbmFtZS5sZW5ndGggPCA3KSB7XG4gICAgICAgIGVycm9ycy5mdWxsbmFtZSA9IFwiVG9vIHNob3J0IGZ1bGwgbmFtZVwiXG4gICAgfVxuXG4gICAgaWYoIXZhbHVlcy51c2VybmFtZSl7XG4gICAgICAgIGVycm9ycy51c2VybmFtZSA9IFwiUmVxdWlyZWRcIlxuICAgIH0gZWxzZSBpZiAodmFsdWVzLnVzZXJuYW1lLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgZXJyb3JzLnVzZXJuYW1lID0gXCJUb28gc2hvcnQgdXNlcm5hbWVcIlxuICAgIH1cblxuICAgIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgICAgIGVycm9ycy5lbWFpbCA9ICdSZXF1aXJlZCdcbiAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlcy5lbWFpbCkpIHtcbiAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcydcbiAgICB9XG5cbiAgICBpZighdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdSZXF1aXJlZCdcbiAgICB9IGVsc2UgaWYgKHZhbHVlcy5wYXNzd29yZC5sZW5ndGggPCA3KSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwiVG9vIHNob3J0IHBhc3N3b3JkXCJcbiAgICB9XG5cbiAgICBpZighdmFsdWVzLnBhc3N3b3JkQ2hlY2spIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkQ2hlY2sgPSAnUmVxdWlyZWQnXG4gICAgfSBlbHNlIGlmKHZhbHVlcy5wYXNzd29yZENoZWNrICE9PSB2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkQ2hlY2sgPSAnUGFzc3dvcmRzIG5lZWQgdG8gYmUgaWRlbnRpY2FsJ1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG59O1xuXG5jb25zdCByZW5kZXJGaWVsZCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5pbnB1dH0gcGxhY2Vob2xkZXI9e2xhYmVsfSB0eXBlPXt0eXBlfSAvPlxuICAgICAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4+e2Vycm9yfTwvc3Bhbj59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuQHJlZHV4Rm9ybSh7XG4gICAgZm9ybToncmVnaXN0ZXInLFxuICAgIHZhbGlkYXRlXG59LCBzdGF0ZSA9PiAoe30pKVxuXG5AY29ubmVjdChcbiAgICBzdGF0ZSA9PiAoe30pLFxuICAgIHsgc2lnblVwTW9kYWwgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduVXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBzdWJtaXRFcnJvcjogZmFsc2UsXG4gICAgICAgIGVycm9yczoge31cbiAgICB9O1xuXG4gICAgaGFuZGxlU2lnblVwID0gdmFsdWVzID0+IHtcbiAgICAgICAgYXhpb3MucG9zdChgL2FwaS9zaWdudXBgLHZhbHVlcylcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCFyZXMuZGF0YS5lcnJvcil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2lnblVwTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGVyci5yZXNwb25zZS5kYXRhICYmIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnM6ZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7ICh0aGlzLnN1Ym1pdEVycm9yICE9PSBmYWxzZSkgJiYgPGRpdj57dGhpcy5zdGF0ZS5zdWJtaXRFcnJvcn08L2Rpdj4gfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZ1bGxuYW1lXCI+RnVsbCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZnVsbG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInVzZXJuYW1lXCIgY29tcG9uZW50PXtyZW5kZXJGaWVsZH0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnJvcnMudXNlcm5hbWUgJiYgPGRpdj57ZXJyb3JzLnVzZXJuYW1lfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIGNvbXBvbmVudD17cmVuZGVyRmllbGR9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3JzLmVtYWlsICYmIDxkaXY+e2Vycm9ycy5lbWFpbH08L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9e3JlbmRlckZpZWxkfSB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZENoZWNrXCI+Q29uZmlybSB5b3VyIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRDaGVja1wiIGNvbXBvbmVudD17cmVuZGVyRmllbGR9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIEFjY291bnRcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTaWduVXApfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL1NpZ25VcC9TaWduVXAuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vLi4vcmVkdXgvbW9kdWxlcy9hdXRoJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9Mb2dpbkZvcm0nO1xuXG5AY29ubmVjdChcbiAgICBzdGF0ZT0+KHtcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6IHN0YXRlLmF1dGguc2lnblVwXG4gICAgfSksXG4gICAge2xvZ2lufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdWNjZXNzTWVzc2FnZSwgaGlzdG9yeSwgbG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHsgc3VjY2Vzc01lc3NhZ2UgPT09IHRydWUgJiYgPGRpdj5Zb3VgcmUgc3VjY2Vzc2Z1bGx5IHJlZ2lzdHJlZCwgbG9naW48L2Rpdj59XG4gICAgICAgICAgICAgICAgPExvZ2luRm9ybSBoaXN0b3J5PXtoaXN0b3J5fSBsb2dpbj17bG9naW59Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG4vLyBhbnRhcmVzMTFcbi8vIG1vZGVybjExXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL0xvZ2luL0xvZ2luLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSwgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc2VydmVyIGZyb20gJy4uLy4uL3NlcnZlcic7XG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gJy4uLy4uL3V0aWxzL3Rva2VuJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuXG4gICAgaWYoIXZhbHVlcy51c2VybmFtZSl7XG4gICAgICAgIGVycm9ycy51c2VybmFtZSA9IFwiUmVxdWlyZWRcIlxuICAgIH0gZWxzZSBpZiAodmFsdWVzLnVzZXJuYW1lLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgZXJyb3JzLnVzZXJuYW1lID0gXCJUb28gc2hvcnQgdXNlcm5hbWUgb3IgZW1haWxcIlxuICAgIH1cblxuICAgIGlmKCF2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1JlcXVpcmVkJ1xuICAgIH0gZWxzZSBpZiAodmFsdWVzLnBhc3N3b3JkLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gXCJUb28gc2hvcnQgcGFzc3dvcmRcIlxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG59O1xuXG5jb25zdCByZW5kZXJGaWVsZCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5pbnB1dH0gcGxhY2Vob2xkZXI9e2xhYmVsfSB0eXBlPXt0eXBlfSAvPlxuICAgICAgICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4+e2Vycm9yfTwvc3Bhbj59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuQHJlZHV4Rm9ybSh7XG4gICAgZm9ybTonbG9naW4nLFxuICAgIHZhbGlkYXRlXG59LCBzdGF0ZSA9PiAoe30pKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBzdWJtaXRFcnJvcjogZmFsc2UsXG4gICAgICAgIGVycm9yczoge31cbiAgICB9O1xuXG4gICAgaGFuZGxlU2lnblVwID0gdmFsdWVzID0+IHtcbiAgICAgICAgYXhpb3MucG9zdChgL2FwaS9sb2dpbmAsdmFsdWVzKS50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgICAgIGlmKCFyZXMuZGF0YS5lcnJvcil7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dFRva2VuJywgcmVzLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIHNldEF1dGhUb2tlbihyZXMuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dpbihqd3QuZGVjb2RlKHJlcy5kYXRhLnRva2VuKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnM6ZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzIH0pXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInVzZXJuYW1lXCIgY29tcG9uZW50PXtyZW5kZXJGaWVsZH0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9e3JlbmRlckZpZWxkfSB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZVNpZ25VcCl9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IGVycm9ycyAmJiA8ZGl2PntlcnJvcnMuZm9ybX08L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvTG9naW4vTG9naW5Gb3JtLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianNvbndlYnRva2VuXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5wYWdlIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIG1haW4gcGFnZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb250YWluZXJzL01haW5wYWdlL01haW5wYWdlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUJvYXJkLCBzaG93Qm9hcmRzIH0gZnJvbSAnLi4vLi4vcmVkdXgvbW9kdWxlcy9ib2FyZHMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuQGNvbm5lY3QoIHN0YXRlPT4oe1xuICAgIHVzZXJJZDogc3RhdGUuYXV0aC51c2VyLmlkLFxuICAgIGJvYXJkQ3JlYXRlZDogc3RhdGUuYm9hcmRzLnN1Y2Nlc3MsXG4gICAgYm9hcmRzOiBzdGF0ZS5ib2FyZHMudGFibGVzXG59KSx7IGNyZWF0ZUJvYXJkLCBzaG93Qm9hcmRzIH0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjcmVhdGVNb2RhbDogZmFsc2UsXG4gICAgICAgIGJvYXJkTmFtZTogJydcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Qm9hcmRzKHRoaXMucHJvcHMudXNlcklkKTtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVCb2FyZCh0aGlzLnByb3BzLnVzZXJJZCx0aGlzLnN0YXRlLmJvYXJkTmFtZSk7XG4gICAgICAgIHRoaXMucHJvcHMuc2hvd0JvYXJkcyh0aGlzLnByb3BzLnVzZXJJZCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGNyZWF0ZU1vZGFsIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGJvYXJkQ3JlYXRlZCwgYm9hcmRzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4ge3RoaXMuc2V0U3RhdGUoeyBjcmVhdGVNb2RhbDohY3JlYXRlTW9kYWwgfSl9fT5DcmVhdGUgbmV3IGJvYXJkPC9wPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlTW9kYWwgJiYgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQm9hcmQgTmFtZVwiIG9uQ2hhbmdlPXsgZSA9PiB0aGlzLnNldFN0YXRlKHsgYm9hcmROYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0vPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmNyZWF0ZUJvYXJkfT5DcmVhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgIHsgYm9hcmRDcmVhdGVkICYmIDxkaXY+Qm9hcmQgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgPC9kaXY+IH1cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPllvdXIgYm9hcmRzOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYm9hcmRzICYmIGJvYXJkcy5tYXAoIChib2FyZCxrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YGJvYXJkcy8ke2JvYXJkLmlkfWB9IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2JvYXJkLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntgQ3JlYXRlZCBhdCAke2JvYXJkLnVwZGF0ZWRfYXR9YH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvY29udGFpbmVycy9Cb2FyZHMvQm9hcmRzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrLCBzaG93VGFza3MgfSBmcm9tICcuLi8uLi9yZWR1eC9tb2R1bGVzL3Rhc2tzJztcbmltcG9ydCB7IHNob3dVc2VycywgYWRkVXNlciB9IGZyb20gJy4uLy4uL3JlZHV4L21vZHVsZXMvYm9hcmRzJztcbmltcG9ydCBLYW5iYW4gZnJvbSAncmVhY3QtdHJlbGxvJ1xuaW1wb3J0IHsgVGFza0NhcmQgfSBmcm9tICcuL1Rhc2tDYXJkJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5kZXguanMnO1xuXG5AY29ubmVjdCggc3RhdGUgPT4gKHtcbiAgICB0YXNrczogc3RhdGUudGFza3MsXG4gICAgdXNlcklkOiBzdGF0ZS5hdXRoLnVzZXIuaWQsXG4gICAgdXNlcnM6IHN0YXRlLmJvYXJkcy51c2Vyc1xufSkse2NyZWF0ZVRhc2ssIHNob3dUYXNrcywgc2hvd1VzZXJzLCBhZGRVc2VyfSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmFkZGluZ1Rhc2sgPSBmYWxzZTtcbiAgICB9XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgaXNzdWU6ICcnLFxuICAgICAgICB3YXJuaW5nOiBmYWxzZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFuZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbGFuZTEnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1RvZG8nLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJzAnLFxuICAgICAgICAgICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdsYW5lMicsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSW4gcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJzAnLFxuICAgICAgICAgICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdsYW5lMycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUUEnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJzAnLFxuICAgICAgICAgICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdsYW5lNCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRG9uZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhZGRUYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRpdGxlLGlzc3VlLCB3YXJuaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZih0aXRsZS5sZW5ndGggPiA0ICYmIGlzc3VlLmxlbmd0aCA+IDQgKXtcbiAgICAgICAgICAgIHRoaXMuYWRkaW5nVGFzayA9IHRydWU7XG4gICAgICAgICAgICB3YXJuaW5nICYmIHRoaXMuc2V0U3RhdGUoeyB3YXJuaW5nOmZhbHNlIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVUYXNrKHsgdGl0bGU6dGl0bGUsIGlzc3VlOmlzc3VlLCBib2FyZElkOnRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2FybmluZzp0cnVlIH0pIDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93VGFza3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgICAgICB0aGlzLnByb3BzLnNob3dVc2Vycyh0aGlzLnByb3BzLnVzZXJJZCwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xuICAgICAgICB0aGlzLmFkZFRhc2tzVG9MaW5lKHRoaXMucHJvcHMudGFza3MpO1xuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcbiAgICAgICAgY29uc3QgeyB0YXNrcywgc2hvd1Rhc2tzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiggcHJldlByb3BzLnRhc2tzLnRhc2tzTGlzdCAhPT0gdGFza3MudGFza3NMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmFkZFRhc2tzVG9MaW5lKHRhc2tzLnRhc2tzTGlzdCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuYWRkaW5nVGFzayAmJiAhdGFza3MubG9hZGluZyAmJiB0YXNrcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZGluZ1Rhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHNob3dUYXNrcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGFkZFRhc2tzVG9MaW5lID0gdGFza3MgPT4ge1xuICAgICAgICBsZXQgY2FyZHMgPSBbW10sW10sW10sW11dO1xuICAgICAgICBpZih0YXNrcyAmJiB0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXNrcy5tYXAoIHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2suaWQgPSB0YXNrLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGFzay5sYW5lSWQgPSB0aGlzLnN0YXRlLmRhdGEubGFuZXNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgaWYodGFzay5zdGF0ZSA9PT0gXCJsYW5lMVwiKXtcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNbMF0ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suc3RhdGUgPT09IFwibGFuZTJcIikge1xuICAgICAgICAgICAgICAgICAgICBjYXJkc1sxXS5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5zdGF0ZSA9PT0gXCJsYW5lM1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRzWzJdLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLnN0YXRlID09PSBcImxhbmU0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNbM10ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudGFza3NDb25zdHJ1Y3RvcihjYXJkcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGFza3NDb25zdHJ1Y3RvciA9IGNhcmRzID0+IHtcbiAgICAgICAgbGV0IGxhbmVzID0ge1xuICAgICAgICAgICAgbGFuZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbGFuZTEnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1RvZG8nLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogY2FyZHNbMF0ubGVuZ3RoLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzOiBjYXJkc1swXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2xhbmUyJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdJbiBwcm9ncmVzcycsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjYXJkc1sxXS5sZW5ndGgudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZHM6IGNhcmRzWzFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbGFuZTMnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1FBJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGNhcmRzWzJdLmxlbmd0aC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBjYXJkczogY2FyZHNbMl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdsYW5lNCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRG9uZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjYXJkc1szXS5sZW5ndGgudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZHM6IGNhcmRzWzNdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOmxhbmVzfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZURydWcgPSAoY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCwgcG9zaXRpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2FyZElkLCBzb3VyY2VMYW5lSWQsIHRhcmdldExhbmVJZCwgcG9zaXRpb24pO1xuICAgICAgICBheGlvcy5wb3N0KCdhcGkvdGFza3MvY2hhbmdlX2xhbmUnLHtjYXJkSWQsIHNvdXJjZUxhbmVJZCwgdGFyZ2V0TGFuZUlkfSkudGhlbiggcmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IHRhc2tzLCB1c2VycywgYWRkVXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BZGQgdGFzayA8c3Bhbj4rPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHVwLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17IGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOmUudGFyZ2V0LnZhbHVlIH0pfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXAtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPklzc3VlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17IGUgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzc3VlOmUudGFyZ2V0LnZhbHVlIH0pfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRUYXNrfT5BZGQgdGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWRkIHBlb3BsZSA8c3Bhbj4rPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgdXNlcnM9e3VzZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFVzZXI9e2FkZFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEthbmJhbiBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNhcmRMYXlvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYWdFbmQ9e3RoaXMuaGFuZGxlRHJ1Z30+XG4gICAgICAgICAgICAgICAgICAgIDxUYXNrQ2FyZC8+XG4gICAgICAgICAgICAgICAgPC9LYW5iYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQm9hcmQvQm9hcmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmVsbG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC10cmVsbG9cIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFRhc2tDYXJkID0gcHJvcHMgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPntwcm9wcy5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQm9hcmQvVGFza0NhcmQuanMiLCJleHBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0L1NlbGVjdCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHVzZXJzLCBhZGRVc2VyLCBib2FyZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7IHVzZXJzICYmIHVzZXJzLm1hcCgodXNlcixpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgdXNlci1pZD17dXNlci5pZH0gb25DbGljaz17KCk9PiBhZGRVc2VyKHVzZXIuaWQsYm9hcmQpfT57dXNlci51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU2VsZWN0L1NlbGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhdXRoIGZyb20gJy4vcmVkdXgvbW9kdWxlcy9hdXRoJztcbmltcG9ydCBib2FyZHMgZnJvbSAnLi9yZWR1eC9tb2R1bGVzL2JvYXJkcyc7XG5pbXBvcnQgdGFza3MgZnJvbSAnLi9yZWR1eC9tb2R1bGVzL3Rhc2tzJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGF1dGgsXG4gICAgYm9hcmRzLFxuICAgIHRhc2tzLFxuICAgIGZvcm06IGZvcm1SZWR1Y2VyXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcm9vdC1yZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yc1wiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLXByb3h5LW1pZGRsZXdhcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwLXByb3h5LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==