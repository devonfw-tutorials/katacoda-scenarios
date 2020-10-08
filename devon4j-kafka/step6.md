The second class you have to create is the consumer, which uses the message processor from the previous step to create a new employee. The consumer listens for messages for a given topic and processes the consumed messages.

Copy the following classes into the IDE by clicking 'Copy to editor'.

<pre class="file" data-filename="devonfw/workspaces/main/devon4j-kafka/core/src/main/java/com/devonfw/application/employee/employeemanagement/service/impl/kafka/SaveEmployeeConsumer.java">
package com.devonfw.application.employee.employeemanagement.service.impl.kafka;

import javax.inject.Inject;
import javax.inject.Named;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import com.devonfw.module.kafka.common.messaging.api.config.MessageReceiverConfig;
import com.devonfw.module.kafka.common.messaging.retry.api.client.MessageRetryOperations;
import com.devonfw.module.kafka.common.messaging.retry.api.config.MessageDefaultRetryConfig;

@Named
public class SaveEmployeeConsumer<K, V> {

  private static final Logger LOG = LoggerFactory.getLogger(SaveEmployeeConsumer.class);

  @Inject
  private MessageRetryOperations<K, V> messageRetryOperations;

  @Inject
  private SaveEmployeMessageProcessor<K, V> saveEmployeeMessageProcessor;

  @KafkaListener(topics = "employeeapp-employee-v1-add", groupId = "${messaging.kafka.consumer.groupId}", containerFactory = "kafkaListenerContainerFactory")
  public void consumer(ConsumerRecord<K, V> consumerRecord, Acknowledgment acknowledgment) {
    #TODO-insert
  }
}
</pre>

The @KafkaListener annotation configures on which topic the consumer has to listen. In this case the consumer listens for messages of the 'employeeapp-employee-v1-add' topic. When the consumer gets a message, the message will be processed by the consumer method.
Copy the following code into the consumer method.

```
try {
    this.messageRetryOperations.processMessageWithRetry(consumerRecord, this.saveEmployeeMessageProcessor);

	// Acknowledge the listener.
    acknowledgment.acknowledge();
} catch (Exception e) {
    LOG.error("The Error while processing message: {} ", e);
}
```{{copy}}

The method passes the consumerRecord to the message processor created in the previous step. This will save the employee in the database. The acknowledgment is used to acknowledge that the message has been processed.
