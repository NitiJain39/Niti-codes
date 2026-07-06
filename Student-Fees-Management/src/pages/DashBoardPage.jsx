import React from 'react';
import StudentList from '../components/student/studentList';
export default function DashBoardPage() {
    // const students = [
    //     { id: 1, name: "John Doe", feesPaid: "$500", status: "Paid" },
    //     { id: 2, name: "Jane Smith", feesPaid: "$300", status: "Pending" },
    //     { id: 3, name: "Sam Wilson", feesPaid: "$400", status: "Partial" },
    // ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
                <p className="text-gray-600">Manage student information and fees</p>
            </header>
         <StudentList/>
        </div>
    );
}


