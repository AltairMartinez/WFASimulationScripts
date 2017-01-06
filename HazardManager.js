//Randomize number of hazard
var s1_rHazards;
var s2_rHazards;
var s3_rHazards;
var rNumber;

//Number of hazard left in scene
var s1_hazardsFound = 0;
var CurrentNumHazards = 0; // current number of hazards needed to be found

//which hazard is currently selected? 
var CurrentSel = 0;

var CurrentScene;

//which question had been answered
var H1_done = 10;
var H2_done = 10;
var H3_done = 10;
var H4_done = 10;
var H5_done = 10;
var H6_done = 10;
var H7_done = 10;
var H8_done = 10;
var H9_done = 10;
var H10_done = 10;
var H11_done = 10;
var H12_done = 10;
var H13_done = 10;
var H14_done = 10;
var H15_done = 10;

//correct or wrong
var H1_ans = false;
var H2_ans = false;
var H3_ans = false;
var H4_ans = false;
var H5_ans = false;
var H6_ans = false;
var H7_ans = false;
var H8_ans = false;
var H9_ans = false;
var H10_ans = false;
var H11_ans = false;
var H12_ans = false;
var H13_ans = false;
var H14_ans = false;
var H15_ans = false;

//scores
var s1_Score = 0;
var s2_Score = 0;
var s3_Score = 0;
var s1_done = false;
var s2_done = false;
var s3_done = false;

//the generated question list
var Questions = [];
var Answers = [];

function On_QuestionList()
{
	var inData = JSON.parse(QuestionList.value);
    Questions = inData.value;
	eon.trace(Questions);
}

function initialize()
{
	Scene1Nodes.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(3).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(4).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(5).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(6).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(7).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(8).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(9).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(10).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(11).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(12).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(13).GetFieldByName('SetRun_').value = true;
	Scene1Nodes.GetMFElement(14).GetFieldByName('SetRun_').value = true;
	
	for (var i = 0; i < RemoveStuff.value.length; i++)
	{
		RemoveStuff.GetMFElement(i).GetFieldByName('SetRun').value = true;
	}
	Sounds.GetMFElement(4).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(5).GetFieldByName('Volume').value = 0;
	
	OffTimer();
}

function On_Set_s1_Hazards()
{
	if(s1_done == false)
	{
		PlaceNodes.GetMFElement(0).GetFieldByName('SetRun').value = true;
		initialize();
		s1_done = true;
		CurrentScene = 1;
		ScreenFader.value.GetFieldByName('GoHigher').value = true;
		Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
		Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
	}
	Sounds.GetMFElement(5).GetFieldByName('Volume').value = 60;
	
}
function On_Set_s2_Hazards()
{
	if(s2_done == false)
	{
		PlaceNodes.GetMFElement(1).GetFieldByName('SetRun').value = true;
		initialize();
		s2_done = true;
		CurrentScene = 2;
		ScreenFader.value.GetFieldByName('GoHigher').value = true;
		Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
		Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
	}
}
function On_Set_s3_Hazards()
{
	if(s3_done == false)
	{
		PlaceNodes.GetMFElement(2).GetFieldByName('SetRun').value = true;
		initialize();
		s3_done = true;
		CurrentScene = 3;
		ScreenFader.value.GetFieldByName('GoHigher').value = true;
		Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
		Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
	}
	Sounds.GetMFElement(4).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(4).GetFieldByName('SetRun').value = true;
}

function OffTimer()
{
	for (var i = 0; i < TimerNodes.value.length; i++)
	{
		TimerNodes.GetMFElement(i).GetFieldByName('SetRun_').value = true;
	}
}
	

