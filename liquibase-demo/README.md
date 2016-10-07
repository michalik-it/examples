Database configuration, setup local mysql db and configure in pom.xml:
	
<database.url>jdbc:mysql://localhost:3306/liquibase-db</database.url>
<database.username>***</database.username>
<database.password>***</database.password>

Usefull cmds:

- mvn liquibase:update
- mvn liquibase:rollback -DrollbackTag=TAG_1
- mvn liquibase:rollback -Dliquibase.rollbackCount=1

- mvn spring-boot:run

- 