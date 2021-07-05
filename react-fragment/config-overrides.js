module.exports = {
    webpack: function (config, env) {
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
            cacheGroups: {
                default: false
            }
        };
        return config;
    }
};


