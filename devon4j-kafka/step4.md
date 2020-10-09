To test the kafka messaging services the application contains a unit test.
`devonfw/workspaces/main/devon4j-kafka/core/src/test/java/com/devonfw/application/employee/employeemanagement/service/impl/rest/KafkaDemoServiceTest.java`{{open}}

The test creates and deletes an employee using message passing by kafka. For this the test contains the producer part of kafka. It creates an employee object and converts it into a string message. Then a ProducerRecord object is created to which the message is passed. The first parameter in the constructor is the topic the record is sent to.

For deleting the employee a new ProducerRecord is created. This consumer gets the id of the employee and sends it to the topic 'employeeapp-employee-v1-delete' for deletion.

For passing the test you now have to create the consumer classes. This is done in the next steps.