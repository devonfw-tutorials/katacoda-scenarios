In the next two steps you create the message processor and consumer for deleting an employee.

The first class is again the message processor. Copy the following file into the IDE.

<pre class="file" data-filename="devonfw/workspaces/main/devon4j-kafka/core/src/main/java/com/devonfw/application/employee/employeemanagement/service/impl/kafka/DeleteEmployeeMessageProcessor.java">
package com.devonfw.application.employee.employeemanagement.service.impl.kafka;

import javax.inject.Inject;
import javax.inject.Named;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.LoggerFactory;
import com.devonfw.application.employee.employeemanagement.logic.api.Employeemanagement;
import com.devonfw.module.kafka.common.messaging.retry.api.client.MessageProcessor;
import ch.qos.logback.classic.Logger;

@Named
public class DeleteEmployeeMessageProcessor<K, V> implements MessageProcessor<K, V> {

  private static final Logger LOG = (Logger) LoggerFactory.getLogger(DeleteEmployeeMessageProcessor.class);

  @Inject
  private Employeemanagement employeemanagement;

  @Override
  public void processMessage(ConsumerRecord<K, V> message) {
	#TODO-insert
  }

}

</pre>

Now you have to implement the method which deletes the employee from the database. The processMessage has the consumed message as input parameter.

Copy the following code into the processMessage method.

```
long employeeId = 0L;
try {
    employeeId = Long.parseLong(message.value().toString());
} catch (Exception e) {
    LOG.warn("Message conversion failed and it will be ignored", e);
}

this.employeemanagement.deleteEmployee(employeeId);
```{{copy}}

The message will be converted in an employee id which will then be deleted.
	