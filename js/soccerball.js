
SIGNED IN AS
pgwheeler
Back to Slack
Home
Account & Profile
Configure Apps
Files
Analytics
Customize
Workspace Settings
Tour
Download Apps
Brand Guidelines
Help
API
Pricing
Contact
Policies
Our Blog
Sign Out
Made with  by Slack
Menu Code Academy
Workspaces
Help
Launch Slack
Launch
sblandon
animation example  
742b JavaScript/JSON snippet created on November 15, 2017.

ACTIONS

1
<!DOCTYPE html>
2
<html>
3
<style>
4
#myContainer {
5
  width: 400px;
6
  height: 400px;
7
  position: relative;
8
  background: yellow;
9
}
10
#myAnimation {
11
  width: 50px;
12
  height: 50px;
13
  position: absolute;
14
  background-color: red;
15
}
16
</style>
17
<body>
18
​
19
<p>
20
<button onclick="myMove()">Click Me</button> 
21
</p>
22
​
23
<div id ="myContainer">
24
<div id ="myAnimation"></div>
25
</div>
26
​
27
<script>
28
function myMove() {
29
  var elem = document.getElementById("myAnimation");   
30
  var pos = 0;
31
  var id = setInterval(frame, 10);
32
  function frame() {
33
    if (pos == 600) {
34
      clearInterval(id);
35
    } else {
36
      pos++; 
37
      elem.style.top = pos + 'px'; 
38
      elem.style.left = pos + 'px'; 
39
    }
40
  }
41
}
42
</script>
43z
​
44
</body>
45
</html>
46
​
 wrap long lines
sblandon Today at 8:25 PM  
Please create a soccer field that allow me to put a soccer ball from corner x to corner Y.

Add Comment
Commenting in #general