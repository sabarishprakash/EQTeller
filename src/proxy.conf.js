const PROXY_CONFIG = [
    {
        context: [
            "/GETCUSNAME",
            "/PMC",
            "/GETCHGCNAM"
        ],
        target: "http://172.16.8.115:10099/web/services/",
        secure: false,
        logLevel: "debug",
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;