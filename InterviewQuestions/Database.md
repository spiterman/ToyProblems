1)  Define Database.

A prearranged collection of figures known as data is called database.

2)  What is DBMS?

Database Management Systems (DBMS) are applications designed especially which enable user interaction with other applications.

3) What are the various kinds of interactions catered by DBMS?

The various kind of interactions catered by DBMS are:

Data definition
Update
Retrieval
Administration
4)  Segregate database technology’s development.

The development of database technology is divided into:

Structure or data model
Navigational model
SQL/ relational model
5)  Who proposed the relational model?

Edgar F. Codd proposed the relational model in 1970.

ID-100351748

6)  What are the features of Database language?

A database language may also incorporate features like:
DBMS-specific Configuration and management of storage engine
Computations to modification of query results by computations, like summing, counting, averaging, grouping, sorting and cross-referencing Constraint enforcement Application Programming Interface

7)  What do database languages do?

As special-purpose languages, they have:


Data definition language
Data manipulation language
Query language
8)  Define database model.

A data model determining fundamentally how data can be stored, manipulated and organised and the structure of the database logically is called database model.

9)  What is SQL?

Structured Query Language (SQL) being ANSI standard language updates database and commands for accessing.

10)   Enlist the various relationships of database.

The various relationships of database are:

One-to-one: Single table having drawn relationship with another table having similar kind of columns.
One-to-many: Two tables having primary and foreign key relation.
Many-to-many: Junction table having many tables related to many tables.
11)  Define Normalization.

Organized data void of inconsistent dependency and redundancy within a database is called normalization.

12)  Enlist the advantages of normalizing database.

Advantages of normalizing database are:

No duplicate entries
Saves storage space
Boasts the query performances.
13)  Define Denormalization.

Boosting up database performance, adding of redundant data which in turn helps rid of complex data is called denormalization.

14)  Define DDL and DML.

Managing properties and attributes of database is called Data Definition Language(DDL).

Manipulating data in a database such as inserting, updating, deleting is defined as Data Manipulation Language. (DML)

15)  Enlist some commands of DDL.

They are:

CREATE:

Create is used in the CREATE TABLE statement. Syntax is:

CREATE TABLE [column name] ( [column definitions] ) [ table parameters]

ALTER:

It helps in modification of an existing object of database. Its syntax is:

ALTER objecttype objectname parameters.

DROP:

It destroys an existing database, index, table or view. Its syntax is:

DROP objecttype objectname.

16)  Define Union All operator and Union.

Full recordings of two tables is Union All operator.
A distinct recording of two tables is Union.

17)  Define cursor.

A database object which helps in manipulating data row by row representing a result set is called cursor.

18)  Enlist the cursor types.

They are:


Dynamic: it reflects changes while scrolling.
Static: doesn’t reflect changes while scrolling and works on recording of snapshot.
Keyset: data modification without reflection of new data is seen.
19)  Enlist the types of cursor.

They types of cursor are:

Implicit cursor: Declared automatically as soon as the execution of SQL takes place without the awareness of the user.
Explicit cursor: Defined by PL/ SQL which handles query in more than one row.
20)  Define sub-query.

A query contained by a query is called Sub-query.

21)  Why is group-clause used?

Group-clause uses aggregate values to be derived by collecting similar data.

22)  Compare Non-clustered and clustered index

Both having B-tree structure, non-clustered index has data pointers enabling one table many non-clustered indexes while clustered index is distinct for every table.

23)  Define Aggregate functions.

Functions which operate against a collection of values and returning single value is called aggregate functions

24)  Define Scalar functions.

Scalar function is depended on the argument given and returns sole value.

25)  What restrictions can you apply when you are creating views?

Restrictions that are applied are:

Only the current database can have views.
You are not liable to change any computed value in any particular view.
Integrity constants decide the functionality of INSERT and DELETE.
Full-text index definitions cannot be applied.
Temporary views cannot be created.
Temporary tables cannot contain views.
No association with DEFAULT definitions.
Triggers such as INSTEAD OF is associated with views.
26)   Define “correlated subqueries”.

A ‘correlated subquery’ is a sort of sub query but correlated subquery is reliant on another query for a value that is returned. In case of execution, the sub query is executed first and then the correlated query.

27)   Define Data Warehousing.

Storage and access of data from the central location in order to take some strategic decision is called Data Warehousing. Enterprise management is used for managing the information whose framework is known as Data Warehousing.

28)  Define Join and enlist its types.

Joins help in explaining the relation between different tables. They also enable you to select data with relation to data in another table.

The various types are:

INNER JOINs: Blank rows are left in the middle while more than equal to two tables are joined.
OUTER JOINs: Divided into Left Outer Join and Right Outer Join. Blank rows are left at the specified side by joining tables in other side.
Other joins are CROSS JOINs, NATURAL JOINs, EQUI JOIN and NON-EQUI JOIN.

29)  What do you mean by Index hunting?

Indexes help in improving the speed as well as the query performance of database. The procedure of boosting the collection of indexes is named as Index hunting.

