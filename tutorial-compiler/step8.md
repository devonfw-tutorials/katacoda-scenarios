Last but not least add all the needed functions for this tutorial.

Follow the link below to find a list of all available functions and their descriptions
https://github.com/devonfw-tutorials/tutorial-compiler/wiki/Functions

Feel free to add your own functions to the compiler

You will find all the information you need on:

https://github.com/devonfw-tutorials/tutorial-compiler/wiki/Development



Switch to the IDE and open the file 'tutorials/my-thai-star/index.asciidoc'.

`tutorials/my-thai-star/index.asciidoc`{{open}}


Replace the content in the file as it is shown in the following segment of code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="tutorials/my-thai-star/index.asciidoc" data-target="insert" data-marker="This is the online demo of https://github.com/devonfw/my-thai-star">
This is the online demo of https://github.com/devonfw/my-thai-star
====

First install the devonfw ide. You will find more information about devonfw on https://devonfw.com/website/pages/welcome/welcome.html.
[step]
--
installDevonfwIde([&#34;java&#34;,&#34;mvn&#34;, &#34;npm&#34;, &#34;ng&#34;])
--

Clone the My-Thai-Star repository. You can find it on https://github.com/devonfw/my-thai-star.
[step]
--
cloneRepository(&#34;&#34;, &#34;https://github.com/devonfw/my-thai-star.git&#34;)
--

The next step is to build the java project within the My-Thai-Star repository.
[step]
--
buildJava(&#34;my-thai-star/java/mtsj&#34;)
--

Start the java backend server.
[step]
--
runServerJava(&#34;my-thai-star/java/mtsj/server&#34;, { &#34;startupTime&#34;: 100, &#34;port&#34;: 8081, &#34;path&#34;: &#34;mythaistar&#34; })
--

Install the dependencies of the angular project.
[step]
--
npmInstall(&#34;my-thai-star/angular&#34;)
--

Run the frontend server.
[step]
--
runClientNg(&#34;my-thai-star/angular&#34;, { &#34;startupTime&#34;: 350, &#34;port&#34;: 4200, &#34;path&#34;: &#34;&#34; })
--</pre>

