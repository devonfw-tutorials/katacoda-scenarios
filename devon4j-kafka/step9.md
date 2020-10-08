## Start the Kafka server

To run the test, it is required to have Zookeeper and Kafka server running.
`/root/kafka/bin/zookeeper-server-start.sh /root/kafka/config/zookeeper.properties`{{execute T2}}

`/root/kafka/bin/kafka-server-start.sh /root/kafka/config/server.properties`{{execute T3}}

## Run the unit test
Switch back to the first terminal and run the test.

`cd devonfw/workspaces/main/devon4j-kafka/core/`{{execute T1}}

`mvn clean test -Dtest=com.devonfw.application.employee.employeemanagement.service.impl.rest.KafkaDemoServiceTest`{{execute T1}}

This may take a while. If the result show one passed test then the kafka consumer work well.