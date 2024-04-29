# Student Marks Management System

This Node.js application provides a Student Marks Management System with functionalities to perform various operations using Express.js and MongoDB.

## Setup Instructions

Follow these steps to set up the project:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make sure MongoDB is installed and running on your local machine.

4. Start the server:
   ```bash
   npm run dev
   ```

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