30)   How does Index hunting help in improving query performance?

Index hunting helps in improving the speed as well as the query performance of database. The followed measures are achieved to do that:

The query optimizer is used to coordinate the study of queries with the workload and the best use of queries suggested based on this.
Index, query distribution along with their performance is observed to check the effect.
Tuning databases to a small collection of problem queries is also recommended.
31)   Enlist the disadvantages of query.

The disadvantages of query are:

No indexes
Stored procedures are excessively compiled.
Triggers and procedures are without SET NOCOUNT ON.
Complicated joins making up inadequately written query.
Cursors and temporary tables showcase a bad presentation.
32)   Enlist ways to efficiently code transactions.

Ways to efficiently code transactions:

User input should not be allowed while transactions.
While browsing, transactions must not be opened of data.
Transactions must be kept as small as possible.
Lower transaction segregation levels.
Least information of data must be accessed while transacting.
33)  What is Executive Plan?

Executive plan can be defined as:

SQL Server caches collected procedure or the plan of query execution and used thereafter by subsequent calls.
An important feature in relation to performance enhancement.
Data execution plan can be viewed textually or graphically.
34)  Define B-trees.

A data structure in the form of tree which stores sorted data and searches, insertions, sequential access and deletions are allowed in logarithmic time.

35)   Differentiate Table Scan from Index Scan.

Iterating over all the table rows is called Table Scan while iterating over all the index items is defined as Index Scan.

36)   What do you mean by Fill Factor concept with respect to indexes?

Fill Factor can be defined as being that value which defines the percentage of left space on every leaf-level page that is to be packed with data. 100 is the default value of Fill Factor.

 37)  Define Fragmentation.

Fragmentation can be defined as a database feature of server that promotes control on data which is stored at table level by the user.

38)   Differentiate Nested Loop, Hash Join and Merge Join.

Nested loop (loop over loop)

An outer loop within an inner loop is formed consisting of fewer entries and then for individual entry, inner loop is individually processed.

E.g.

Select col1.*, col2.* from coll, col2 where coll.col1=col2.col2;
It’s processing takes place in this way:

For i in (select * from col1) loop
For j in (select * from col2 where col2=i.col1) loop
Results are displayed;
End of the loop;
End of the loop;

The Steps of nested loop are:

Identify outer (driving) table
Assign inner (driven) table to outer table.
For every row of outer table, access the rows of inner table.
Nested Loops is executed from the inner to the outer as:

outer_loop
inner_loop
Hash join
While joining large tables, the use of Hash Join is preferred.

Algorithm of Hash Join is divided into:

Build: It is a hash table having in-memory which is present on the smaller table.
Probe: this hash value of the hash table is applicable for each second row element.
Sort merge join
Two independent sources of data are joined in sort merge join. They performance is better as compared to nested loop when the data volume is big enough but it is not good as hash joins generally.
The full operation can be divided into parts of two:

Sort join operation :

Get first row R1 from input1

Get first row R2 from input2.

Merge join operation:

‘while’ is not present at either loop’s end.
if R1 joins with R2
next row is got R2 from the input 2
return (R1, R2)
else if R1 < style=””> next row is got from R1 from input 1
else
next row is got from R2 from input 2
end of the loop
39)  What is Database partitioning?

Division of logical database into independent complete units for improving its management, availability and performance is called Database partitioning.

40) Explain the importance of partitioning.

Splitting of one table which is large into smaller database entities logically is called database partitioning. Its benefits are:

To improve query performance in situations dramatically when mostly rows which are heavily accessed are in one partition.
Accessing large parts of a single partition
Slower and cheaper storage media can be used for data which is seldom used.
41)   Define Database system.

DBMS along with database is called Database system.

42) What do you mean by Query Evaluation Engine?

Query Evaluation Engine executes the low-level instructions that are generated by the compiler.

43)  Define DDL Interpreter.

DDL statements are interpreted and recorded in tables called metadata.

44)  Define Atomicity and Aggregation.

Atomicity: It’s an all or none concept which enables the user to be assured of incomplete transactions to be taken care of. The actions involving incomplete transactions are left undone in DBMS.

Aggregation: The collected entities and their relationship are aggregated in this model. It is mainly used in expressing relationships within relationships.

45)  Enlist the various transaction phases.

The various transaction phases are:

Analysis Phase.
Redo Phase
Undo Phase
46)  Define Object-oriented model.

Compilations of objects make up this model in which values are stored within instance variables which is inside the object. The object itself comprises bodies of object for its operation which are called methods. Objects containing same kind of variables and methods are called classes.

47)  Define Entity.

It can be defined as being a ‘thing’ with an independent existence in the real world.

48)  What do you mean by Entity type?

A set of entries having similar attributes are entity types.

49)  Define Entity Set.

Compilation of all entries of any particular type of entry in the database is called Entity Set.

50)  What do you mean by Entity type extension?

Compilation of similar entity types into one particular type which is grouped together as an entity set.


Source:
https://career.guru99.com/top-50-database-interview-questions/
