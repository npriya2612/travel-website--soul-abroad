var f=0;
function signup()
		{
			$("#signupform").css("display","block");
			$("#mainfront").fadeTo(500,0.1);
		}
		function change()
		{
			$("#signupform").html("hello");
		}
		function closesignup()
		{
			$("#signupform").css("display","none");
			$("#mainfront").fadeTo(1000,1);
		}
		
		function navbar(q)
		{
			var x= document.getElementsByClassName('scroll-img');
			var y=document.getElementsByClassName('loc_navbar_elements');
			for(var i=0;i<y.length;i++)
			{
				y[i].style.backgroundColor='grey';
			}
			if(q==1 || q==2 || q==3 || q==4)
			{
				y[3].style.backgroundColor='#ffa31a';
			}
			else if(q==5 || q==6 || q==7 || q==8)
			{
				y[2].style.backgroundColor='#ffa31a';
			}
			else if(q==9 || q==10 || q==11 || q==12)
			{
				y[1].style.backgroundColor='#ffa31a';
			}
			else{
				y[0].style.backgroundColor='#ffa31a';
			}
		}
		function close_info()
		{
			var x= $('#infobg');
			var y=$('.blogcontent');
			x.css("display","none");
			y.css("display","none");
			$("body").css("overflow-y","scroll");
			$("#mainfront").fadeTo(500,1);
		}
		function info(i)
		{
			var x= $('#infobg');
			var y=$('.blogcontent');
			switch(i){
					case 0:
					{
						x.css("background-image","url('blogpt1.PNG')")
						x.css("display","block");
						y.css("display","block");
						$("body").css("overflow-y","hidden");
						$("#mainfront").fadeTo(200,0.1);
						y.html("<h1 class='blogtextheading' style='color:#ffff80;'>Lotus Temple</h1><div class='blogtext' style='color:#ffff80;'>East of Nehru place, this temple is built in the shape of a lotus flower and is the last of seven Major Bahai's temples built around the world. Completed in1986 it is set among the lush green landscaped gardens.The structure is made up of pure white marble The architect Furiburz Sabha chose the lotus as the symbol common to Hinduism, Buddhism Jainism and Islam. Adherents of any faith are free to visit the temple and pray or meditate.Around the blooming petals there are nine pools of water, which light up, in natural light. It looks spectacular at dusk when it is flood lit.</div>");
						break;
					}
					case 1:
					{
						x.css("background-image","url('blogpt2.PNG')")
						x.css("display","block");
						y.css("display","block");
						$("body").css("overflow-y","hidden");
						$("#mainfront").fadeTo(200,0.4);
						y.html("<h1 class='blogtextheading' style='color:#ccebff;'>Taj Mahal</h1><div class='blogtext' style='color:#ccebff;'>Taj Mahal is the epitome of grandeur and splendour, you cannot fathom the beauty of this white marbled monument unless you stand in front of it. As you approach Taj Mahal, it gradually becomes known to you that this is no ordinary monument, but a vision come to life! Moved by its beauty and the deep affection of Shah Jahan for Mumtaz, the Nobel Laureate Rabindranath Tagore called it 'a teardrop on the face of eternity'. A UNESCO World Heritage Site, it is located on the bank of the Yamuna River and is counted among the most popular heritage monuments in India.</div>");
						break;
					}
					case 2:
					{
						x.css("background-image","url('blogpt3.PNG')")
						x.css("display","block");
						y.css("display","block");
						$("body").css("overflow-y","hidden");
						$("#mainfront").fadeTo(200,0.4);
						y.html("<h1 class='blogtextheading' style='color:white;'>Mysore Palace</h1><div class='blogtext' style='color:white;'>The Mysore Palace is a historical palace and the royal residence at Mysore in the Indian State of Karnataka.  Mysore is commonly described as the 'City of Palaces', and there are seven palaces including this one; however, 'Mysore Palace' refers specifically to this one within the Old fort.The land on which the palace now stands was originally known as puragiri, and is now known as the Old Fort. Yaduraya built the first palace inside the Old Fort in the 14th century, which was demolished and constructed multiple times.Mysore Palace is now one of the most famous tourist attractions in India, after the Taj Mahal, with more than 6 million annual visitors</div>");
						break;
					}
					case 3:
					{
						x.css("background-image","url('charminar.PNG')")
						x.css("display","block");
						y.css("display","block");
						$("body").css("overflow-y","hidden");
						$("#mainfront").fadeTo(200,0.4);
						y.html("<h1 class='blogtextheading' style='color:white;'>Char Minar</h1><div class='blogtext' style='color:white;'>This impeccable piece of art was erected by Quli Qutb Shah, during his change of capital from Golconda to Hyderabad. Locate in the city of Hyderabad, Charminar is one of the prominent landmark of the city and a famous tourist spot. The monument got, because of the four minarets (char- four, minar). This monument is built in Indo Islamic style. The monument looks fabulous during the night when it is illuminated.</div>");
						break;
					}
					case 4:
					{
						x.css("background-image","url('hawa_mahal.PNG')")
						x.css("display","block");
						y.css("display","block");
						$("body").css("overflow-y","hidden");
						$("#mainfront").fadeTo(200,0.4);
						y.html("<h1 class='blogtextheading' style='color:#ffccb3;'>Hawa Mahal</h1><div class='blogtext' style='color:#ffccb3;'>The Hawa Mahal in Jaipur is considered as one of the most iconic attractions of the city.  This amazing ventilation that the palace enjoys is the reason why it was named as the Hawa Mahal, which literally translates into the 'Palace of the Winds'.The main purpose behind the construction of this palace was to allow the ladies of the royal family and the court to observe the busy streets of the Johari Bazaar from the many jharokhas of the palace, without being seen themselves. The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries.</div>");
						break;
					}
					case 5:
					{
						x.css("background-image","url('india_gate.PNG')")
						x.css("display","block");
						y.css("display","block");
						$("body").css("overflow-y","hidden");
						$("#mainfront").fadeTo(200,0.4);
						y.html("<h1 class='blogtextheading' style='color:#f5ccff;'>India Gate</h1><div class='blogtext' style='color:#f5ccff;'>India gate situated on the eastern side of Rajpath salutes the soldiers who sacrificed their lives during World War I. The India Gate permits the tourists to retrace the bravado of the Indian soldiers. The monument is now a major tourist spot in Delhi and a common picnic site for tourists and residents.The India gate was structured and designed by Edwin Lutyens in 1921.The foundation stone was laid by His Royal Highness - The Duke of Connaught. The India Gate was built to commemorate the British and Indian soldiers who died in the First World War and hundreds of soldiers who lost their lives in the Northwest Frontier, the Afghan war of 1919 and the Indo-Pak war in 1971.</div>");
						break;
					}
			}
			
		}
function showpanel(a)
{
	var x= document.getElementsByClassName('panel');
	x[a].style.display="block";

}
function hidepanel(a)
{
	var x= document.getElementsByClassName('panel');
	x[a].style.display="none";
}
function left()
{
	if(f==0)
	{
		f=15;
	}
	else{
		f--;
	}
	var x= document.getElementsByClassName('scroll-img');
	var first= x[0].src;
	for(var i=1;i<x.length;i++)
	{
		x[i-1].src= x[i].src;
	}
	x[x.length-1].src=first;
	navbar(f);
}
function right()
{
	var x= document.getElementsByClassName('scroll-img');
	var last= x[x.length-1].src;
	for(var i=x.length-1;i>0;i--)
	{
		x[i].src= x[i-1].src;
	}
	x[0].src=last;
	if(f==15)
	{
		f=0;
	}
	else{
		f++;
	}
	navbar(f);
}
function explore()
{
	var x= document.getElementById('front');
	$(x).fadeOut('slow');
	$("body").css("overflow-y","scroll");

}