function Shuffle_s1_Hazards()
{
	switch(rNumber) {
		case 1:
			if(Scene1Nodes.GetMFElement(0).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(0).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s1_Hazards();
			}
			break;
		case 2:
			if(Scene1Nodes.GetMFElement(1).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(1).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s1_Hazards();
			}
			break;
		case 3:
			if(Scene1Nodes.GetMFElement(2).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(2).GetFieldByName('SetRun_').value = false;
				RemoveStuff.GetMFElement(0).GetFieldByName('SetRun_').value = true;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s1_Hazards();
			}
			break;
		case 4:
			if(Scene1Nodes.GetMFElement(3).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(3).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s1_Hazards();
			}
			break;
		case 5:
			if(Scene1Nodes.GetMFElement(4).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(4).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s1_Hazards();
			}
			break;
	}
}
function Shuffle_s2_Hazards()
{
	switch(rNumber) {
		case 1:
			if(Scene1Nodes.GetMFElement(5).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(5).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s2_Hazards();
			}
			break;
		case 2:
			if(Scene1Nodes.GetMFElement(6).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(6).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s2_Hazards();
			}
			break;
		case 3:
			if(Scene1Nodes.GetMFElement(7).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(7).GetFieldByName('SetRun_').value = false;
				RemoveStuff.GetMFElement(1).GetFieldByName('SetRun_').value = true;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s2_Hazards();
			}
			break;
		case 4:
			if(Scene1Nodes.GetMFElement(8).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(8).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s2_Hazards();
			}
			break;
		case 5:
			if(Scene1Nodes.GetMFElement(9).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(9).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s2_Hazards();
			}
			break;
	}
}
function Shuffle_s3_Hazards()
{
	switch(rNumber) {
		case 1:
			if(Scene1Nodes.GetMFElement(10).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(10).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s3_Hazards();
			}
			break;
		case 2:
			if(Scene1Nodes.GetMFElement(11).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(11).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s3_Hazards();
			}
			break;
		case 3:
			if(Scene1Nodes.GetMFElement(12).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(12).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s3_Hazards();
			}
			break;
		case 4:
			if(Scene1Nodes.GetMFElement(13).GetFieldByName('SetRun_').value == true)
			{
				RemoveStuff.GetMFElement(2).GetFieldByName('SetRun_').value = true;
				Scene1Nodes.GetMFElement(13).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s3_Hazards();
			}
			break;
		case 5:
			if(Scene1Nodes.GetMFElement(14).GetFieldByName('SetRun_').value == true)
			{
				Scene1Nodes.GetMFElement(14).GetFieldByName('SetRun_').value = false;
			} else
			{
				rNumber = Math.ceil(Math.random()*5);
				Shuffle_s3_Hazards();
			}
			break;
	}
}

function SetQuestionUI()
{
	UIQuestion.value.GetFieldByName('WorldPosition').value = eon.MakeSFVec3f(vPosition.value[0], vPosition.value[1], vPosition.value[2] + 3.0);
}

function SetUIFound()
{
	if(s1_hazardsFound == 0)
	{
		FoundList.GetMFElement(0).GetFieldByName('SetRun').value = true;
	}
	if(s1_hazardsFound == 1)
	{
		FoundList.GetMFElement(1).GetFieldByName('SetRun').value = true;
	}
	if(s1_hazardsFound == 2)
	{
		FoundList.GetMFElement(2).GetFieldByName('SetRun').value = true;
	}
	if(s1_hazardsFound == 3)
	{
		FoundList.GetMFElement(6).GetFieldByName('SetRun').value = true;
	}
}

function SetUIFound_Wrong()
{
	if(s1_hazardsFound == 0)
	{
		FoundList.GetMFElement(3).GetFieldByName('SetRun').value = true;
	}
	if(s1_hazardsFound == 1)
	{
		FoundList.GetMFElement(4).GetFieldByName('SetRun').value = true;
	}
	if(s1_hazardsFound == 2)
	{
		FoundList.GetMFElement(5).GetFieldByName('SetRun').value = true;
	}
	if(s1_hazardsFound == 3)
	{
		FoundList.GetMFElement(7).GetFieldByName('SetRun').value = true;
	}
}

