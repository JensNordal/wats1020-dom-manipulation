//////////////////////////////////////////////////
// WATS1020 Dom Manipulation Assignment
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
   
    
    
    
    //===========================
    // Begin login form script
    //===========================
    
    // Listen for clicks on "Login" button. On click hide login form, show Welcome message with  user name and "Logout" button
    
    $('#login-button').on("click", function(){
        $('#login-form').hide(); 
		$('div.user-info').show(); 
		$('.user-fullname').html(userInfo.firstName + " " + userInfo.lastName); 
    });
    
    // Listen for clicks on "Logout" button. On click hide "Logout" button and show login form
    
    $('#logout-button').on("click", function(){
        $('div.user-info').hide();
        $('#login-form').show();
    });
    
    
    
    
    //================================================
    // Begin script to display and hide details text
    //================================================
    
    // Listen for clicks on all "View Details" and "Learn More" buttons
    // Hide or display details text and alter button text accordingly
    
    $('.view-details').on('click', function(event){
        console.log(event);
        var targetElement = event.target;
        var container = targetElement.parentElement.parentElement;
        $(container).find('.details').each(function(index, el) {
            if ($(el).is(':visible')){
            $(el).fadeOut();
            targetElement.innerText = "View Details";    
            } else {
                $(el).fadeIn();
                targetElement.innerText = "Hide Details";
            }
        });
    });
   
    
    
    
    //==============================
    // Begin vote counting script
    //==============================
    
    // Listen for clicks on 'vote' class buttons, increment counter and update progress bar
    
    var voteCounts = {
        great: 10,
        greatest: 30,
        total: 0
    };
    
    
	$("#voteGreat").on('click', function(event) {
		voteCounts.great++;
		var currentWidth = $(".great-progress").width(voteCounts.great + '%');
	});
	
	
	$("#voteGreatest").on('click', function(event) {
		voteCounts.greatest++;
		var currentWidth = $(".greatest-progress").width(voteCounts.greatest + '%');
	});  
    
});
