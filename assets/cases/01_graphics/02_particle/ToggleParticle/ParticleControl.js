
cc.Class({
    extends: cc.Component,

    properties: {
        particle: cc.Node
    },

    toogleParticlePlay: function() {
        var myParticle = this.particle.getComponent(cc.ParticleSystem);
        if (myParticle.particleCount > 0) {
            myParticle.stopSystem();
        } else {
            myParticle.resetSystem();
        }
    }
});