function SendSingleAnswer(QuestionID, IsCorrect)
{
   var answerData = {};
   answerData.QuestionID = QuestionID;
   answerData.IsCorrect = IsCorrect;
   answerData.Timestamp = (+new Date());

   //gather results in case we want to batch send on exit
   Answers[Answers.length] = answerData;

   //send single answer event
   var outData = {};
   outData.name = "RegisterAnswer";
   outData.value = answerData;
   SingleAnswer.value = JSON.stringify(outData);	 

   eon.trace(SingleAnswer);
}

//when the tick is selected
function On_Tick()
{
	switch(CurrentSel) {
		
		case 1:
			ListofAns.GetMFElement(0).GetFieldByName('SetRun').value = true;
			SetUIFound();
			H1_done = s1_hazardsFound;
			s1_Score++;
			H1_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;

		case 2:
			ListofAns.GetMFElement(2).GetFieldByName('SetRun').value = true;
			SetUIFound();
			H2_done = s1_hazardsFound;
			s1_Score++;
			H2_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 3:
			ListofAns.GetMFElement(4).GetFieldByName('SetRun').value = true;
			SetUIFound();
			H3_done = s1_hazardsFound;
			s1_Score++;
			H3_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 4:
			ListofAns.GetMFElement(6).GetFieldByName('SetRun').value = true;
			SetUIFound();
			H4_done = s1_hazardsFound;
			s1_Score++;
			H4_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 5:
			ListofAns.GetMFElement(8).GetFieldByName('SetRun').value = true;
			SetUIFound();
			H5_done = s1_hazardsFound;
			s1_Score++;
			H5_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 6:
			ListofAns.GetMFElement(10).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s2_Score++;
			H6_done = s1_hazardsFound;
			H6_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;

		case 7:
			ListofAns.GetMFElement(12).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s2_Score++;
			H7_done = s1_hazardsFound;
			H7_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 8:
			ListofAns.GetMFElement(14).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s2_Score++;
			H8_done = s1_hazardsFound;
			H8_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 9:
			ListofAns.GetMFElement(16).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s2_Score++;
			H9_done = s1_hazardsFound;
			H9_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 10:
			ListofAns.GetMFElement(18).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s2_Score++;
			H10_done = s1_hazardsFound;
			H10_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 11:
			ListofAns.GetMFElement(20).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s3_Score++;
			H11_done = s1_hazardsFound;
			H11_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;

		case 12:
			ListofAns.GetMFElement(22).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s3_Score++;
			H12_done = s1_hazardsFound;
			H12_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 13:
			ListofAns.GetMFElement(24).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s3_Score++;
			H13_done = s1_hazardsFound;
			H13_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 14:
			ListofAns.GetMFElement(26).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s3_Score++;
			H14_done = s1_hazardsFound;
			H14_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		case 15:
			ListofAns.GetMFElement(28).GetFieldByName('SetRun').value = true;
			SetUIFound();
			s3_Score++;
			H15_done = s1_hazardsFound;
			H15_ans = true;
			SendSingleAnswer(CurrentSel, 1);
			break;
			
		default:
			//
	}
	Sounds.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(1).GetFieldByName('SetRun').value = true;
	CheckSceneClear();
}

