const VERSION = {
    major: 5,
    minor: 9,
    patch: 35,
    build: '202605151533',
    full: function() {
        return `v${this.major}.${this.minor}.${this.patch}`;
    },
    fullWithBuild: function() {
        return `v${this.major}.${this.minor}.${this.patch} ${this.build}`;
    },
    npmVersion: function() {
        return `${this.major}.${this.minor}.${this.patch}`;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = VERSION;
}
