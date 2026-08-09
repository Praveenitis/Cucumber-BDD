module.exports = {
    paths : [
        "features/**/*.feature"
    ],

    require : [
        "stepDefinition/**/*.js",
        "support/**/*.js"
    ],

    format : [
        "progress" ,
        "html:reports/report.html"
    ]

}