Create the entity class which will be passed to the cobigen cli generator later


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

