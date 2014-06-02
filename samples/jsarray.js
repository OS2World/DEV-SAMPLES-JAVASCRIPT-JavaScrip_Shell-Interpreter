msgArray = new Array()
msgArray [0] = "Hello"
msgArray [99] = "world"
// The following statement is true,
// because defined msgArray [99] element.
if (msgArray .length == 100) 
   print("The length is 100.")
a = new Array(4)
for (i=0; i < 4; i++) {
   a[i] = new Array(4)
   for (j=0; j < 4; j++) {
      a[i][j] = "["+i+","+j+"]"
   }
}
for (i=0; i < 4; i++) {
   str = "Row "+i+":"
   for (j=0; j < 4; j++) {
      str += a[i][j]
   }
   print(str,"<p>")
}

a = new Array(4)
for (i=0; i < 4; i++) {
   a[i] = new Array(4)
   for (j=0; j < 4; j++) {
      a[i][j] = "["+i+","+j+"]"
   }
}
for (i=0; i < 4; i++) {
   str = "Row "+i+":"
   for (j=0; j < 4; j++) {
      str += a[i][j]
   }
   print(str,"<p>")
}


myFish = ["angel", "clown", "mandarin", "surgeon"];
print("myFish before: " + myFish);
popped = myFish.pop();
print("myFish after: " + myFish);
print("popped this element: " + popped);

myFish = ["angel", "clown"];
print("myFish before: " + myFish);
pushed = myFish.push("drum", "lion");
print("myFish after: " + myFish);
print("pushed this element last: " + pushed);

myFish = ["angel", "clown", "mandarin", "surgeon"];
print("myFish before: " + myFish);
shifted = myFish.shift();
print("myFish after: " + myFish);
print("Removed this element: " + shifted);

//Using slice, create newCar from myCar.
myHonda = {color:"red",wheels:4,engine:{cylinders:4,size:2.2}} 
myCar = [myHonda, 2, "cherry condition", "purchased 1997"] 
newCar = myCar.slice(0,2)

//Write the values of myCar, newCar, and the color of myHonda 
// referenced from both arrays.
print("myCar = " + myCar + "<BR>")
print("newCar = " + newCar + "<BR>") 
print("myCar[0].color = " + myCar[0].color + "<BR>") 
print("newCar[0].color = " + newCar[0].color + "<BR><BR>")

//Change the color of myHonda.
myHonda.color = "purple"
print("The new color of my Honda is " + myHonda.color + "<BR><BR>")

//Write the color of myHonda referenced from both arrays.
print("myCar[0].color = " + myCar[0].color + "<BR>") 
print("newCar[0].color = " + newCar[0].color + "<BR>")

myFish = ["angel", "clown", "mandarin", "surgeon"];
print("myFish: " + myFish + "<BR>");

removed = myFish.splice(2, 0, "drum");
print("After adding 1: " + myFish);
print("removed is: " + removed + "<BR>");

removed = myFish.splice(3, 1)
print("After removing 1: " + myFish);
print("removed is: " + removed + "<BR>");

removed = myFish.splice(2, 1, "trumpet")
print("After replacing 1: " + myFish);
print("removed is: " + removed + "<BR>");

removed = myFish.splice(0, 2, "parrot", "anemone", "blue")
print("After replacing 2: " + myFish);
print("removed is: " + removed);

stringArray = new Array("Blue","Humpback","Beluga")
numericStringArray = new Array("80","9","700")
numberArray = new Array(40,1,5,200)
mixedNumericArray = new Array("80","9","700",40,1,5,200)

function compareNumbers(a, b) {
   return a - b
}

print("<B>stringArray:</B> " + stringArray.join() +"<BR>")
print("<B>Sorted:</B> " + stringArray.sort() +"<P>")

print("<B>numberArray:</B> " + numberArray.join() +"<BR>")
print("<B>Sorted without a compare function:</B> " + numberArray.sort() +"<BR>")
print("<B>Sorted with compareNumbers:</B> " + numberArray.sort(compareNumbers) +"<P>")

print("<B>numericStringArray:</B> " + numericStringArray.join() +"<BR>")
print("<B>Sorted without a compare function:</B> " + numericStringArray.sort() +"<BR>")
print("<B>Sorted with compareNumbers:</B> " + numericStringArray.sort(compareNumbers) +"<P>")

print("<B>mixedNumericArray:</B> " + mixedNumericArray.join() +"<BR>")
print("<B>Sorted without a compare function:</B> " + mixedNumericArray.sort() +"<BR>")
print("<B>Sorted with compareNumbers:</B> " + mixedNumericArray.sort(compareNumbers) +"<BR>")

myFish = ["angel", "clown"];
print("myFish before: " + myFish);
unshifted = myFish.unshift("drum", "lion");
print("myFish after: " + myFish);
print("New length: " + unshifted);
