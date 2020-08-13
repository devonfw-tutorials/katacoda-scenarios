Now let us change some code in your entity class.

Add a new property in in CustomerEntity.class.
<pre class="file">
private String company;
</pre>

Add also the new getter and setter methods for the new property.
<pre class="file">
/** @return the company */
public String getCompany() {
  return firstname;
}

/** @param company the company to set */
public void setCompany(String company) {
  this.company = company;
}
</pre>

Go back to the terminal an navigate to the root folder of the project.
`cd /root/devonfw/workspaces/main/cobigenexample/`{{execute}}

Compile the project.
`devon mvn compile`{{execute}}

Navigate to your entity class.
`cd core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/`{{execute}}

And start cobigen cli again.
`devon cobigen generate CustomerEntity.java`{{execute}}

`1,3,5,6,8`{{execute}}


Switch back to the ide. You can see that cobigen added code in some of the generated files. Open the file Customer.java which is located in the api module in the package 'customermanagement/common/api/'. You can see cobigen added the new getter and setter methods for the new 'company' property.