//when the cross is selected
function On_Cross()
{
	switch(CurrentSel) {
		
		case 1:
			ListofAns.GetMFElement(1).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(0).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H1_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;

		case 2:
			ListofAns.GetMFElement(3).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(1).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H2_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 3:
			ListofAns.GetMFElement(5).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(2).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H3_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 4:
			ListofAns.GetMFElement(7).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(3).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H4_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 5:
			ListofAns.GetMFElement(9).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(4).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H5_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 6:
			ListofAns.GetMFElement(11).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(5).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H6_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;

		case 7:
			ListofAns.GetMFElement(13).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(6).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H7_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 8:
			ListofAns.GetMFElement(15).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(7).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H8_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 9:
			ListofAns.GetMFElement(17).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(8).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H9_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 10:
			ListofAns.GetMFElement(19).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(9).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H10_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
		case 11:
			ListofAns.GetMFElement(21).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(10).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H11_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;

		case 12:
			ListofAns.GetMFElement(23).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(11).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H12_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 13:
			ListofAns.GetMFElement(25).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(12).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H13_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 14:
			ListofAns.GetMFElement(27).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(13).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H14_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
			
		case 15:
			ListofAns.GetMFElement(29).GetFieldByName('SetRun').value = true;
			DescriptionText.GetMFElement(14).GetFieldByName('SetRun').value = true;
			SetUIFound_Wrong();
			H15_done = s1_hazardsFound;
			SendSingleAnswer(CurrentSel, 0);
			break;
		
	}
	Sounds.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(2).GetFieldByName('SetRun').value = true;
	CheckSceneClear();
}

function CheckSceneClear()
{
	//remove click sensor for answered questions
	switch(CurrentSel) {
		
		case 1:
			ClickSensors.GetMFElement(0).GetFieldByName('SetRun_').value = true;
			break;
		case 2:
			ClickSensors.GetMFElement(1).GetFieldByName('SetRun_').value = true;
			break;
		case 3:
			ClickSensors.GetMFElement(2).GetFieldByName('SetRun_').value = true;
			break;
		case 4:
			ClickSensors.GetMFElement(3).GetFieldByName('SetRun_').value = true;
			break;
		case 5:
			ClickSensors.GetMFElement(4).GetFieldByName('SetRun_').value = true;
			break;
		case 6:
			ClickSensors.GetMFElement(5).GetFieldByName('SetRun_').value = true;
			break;
		case 7:
			ClickSensors.GetMFElement(6).GetFieldByName('SetRun_').value = true;
			break;
		case 8:
			ClickSensors.GetMFElement(7).GetFieldByName('SetRun_').value = true;
			break;
		case 9:
			ClickSensors.GetMFElement(8).GetFieldByName('SetRun_').value = true;
			break;
		case 10:
			ClickSensors.GetMFElement(9).GetFieldByName('SetRun_').value = true;
			break;
		case 11:
			ClickSensors.GetMFElement(10).GetFieldByName('SetRun_').value = true;
			break;
		case 12:
			ClickSensors.GetMFElement(11).GetFieldByName('SetRun_').value = true;
			break;
		case 13:
			ClickSensors.GetMFElement(12).GetFieldByName('SetRun_').value = true;
			break;
		case 14:
			ClickSensors.GetMFElement(13).GetFieldByName('SetRun_').value = true;
			break;
		case 15:
			ClickSensors.GetMFElement(14).GetFieldByName('SetRun_').value = true;
			break;
			
		default:
			//
	}
	
	s1_hazardsFound++;
	
	//go to scene select and reset var
	if(s1_hazardsFound >= CurrentNumHazards)
	{
		//slight delay before going to summary screen
		Timer_DelayToSummary.value.GetFieldByName('SetRun').value = true;
	}
	
	//remove the Question UI
	UIQuestion.value.GetFieldByName('Position').value = eon.MakeSFVec3f(0, 0, -50);
}

