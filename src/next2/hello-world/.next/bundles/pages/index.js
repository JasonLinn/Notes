
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(605);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(613);

var _link2 = _interopRequireDefault(_link);

var _Avatars = __webpack_require__(616);

var _Avatars2 = _interopRequireDefault(_Avatars);

var _Button = __webpack_require__(570);

var _Button2 = _interopRequireDefault(_Button);

var _FontIcons = __webpack_require__(620);

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _ListItem = __webpack_require__(572);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _NavigationDrawers = __webpack_require__(629);

var _NavigationDrawers2 = _interopRequireDefault(_NavigationDrawers);

var _SelectFields = __webpack_require__(632);

var _SelectFields2 = _interopRequireDefault(_SelectFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jasonlinn/Notes/src/next2/hello-world/pages/index.js?entry';


var avatarSrc = 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png';

var drawerHeaderChildren = [_react2.default.createElement(_Avatars2.default, {
  key: avatarSrc,
  src: avatarSrc,
  role: 'presentation',
  iconSized: true,
  style: { alignSelf: 'center', marginLeft: 16, marginRight: 16, flexShrink: 0 },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}), _react2.default.createElement(_SelectFields2.default, {
  id: 'account-switcher',
  defaultValue: 'Jonathan',
  menuItems: ['Jonathan', 'Fred'],
  key: 'account-switcher',
  position: _SelectFields2.default.Positions.BELOW,
  className: 'md-select-field--toolbar',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  }
})];

