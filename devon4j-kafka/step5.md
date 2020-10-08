Create a new package for the kafka consumer classes inside the 'employeemanagement/service/impl/' package of the core module.
`mkdir -p /root/devonfw/workspaces/main/devon4j-kafka/core/src/main/java/com/devonfw/application/employee/employeemanagement/service/impl/kafka/`{{execute}}

The first class you have to create is the message processor, which creates a new employee when a message is passed by kafka. Copy the following classes into the IDE by clicking 'Copy to editor'.

<pre class="file" data-filename="devonfw/workspaces/main/devon4j-kafka/core/src/main/java/com/devonfw/application/employee/employeemanagement/service/impl/kafka/SaveEmployeMessageProcessor.java">
package com.devonfw.application.employee.employeemanagement.service.impl.kafka;

import javax.inject.Inject;
import javax.inject.Named;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.LoggerFactory;
import com.devonfw.application.employee.employeemanagement.logic.api.Employeemanagement;
import com.devonfw.application.employee.employeemanagement.logic.api.to.EmployeeEto;
import com.devonfw.module.kafka.common.messaging.retry.api.client.MessageProcessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import ch.qos.logback.classic.Logger;

@Named
public class SaveEmployeMessageProcessor<K, V> implements MessageProcessor<K, V> {

  private static final Logger LOG = (Logger) LoggerFactory.getLogger(SaveEmployeMessageProcessor.class);

  @Inject
  private Employeemanagement employeemanagement;

  @Override
  public void processMessage(ConsumerRecord<K, V> message) {
    #TODO-insert
  }
}
</pre>

The SaveEmployeMessageProcessor class processes the consumed message. You now have to implement the processMessage method. The consumed message will be passed to this method as input parameter.
Copy the following code snippet into the method.

```
EmployeeEto convertedValue = null;
try {
    convertedValue = new ObjectMapper().readValue(message.value().toString(), EmployeeEto.class);
} catch (Exception e) {
    LOG.warn("Message conversion failed. Message will be ignored.", e);
}
if (convertedValue != null) {
    this.employeemanagement.saveEmployee(convertedValue);
}
```{{copy}}

The method first tries to convert the message into an employee object. Then the employee will be saved to the database.
