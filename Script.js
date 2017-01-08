// Edit Scriptnode here.
// Add subroutines for each in-event or exposed field
// that you define in the script node's property page.

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

function On_SimStart()
{
    var hazardList = [];
	hazardList[0] = GetRandomHazardIndex(1, 3, 5);
	hazardList[1] = GetRandomHazardIndex(2, 3, 5);
	hazardList[2] = GetRandomHazardIndex(3, 4, 5);

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
    SendExitInfo.value = JSON.stringify(outData);
}