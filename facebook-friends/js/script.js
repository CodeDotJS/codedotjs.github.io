var images = "", count = 140;
for(var i = 1; i <= count; i++)
	images += '<img src="https://raw.githubusercontent.com/CodeDotJS/codedotjs.github.io/master/facebook-friends/images/'+i+'.jpg" />';

$(".grid").append(images);

var d = 0;
var ry, tz, s;

$(".animate").on("click", function(){
	$("img").each(function(){
		d = Math.random()*1000;
		$(this).delay(d).animate({opacity: 0}, {
			step: function(n){
				s = 1-n;
				$(this).css("transform", "scale("+s+")");
			}, 
			duration: 1000, 
		})
	}).promise().done(function(){
		storm();
	})
})

function storm()
{
	$("img").each(function(){
		d = Math.random()*1000;
		$(this).delay(d).animate({opacity: 1}, {
			step: function(n){
				ry = (1-n)*360;
				tz = (1-n)*1000;
				$(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
			}, 
			duration: 6000, 
			easing: 'easeOutBounce', 
		})
	})
}

