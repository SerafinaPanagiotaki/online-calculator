document.getElementById("cls").addEventListener("click",clearScreen);
document.getElementById("not").addEventListener("click",printx('-'));
document.getElementById("sqrt").addEventListener("click",printx(13));
document.getElementById("mod").addEventListener("click",printx(14));
document.getElementById("mrc").addEventListener("click",printx);
document.getElementById("mm").addEventListener("click",printx);
document.getElementById("mp").addEventListener("click",printx);
document.getElementById("zero").addEventListener("click",number(0));
document.getElementById("one").addEventListener("click",number(1));
document.getElementById("two").addEventListener("click",number(2));
document.getElementById("three").addEventListener("click",number(3));
document.getElementById("four").addEventListener("click",number(4));
document.getElementById("five").addEventListener("click",number(5));
document.getElementById("six").addEventListener("click",number(6));
document.getElementById("seven").addEventListener("click",number(7));
document.getElementById("eight").addEventListener("click",number(8));
document.getElementById("nine").addEventListener("click",number(9));
document.getElementById("dot").addEventListener("click",number(10));
document.getElementById("plus").addEventListener("click",operator('+'));
document.getElementById("abstr").addEventListener("click",operator('-'));
document.getElementById("mult").addEventListener("click",operator('*'));
document.getElementById("division").addEventListener("click",operator('/'));
document.getElementById("equal").addEventListener("click",calculate);

document.getElementById("screen").innerHTML = "Hello";

// var y;
		
		// if(x==11){			/*κουμπί καθαρισμού calculator (C-CE)*/
		// 	newSum="";	
		// 	sum="";
		// 	y="";
		// }
		// else if (x==10){	/*υποδιαστολή*/
		// 	y=".";
		// }else{				/*όλα τα ψηφία από 0 έως 9*/
		// 	y=x;
		// }
		// newSum=sum.concat(y);
		// if(newSum.length<=12){
		// 	document.getElementById("screen").innerHTML=newSum;
		// 	sum=newSum;
		// 	newSum="";
		// }
		// console.log(newSum.length);      /*  μου πετάει μήνυμα σφάλματος */ // console όχι consol


/*ΑΡΧΗ FUNCTIONS*/
var flag=0;

function clearScreen(){
	document.getElementById("screen").innerHTML = "";
	document.getElementById("screen2").innerHTML = "";
	flag=0;
}

function number(x){		
	if (x!=10){
		document.getElementById("screen").innerHTML += x;
	}else{
		if (document.getElementById("screen").innerHTML.includes('.')){
			document.getElementById("screen").innerHTML += '';
		}else{
			document.getElementById("screen").innerHTML += '.';
		}
	}
}
	

	
	
	function operator(x){
		if (x=="+"){
			o1 = document.getElementById("screen").innerHTML;
			document.getElementById("screen").innerHTML = o1+"+";
			document.getElementById("screen2").innerHTML = o1+"+";
		}
	}
	function calculate(){
		z = document.getElementById("screen").innerHTML
		if(z.includes("+")){ // βάλε και τις άλλες πράξεις μέσα
			array  = z.split("+");
			document.getElementById("screen").innerHTML = +array[0] + +array[1];
			// αν θές πολλάπλές προσθέσεις
			// var result = 0;
			// for (x of array){ 
			// 	result += parseFloat(x);
			// }
			// document.getElementById("screen").innerHTML = result;
		}
		clear=true;
	}

	//function clearScreen(){
	//	document.getElementById("screen").innerHTML = "";
	//}