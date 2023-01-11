
//print 1-10 in different line
/*for(let i=1;i<=10;i++){
		console.log(i)
}
let j=1;
while(j<=10){
		console.log(j);
		j++;
}*/


// print 1-10 in reverse order in different line 
/*for(let i=10;i>=1;i--){
		console.log(i)
}
let j=10;
while(j>=1){
		console.log(j);
		j--;
}
*/


//break if number== 5
/*for(let i=1;i<=10;i++){
		console.log(i)
		if(i==5){
				break;
		}
}*/


// skiping 5,6,7 
/*for(let i=1;i<=10;i++){
		if(i==5 || i==6 || i==7){
				continue;
			
		}console.log(i)
}*/


// to print all values in an array
/*let friends = ["hiten", "darshan", "chirag", "sachin"];

for (let i = 0; i <= friends.length; i++) {
	console.log(friends[i]);
}*/


// to remove an element from han arraay
/*let friend = ["hiten", "darshan", "chirag", "sachin"];
friend.pop();
console.log(friend);
*/

// to check how many numbers or strings are there in an array
/*count = 0
let friends = [12, "darshan", 1, "sachin"];

for (let i = 0; i < friends.length; i++) {
	if (typeof (friends[i]) == "string") {
		count++;
	}
}
console.log(count);*/


//count even and odd numbers in an array
/* let a=[1,2,3,4,5];
 let even_count=0;
 let odd_count=0;
 for(let i=0;i<a.length;i++){
		 if(a[i]%2==0){
				 even_count++;
		 }
		 else{
				 odd_count++;
		 }
 }
 console.log("even:",even_count);
 console.log("odd:",odd_count);
 */


// find index of max and min number
/*let a = [1, 2, 3, 4, 5];
let max = [0];
let min = [0];
let min_index = 0;
let max_index = 0;
for (let i = 0; i < a.length; i++) {
	if (a[i] < min) {
		min = a[i];
		min_index = i;
	}
	if (a[i] > max) {
		max = a[i];
		max_index = i;
	}

}
console.log(min_index);
console.log(max_index);*/


// check if number less than 0  update value to 0
/* let a=[1,2,-3,-4,-5];

 for(let i=0;i<a.length;i++){
		 if(a[i]<0){
		 a[i]=0;
 }
 }
 console.log(a);
 */

// print string elements in different line
/*let a="hello";
for(let i=0;i<a.length;i++){
		console.log(a[i]);
}*/

// to change the elements from the string
/*let a="hnt";
let b="";
for(let i=0;i<a.length;i++){
		if(i==0){
				b=b+"a"
		}
		else{
				b=b+a[i];
		}
}console.log(b);
*/

//update string elements
/*let a="go%.a$.";
let b="";
for(let i=0;i<a.length;i++){
		if(a[i]=="%"){
				b=b+"h";
		}
		else if(a[i]=="$"){
				b=b+"n";
		}
		else if(a[i]=="."){
			 b=b+"";
		}
		else{
				b=b+a[i]
		}
}
console.log(b);
*/

//nested loop
/*for(let student=1;student<=4;student++){
		console.log("student attending",student)
		for(let classes=1;classes<=4;classes++){
				console.log("class",classes)
		}
}*/

//nested loop
/*for(let min=1;min<=60;min++){
		console.log("minutes",min)
		for(let sec=1;sec<=60;sec++){
				console.log("seconds",sec)
		}
}*/

//seeds in horizontal manner nested loop*****
/*for(let farm=1;farm<=3;farm++)
{
		console.log("farm",farm);
		let b="";
		for(let a=1;a<=5;a++)
		{
				b=b+"*";
		}
		console.log(b);
}*/


//*    print  output for * pattern
//**
//***
//****
//*****
/*let b=""
for(let farm=1;farm<=5;farm++)
{
     b=b+"*";
    console.log(b);
}
*/