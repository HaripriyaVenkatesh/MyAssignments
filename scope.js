const browserVersion="Chrome"
function getBrowserVersion()
{
    console.log("Global value:", browserVersion )
    if(browserVersion==="Chrome")
    {
        var localbrowserVersion="Chrome 120"//var browserVersion="Chrome 120" var localbrowserVersion="Chrome 120"
        console.log("Inside if block:" , localbrowserVersion); //localbrowserVersion
        
    }

    console.log("Outside if block:", browserVersion)
}
getBrowserVersion()