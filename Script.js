// Edit Scriptnode here.
// Add subroutines for each in-event or exposed field
// that you define in the script node's property page.

var bUseWebviewJS = false;
var hazardList = [];
var userInfo = {};
var bPropagateToP2L = true;

function initialize()
{
	SimulationNode.value.GetFieldByName("StereoMode").value = 0;
}

function On_MonoMode()
{
	SimulationNode.value.GetFieldByName("StereoMode").value = 0;
}

function On_VRMode()
{
	SimulationNode.value.GetFieldByName("StereoMode").value = 5;
}

//assumption: zone index and hazard index start at 1
function GetRandomHazardIndex(_iZoneNumber, _iCount, _iMax)
{
    var arr = [];
    while(arr.length < _iCount)
    {
        var randomnumber = (_iZoneNumber-1)*_iMax + Math.ceil(Math.random()*_iMax);
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return arr;
}

function GetEONBaseURL() {
    return "http://192.168.1.65/StudentMetaphorMobileService_V1/PartnerService.svc/"
}

function On_SimStart()
{
	hazardList[0] = GetRandomHazardIndex(1, 3, 5);
	hazardList[1] = GetRandomHazardIndex(2, 3, 5);
	hazardList[2] = GetRandomHazardIndex(3, 4, 5);

    //approach 1: simple and easy
	var outData = {};
    outData.name = "SimStart";
    outData.value = hazardList;
	SendQuestions.value = JSON.stringify(outData);
}

//function On_SimStop()
function On_ExitStatus()
{
	var exitData = {};
    exitData.exitStatus = ExitStatus.value;
    exitData.exitTimestamp = (+new Date());

    var outData = {};
    outData.name = "SimStop";
    outData.value = exitData;
    if(bUseWebviewJS)
    {
        //approach 1: simple and easy
        SendExitInfo.value = JSON.stringify(outData);
    }
    else
    {
        //approach 2:
        //url: GetEONBaseURL()+"eon/activity/game/finished/"+classID+"/"+lessonID+"/"+nricVal+"/"+timestampVal+"/"+exitStatus,
        var nricVal = userInfo.nric;
        var classID = userInfo.classID;
        var lessonID = userInfo.gameID;
        var timestampVal = (+new Date());
	    eon.Http().get(GetEONBaseURL()+"eon/activity/game/finished/"+classID+"/"+lessonID+"/"+nricVal+"/"+timestampVal+"/"+ExitStatus.value+"/"+bPropagateToP2L, function(res){});
    }
}

function On_WEBEvents()
{
   eon.trace("**** Script.js >> WEBEvents.value = " + WEBEvents.value);

   var jsonWebEvent = JSON.parse(WEBEvents.value);
   if(jsonWebEvent.name == "registerUserInfo")
   {
        //approach 2: stupidly hard to debug live on this primitive tool
        //url: GetEONBaseURL()+"eon/activity/game/started/"+classID+"/"+lessonID+"/"+nricVal+"/"+timestampVal+"/"+flattenedQuestionList,
        var flattenedQuestionList = "";
        for(var i=0; i<hazardList.length; i++)
        {
            var hazardListForZone = hazardList[i];
            for(var j=0; j<hazardListForZone.length;j++)
            {
               if(flattenedQuestionList.length>0)
               {
                   flattenedQuestionList += "-";
               }
               flattenedQuestionList += hazardListForZone[j].toString();
            }
        }

        userInfo = jsonWebEvent.value;
        var nricVal = userInfo.nric;
        var classID = userInfo.classID;
        var lessonID = userInfo.gameID;
        var timestampVal = (+new Date());
        bPropagateToP2L = jsonWebEvent.bPropagate;
	    eon.Http().get(GetEONBaseURL()+"eon/activity/game/started/"+classID+"/"+lessonID+"/"+nricVal+"/"+timestampVal+"/"+flattenedQuestionList+"/"+bPropagateToP2L, function(res){});
    }
}