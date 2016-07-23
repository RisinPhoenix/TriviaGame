$(document).ready(function(){
	//Vars to be referenced by Functions
		var compNumber = 0;
		var playerNumber = 0;
		var losses = 0;
		var wins = 0;
		var array =[];
		var red = 0;
		var blue = 0;
		var clear = 0;
		var green = 0;

	//On click funtions for the buttons


			$(".green").on("click", function(){
				playerNumber = (playerNumber + green); //Add the value of green to the players number
				console.log(playerNumber)
				$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber); //Writes over the players number with the new number
				win (); //checks to see if player won the game
				notWin (); //checks to see if the player lost the game 

			});

			$(".red").on("click", function(){
				playerNumber = (playerNumber + red); //Add the value of red to the players number
				console.log(playerNumber)
				$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber);
				win ();
				notWin ();
			});

			$(".clear").on("click", function(){
				playerNumber = (playerNumber + clear); //Add the value of clear to the players number
				console.log(playerNumber)
				$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber);
				win ();
				notWin ();
			});

			$(".blue").on("click", function(){
				playerNumber = (playerNumber + blue); //Add the value of blue to the players number
				console.log(playerNumber)
				$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber);
				win ();
				notWin ();
			});


			// This function resets the wins and losses on the page.

			$(".reset").on("click", function(){

				game();

				wins = 0; 
				$( "div.winsBox" ).html( "<span>Wins: </span>" + wins);


				losses = 0;
				$( "div.lossesBox" ).html( "<span>Losses: </span>" + losses);



			});


	//genorates random number to be picked
		game = function (min,max) {
			compNumber = Math.floor(Math.random()*(120-19+1)+19);
			console.log(compNumber)
								//stacker overflow code for random number generation between ranges
										// function randomIntFromInterval(min,max)
										// {
								  		//   		return Math.floor(Math.random)(*(max-min+1)+min);
										// }
										
			$( "div.compNumberBox" ).html( "<span> <strong> The computers number: </strong> </span>" + compNumber); //Writes the computer number to the screen


			playerNumber = 0;
			console.log(playerNumber)
			

			$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber);

			gameArray (); //gameArray is located below the teachers code for random array generation. Game array generates the 4 random numbers that will be assigned to the crystals
		}
		
	
		//Checks players number and Computers Number and updates page if they are equal.
		win = function(){

		if (compNumber == playerNumber) {

			wins = wins + 1;

			$( "div.winsBox" ).html( "<span>Wins: </span>" + wins);

			game ();
			}

		else {}

		}

		//Checks to see if players number is greater than the computers number and updates the page if this sad event happens.
		notWin = function(){

			if (compNumber < playerNumber) {

				losses = losses + 1;

				$( "div.lossesBox" ).html( "<span>Losses: </span>" + losses);

				game ();
				}


			else {}
		
			}



		





	//teachers code for generating random arrays of different types: Awesome.		
	//Random array of numbers genorator
		var genArrayOfRandomNumbers = {

		    numberArr: [],
		    numbersInArray: 4,
		    numbersInArrayCounter: 0,
		    numberBegin: 1,
		    numberEnd: 12,
		    typeOfArray: "evenAndOdd", // Accepts oddOnly, evenOnly, & evenAndOdd
		    resetFlag: true,
		    randomNumber: 0,
		    debugFlag: false,


		    /**
		     * Create and Populate the Array
		     */
		    populateArrayWhile: function() {

		        if (this.resetFlag) {
		            this.numbersInArrayCounter = this.numbersInArray
		            this.debug(console.log("Amount of Beginning Numbers: " + this.numbersInArray))
		            console.log("Type of Array Selected: " + this.typeOfArray)
		            console.log("------------------------");

		            this.resetFlag = false

		        } else {
		            console.log("Amount of Numbers Remaining: " + this.numbersInArrayCounter)
		            console.log("------------------------");
		        }

		        while (this.numbersInArrayCounter > 0) {
		            this.generateRandomNumber(this.numberArr, this.typeOfArray)
		            this.numberArr.push(this.randomNumber)
		            console.log("Random Number: " + this.randomNumber + " -- Pushed to Array")
		            this.numbersInArrayCounter--
		                console.log("Current Numbers Left to Generate in Array: " + this.numbersInArrayCounter)
		        }

		        if (this.typeOfArray == "evenAndOdd") {
		            if (this.arrayEvenAndOdd(this.numberArr) instanceof Array) {
		                return this.numberArr
		            } else {
		                this.reset()
		                this.populateArrayWhile()
		            }
		        }

		        return this.numberArr

		    },

		    /**
		     * Generates a random number, or random odd number or random even number
		     * @param {Array} a items The array containing the items.
		     * @param {typeOfArray} is the array oddOnly, evenOnly, or evenAndOdd.
		     */
		    generateRandomNumber: function(arr, typeOfArray) {

		        var num = Math.floor(this.numberBegin + (Math.random() * this.numberEnd))
		        console.log("Random Number Generated: " + num)

		        if (typeOfArray == "oddOnly" && (num % 2 > 0) && this.duplicateChecker(arr, num)) {
		            this.randomNumber = num
		            console.log("Passed Duplicate Checker: " + num)
		            console.log("------------------------")

		        } else if (typeOfArray == "evenOnly" && (num % 2 == 0) && this.duplicateChecker(arr, num)) {
		            this.randomNumber = num
		            console.log("Passed Duplicate Checker: " + num)
		            console.log("------------------------")

		        } else if (typeOfArray == "evenAndOdd" && this.duplicateChecker(arr, num)) {
		            this.randomNumber = num
		            console.log("Passed Duplicate Checker: " + num)
		            console.log("------------------------")

		        } else {
		            console.log("Duplicate or Non Qualified Number Selected: Generating another number")
		            console.log("------------------------")
		            this.generateRandomNumber(arr, typeOfArray)

		        }

		        return

		    },

		    /**
		     * Checks if any Array element contains a given number
		     * @param {Array} a items The array containing the items.
		     * @param {Number} a number to compare if exists in array.
		     */
		    duplicateChecker: function(arr, num) {

		        if (arr.indexOf(num) === -1) {
		            return true

		        } else {
		            return false
		        }

		    },

		    /**
		     * Checks Array Elements for Even and Odd Numbers
		     * @param {Array} a items The array containing the items.
		     */
		    arrayEvenAndOdd: function(arr) {

		        console.log("Checking Array Elements for Even and Odd Numbers....")

		        var odd = false
		        var even = false

		        for (j = 0; j < arr.length; j++) {

		            if (arr[j] % 2 === 0) {
		                even = true
		                console.log("Index: " + j + " Element: " + arr[j] + " ---- Even")

		            } else {
		                odd = true
		                console.log("Index: " + j + " Element: " + arr[j] + " ---- Odd")
		            }
		        }

		        if (odd && even) {
		            console.log("Array OK Even and Odd Numbers Found...")
		            return arr

		        } else {
		            console.log("Array Not OK!! All Odd or All Even...")
		            return false
		        }
		    },

		    reset: function() {
		        this.numberArr = []
		        this.numbersInArrayCounter = 0
		        this.resetFlag = true
		        this.randomNumber = 0
		    },

		    debug: function(consoleLog) {

		        if (this.debugFlag) {
		            consoleLog
		        }
		    }
		}


		// // Testing
		// // Set Runtime Values
		// genArrayOfRandomNumbers.numberBegin = 10
		// genArrayOfRandomNumbers.numberEnd = 100
		// genArrayOfRandomNumbers.numbersInArray = 10
		// genArrayOfRandomNumbers.typeOfArray = "evenOnly" // Accepts oddOnly, evenOnly, & evenAndOdd

		// // Create a Do-While Loop to Determine the Number of Passes
		// var numOfPasses = 10
		// var i = 0
		// do {

		//     console.log("")
		//     console.log("--------------------BEGIN-------------------")
		//     console.log("--------------------------------------------")
		//     var arrayNumbers = genArrayOfRandomNumbers.populateArrayWhile()
		//     console.log("--------------------------------------------")
		//     console.log("Test " + (i+1) + " -- Final Result: ")
		//     console.log(arrayNumbers)
		//     genArrayOfRandomNumbers.reset()
		//     console.log("---------------------END--------------------")
		//     console.log("")

		//     i++

		// } while (i < numOfPasses)

		//commented out teachers test run and this is where his code ends.


		//Game array uses the above functions to created our 4 random numbers to assign to the crystals

		gameArray =  function(){

			genArrayOfRandomNumbers.numberBegin = 1;
			genArrayOfRandomNumbers.numberEnd = 12;
			genArrayOfRandomNumbers.numbersInArray = 4;
			genArrayOfRandomNumbers.typeOfArray = 'evenAndOdd';
			
				var numOfPasses = 10
				var i = 0
				do {

				    console.log("")
				    console.log("--------------------BEGIN-------------------")
				    console.log("--------------------------------------------")
				    arrayNumbers = genArrayOfRandomNumbers.populateArrayWhile()
				    console.log("--------------------------------------------")
				    console.log("Test " + (i+1) + " -- Final Result: ")
				    console.log(arrayNumbers)
				    genArrayOfRandomNumbers.reset()
				    console.log("---------------------END--------------------")
				    console.log("")

				    i++

				} while (i < numOfPasses)





			
			console.log(arrayNumbers)
			red = arrayNumbers[0];
			blue = arrayNumbers[1];
			clear = arrayNumbers[2];
			green = arrayNumbers[3];
			console.log(red)
			console.log(blue)
			console.log(clear)
			console.log(green)

		}

		//runs the game function (and all functions included in it)
		game ();

		//sets the value of the crystals = to the random number in the array by possition.
		
		
		

});

			

			// This function handles events where one button is clicked
