# The README.md File

## What is this this?
This is a ReadMe file. It's a standard file to have in a GitHub repository. They're basically a small description/tutorial of what the project does. When you create one inside of a repository, GitHub will show it (by default) on the repositry's home page. Typically, it would give a short description about what it does, and a small summary of how to install it and get it running.

#### Markdown Language
The .md file extension represents the MarkDown syntax. It's really easy. If you're looking at this file and it looks neat and pretty, its because I used MarkDown to style it. If you view the raw version of this file, you'll see what I mean.

#### Sperry
Since we both know what this repository does, and not many other people are going to be viewing it, I figured I'd find cool stuff for you to try out or play around with and put it here. Its up to you, you dont have to. I just figured I would put some resources for cool stuff to make it easier.

### Resources
* [Materialize](http://materializecss.com/ "Materialize"): This is a library by Google that makes styling your web page a lot easier. All of those changes that made your /music site blue were done with Materialize. All I did was add the class 'blue' to the back button and the <nav> element.
  
### Examples
* The Materialize Grid lets you give an element a class name of "col" (which stands for column). A col needs a width so it knows how far to stretch. The grid uses a scale of 12, so if you have two columns with a size of 6, they will be next to each other (in the same row) and they will each take up half (6 is half of 12) of the screen. So if you wanted a row of three items, you would make the columns have a size of 4 (4 width * 3 columns = 12 total width). Here's an example, I used the grid to make your spotify playlists take up the same amount of room, and they're next to each other. 


<div class="frame_container row center">
		<div class="iframe **col s6**">
			<h3 for="hehe-iframe">HeHe</h3>
			<iframe id="hehe-iframe" src="https://open.spotify.com/user/yakut.eksin5255/playlist/2tv54dYJ2kLLyTlGce0E1v" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
		</div>
		<div class="iframe **col s6**">
			<h3 for="fire-iframe">Fire</h3>
			<iframe id="Fire-iframe" src="http://spoti.fi/2ziSg6l" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
		</div>
		<div class="iframe **col s12**">
			<h3 for="trap-iframe">Trap</h3>
			<iframe id="trap-iframe" src="https://open.spotify.com/user/coleman_thet03/playlist/41a5I8Ql1sTp5Di7gWy2qo" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
		</div>
	</div>

