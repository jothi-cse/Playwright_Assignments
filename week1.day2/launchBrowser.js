function launchBrowser(browserName)
{
    if (browserName.toLowerCase() ==="chrome")
    console.log("Launching chrome browser");
    else
    {
        console.log("Launching other browser");
    }
}
function runTests(testtype)
{
    switch (testtype.toLowerCase()) {
        case "smoke":
            console.log("Running Smoke Tests");
            break;
        case "sanity":
            console.log("Running Sanity Tests");
            break
        case "regression":
            console.log("Running Regression Tests")
            break
    
        default:
            console.log("Running smoke testing");;
    }
}
launchBrowser("Chrome")
runTests("sanity")
