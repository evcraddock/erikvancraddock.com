loadScript("https://www.google-analytics.com/analytics.js", () => {
    window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments); };
    ga.l = +new Date;
    ga('create', 'UA-17539024-2', 'auto');
});
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    }
    else { //Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
//# sourceMappingURL=google-analytics.js.map