// JavaScript Document
//function that giving out content to <section>
function conTem(template,data)
{
	var html=template(data);
	$("section").html(html);
}

	
$(document).ready(function(e) {
	//by default showing home content
	var source=$("#home_template").html();
	var body_template=Handlebars.compile(source);
	conTem(body_template,home);
	 $("#myTeams").hide();
	//bringing home content
    $(".home").click(function(e)
	{
	
    var source=$("#home_template").html();
	var body_template=Handlebars.compile(source);
	conTem(body_template,home);
	 $("#myTeams").hide();
	});
	
	//bring teams content
	$(".teams").click(function()
	{
	
	index=$(this).data("id");
	data=data_teams.main_array[index];
	var source=$("#teams_template").html();
	var teams_template=Handlebars.compile(source);
	conTem(teams_template,data);
	});
	//bringing database content
	 $("#database").click(function(e)
	{
	
    var source=$("#database_template").html();
	var body_template=Handlebars.compile(source);
	conTem(body_template,0);
	});
	
	//Changing the active class of navbar
	$(".teams").click(function()
	{
		 $(".nav").find(".active").removeClass("active");
         $("#teams_id").addClass("active");
		 $("#myTeams").show();
		 
		  
	});
	$("#database").click(function()
	{
		
         $(".nav").find(".active").removeClass("active");
         $("#teams_id").addRemove("active");
		 $("#myTeams").hide();
	});
	
	
});


  