// Start On Click
$(document).on('click', '#start', function() {
    // game.startGame();
})

// Submit On Click
$(document).on('click', '.check-guess', function(e) {
    // game.checkGuess(e)
})

// Start Over On Click
$(document).on('click', '#start-over', function() {
  //   game.loadQuestion();
});


var questions = [{
    question: "How many squares are they're on a chess board?",
    choices: ["64", "84", "66", "68"],
    correctChoice: "64",
}, {
    question: "What piece sits on the square D8 at the start of the game?",
    choices: ["Knight", "Bishop", "Queen", "King"],
    correctChoice: "Queen",
}, {
    question: "What piece is able to jump over other pieces?",
    choices: ["Queen", "Bishop", "Pawn", "Knight"],
    correctChoice: "Knight",
}, {
    question: "What piece has a specail move called en passant?",
    choices: ["Knight", "Pawn", "Bishop", "Queen"],
    correctChoice: "Pawn",
}, {
    question: "What piece can never move to change the color of the square that it sits on?",
    choices: ["King", "Rook", "Pawn", "Bishop"],
    correctChoice: "Bishop",
}, {
    question: "What piece can move an extra square on it's first move?",
    choices: ["Pawn", "Knight", "Queen", "Bishop"],
    correctChoice: "Pawn",
}, {
    question: "The King and Rook can make a special move called?",
    choices: ["Kinging", "Hiding", "Jumping", "Castling"],
    correctChoice: "Castling",
}, {
    question: "White's first move of pawn to e4 is a _______ opening?",
    choices: ["Queen's Pawn", "Knight's Pawn", "King's Pawn", "Sicilian"],
    correctChoice: "King's Pawn",
}, {
    question: "When notating a game the knight uses what letter?",
    choices: ["N", "K", "Kn", "No letters are used in pieces notations."],
    correctChoice: "N",
}, {
    question: "What piece can become another piece when it reaches the opponents back row?",
    choices: ["King", "Rook", "Pawn", "Knight"],
    correctChoice: "Pawn",
}]

