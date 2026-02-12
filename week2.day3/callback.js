let browser = "Chrome";
function checkBrowserVersion(callback)
{
setTimeout(function()
{
 callback()
 
},2000)
}
function  callbackBrowserVersion() {
console.log("Browser version using callback :"+browser);
}
checkBrowserVersion(callbackBrowserVersion)