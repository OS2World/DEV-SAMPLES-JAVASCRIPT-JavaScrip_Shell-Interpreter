// This script and many more are available online from -->
// The JavaScript Source!! http://javascriptsource.com -->

num= new Array(16);
for (i=0; i<16; i++) {
num[i]=Math.floor(16*Math.random()+1);
if (num[1]==num[0]) {
while (num[1]==num[0]) {
num[1]=Math.floor(16*Math.random()+1);
   }
}
if (num[2]==num[1] || num[2]==num[0]) {
while (num[2]==num[1] || num[2]==num[0]) {
num[2]=Math.floor(16*Math.random()+1);
   }
}
if (num[3]==num[2] || num[3]==num[1] || num[3]==num[0]) {
while (num[3]==num[2] || num[3]==num[1] || num[3]==num[0]) {
num[3]=Math.floor(16*Math.random()+1);
   }
}
print(num[i],",");
}
