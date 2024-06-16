---
title: "SQL Insert tutorial"
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
description: "SQL Insert tutorial, with code examples."
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

## MySQL INSERT Statement Tutorial

The `INSERT` statement in MySQL is used to insert new rows into an existing table. It can be used to insert a single row, multiple rows, or data from another table. This tutorial will cover the basic and advanced usage of the `INSERT` statement with examples.

### 1. Basic INSERT Syntax

The basic syntax for inserting a single row into a table is as follows:

**Syntax:**

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

**Example:**

Suppose we have a table `employees` with columns `id`, `name`, and `position`.

```sql
INSERT INTO employees (id, name, position)
VALUES (1, 'John Doe', 'Manager');
```

### 2. Inserting Multiple Rows

You can insert multiple rows in a single `INSERT` statement by separating each set of values with a comma.

**Syntax:**

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES
    (value1a, value2a, value3a, ...),
    (value1b, value2b, value3b, ...),
    ...;
```

**Example:**

```sql
INSERT INTO employees (id, name, position)
VALUES
    (2, 'Jane Smith', 'Developer'),
    (3, 'Emily Johnson', 'Designer'),
    (4, 'Michael Brown', 'Tester');
```

### 3. Inserting Data from Another Table

You can also insert data into a table from another table using a `SELECT` statement.

**Syntax:**

```sql
INSERT INTO table_name (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM another_table
WHERE condition;
```

**Example:**

```sql
INSERT INTO employees_backup (id, name, position)
SELECT id, name, position
FROM employees
WHERE position = 'Developer';
```

### 4. Inserting Data with Default Values

If you want to insert a row with default values for some columns, you can omit those columns from the `INSERT` statement. MySQL will automatically use the default values defined in the table schema.

**Syntax:**

```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

**Example:**

Suppose `employees` table has a default value of `0` for the `id` column. You can insert a row without specifying the `id`.

```sql
INSERT INTO employees (name, position)
VALUES ('Anna Lee', 'Consultant');
```

### 5. Inserting Data with AUTO_INCREMENT

When a column is defined with `AUTO_INCREMENT`, you do not need to specify a value for it in the `INSERT` statement. MySQL will automatically generate a unique value for this column.

**Example:**

```sql
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT,
    customer_name VARCHAR(50),
    amount DECIMAL(10, 2),
    PRIMARY KEY (order_id)
);

INSERT INTO orders (customer_name, amount)
VALUES ('John Doe', 250.00);
```

In this example, `order_id` will be automatically assigned by MySQL.

### 6. Inserting Data Using SET

You can also use the `SET` clause to specify column values in an `INSERT` statement.

**Syntax:**

```sql
INSERT INTO table_name SET column1 = value1, column2 = value2, ...;
```

**Example:**

```sql
INSERT INTO employees SET id = 5, name = 'Sara White', position = 'HR';
```

### 7. Inserting Data with NULL Values

To insert a `NULL` value, simply specify `NULL` in the `VALUES` clause.

**Example:**

```sql
INSERT INTO employees (id, name, position)
VALUES (6, 'Tom Harris', NULL);
```

### 8. Handling Duplicate Key Errors

You can use `INSERT IGNORE` to ignore duplicate key errors or use `ON DUPLICATE KEY UPDATE` to update the row if a duplicate key is detected.

**Syntax for IGNORE:**

```sql
INSERT IGNORE INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

**Syntax for ON DUPLICATE KEY UPDATE:**

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...)
ON DUPLICATE KEY UPDATE column1 = new_value1, column2 = new_value2, ...;
```

**Example for IGNORE:**

```sql
INSERT IGNORE INTO employees (id, name, position)
VALUES (7, 'Jake Black', 'Accountant');
```

**Example for ON DUPLICATE KEY UPDATE:**

```sql
INSERT INTO employees (id, name, position)
VALUES (7, 'Jake Black', 'Accountant')
ON DUPLICATE KEY UPDATE position = 'Accountant';
```

### 9. Using Subqueries in INSERT

You can use subqueries to insert data into a table based on the result of another query.

**Example:**

```sql
INSERT INTO employees (id, name, position)
SELECT id, name, 'Intern'
FROM candidates
WHERE hired = 'Yes';
```

### Full Example

Here’s a full example demonstrating various `INSERT` operations:

1. Create an initial table.

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    name VARCHAR(50),
    position VARCHAR(50),
    PRIMARY KEY (id)
);
```

2. Insert a single row.

```sql
INSERT INTO employees (name, position)
VALUES ('Alice Johnson', 'Engineer');
```

3. Insert multiple rows.

```sql
INSERT INTO employees (name, position)
VALUES
    ('Bob King', 'Technician'),
    ('Carol Lewis', 'Analyst');
```

4. Insert data from another table.

```sql
INSERT INTO employees_backup (id, name, position)
SELECT id, name, position
FROM employees
WHERE position = 'Engineer';
```

5. Insert data with default values.

```sql
INSERT INTO employees (name, position)
VALUES ('David Lee', 'Sales');
```

6. Insert data using `SET`.

```sql
INSERT INTO employees SET name = 'Eva Brown', position = 'Marketing';
```

### Conclusion

The `INSERT` statement in MySQL provides a flexible way to add data to your database. Whether you need to insert a single row, multiple rows, or data from another table, the `INSERT` statement has you covered.

### Additional Resources

- [MySQL INSERT Documentation](https://dev.mysql.com/doc/refman/8.0/en/insert.html)
- [MySQL Official Documentation](https://dev.mysql.com/doc/)

Feel free to explore these resources for more advanced topics and detailed information.

---

If you have any questions or need further clarification on any part of this tutorial, please let me know!
