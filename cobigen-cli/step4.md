Now you have to create the entity class which will be passed to the cobigen cli generator later.

Create a new package in the core module of your project. The entity class is class is called 'CustomerEntity' so the name of the package has to be 'customermanagement/dataaccess/api/'

`mkdir core/src/main/java/com/example/application/cobigenexample/customermanagement/`{{execute}}

`mkdir core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/`{{execute}}

`mkdir core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/`{{execute}}

Inside this package create a new java class called 'CustomerEntity.java'. Switch to the ide and click 'Copy to Editor' in the following java class.

<pre class="file" data-filename="devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java">
package com.example.application.cobigenexample.customermanagement.dataaccess.api;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Customer")
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