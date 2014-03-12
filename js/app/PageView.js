define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');

    var HeaderView      = require('./HeaderView');

    function PageView() {
        View.apply(this, arguments);

        _createHeaderView.call(this);

        this._eventInput.pipe(this._eventOutput);
    }

    PageView.prototype = Object.create(View.prototype);
    PageView.prototype.constructor = PageView;

    function _createHeaderView() {
        this.headerView = new HeaderView();

        this.headerView.pipe(this);

        this._add(this.headerView);
    }

    module.exports = PageView;
});
