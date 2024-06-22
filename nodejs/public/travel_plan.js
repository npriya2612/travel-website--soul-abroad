//striking completed tasks

$("ul").on('click','.check', function(){
	$(this).parent().toggleClass("strike");
});
 
 //click on Remove to delete
 //select ul and not li so that when new li are added they too can get removed
 
 $("ul").on('click','.remove',function(){
 	$(this).parent().fadeOut('slow',function(){
 		$(this).remove();
 	});
 }); 
 
 //creating new tasks

 $(":text").keypress(function(event){
 	if (event.which===13){
 		var text= $(this).val();
 		$("ul").append("<li><span class = 'check'><input type='checkbox'></span>"+ text + "<span class='remove'>Remove</span></li>");
 		$(this).val("");//clearing the input bar
 	}
 });
 
 //hiding input bar

 $('.fa-edit').click(function(){
 		$(":text").fadeToggle(500);
 	});