// Array of Question Objects [0,1,2,3]

var game = {

    // Variables
    questions: questionsArray, // Import QuestionsArray into the Game Object
    questionNumber: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    unAnswered: 0,
    currentQuestionNumber: 0,

    // Functions
    countdown: function() {

        // Set Countdown time for each question

    },

    timeUp: function() {

        // What happens when the timer runs out

    },

    reset: function() {


    },

    checkGuess: function() {

        // Is this the correct answer for the Question

        // Yes

        // No

        // Is this the last Question?
        if (this.questionNumber === questionsArray.length - 1) {

            // Game Over!!

        } else {

            // Continue Game
        }


    },

    finalResults: function() {


    },

    loadQuestion: function() {

        // start timer
        timer = setInterval(game.countdown, 1000);

        // Print Question
        console.log(this.questions[questionNumber].question)

        // Print Choices as buttons (for loop needed)
        console.log(this.questions[questionNumber].choices[0])
        console.log(this.questions[questionNumber].choices[1])
        console.log(this.questions[questionNumber].choices[2])
        console.log(this.questions[questionNumber].choices[3])
        console.log(this.questions[questionNumber].correctChoice)

    },

    nextQuestion: function() {

        // start timer
        this.timer()

        // Advance Question Number
        this.questionNumber++

        // Call loadQuestion() Function

    }

}
