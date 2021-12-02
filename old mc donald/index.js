function surprise(){
			var zzz = Math.floor(Math.random() * 3 +1);
			var butts = document.getElementById("btn1");
			butts.style= "display:none";
			console.log(zzz);
			if (zzz== 1){
				var x = document.getElementById("catsound");
				var img = document.getElementById("animal1");
				var y = document.getElementById("box1");
				img.src = "frog.jpg";
				img.style = "width:250px;height:250px";
				
				x.innerHTML = "croak croak croak";
				y.style = "border: 10px solid red";
			}
			else if (zzz== 2){
				var x = document.getElementById("dogsound");
				var img = document.getElementById("animal2");
				var y = document.getElementById("box2");
				img.src = "frog.jpg";
				img.style = "width:250px;height:250px";
				x.innerHTML = "croak croak croak";
				y.style = "border: 10px solid red";
			}
			else{
				var x = document.getElementById("goatsound");
				var img = document.getElementById("animal3");
				var y = document.getElementById("box3");
				img.src = "frog.jpg";
				img.style = "width:250px;height:250px";
				
				x.innerHTML = "croak  croak  croak";
				y.style = "border: 10px solid red";
			}
		
		}
			function catIn(){
				var img = document.getElementById("animal1");
				var x = document.getElementById("catsound");
				var y = document.getElementById("box1");
				img.src = "1.jpe";
				x.innerHTML = "Meow Meow Meow";
				y.style = "border: 10px solid red";
				
			}
			function catOut(){
				var x = document.getElementById("catsound");
				var y = document.getElementById("box1");
				x.innerHTML = " ";
				y.style = "border: 10px solid black";
			}
			
			function dogIn(){
				var img = document.getElementById("animal2");
				var x = document.getElementById("dogsound");
				var y = document.getElementById("box2");
				img.src ="2.jpg";
				x.innerHTML = "Awww Awww Awww";
				y.style = "border: 10px solid red";
			}
			function dogOut(){
				var x = document.getElementById("dogsound");
				var y = document.getElementById("box2");
				x.innerHTML = " ";
				y.style = "border: 10px solid black";
			}
			
			function goatIn(){
				var img = document.getElementById("animal3");
				var x = document.getElementById("goatsound");
				var y = document.getElementById("box3");
				img.src ="3.jpg";
				x.innerHTML = "bleat bleat bleat";
				y.style = "border: 10px solid red";
			}
			function goatOut(){
				var x = document.getElementById("goatsound");
				var y = document.getElementById("box3");
				x.innerHTML = " ";
				y.style = "border: 10px solid black";
			}