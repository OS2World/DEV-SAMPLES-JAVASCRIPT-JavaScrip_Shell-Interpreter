re = /apples/gi;
str = "Apples are round, and apples are juicy.";
newstr=str.replace(re, "oranges");
print(newstr.fontcolor("orange") + '<p>')

str = "Twas the night before Xmas...";
newstr=str.replace(/xmas/i, "Christmas");
print(newstr.bold() + '<p>')

re = /(\w+)\s(\w+)/;
str = "John Smith";
newstr = str.replace(re, "$2, $1");
print(newstr.italics() + '<p>');

names = "Harry  Trump  ;Fred Barney; Helen   Rigby ;  Bill Abel ;Chris Hand ";
print (names + "<BR>" + "<BR>");
re = /\s*;\s*/;
nameList = names.split (re);
print(nameList + '<p>');

str1="The morning is upon us. "
str2=str1.slice(3,-5)
print(str2 + '<p>')

function splitString (stringToSplit,separator) {
   arrayOfStrings = stringToSplit.split(separator)
   print ('<P>The original string is: "' + stringToSplit + '"')
   print ('<BR>The separator is: "' + separator + '"')
   print ("<BR>The array has " + arrayOfStrings.length + " elements: ")

   for (var i=0; i < arrayOfStrings.length; i++) {
      print (arrayOfStrings[i] + " / ")
   }
}

var tempestString="Oh brave new world that has such people in it."
var monthString="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"

var space=" "
var comma=","

splitString(tempestString,space)
splitString(tempestString)
splitString(monthString,comma)

print("Pi is " + Math.PI + '<p>')
