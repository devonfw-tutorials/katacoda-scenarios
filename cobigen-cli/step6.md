## Start cobigen cli

Start cobigen cli and pass the entity file as the parameter.
`devon cobigen generate core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java`{{execute}}

Cobigen cli will ask you which files should be generated. You can type the numbers seperated by comma.
`1,3,5,6,8`{{execute}}


Switch to the IDE. CobiGen generated some new java classes and interfaces. Some of them are located in the api module of the project.

(1) CRUD UD logic: Generates the logic layer and implementations for some use cases.
- customermanagement/logic/base/usecase/AbstractCustomerUc.java
- customermanagement/logic/impl/CustomerManagementImpl.java
- customermanagement/logic/usecase/UcManageCustomerImpl.java
- customermanagement/logic/usecase/UcFindCustomerImpl.java
- customermanagement/logic/api/CustomerManagement.java
- customermanagement/logic/api/usecase/UcFindCustomer.java
- customermanagement/logic/api/usecase/UcManageCustomer.java

(3) CRUD REST services: Generates the service layer with CRUD operations for using in REST services.
- customermanagement/service/api/rest/CustomermanagementRestService.java (api module)
- customermanagement/service/impl/rest/CustomermanagementRestServiceImpl.java (core module)

(5) TO's: Generates the related Transfer Objects.
- customermanagement/logic/api/to/CustomerEto.java
- customermanagement/logic/api/to/CustomerSearchCriteria.java
- general/common/api/to/AbstractSearchCriteriaTo.java

(6) Entity infrastructure: Creates the entity main interface and edits (by a merge) the current entity to extend the newly generated classes.
- customermanagement/common/api/Customer.java
- devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java{{open}} (changed)

(8) CRUD SpringData Repository: Generates the entity repository (that contains the CRUD operations) in the data access layer.
- customermanagement/dataaccess/api/repo/CustomerRepository.java