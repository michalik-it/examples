Database configuration, setup local mysql db and configure in pom.xml:
- database.url
- database.username
- database.password

Run:
- mvn spring-boot:run

Usefull cmds:

- mvn liquibase:update
- mvn liquibase:dropAll
- mvn liquibase:rollback -Dliquibase.rollbackTag=TAG_3
- mvn liquibase:rollback -Dliquibase.rollbackCount=1

- mvn liquibase:update -Ddatabase.url=jdbc:mysql://localhost:3306/liquibase-db-tmp

Diffs:

change liquibase-db and gen diff between 2 dbs
mvn liquibase:diff -Dliquibase.referenceUrl=jdbc:mysql://localhost:3306/liquibase-db -Dliquibase.referenceUsername=root -Dliquibase.referencePassword=root -Dliquibase.diffChangeLogFile="C:\tmp\demo\db.changelogDemo.xml" -Ddatabase.url=jdbc:mysql://localhost:3306/liquibase-db-tmp

change liquibase-db manually and gen diff rollback
mvn liquibase:diff -Dliquibase.referenceUrl=jdbc:mysql://localhost:3306/liquibase-db-tmp -Dliquibase.referenceUsername=root -Dliquibase.referencePassword=root -Dliquibase.diffChangeLogFile="C:\tmp\demo\db.changelogDemoRollback.xml" -Ddatabase.url=jdbc:mysql://localhost:3306/liquibase-db

no update and generate update sql:
mvn liquibase:updateSQL -Dliquibase.migrationSqlOutputFile="C:\tmp\demo\db.migrationFile.sql"

update and generate rollback sql:
mvn liquibase:rollbackSQL -Dliquibase.migrationSqlOutputFile="C:\tmp\demo\db.migrationFileRollback.sql" -Dliquibase.rollbackTag=Tag_3