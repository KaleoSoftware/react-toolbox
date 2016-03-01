'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Input: {
    displayName: 'Input'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'components/input/Input.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'components/input/Input.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var Input = _wrapComponent('Input')((_temp2 = _class = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Input)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleChange = function (event) {
      if (_this.props.onChange) _this.props.onChange(event.target.value, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'renderInput',
    value: function renderInput() {
      var _props = this.props;
      var multiline = _props.multiline;
      var value = _props.value;

      var others = _objectWithoutProperties(_props, ['multiline', 'value']);

      var className = (0, _classnames2.default)(_style2.default.input, _defineProperty({}, _style2.default.filled, value));

      return _react3.default.createElement(multiline ? 'textarea' : 'input', _extends({}, others, {
        className: className,
        onChange: this.handleChange,
        ref: 'input',
        role: 'input',
        value: value
      }));
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.refs.input.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.refs.input.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _ClassNames3;

      var _props2 = this.props;
      var children = _props2.children;
      var disabled = _props2.disabled;
      var error = _props2.error;
      var floating = _props2.floating;
      var icon = _props2.icon;
      var labelText = _props2.label;
      var maxLength = _props2.maxLength;
      var multiline = _props2.multiline;
      var type = _props2.type;
      var value = _props2.value;

      var others = _objectWithoutProperties(_props2, ['children', 'disabled', 'error', 'floating', 'icon', 'label', 'maxLength', 'multiline', 'type', 'value']);

      var length = maxLength && value ? value.length : 0;
      var labelClassName = (0, _classnames2.default)(_style2.default.label, _defineProperty({}, _style2.default.fixed, !floating));

      var className = (0, _classnames2.default)(_style2.default.root, (_ClassNames3 = {}, _defineProperty(_ClassNames3, _style2.default.disabled, disabled), _defineProperty(_ClassNames3, _style2.default.errored, error), _defineProperty(_ClassNames3, _style2.default.hidden, type === 'hidden'), _defineProperty(_ClassNames3, _style2.default.withIcon, icon), _ClassNames3), this.props.className);

      var InputElement = _react3.default.createElement(multiline ? 'textarea' : 'input', _extends({}, others, {
        className: (0, _classnames2.default)(_style2.default.input, _defineProperty({}, _style2.default.filled, value)),
        onChange: this.handleChange,
        ref: 'input',
        role: 'input',
        disabled: disabled,
        type: type,
        value: value,
        maxLength: maxLength
      }));

      return _react3.default.createElement(
        'div',
        { 'data-react-toolbox': 'input', className: className },
        InputElement,
        icon ? _react3.default.createElement(_font_icon2.default, { className: _style2.default.icon, value: icon }) : null,
        _react3.default.createElement('span', { className: _style2.default.bar }),
        labelText ? _react3.default.createElement(
          'label',
          { className: labelClassName },
          labelText
        ) : null,
        error ? _react3.default.createElement(
          'span',
          { className: _style2.default.error },
          error
        ) : null,
        maxLength ? _react3.default.createElement(
          'span',
          { className: _style2.default.counter },
          length,
          '/',
          maxLength
        ) : null,
        children
      );
    }
  }]);

  return Input;
}(_react3.default.Component), _class.propTypes = {
  children: _react3.default.PropTypes.any,
  className: _react3.default.PropTypes.string,
  disabled: _react3.default.PropTypes.bool,
  error: _react3.default.PropTypes.node,
  floating: _react3.default.PropTypes.bool,
  icon: _react3.default.PropTypes.any,
  label: _react3.default.PropTypes.string,
  maxLength: _react3.default.PropTypes.number,
  multiline: _react3.default.PropTypes.bool,
  onBlur: _react3.default.PropTypes.func,
  onChange: _react3.default.PropTypes.func,
  onFocus: _react3.default.PropTypes.func,
  onKeyPress: _react3.default.PropTypes.func,
  required: _react3.default.PropTypes.bool,
  type: _react3.default.PropTypes.string,
  value: _react3.default.PropTypes.any
}, _class.defaultProps = {
  className: '',
  disabled: false,
  floating: true,
  multiline: false,
  required: false,
  type: 'text'
}, _temp2));

exports.default = Input;