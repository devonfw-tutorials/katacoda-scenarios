Furthermore, we can change the CustomerEntity afterwards and update our source files simply by running cobigen again.


Switch to the IDE and open the file 'devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java'.

`devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java`{{open}}


Replace the content in the file as it is shown in the following segment of code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java" data-target="insert" data-marker="private int age;">
private int age;
private String company;

public String getCompany() {
    return company;
}
public void setCompany(String company) {
    this.company = company;
}
</pre>



## CobiGen Java

Open the following java file in the IDE.
`devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java`{{open}}

You can use the plugin simply via the context menu. Make a right click on the java file (in the explorer on the left or in the editor itself). The context menu will open and you can start the CobiGen Plugin by clicking on 'CobiGen'.

A terminal will open on the bottom of the IDE and CobiGen CLI will start.

You can choose the templates CobiGen should use by entering the numbers in the terminal of the IDE.

`1,3,5,6,8`

