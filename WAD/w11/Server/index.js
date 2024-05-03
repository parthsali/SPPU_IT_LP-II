const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Define schema and model for student marks
const studentMarksSchema = new mongoose.Schema({
    Name: String,
    Roll_No: Number,
    WAD_Marks: Number,
    CC_Marks: Number,
    DSBDA_Marks: Number,
    CNS_Marks: Number,
    AI_marks: Number
});

const StudentMarks = mongoose.model('studentmarks', studentMarksSchema);

// Insert array of documents into studentmarks collection
const insertStudentMarks = async () => {
    try {
        const students = [
            { Name: 'Alice', Roll_No: 1, WAD_Marks: 85, CC_Marks: 75, DSBDA_Marks: 22, CNS_Marks: 90, AI_marks: 88 },
            { Name: 'Bob', Roll_No: 2, WAD_Marks: 80, CC_Marks: 72, DSBDA_Marks: 18, CNS_Marks: 85, AI_marks: 92 },
            { Name: 'Charlie', Roll_No: 3, WAD_Marks: 75, CC_Marks: 78, DSBDA_Marks: 25, CNS_Marks: 88, AI_marks: 80 }
        ];

        await StudentMarks.insertMany(students);
        console.log('Inserted documents into studentmarks collection');
    } catch (err) {
        console.error('Error inserting documents:', err);
    }
};

// Display total count of documents and list all documents in browser
app.get('/displayAllStudentMarks', async (req, res) => {
    try {

        const students = await StudentMarks.find();
        const count = await StudentMarks.countDocuments();

        res.json({ count, students });
    } catch (err) {
        console.error('Error fetching student data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// List names of students who got more than 20 marks in DSBDA subject in browser
app.get('/displayStudentsWithMoreThan20MarksInDSBDA', async (req, res) => {
    try {
        const students = await StudentMarks.find({ DSBDA_Marks: { $gt: 20 } }).select('Name');
        res.json(students);
    } catch (err) {
        console.error('Error fetching student data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update marks of specified students by 10
app.put('/updateMarks/:studentName', async (req, res) => {
    const { studentName } = req.params;
    try {
        await StudentMarks.updateMany({ Name: studentName }, { $inc: { WAD_Marks: 10, CC_Marks: 10, DSBDA_Marks: 10, CNS_Marks: 10, AI_marks: 10 } });
        res.json({ message: 'Marks updated successfully' });
    } catch (err) {
        console.error('Error updating marks:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// List names of students who got more than 25 marks in all subjects in browser
app.get('/displayStudentsWithMoreThan25MarksInAllSubjects', async (req, res) => {
    try {
        const students = await StudentMarks.find({
            WAD_Marks: { $gt: 25 },
            CC_Marks: { $gt: 25 },
            DSBDA_Marks: { $gt: 25 },
            CNS_Marks: { $gt: 25 },
            AI_marks: { $gt: 25 }
        }).select('Name');
        res.json(students);
    } catch (err) {
        console.error('Error fetching student data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// List names of students who got less than 40 in both Maths and Science in browser
app.get('/displayStudentsWithLessThan40InMathsAndScience', async (req, res) => {
    try {
        const students = await StudentMarks.find({
            $and: [
                { WAD_Marks: { $lt: 40 } },
                { CC_Marks: { $lt: 40 } }
            ]
        }).select('Name');


        res.json(students);
    } catch (err) {
        console.error('Error fetching student data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Remove specified student document from collection
app.delete('/removeStudent/:studentName', async (req, res) => {
    const { studentName } = req.params;
    try {
        await StudentMarks.deleteOne({ Name: studentName });
        res.json({ message: 'Student removed successfully' });
    } catch (err) {
        console.error('Error removing student:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Display the Students data in Browser in tabular format

app.get('/displayStudentData', async (req, res) => {
    try {
        const students = await StudentMarks.find();

        const htmlResponse = `
        <html>
            <head>
                <style>
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: center;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>WAD Marks</th>
                            <th>CC Marks</th>
                            <th>DSBDA Marks</th>
                            <th>CNS Marks</th>
                            <th>AI Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${students.map(student => `
                            <tr>
                                <td>${student.Name}</td>
                                <td>${student.Roll_No}</td>
                                <td>${student.WAD_Marks}</td>
                                <td>${student.CC_Marks}</td>
                                <td>${student.DSBDA_Marks}</td>
                                <td>${student.CNS_Marks}</td>
                                <td>${student.AI_marks}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </body>
        </html>
        `;
        res.send(htmlResponse);

    } catch (err) {
        console.error('Error fetching student data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
