## Download the Kafka server
`cd /root/`{{execute}}

`curl http://apache.mirror.iphh.net/kafka/2.6.0/kafka_2.13-2.6.0.tgz --output /root/kafka.tgz`{{execute}}

Create a new directory and extract the downloaded file.
`mkdir kafka`{{execute}}
`tar -xzf kafka.tgz -C kafka/ --strip-components=1`{{execute}}