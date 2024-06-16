---
title: "SQL Select tutorial"
date: 2024-05-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["sql", "tutorial", "Note", "100daysWithHugo"]
author: ["Herman",] # multiple authors
showToc: flase
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "SQL Select tutorial, with code examples."
# canonicalURL: "https://canonical.url/to/page"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
# cover:
#     image: "<image path/url>" # image path/url
#     alt: "<alt text>" # alt text
#     caption: "<text>" # display caption under cover
#     relative: false # when using page bundles set this to true
#     hidden: true # only hide on current single page
# editPost:
#     URL: "https://github.com/<path_to_repo>/content"
#     Text: "Suggest Changes" # edit text
#     appendFilePath: true # to append file path to Edit link
---

## SQL SELECT Statement Tutorial for MySQL

The SQL `SELECT` statement is used to query and retrieve data from databases. In MySQL, the `SELECT` statement is powerful and flexible, allowing you to specify the columns you want, filter rows, sort results, and join tables. Below is a comprehensive tutorial on using the `SELECT` statement in MySQL.

To retrieve data from one or more columns in a table, you use the `SELECT` statement.

**Syntax:**

```sql
SELECT column1, column2, ...
FROM table_name;
```

**Example:**

```sql
SELECT first_name, last_name FROM employees;
```

#### 2. **Selecting All Columns**

To select all columns from a table, you use `*`:

**Syntax:**

```sql
SELECT * FROM table_name;
```

**Example:**

```sql
SELECT * FROM employees;
```

#### 3. **Using DISTINCT to Avoid Duplicates**

To retrieve unique values from a column, you use the `DISTINCT` keyword:

**Syntax:**

```sql
SELECT DISTINCT column1 FROM table_name;
```

**Example:**

```sql
SELECT DISTINCT department FROM employees;
```

#### 4. **Filtering Data with WHERE**

The `WHERE` clause is used to filter records based on specified conditions.

**Syntax:**

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

**Example:**

```sql
SELECT first_name, last_name FROM employees WHERE department = 'Sales';
```

#### 5. **Using Logical Operators (AND, OR, NOT)**

Combine multiple conditions using logical operators.

**Example:**

```sql
SELECT first_name, last_name FROM employees
WHERE department = 'Sales' AND salary > 50000;
```

**Example:**

```sql
SELECT first_name, last_name FROM employees
WHERE department = 'Sales' OR department = 'HR';
```

#### 6. **Sorting Results with ORDER BY**

Sort the results using the `ORDER BY` clause.

**Syntax:**

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC];
```

**Example:**

```sql
SELECT first_name, last_name FROM employees ORDER BY last_name ASC;
```

#### 7. **Limiting the Number of Results with LIMIT**

The `LIMIT` clause specifies the maximum number of records to return.

**Syntax:**

```sql
SELECT column1, column2, ...
FROM table_name
LIMIT number;
```

**Example:**

```sql
SELECT * FROM employees LIMIT 10;
```

#### 8. **Using Aliases**

Aliases are used to rename columns or tables for the duration of the query.

**Syntax:**

```sql
SELECT column1 AS alias_name, column2
FROM table_name AS alias_name;
```

**Example:**

```sql
SELECT first_name AS fname, last_name AS lname FROM employees;
```

#### 9. **Joining Tables**

Join tables to combine rows from multiple tables based on related columns.

**Inner Join Syntax:**

```sql
SELECT columns
FROM table1
INNER JOIN table2
ON table1.common_column = table2.common_column;
```

**Example:**

```sql
SELECT employees.first_name, employees.last_name, departments.department_name
FROM employees
INNER JOIN departments
ON employees.department_id = departments.department_id;
```

**Left Join Syntax:**

```sql
SELECT columns
FROM table1
LEFT JOIN table2
ON table1.common_column = table2.common_column;
```

**Example:**

```sql
SELECT employees.first_name, employees.last_name, departments.department_name
FROM employees
LEFT JOIN departments
ON employees.department_id = departments.department_id;
```

#### 10. **Grouping Results with GROUP BY**

Group rows that have the same values into summary rows.

**Syntax:**

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1;
```

**Example:**

```sql
SELECT department, COUNT(*) FROM employees GROUP BY department;
```

#### 11. **Filtering Groups with HAVING**

Use `HAVING` to filter groups created by `GROUP BY`.

**Syntax:**

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1
HAVING condition;
```

**Example:**

```sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

#### 12. **Combining Results with UNION**

Combine results from multiple `SELECT` statements.

**Syntax:**

```sql
SELECT column1, column2 FROM table1
UNION
SELECT column1, column2 FROM table2;
```

**Example:**

```sql
SELECT first_name, last_name FROM employees WHERE department = 'Sales'
UNION
SELECT first_name, last_name FROM employees WHERE department = 'HR';
```

#### 13. **Using Subqueries**

A subquery is a query nested inside another query.

**Syntax:**

```sql
SELECT column1, column2
FROM table_name
WHERE column_name IN (SELECT column_name FROM another_table WHERE condition);
```

**Example:**

```sql
SELECT first_name, last_name
FROM employees
WHERE department_id IN (SELECT department_id FROM departments WHERE location = 'New York');
```

#### 14. **Case Statements**

Use `CASE` for conditional logic in a `SELECT` query.

**Syntax:**

```sql
SELECT column,
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE result3
END
AS new_column
FROM table_name;
```

**Example:**

```sql
SELECT first_name,
CASE
    WHEN salary > 70000 THEN 'High'
    WHEN salary BETWEEN 50000 AND 70000 THEN 'Medium'
    ELSE 'Low'
END AS salary_grade
FROM employees;
```

### Summary

The SQL `SELECT` statement is fundamental to retrieving data in MySQL. It offers various clauses to filter, sort, group, and join data, providing powerful ways to query and manage databases. Experiment with these examples to deepen your understanding of SQL queries.

For more detailed information, you can refer to the official [MySQL documentation on SELECT](https://dev.mysql.com/doc/refman/8.0/en/select.html).

---

Feel free to reach out if you have any questions or need further clarification on specific points!
