console.log("hi");

$(".js-hamburger").on("click", function(event){
	event.preventDefault();
	$("nav li").toggle();
});


function sendEmail (){
	var button = document.getElementById('button');

	button.open('mailto:test@example.com?subject=subject&body=body');
}

function goToLinkedIn (){
	var linkedin = document.getElementById('linkedin-icon');

	linkedin.open('https://www.linkedin.com/in/lindsey-gilmore/', '_system');
}
