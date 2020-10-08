To test the kafka messaging services the application contains a unit test.
`devonfw/workspaces/main/devon4j-kafka/core/src/test/java/com/devonfw/application/employee/employeemanagement/service/impl/rest/KafkaDemoServiceTest.java`{{open}}

The test creates and deletes an employee using message passing by kafka. For this the test contains the consumer part of kafka.
For passing the test you now have to create the consumer classes in the next steps.