const PROXY_CONFIG = [
    {
        context: [
            "/pmc",
            "/getname",
            "/asi",
            "/ab"
        ],
        target: "http://172.16.8.115:10099/web/services/equation/",
        secure: false,
        logLevel: "debug",
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;