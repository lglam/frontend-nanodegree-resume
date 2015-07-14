/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var awesomeThoughts = "I am Jason and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
*/

/*
var name = "Jason Lam";
var role = "Web developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

var bio = {
	"name": "Jason",
	"role": "Web developer",
	"pictureURL": "https://commons.wikimedia.org/wiki/File:Googlelogo.png",
	"welcomeMessage": "Hi, Welcome!",
	"skills": ["programming", "swimming", "singing"]
};

$("#main").append(bio.name);