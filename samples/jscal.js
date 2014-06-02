// <!-- This script and many more are available online from -->
// <!-- The JavaScript Source!! http://javascriptsource.com -->

function day_title(day_name) {
print("<TD ALIGN=center WIDTH=35>"+day_name+"</TD>")
}
function hilite_today(day,mm) {
if ((this_day == day) && (this_month == mm))
print("<FONT COLOR=\"#FF0000\">")
}
function makeArray(n){
this.length=n;
for (var i = 1; i <= n; i++)
this[i] = 0
return this
}
function fill_table(m_name,m_length,mm) {
day=1
print("<center><TABLE BORDER=3 CELLSPACING=3 CELLPADDING=%3><TR>")  
print("<TD COLSPAN=7 ALIGN=center><B>"+m_name+"   19"+this_year+"</B><TR>")
day_title("Sun")
day_title("Mon")
day_title("Tue")
day_title("Wed")
day_title("Thu")
day_title("Fri")
day_title("Sat")
print("</TR><TR>")
for (var i=1;i<start_day;i++) {
print("<TD>")
}
for (var i=start_day;i<8;i++) {
file_name=(mm+'_'+day+'.htm')
print("<TD ALIGN=center><A HREF ="+file_name+">")
hilite_today(day,mm)
print(day+"</A></TD><FONT COLOR='#000000'>")
day++
}
print("<TR>")
while (day <= m_length) {
for (var i=1;i<=7 && day<=m_length;i++) {
file_name=(mm+'_'+day+'.htm')
print("<TD ALIGN=center><A HREF ="+file_name+">")
hilite_today(day,mm) 
print(day+"</TD><FONT COLOR='#000000'>")
day++
}
print("</TR><TR>")
}
print("</TR></TABLE></center><BR>")
start_day = i
}
// End -->

month=new makeArray(12)
month[1]="January"
month[2]="February"
month[3]="March"
month[4]="April"
month[5]="May"
month[6]="June"
month[7]="July"
month[8]="August"
month[9]="September"
month[10]="October"
month[11]="November"
month[12]="December"
month_length = new makeArray(12)
month_length[1]=31
month_length[2]=28
month_length[3]=31
month_length[4]=30
month_length[5]=31
month_length[6]=30
month_length[7]=31
month_length[8]=31
month_length[9]=30
month_length[10]=31
month_length[11]=30
month_length[12]=31
today = new Date()
this_day = today.getDate()
this_month = today.getMonth()+1
this_year = today.getYear()
begin_date = new Date("January 1, 19"+this_year)
start_day = begin_date.getDay()+1
if (start_day == 1) {
start_day = 8
}
for (var m = 1;m<=12;m++){
fill_table(month[m],month_length[m],m)
}
