The second class is the consumer which receives the message.

<pre class="file" data-filename="devonfw/workspaces/main/devon4j-kafka/core/src/main/java/com/devonfw/application/employee/employeemanagement/service/impl/kafka/DeleteEmployeeMessageConsumer.java">
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
public class DeleteEmployeeMessageConsumer<K, V> {

  private static final Logger LOG = LoggerFactory.getLogger(DeleteEmployeeMessageConsumer.class);

  @Inject
  private MessageRetryOperations<K, V> messageRetryOperations;

  @Inject
  private DeleteEmployeeMessageProcessor<K, V> deleteEmployeeMessageProcessor;

  @KafkaListener(topics = "employeeapp-employee-v1-delete", groupId = "${messaging.kafka.consumer.groupId}", containerFactory = "kafkaListenerContainerFactory")
  public void consumer(ConsumerRecord<K, V> consumerRecord, Acknowledgment acknowledgment) {
	#TODO-insert
  }
}
</pre>

The @KafkaListener annotation binds the consumer to the 'employeeapp-employee-v1-delete' topic. When a message is passed to this topic the consumer will receive the message and will execute the consumer method.

The consumer method will pass the message to the processor class created in the previous step. For this copy the following code into the method.

```
try {
    this.messageRetryOperations.processMessageWithRetry(consumerRecord, this.deleteEmployeeMessageProcessor);

	// Acknowledge the listener.
    acknowledgment.acknowledge();
} catch (Exception e) {
    LOG.error("The Error while processing message: {} ", e);
}
```{{copy}}

The method passes the consumerRecord to the DeleteEmployeeMessageProcessor from the previous step. This will delete the employee in the database. The acknowledgment is used to acknowledge that the message has been processed.
