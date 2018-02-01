		// On page load:
			// Set variables:
			// --------------
			// Array of search terms (button titles)
			var dances = ["The Charlton", "The Elaine", "Peanut Butter Jelly Time", "Moonwalk", "The Robot", "The Worm", "Gangam Style", "The Stanky Leg", "Voguing", "The Harlem Shake", "Hammertime", "Cat Dance"]
			
		
			// Functions:
			// -------------
			// dynamically create search buttons
			function renderButtons() {
				// clear previous buttons
				$("#danceMove").empty();
				// for loop through button titles
				for (var i = 0; i < dances.length; i++) {
					// create jQuery button
					var newBtn = $("<button>");
					// add class attribute
					newBtn.attr("class", "btn btn-default")
					// add attribute to button equal to the button title
					newBtn.attr("data-name", dances[i]);
					// put button title in the button(.text, or .html)
					newBtn.text(dances[i]);
					// append button to page
					$("#danceMove").append(newBtn);
				}
					
			}

			$(document).ready(function() {
				// create buttons
				renderButtons();

				// when user clicks on a button function
				$("button").on("click", funciton (){
					// prevent default
					event.preventDefault();
					// get attribute of the button clicked and store as variable
					var danceChoice = $(this);
					// clear out old images (.empty)
					$("#gifs-appear-here").empty();
					// get the image with an ajax call to giphy
					var queryURL = "https://api.giphy.com/?api_key=zT7aQEGSK8nksDxzzfDMlpXJw6WHQfKD&limit=10&q=" + danceChoice;
					$.ajax({
						// query URL
						url: queryURL,
						// method: GET
						method: "GET"
					}).then(function(response))
						
						// .then
							// loop through response.data
								// create a jquery div
								// create a jquery img
								// set src attribute of the image to be the still image (response.data[i].images.original_still.url)
								// set data-state = "still"
								// add animated url = (response.data[i].images.original.url)
								// set
								// create a jquery p
								// put the rating from response into p (respnose.data[i].rating)
								// append jquery img and jquery p to div
								// append jquery div to the page
				//on click of form submit button - funciton
					// create variable of user input text field
					// push to array (buttonTitles)
					// run display buttons function
				// on click of image div - function
					// set variable = image clicked data-state attribute
					// if (still)
						// set src attribute to be the animated url
						// set data-state attribute to be animated
					// else (animated)
						// set src attr to be still url
						// set data-state attr to be still					
				});
			});