function On_ToSummaryScreen()
{
	OffTimer();
	s1_hazardsFound = 0;
	ZoneSelection.value.GetFieldByName('SetRun').value = true;
	Sounds.GetMFElement(3).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(3).GetFieldByName('SetRun').value = true;
	
	//remove ui questions
	UIQuestion.value.GetFieldByName('Position').value = eon.MakeSFVec3f(0, 0, -50);
	
	//reset all click sensors
	/*
	for (var i = 0; i < ClickSensors.value.length; i++)
	{
		ClickSensors.GetMFElement(i).GetFieldByName('SetRun_').value = false;
	}
	*/
	
	//reset all answers
	for (var j = 0; j < ListofAns.value.length; j++)
	{
		ListofAns.GetMFElement(j).GetFieldByName('SetRun_').value = true;
	}
	
	//reset UI
	for (var k = 0; k < FoundList.value.length; k++)
	{
		FoundList.GetMFElement(k).GetFieldByName('SetRun_').value = true;
	}
	for (var l = 0; l < Zone_UI.value.length; l++)
	{
		Zone_UI.GetMFElement(l).GetFieldByName('SetRun_').value = true;
	}
	
	//Set Summary Screen
	switch(CurrentScene)
	{
		case 1:
			SummaryScreen(H1_done, 0, H1_ans, 1);
			SummaryScreen(H2_done, 1, H2_ans, 1);
			SummaryScreen(H3_done, 2, H3_ans, 1);
			SummaryScreen(H4_done, 3, H4_ans, 1);
			SummaryScreen(H5_done, 4, H5_ans, 1);
			SummaryScreens.GetMFElement(0).GetFieldByName('SetRun').value = true;
			BckButtons.GetMFElement(0).GetFieldByName('SetRun').value = true;
			break;
		case 2:
			SummaryScreen(H6_done, 5, H6_ans, 2);
			SummaryScreen(H7_done, 6, H7_ans, 2);
			SummaryScreen(H8_done, 7, H8_ans, 2);
			SummaryScreen(H9_done, 8, H9_ans, 2);
			SummaryScreen(H10_done, 9, H10_ans, 2);
			SummaryScreens.GetMFElement(1).GetFieldByName('SetRun').value = true;
			BckButtons.GetMFElement(1).GetFieldByName('SetRun').value = true;
			break;
		case 3:
			SummaryScreen(H11_done, 10, H11_ans, 3);
			SummaryScreen(H12_done, 11, H12_ans, 3);
			SummaryScreen(H13_done, 12, H13_ans, 3);
			SummaryScreen(H14_done, 13, H14_ans, 3);
			SummaryScreen(H15_done, 14, H15_ans, 3);
			SummaryScreens.GetMFElement(2).GetFieldByName('SetRun').value = true;
			BckButtons.GetMFElement(2).GetFieldByName('SetRun').value = true;
			break;
	}
	
	//rotate summary screen towards player
	//SummaryRot.GetMFElement(CurrentScene - 1).GetFieldByName('Orientation').value = eon.MakeSFVec3f((nPlayer.value.GetFieldByName('Orientation').value[0] - 180),SummaryRot.GetMFElement(CurrentScene - 1).GetFieldByName('Orientation').value[0],SummaryRot.GetMFElement(CurrentScene - 1).GetFieldByName('Orientation').value[0]);
	OffsetSummary.value += 1;
	
	
	//StartTimer.value.GetFieldByName('SetRun').value = true;
}


