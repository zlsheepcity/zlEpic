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



/* block promises */

    const reportAboutJump = (data) => {
        console.log('There was a jump', data.height || data);
    }

    // is ~pure
    const willBeResolvedAfterTime = (data, resolve, reject) => {
        let inTime = data.inTime || 2000;
        setTimeout( () => resolve(data), inTime);
    }

    // is pure
    const iSwear = (f, data) =>
        new Promise(
            (resolve, reject) =>
                f(data, resolve, reject)
        );

    const iSwearToJump = (data) => iSwear(willBeResolvedAfterTime, data);

    // Define jumps
    const doFirstJump = iSwearToJump(1.64);
    const doSecondJump = iSwear(willBeResolvedAfterTime, { height:1.88, inTime:3000 });
    const doThirdJump = (data) => iSwear(willBeResolvedAfterTime, data);


    // Run
    doFirstJump.then(reportAboutJump);
    doSecondJump.then(reportAboutJump);
    doThirdJump(2.03).then(reportAboutJump);

/* endblock */