var NavigationLink = function (_PureComponent) {
  (0, _inherits3.default)(NavigationLink, _PureComponent);

  function NavigationLink() {
    (0, _classCallCheck3.default)(this, NavigationLink);

    return (0, _possibleConstructorReturn3.default)(this, (NavigationLink.__proto__ || (0, _getPrototypeOf2.default)(NavigationLink)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavigationLink, [{
    key: 'render',

    // NOTE: Don't try using Stateless (function) component here. `ref` is
    // required by React-MD/AccessibleFakeButton, but Stateless components
    // don't have one by design:
    // https://github.com/facebook/react/issues/4936
    value: function render() {
      var _props2 = this.props,
          href = _props2.href,
          as = _props2.as,
          children = _props2.children,
          _props = (0, _objectWithoutProperties3.default)(_props2, ['href', 'as', 'children']);

      return _react2.default.createElement('div', (0, _extends3.default)({}, _props, { style: { padding: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_link2.default, { href: href, as: as, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('a', { className: 'md-list-tile md-list-tile--mini', style: { width: '100%', overflow: 'hidden' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, children)));
    }
  }]);

  return NavigationLink;
}(_react.PureComponent);

exports.default = function () {
  var closeButton = _react2.default.createElement(_Button2.default, {
    icon: true,
    tooltipLabel: 'Close the interactive demo',
    tooltipDelay: 150,
    tooltipPosition: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, 'close');

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/react-md.light_blue-yellow.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500', __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons', __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  })), _react2.default.createElement(_NavigationDrawers2.default, {
    navItems: [_react2.default.createElement(_ListItem2.default, {
      key: '0',
      component: NavigationLink,
      href: '/',
      leftIcon: _react2.default.createElement(_FontIcons2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'inbox'),
      tileClassName: 'md-list-tile--mini',
      primaryText: 'Root',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    }), _react2.default.createElement(_ListItem2.default, {
      key: '1',
      component: NavigationLink,
      href: '/non-existing-page',
      leftIcon: _react2.default.createElement(_FontIcons2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'star'),
      tileClassName: 'md-list-tile--mini',
      primaryText: '404 page',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    })],
    contentClassName: 'md-grid',
    drawerHeaderChildren: drawerHeaderChildren,
    mobileDrawerType: _NavigationDrawers2.default.DrawerTypes.TEMPORARY_MINI,
    tabletDrawerType: _NavigationDrawers2.default.DrawerTypes.PERSISTENT_MINI,
    desktopDrawerType: _NavigationDrawers2.default.DrawerTypes.PERSISTENT_MINI,
    toolbarTitle: 'Hello, World!',
    toolbarActions: closeButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, 'Hello Next.js!')));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jasonlinn/Notes/src/next2/hello-world/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jasonlinn/Notes/src/next2/hello-world/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(603);


/***/ })

},[662]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzNjNmUxNzEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEF2YXRhciBmcm9tICdyZWFjdC1tZC9saWIvQXZhdGFycydcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtbWQvbGliL0J1dHRvbnMvQnV0dG9uJ1xuaW1wb3J0IEZvbnRJY29uIGZyb20gJ3JlYWN0LW1kL2xpYi9Gb250SWNvbnMnXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAncmVhY3QtbWQvbGliL0xpc3RzL0xpc3RJdGVtJ1xuaW1wb3J0IE5hdmlnYXRpb25EcmF3ZXIgZnJvbSAncmVhY3QtbWQvbGliL05hdmlnYXRpb25EcmF3ZXJzJ1xuaW1wb3J0IFNlbGVjdEZpZWxkIGZyb20gJ3JlYWN0LW1kL2xpYi9TZWxlY3RGaWVsZHMnXG5cbmNvbnN0IGF2YXRhclNyYyA9ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvMTMwNDEvMTk2ODYyNTAvOTcxYmY3ZjgtOWFjMC0xMWU2LTk3NWMtMTg4ZGVmZDgyZGYxLnBuZydcblxuY29uc3QgZHJhd2VySGVhZGVyQ2hpbGRyZW4gPSBbXG4gIDxBdmF0YXJcbiAgICBrZXk9e2F2YXRhclNyY31cbiAgICBzcmM9e2F2YXRhclNyY31cbiAgICByb2xlPSdwcmVzZW50YXRpb24nXG4gICAgaWNvblNpemVkXG4gICAgc3R5bGU9e3sgYWxpZ25TZWxmOiAnY2VudGVyJywgbWFyZ2luTGVmdDogMTYsIG1hcmdpblJpZ2h0OiAxNiwgZmxleFNocmluazogMCB9fVxuICAvPixcbiAgPFNlbGVjdEZpZWxkXG4gICAgaWQ9J2FjY291bnQtc3dpdGNoZXInXG4gICAgZGVmYXVsdFZhbHVlPSdKb25hdGhhbidcbiAgICBtZW51SXRlbXM9e1snSm9uYXRoYW4nLCAnRnJlZCddfVxuICAgIGtleT0nYWNjb3VudC1zd2l0Y2hlcidcbiAgICBwb3NpdGlvbj17U2VsZWN0RmllbGQuUG9zaXRpb25zLkJFTE9XfVxuICAgIGNsYXNzTmFtZT0nbWQtc2VsZWN0LWZpZWxkLS10b29sYmFyJ1xuICAvPlxuXVxuXG5jbGFzcyBOYXZpZ2F0aW9uTGluayBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAvLyBOT1RFOiBEb24ndCB0cnkgdXNpbmcgU3RhdGVsZXNzIChmdW5jdGlvbikgY29tcG9uZW50IGhlcmUuIGByZWZgIGlzXG4gIC8vIHJlcXVpcmVkIGJ5IFJlYWN0LU1EL0FjY2Vzc2libGVGYWtlQnV0dG9uLCBidXQgU3RhdGVsZXNzIGNvbXBvbmVudHNcbiAgLy8gZG9uJ3QgaGF2ZSBvbmUgYnkgZGVzaWduOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzQ5MzZcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGhyZWYsIGFzLCBjaGlsZHJlbiwgLi4uX3Byb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgey4uLl9wcm9wc30gc3R5bGU9e3twYWRkaW5nOiAwfX0+XG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGFzPXthc30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdtZC1saXN0LXRpbGUgbWQtbGlzdC10aWxlLS1taW5pJyBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG92ZXJmbG93OiAnaGlkZGVuJ319PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSAoXG4gICAgPEJ1dHRvblxuICAgICAgaWNvblxuICAgICAgdG9vbHRpcExhYmVsPSdDbG9zZSB0aGUgaW50ZXJhY3RpdmUgZGVtbydcbiAgICAgIHRvb2x0aXBEZWxheT17MTUwfVxuICAgICAgdG9vbHRpcFBvc2l0aW9uPSdsZWZ0J1xuICAgID5cbiAgICAgIGNsb3NlXG4gICAgPC9CdXR0b24+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvc3RhdGljL3JlYWN0LW1kLmxpZ2h0X2JsdWUteWVsbG93Lm1pbi5jc3MnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCcgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2aWdhdGlvbkRyYXdlclxuICAgICAgICBuYXZJdGVtcz17W1xuICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAga2V5PScwJ1xuICAgICAgICAgICAgY29tcG9uZW50PXtOYXZpZ2F0aW9uTGlua31cbiAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICBsZWZ0SWNvbj17PEZvbnRJY29uPmluYm94PC9Gb250SWNvbj59XG4gICAgICAgICAgICB0aWxlQ2xhc3NOYW1lPSdtZC1saXN0LXRpbGUtLW1pbmknXG4gICAgICAgICAgICBwcmltYXJ5VGV4dD17J1Jvb3QnfVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAga2V5PScxJ1xuICAgICAgICAgICAgY29tcG9uZW50PXtOYXZpZ2F0aW9uTGlua31cbiAgICAgICAgICAgIGhyZWY9Jy9ub24tZXhpc3RpbmctcGFnZSdcbiAgICAgICAgICAgIGxlZnRJY29uPXs8Rm9udEljb24+c3RhcjwvRm9udEljb24+fVxuICAgICAgICAgICAgdGlsZUNsYXNzTmFtZT0nbWQtbGlzdC10aWxlLS1taW5pJ1xuICAgICAgICAgICAgcHJpbWFyeVRleHQ9eyc0MDQgcGFnZSd9XG4gICAgICAgICAgLz5cbiAgICAgICAgXX1cbiAgICAgICAgY29udGVudENsYXNzTmFtZT0nbWQtZ3JpZCdcbiAgICAgICAgZHJhd2VySGVhZGVyQ2hpbGRyZW49e2RyYXdlckhlYWRlckNoaWxkcmVufVxuICAgICAgICBtb2JpbGVEcmF3ZXJUeXBlPXtOYXZpZ2F0aW9uRHJhd2VyLkRyYXdlclR5cGVzLlRFTVBPUkFSWV9NSU5JfVxuICAgICAgICB0YWJsZXREcmF3ZXJUeXBlPXtOYXZpZ2F0aW9uRHJhd2VyLkRyYXdlclR5cGVzLlBFUlNJU1RFTlRfTUlOSX1cbiAgICAgICAgZGVza3RvcERyYXdlclR5cGU9e05hdmlnYXRpb25EcmF3ZXIuRHJhd2VyVHlwZXMuUEVSU0lTVEVOVF9NSU5JfVxuICAgICAgICB0b29sYmFyVGl0bGU9J0hlbGxvLCBXb3JsZCEnXG4gICAgICAgIHRvb2xiYXJBY3Rpb25zPXtjbG9zZUJ1dHRvbn1cbiAgICAgID5cbiAgICAgICAgPGgxPkhlbGxvIE5leHQuanMhPC9oMT5cbiAgICAgIDwvTmF2aWdhdGlvbkRyYXdlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBOztBQU5BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFTQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBOztBQU5BO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBOztBQU5BO0FBU0E7QUFUQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBekJBO0FBMkJBO0FBM0JBO0FBQ0E7O0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBOUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        