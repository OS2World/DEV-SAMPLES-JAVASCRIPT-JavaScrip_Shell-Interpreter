function b(z) { 
   print(arguments.z) 
   print (arguments.caller.x) 
   return 99 
} 

function a(x, y) { 
   return  b(534) 
}

print (a(2,3)) 


function list(type) {
   print("<" + type + "L>")
   for (var i=1; i<list.arguments.length; i++)
      print(list.arguments[i])
   print("</" + type + "L>")
}

list("O", "One", "Two", "Three")

function switchtest(i){
switch (i) {
   case "Oranges" : 
      print("Oranges are $0.59 a pound."); 
      break; 
   case "Apples" : 
      print("Apples are $0.32 a pound."); 
      break; 
   case "Bananas" : 
      print("Bananas are $0.48 a pound."); 
      break; 
   case "Cherries" : 
      print("Cherries are $3.00 a pound."); 
      break; 
   default : 
      print("Sorry, we are out of " + i + "."); 
}
}


print("switch(x) test:")
switchtest("Apples");
switchtest("Oranges");
switchtest("Cherries");
switchtest("Bananas");
switchtest("Plums");

v1 = "Cat";
v2 = "Dog";
v3 = false;

print("t && t returns " + (v1 && v2));
print("f && t returns " + (v3 && v1));
print("t && f returns " + (v1 && v3));
print("f && f returns " + (v3 && (3 == 4)));

print("t || t returns " + (v1 || v2));
print("f || t returns " + (v3 || v1));
print("t || f returns " + (v1 || v3));
print("f || f returns " + (v3 || (3 == 4)));

print("!t returns " + (!v1));
print("!f returns " + (!v3));

d = new Date ("December 17, 1995 03:24:00"); 
print (Number(d));
print(d.toLocaleString());


function nestedfunctest(v){
   print("Nested function test:");
   function showmult(x){
      print(x, " * 5 is ", x * 5);
   }
   for (var i = 1; i < v; i++)
      showmult(i);
}
   
nestedfunctest(10);


myRe=/ab*/g;
str = "abbcdefabh"
myArray = myRe.exec(str);
print("Found " + myArray[0] + 
   ". Next match starts at " + myRe.lastIndex)
mySecondArray = myRe.exec(str);
print("Found " + mySecondArray[0] + 
   ". Next match starts at " + myRe.lastIndex)
