// Ordnung am Script
// v2018.10.5

window.onload = function (e) {
    setTimeout(LaunchInterfaceFunctions,200);
    return true;
}
function LaunchInterfaceFunctions(){
    if (app&&typeof(app.Welcome)==='function') app.Welcome();
    return true;
}
