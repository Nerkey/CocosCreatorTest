
cc.Class({
    extends: cc.Component,

    properties: {
        posAR: cc.Label,
        pos: cc.Label,
        goldAR: cc.Node,
        gold: cc.Node
    },

    onLoad: function() {
        var sheep = this.goldAR.parent;
        var sheep2 = this.goldAR.parent;
        var posAR = sheep.convertToWorldSpaceAR(cc.v2(this.goldAR.x, this.goldAR.y));
        this.posAR.string = '(' + parseInt(posAR.x) + ', ' + parseInt(posAR.y) + ')';

        sheep = this.goldAR.parent;
        var pos = sheep.convertToWorldSpace(cc.v2(this.goldAR.x, this.goldAR.y));
        this.pos.string = '(' + parseInt(pos.x) + ', ' + parseInt(pos.y) + ')';
    }
});
