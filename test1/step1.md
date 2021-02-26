To use the CobiGen cli you first have to do the following Setup:


## devonfw setup



Create the directory where the devonfw ide will be installed.

`mkdir devonfw`{{execute T1}}

`cd devonfw`{{execute T1}}


To install devonfw execute the following commands. More information about setting up your ide on https://devonfw.com/website/pages/docs/devonfw-ide-introduction.asciidoc.html#setup.asciidoc

First you have do download and extract the installation files.

`wget -c https://bit.ly/2BCkFa9 -O - | tar -xz`{{execute T1}}

Now start the installation process. The tools that are installed within the IDE can be configured in a settings repository. A repository that you can use has already been created by the setup script. It is located in the '/root/devonfw-settings' folder.

`bash setup /root/devonfw-settings/settings.git`{{execute T1}}

The installation process may take a while.

Accept the licence agreements.
`yes`{{execute T1}}

The devonfw ide is now installed. To use the new 'devon' commands you have the open a new terminal or use the following command:

`. ~/.bashrc`{{execute T1}}



## Install cobigen

`devon cobigen`{{execute T1}}



## Setting up your java project

Please change the folder to &#39;workspaces/main&#39;.

`cd workspaces/main`{{execute T1}}

Now you can use devonfw to setup a java project for you by executing the following devon command.

`devon java create com.example.application.cobigenexample`{{execute T1}}



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'CustomerEntity.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java">
package com.example.application.cobigenexample.customermanagement.dataaccess.api;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = &#34;Customer&#34;)
public class CustomerEntity {

  private String firstname;

  private String lastname;

  private int age;

  /**
   * @return the firstname
   */
  public String getFirstname() {
    return firstname;
  }

  /**
   * @param firstname the firstname to set
   */
  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  /**
   * @return the lastname
   */
  public String getLastname() {
    return lastname;
  }

  /**
   * @param lastname the lastname to set
   */
  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  /**
   * @return the age
   */
  public int getAge() {
    return age;
  }

  /**
   * @param age the age to set
   */
  public void setAge(int age) {
    this.age = age;
  }

}
</pre>



Please change the folder to &#39;cobigenexample&#39;.

`cd cobigenexample`{{execute T1}}
 
Use the following devon command to build the java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.

It&#39;s all setup now, so you can start using CobiGen.
