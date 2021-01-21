module.exports = {
    webpack: (config, { dev, isServer }) => {
        if (isServer) {
            require("./lib/sitemap")
        }

        return config
    },
}