function On_BackToSceneSelection()
{
	//back to scene selection screen
	SceneSelection.value.GetFieldByName('SetRun').value = true;
	ScreenFader.value.GetFieldByName('GoHigher').value = true;
	
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
	
	//reset and remove summary screen
	for (var i = 0; i < SummaryList.value.length; i++)
	{
		SummaryList.GetMFElement(i).GetFieldByName('SetRun_').value = true;
	}
	for (var j = 0; j < SummaryTicks.value.length; j++)
	{
		SummaryTicks.GetMFElement(j).GetFieldByName('SetRun_').value = true;
	}
	for (var k = 0; k < SummaryCross.value.length; k++)
	{
		SummaryCross.GetMFElement(k).GetFieldByName('SetRun_').value = true;
	}
	SummaryScreens.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	SummaryScreens.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	SummaryScreens.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	BckButtons.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	BckButtons.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	BckButtons.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	
	initialize();
	
	//to game overscreen instead
	if(s1_done == true && s2_done == true && s3_done == true)
	{
		Score_1.value = s1_Score + " /3";
		Score_2.value = s2_Score + " /3";
		Score_3.value = s3_Score + " /4";
		ScoreScreen.value.GetFieldByName('SetRun').value = true;
		Sounds.GetMFElement(3).GetFieldByName('SetRun_').value = true;
		Sounds.GetMFElement(3).GetFieldByName('SetRun').value = true;
		
		ZoneSelection.value.GetFieldByName('SetRun_').value = true;
		//spawn texts
		switch(s1_Score)
		{
			case 0:
				EndingScreen_Scores.GetMFElement(10).GetFieldByName('SetRun').value = true;
				break;
			case 1:
				EndingScreen_Scores.GetMFElement(0).GetFieldByName('SetRun').value = true;
				break;
			case 2:
				EndingScreen_Scores.GetMFElement(1).GetFieldByName('SetRun').value = true;
				break;
			case 3:
				EndingScreen_Scores.GetMFElement(2).GetFieldByName('SetRun').value = true;
				break;
		}
		switch(s2_Score)
		{
			case 0:
				EndingScreen_Scores.GetMFElement(11).GetFieldByName('SetRun').value = true;
				break;
			case 1:
				EndingScreen_Scores.GetMFElement(3).GetFieldByName('SetRun').value = true;
				break;
			case 2:
				EndingScreen_Scores.GetMFElement(4).GetFieldByName('SetRun').value = true;
				break;
			case 3:
				EndingScreen_Scores.GetMFElement(5).GetFieldByName('SetRun').value = true;
				break;
		}
		switch(s3_Score)
		{
			case 0:
				EndingScreen_Scores.GetMFElement(12).GetFieldByName('SetRun').value = true;
				break;
			case 1:
				EndingScreen_Scores.GetMFElement(6).GetFieldByName('SetRun').value = true;
				break;
			case 2:
				EndingScreen_Scores.GetMFElement(7).GetFieldByName('SetRun').value = true;
				break;
			case 3:
				EndingScreen_Scores.GetMFElement(8).GetFieldByName('SetRun').value = true;
				break;
			case 4:
				EndingScreen_Scores.GetMFElement(9).GetFieldByName('SetRun').value = true;
				break;
		}
	}
}

function On_FadeOut()
{
	ScreenFader.value.GetFieldByName('GoLower').value = true;
}

function SummaryScreen(x, y , z , i)
{
	switch(x)
	{
		case 0:
			SummaryList.GetMFElement(y).GetFieldByName('SetRun').value = true;
			if( i == 1 || i == 2)
			{
				SummaryV3.GetMFElement(y).GetFieldByName('Position').value = eon.MakeSFVec3f(0.4176,-2.7232,3.3426);
			}
			else if ( i == 3)
			{
				// for scene 3 with 4 hazards
				SummaryV3.GetMFElement(y).GetFieldByName('Position').value = eon.MakeSFVec3f(0.5672,-2.7232,3.3426);
			}
			
			if( z == true)
			{
				SummaryTicks.GetMFElement(y).GetFieldByName('SetRun').value = true;
				
			} else
			{
				SummaryCross.GetMFElement(y).GetFieldByName('SetRun').value = true;
			}
			break;
		case 1:
			SummaryList.GetMFElement(y).GetFieldByName('SetRun').value = true;
			if( i == 1 || i == 2)
			{
				SummaryV3.GetMFElement(y).GetFieldByName('Position').value = eon.MakeSFVec3f(-0.2366,-2.7232,3.3426);
			}
			else if ( i == 3)
			{
				SummaryV3.GetMFElement(y).GetFieldByName('Position').value = eon.MakeSFVec3f(-0.0446,-2.7232,3.3426);
			}

			if( z == true)
			{
				SummaryTicks.GetMFElement(y).GetFieldByName('SetRun').value = true;
			} else
			{
				SummaryCross.GetMFElement(y).GetFieldByName('SetRun').value = true;
			}
			break;
		case 2:
			SummaryList.GetMFElement(y).GetFieldByName('SetRun').value = true;
			if( i == 1 || i == 2)
			{
				SummaryV3.GetMFElement(y).GetFieldByName('Position').value = eon.MakeSFVec3f(-0.8896,-2.7232,3.3426);
				//SummaryList.GetMFElement(y).GetFieldByName('Position').value = eon.MakeSFVec3f(0.5527,0,-1.998);
			}
			else if ( i == 3)
			{
				SummaryV3.GetMFElement(y).GetFieldByName('Position').value = eon.MakeSFVec3f(-0.6359,-2.7232,3.3426);
			}
			if( z == true)
			{
				SummaryTicks.GetMFElement(y).GetFieldByName('SetRun').value = true;
			} else
			{
				SummaryCross.GetMFElement(y).GetFieldByName('SetRun').value = true;
			}
			break;
		case 3:
			SummaryList.GetMFElement(y).GetFieldByName('SetRun').value = true;
			if( i == 1 || i == 2)
			{
				//SummaryList.GetMFElement(y).GetFieldByName('SetRun_').value = true;
			}
			else if ( i == 3)
			{
				SummaryV3.GetMFElement(y).GetFieldByName('Position').value = eon.MakeSFVec3f(-1.2414,-2.6123,3.3426);
			}
			if( z == true)
			{
				SummaryTicks.GetMFElement(y).GetFieldByName('SetRun').value = true;
				
			} else 
			{
				SummaryCross.GetMFElement(y).GetFieldByName('SetRun').value = true;
			}
			break;
	}
}

