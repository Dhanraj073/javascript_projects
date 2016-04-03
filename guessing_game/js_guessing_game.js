var target;
var guess_input_text;
var guess_input;
var finished=false;
var guesses=0;

function do_game(){

	var rand=Math.random()*100;
	rand=Math.floor(rand) + 1;
	target=rand;

	while(!finished)
	{
		guess_input_text=prompt("I am thinking of a number" + " between 1 and 100 \n" + " \n Can you guess it for me?");
		guess_input=parseInt(guess_input_text);
		guesses+=1;
		finished=check_guess();
	}
}


function check_guess()
{
	if(isNaN(guess_input))
	{
		alert("You haven't entered \n"+"Please enter again\n");
		return false;
	}
	if((guess_input<1 || guess_input>100))
	{
		alert("Please enter in range 1 to 100");
		return false;
	}
	if(guess_input > target)
	{
		alert("Your guess is too high\n");
		return false;
	}
	if(guess_input<target)
	{
		alert("Increase the value of guess\n");
		return false;
	}
	alert("You are genius\n"+ "The number was "+target +"\n" + "You take it in " + guesses + "guesses\n");
}