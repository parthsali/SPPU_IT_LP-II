# Student Marks Management System

This Node.js application provides a Student Marks Management System with functionalities to perform various operations using Express.js and MongoDB.

## Problem Statement

Perform the following tasks using Node.js, Express.js, and MongoDB:

a) Create a Database called `student`.
b) Create a collection called `studentmarks`.
c) Insert an array of documents into the `studentmarks` collection.
d) Display the total count of documents and list all the documents in the browser.
e) List the names of students who got more than 20 marks in the DSBDA subject in the browser.
f) Update the marks of specified students by 10.
g) List the names of students who got more than 25 marks in all subjects in the browser.
h) List the names of students who got less than 40 in both Maths and Science in the browser.
i) Remove specified student document from the collection.
j) Display the Students data in the browser in tabular format.

## Setup Instructions

1.  Clone the repository or Download ZIP File

```bash
git clone url
```

2.  Navigate to the `Client` directory:

```bash
cd Client
```

3.  Install the required packages using npm install:

```bash
npm install
```

4.  Run the project using npm run dev:

```bash
npm run dev
```

5.  Now, navigate to the `Server` directory:

```bash
cd Server
```

6.  Install the required packages using npm install:

```bash
npm install
```

7.  Change the URL of the database in the `index.js` file.

8.  Run the project using npm run dev:

```bash
npm run dev
```

## Testing the Output

To test the output of each operation, you can use the following endpoints:

- Total count and list of all documents:

  - GET /displayAllStudentMarks

- List of students with more than 20 marks in DSBDA:

  - GET /displayStudentsWithMoreThan20MarksInDSBDA

- Update marks of specified students by 10:

  - PUT /updateMarks/:studentName
    - Replace `:studentName` with the name of the student you want to update.

- List of students with more than 25 marks in all subjects:

  - GET /displayStudentsWithMoreThan25MarksInAllSubjects

- List of students with less than 40 in Maths and Science:

  - GET /displayStudentsWithLessThan40InMathsAndScience

- Remove specified student document from the collection:

  - DELETE /removeStudent/:studentName
    - Replace `:studentName` with the name of the student you want to remove.

- Display the Students data in tabular format:
  - GET /displayStudentData

Access each endpoint using your browser or a tool like Postman to see the output.
