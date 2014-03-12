define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');

    var HeaderView      = require('./HeaderView');

    function PageView() {
        View.apply(this, arguments);

        _createHeaderView.call(this);
        _createBody.call(this);

        this._eventInput.pipe(this._eventOutput);
    }

    PageView.prototype = Object.create(View.prototype);
    PageView.prototype.constructor = PageView;

    function _createHeaderView() {
        this.headerView = new HeaderView();

        this.headerView.pipe(this);

        this._add(this.headerView);
    }

    function _createBody() {
        this.bodySurface = new Surface({
            size: [320, 504],
            content: '<img width="320" src="../img/body.png"/>'
        });

        this.bodyModifier = new Modifier({
            transform: Transform.translate(0, 44, 0)
        });

        this._add(this.bodyModifier).add(this.bodySurface);
    }

    module.exports = PageView;
});
