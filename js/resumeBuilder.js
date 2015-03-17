var bio = {
	"name" : "Jimmy Maher",
	"role": "Web Developer",
	"contacts": {
		"email": "jmaher31@yahoo.com", 
		"mobile": "925-297-5075",
		"github" : "https://github.com/jmaher31",
		"twitter" : "jimmytmaher",
		"linkedIn":"https://www.linkedin.com/in/jimmymaher",
		"location" : "San Francisco"
	},
	"welcomeMessage" : "Thank you for visiting my online resume page",
	"skills" : [
		"linux", "web development", "application support", "project management"
	],
	"biopic" : "images/fry.jpg",
	
	"display" : function(){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);       
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        //var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);


        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedGithub);
        //$("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLinkedIn);
        $("#topContacts").append(formattedLocation);
        $("#header").append(formattedMessage);        
        $("#header").append(formattedPicture);

        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLinkedIn);

        //Skills
        $("#header").append(HTMLskillsStart);
        for (skills in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
            $("#skillsH3").append(formattedSkills);
        }    
	}
};



var education = {
		"schools" : [
			{
				"school" : "University of Warwick",
				"dates" : "2014",
				"location" : "Warwick",  
				"degree" : "MBA",
				"major" : "Business"
			},
			{
				"school" : "University of Limerick",
				"dates" : "1998",
				"location" : "Limerick",
				"degree" : "Bachelor of Arts",
				"major" : "Education"
			}
		],

		"onlineSchools" : [
			{
				"school" : "Udacity",
				"dates" : "Current",
				"title" : "Front-End Web-Development Nanodegree",
				"URL" : "https://www.udacity.com/course/nd001"
			}
		],

"display": function () {
	
    $("#education").append(HTMLschoolStart);  
	for (schools in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].school);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
		//var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);


    	$(".education-entry").append(formattedSchoolName);        
        $(".education-entry").append(formattedSchoolDates);
        $(".education-entry").append(formattedSchoolLocation);
        //$(".education-entry").append(formattedSchoolDegree);                
        $(".education-entry").append(formattedSchoolMajor);
    	}

    $("#education").append(HTMLonlineClasses);
    for (onlineSchools in education.onlineSchools){
    	var formattedOnlineSchoolName = HTMLonlineSchool.replace("%data%",education.onlineSchools[onlineSchools].school);
    	var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%",education.onlineSchools[onlineSchools].title);
    	var formattedOnlineSchoolDates = HTMLonlineDates.replace("%data%",education.onlineSchools[onlineSchools].dates);
    	var formattedOnlineSchoolURL = HTMLonlineURL.replace("%data%",education.onlineSchools[onlineSchools].URL);
    	//concat schoolName and courseTitle
    	//var formattedOnlineSchoolCourse = formattedOnlineSchoolName + formattedOnlineCourseTitle;

    	$("h3:last").append(formattedOnlineCourseTitle);
    	$("a:last").append(formattedOnlineSchoolName);
    	$("h3:last").append(formattedOnlineSchoolDates);
    	$("h3:last").append(formattedOnlineSchoolURL);
    
  

    	}
    }
};


var work = {
	"jobs": [
		{
			"employer" : "Mocana",
			"title" : "Director of Global Support",
			"location" : "San Francisco",
			"datesWorked" : "5/13 to present",
			"description" : "Responsible for global post-sales technical services including customer success, customer support and training"
		},
		{
			"employer" : "Cloudian",
			"title" : "Senior Director of Technical Services",
			"location" : "Foster City",
			"datesWorked" : "5/12 to 5/13",
			"description" : "Responsible for all technical services including pre-sales, customer support and training"	
		},
		{
			"employer" : "Merced Systems",
			"title" : "Director of Customer Operations",
			"location" : "Redwood City",
			"datesWorked" : "1/10 to 5/12",
			"description" : "Responsible for SaaS operations and technical support"
		}
	
	],

	"display": function () {
		for (job in work.jobs) {
			//create new div for work experience
			$("#workExperience").append(HTMLworkStart);
			//concat employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates =  HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);		
			
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
			$(".work-entry:last").append(formattedLocation);
		}

	}	

};

var projects = {
	"projects" : [
		{			
			"project" : "My Third Project",
			"dates" : "5/1/13 to 12/23/14",
			"description" : "Lead in the definition for a complete set of procedures, tools, and methodology to integrate three business groups to a common set of standards for high availability.",
			"image" : "images/kitten1.jpeg"
		},
		{			
			"project" : "My Second Project",
			"dates" : "4/1/12 to 4/30/13",
			"description" : "Lead in the definition for a complete set of procedures, tools, and methodology to integrate three business groups to a common set of standards for high availability.",
			"image" : "images/kitten2.jpeg" 
		},
		{			
			"project" : "My First Project",
			"dates" : "6/1/11 to 2/28/12",
			"description" : "Lead in the definition for a complete set of procedures, tools, and methodology to integrate three business groups to a common set of standards for high availability.",
			"image" : "images/kitten3.jpeg"
		}
	],

	"display": function (){
		

		for(project in projects.projects) {
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].project);	
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

$("#mapDiv").append(googleMap);


	