// Select Hazard_1 from scene 1 
function On_Hazard_1_1()
{
	vPosition.value = Scene1Nodes.GetMFElement(0).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 1;
	UI_StartScene.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_2()
{
	vPosition.value = Scene1Nodes.GetMFElement(1).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 2;
	UI_StartScene.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_3()
{
	vPosition.value = Scene1Nodes.GetMFElement(2).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 3;
	UI_StartScene.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_4()
{
	vPosition.value = Scene1Nodes.GetMFElement(3).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 4;
	UI_StartScene.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_5()
{
	vPosition.value = Scene1Nodes.GetMFElement(4).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 5;
	UI_StartScene.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_6()
{
	vPosition.value = Scene1Nodes.GetMFElement(5).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 6;
	UI_StartScene.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_7()
{
	vPosition.value = Scene1Nodes.GetMFElement(6).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 7;
	UI_StartScene.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_8()
{
	vPosition.value = Scene1Nodes.GetMFElement(7).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 8;
	UI_StartScene.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_9()
{
	vPosition.value = Scene1Nodes.GetMFElement(8).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 9;
	UI_StartScene.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_10()
{
	vPosition.value = Scene1Nodes.GetMFElement(9).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 10;
	UI_StartScene.GetMFElement(1).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_11()
{
	vPosition.value = Scene1Nodes.GetMFElement(10).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 11;
	UI_StartScene.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_12()
{
	vPosition.value = Scene1Nodes.GetMFElement(11).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 12;
	UI_StartScene.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_13()
{
	vPosition.value = Scene1Nodes.GetMFElement(12).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 13;
	UI_StartScene.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_14()
{
	vPosition.value = Scene1Nodes.GetMFElement(13).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 14;
	UI_StartScene.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_Hazard_1_15()
{
	vPosition.value = Scene1Nodes.GetMFElement(14).GetFieldByName('WorldPosition').value;
	SetQuestionUI();
	CurrentSel = 15;
	UI_StartScene.GetMFElement(2).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

function On_StopSim()
{
	Sounds.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	Sounds.GetMFElement(0).GetFieldByName('SetRun').value = true;
}

//Change the timer to display countdown timer
function On_Timer()
{
	TimerInt.value = (60 - Timer.value);
}

//Time ended
function On_TimerEnd()
{
	UI_StartScene.GetMFElement(0).GetFieldByName('SetRun_').value = true;
	
	//go to scene select and reset var
	OffTimer();
	s1_hazardsFound = 0;
	ZoneSelection.value.GetFieldByName('SetRun').value = true;
	SceneSelection.value.GetFieldByName('SetRun').value = true;
	
	//reset all click sensors
	for (var i = 0; i < ClickSensors.value.length; i++)
	{
		ClickSensors.GetMFElement(i).GetFieldByName('SetRun_').value = false;
	}
	
	//reset all answers
	for (var j = 0; j < ListofAns.value.length; j++)
	{
		ListofAns.GetMFElement(j).GetFieldByName('SetRun_').value = true;
	}
	
	//remove the Question UI
	UIQuestion.value.GetFieldByName('Position').value = eon.MakeSFVec3f(0, 0, -50);
}

//Start timer when placenode1 is done
function On_StartScene1()
{
	UI_StartScene.GetMFElement(0).GetFieldByName('SetRun').value = true;
	for (var i = 0; i < TimerNodes.value.length; i++)
	{
		//TimerNodes.GetMFElement(i).GetFieldByName('SetRun').value = true; //debug timer
	}
	Zone_UI.GetMFElement(0).GetFieldByName('SetRun').value = true;
	ScreenFader.value.GetFieldByName('GoLower').value = true;
	ZoneSelectionFader.GetMFElement(0).GetFieldByName('Opacity').value = 0.5;
	ZoneSelection.value.GetFieldByName('SetRun_').value = true;
	
	//set up random hazards
	//s1_rHazards = Math.ceil(Math.random()*5);
	s1_rHazards = 3; // for debug
	for (i = 0; i < s1_rHazards; i++)
	{
		rNumber = Math.ceil(Math.random()*5);
		Shuffle_s1_Hazards();
	}
	CurrentNumHazards = s1_rHazards;
}
function On_StartScene2()
{
	UI_StartScene.GetMFElement(1).GetFieldByName('SetRun').value = true;
	for (var i = 0; i < TimerNodes.value.length; i++)
	{
		//TimerNodes.GetMFElement(i).GetFieldByName('SetRun').value = true;
	}
	Zone_UI.GetMFElement(1).GetFieldByName('SetRun').value = true;
	ScreenFader.value.GetFieldByName('GoLower').value = true;
	ZoneSelectionFader.GetMFElement(1).GetFieldByName('Opacity').value = 0.5;
	ZoneSelection.value.GetFieldByName('SetRun_').value = true;
	
	//s2_rHazards = Math.ceil(Math.random()*5);
	s2_rHazards = 3;
	for (i = 0; i < s2_rHazards; i++)
	{
		rNumber = Math.ceil(Math.random()*5);
		Shuffle_s2_Hazards();
	}
	CurrentNumHazards = s2_rHazards;
}
function On_StartScene3()
{
	UI_StartScene.GetMFElement(2).GetFieldByName('SetRun').value = true;
	for (var i = 0; i < TimerNodes.value.length; i++)
	{
		//TimerNodes.GetMFElement(i).GetFieldByName('SetRun').value = true;
	}
	Zone_UI.GetMFElement(2).GetFieldByName('SetRun').value = true;
	ScreenFader.value.GetFieldByName('GoLower').value = true;
	ZoneSelectionFader.GetMFElement(2).GetFieldByName('Opacity').value = 0.5;
	ZoneSelection.value.GetFieldByName('SetRun_').value = true;
	
	//s3_rHazards = Math.ceil(Math.random()*5);
	s3_rHazards = 4;
	for (i = 0; i < s3_rHazards; i++)
	{
		rNumber = Math.ceil(Math.random()*5);
		Shuffle_s3_Hazards();
	}
	CurrentNumHazards = s3_rHazards;
}

function On_resetCam()
{
	nPlayer.value.GetFieldByName('Orientation').value = eon.MakeSFVec3f(-148.556,0.4778,0);
}

