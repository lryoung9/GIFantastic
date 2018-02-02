// On page load:

// Set variables:
// --------------
// Array of search terms (button titles)
var dances = ["The Carlton", "The Elaine", "Peanut Butter Jelly Time", "Moonwalk", "Gangam Style", "The Stanky Leg", "Voguing", "The Harlem Shake", "Hammertime", "Cat Dance"]

// Functions:
// -------------
function addGifClickHandlers() {
// on click of image div - function
	$(".gif").on("click", function() {
		// set variable = image clicked data-state attribute
		var state = $(this).attr("data-state");
		console.log(this)
		// if (still)
		if (state === "still") {
			console.log(state);
			// set src attribute to be the animated url
			$(this).attr("src", $(this).attr("data-animate"))
			// set data-state attribute to be animated
			state = "animated"
			$(this).attr("data-state", "animate")					
		}
		// else (animated)
		else {
			// set src attr to be still url
			$(this).attr("src", $(this).attr("data-still"))
			// set data-state attr to be still
			$(this).attr("data-state", "still")
		}
	});	
}

function addOnClickHandlers() {
		// when user clicks on a button function
	$("button").on("click", function() {
		// prevent default
		event.preventDefault();
		// get attribute of the button clicked and store as variable (remove extra spaces)
		var danceChoice = $(this).val();
		// clear out old images (.empty)
		$("#gifs-appear-here").empty();
		// get the image with an ajax call to giphy
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zT7aQEGSK8nksDxzzfDMlpXJw6WHQfKD&limit=9&q=" + danceChoice ;
		console.log('being added');
		$.ajax({
			// query URL
			url: queryURL,
			// method: GET
			method: "GET",
		}).then(function(response) {
			var results = response.data;
			console.log(response)
			// loop through response.data
			for (var i = 0; i < results.length; i++) {
				// create a jquery div
				var danceDiv = $("<div>");
				danceDiv.addClass("col-md-4")
				// create a jquery img
				var image = $("<img>")
				// set src attribute of the image to be the still image (response.data[i].images.original_still.url)
				image.attr("src", results[i].images.fixed_height_still.url)
				// set data-state = "still"
				image.attr("data-state", "still")
				// add animated url = (response.data[i].images.original.url)
				image.attr("data-animate", results[i].images.fixed_height.url)
				// add still url attr
				image.attr("data-still", results[i].images.fixed_height_still.url)
				// create a jquery p
				var p = $("<p>")
				// put the rating from response into p (respnose.data[i].rating)
				p.html("Rated: " + results[i].rating)
				// append jquery img and jquery p to div
				danceDiv.append(image, p)
				image.addClass("gif");
				// append jquery div to the page
				$("#gifs-appear-here").prepend(danceDiv)
			}
			addGifClickHandlers();							
		})
	});
}



// dynamically create search buttons
function renderButtons() {
	// clear previous buttons
	$("#danceButtons").empty();
	// for loop through button titles
	for (var i = 0; i < dances.length; i++) {
		// create jQuery button
		var newBtn = $("<button>");
		// add class attribute
		newBtn.attr("class", "btn btn-default")
		// add attribute to button equal to the button title
		newBtn.attr("value", dances[i]);
		// put button title in the button(.text, or .html)
		newBtn.text(dances[i]);
		// append button to page
		$("#danceButtons").append(newBtn);
	}
	addOnClickHandlers();
}


$(document).ready(function() {
	// create buttons
	renderButtons();

	//on click of form submit button - function
	$("#submit").on("click", function(event) {
		// create variable of user input text field
		var userInput = $("#userDance").val().trim();
		// push to array (buttonTitles)
		dances.push(userInput);
		// run display buttons function
		renderButtons();		
	})
});