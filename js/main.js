   const nav_toggle = document.getElementById("toggle_nav");
            const menu = document.getElementById("menu");
            nav_toggle.addEventListener("click", function ()
            {
                menu.classList.toggle("menu_active");
             
                      document.getElementById("fix_area").classList.toggle("border_bottom");
               
                

            })
            window.addEventListener("scroll" , function() {
                if(window.scrollY>25){
                    document.getElementById("fix_area").style.boxShadow="0px 3px 6px rgba(0,0,0,0.28)";
                    

                }else if(window.scrollY < 26){
                     document.getElementById("fix_area").style.boxShadow = ""
                }else if(window.scrollY>600){
                    document.getElementById("scroll_top").style.opacity=1;
                }else if(window.scrollY<599){
                    document.getElementById("scroll_top").style.opacity=0;
                }
                
            })







//menu=====================================================================================            



















           $('#scroll_top').click(function ()
            {
                $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
                return false;
            });


   

  
    /*
        //var scroll=new SmoothScroll('a[href*="#"]');
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 500,
            speedAsDuration: false,
            easing: 'easeInOutQuint'
            customEasing: function (time)
           {

                // return <your formulate with time as a multiplier>

                // Example: easeInOut Quad
            //    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

            }
        }); 
        */
        
       
/*
        const list = document.querySelectorAll(".link_menu");

            list.forEach((e)=>{
                e.addEventListener("click", function ()
                {


                    for (let x = 0; x < list.length; x++)
                    {
                        list[x].classList.remove("active");
                    }
                    this.classList.add("active");

                })
            })






*/



            //one page nav -----smooth scroll===================




            $('#menu').onePageNav({
                 	filter: ':not(.external)'
});
/*
$('#menu').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});
*/

