
$(document).ready(function(){
    
    $(".read_more").click(function(){
    	$(this).parent().find(".panel").slideToggle("slow");
    	if($(this).text()==="Read More"){
    		$(this).text("Read Less");
    	}
    	else if(($(this).text()==="Read Less")){
    		$(this).text("Read More");
    	}
    })
});