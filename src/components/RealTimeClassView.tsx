import React from 'react';
import { CheckCircle, XCircle, Clock, DoorOpen, User } from 'lucide-react';

interface RealTimeClassViewProps {
  selectedClass: string;
}

const RealTimeClassView = ({ selectedClass }: RealTimeClassViewProps) => {
  // Mock student data
  const students = [
    { id: 'S001', name: 'Alice Johnson', status: 'present', time: '09:00 AM' },
    { id: 'S002', name: 'Bob Smith', status: 'present', time: '09:02 AM' },
    { id: 'S003', name: 'Carol Davis', status: 'late', time: '09:15 AM' },
    { id: 'S004', name: 'David Wilson', status: 'absent', time: '-' },
    { id: 'S005', name: 'Eva Brown', status: 'present', time: '09:01 AM' },
    { id: 'S006', name: 'Frank Miller', status: 'tempOut', time: '09:30 AM' },
    { id: 'S007', name: 'Grace Lee', status: 'present', time: '09:00 AM' },
    { id: 'S008', name: 'Henry Taylor', status: 'present', time: '09:03 AM' },
    { id: 'S009', name: 'Ivy Chen', status: 'late', time: '09:12 AM' },
    { id: 'S010', name: 'Jack Brown', status: 'absent', time: '-' },
    { id: 'S011', name: 'Kate Wilson', status: 'present', time: '09:00 AM' },
    { id: 'S012', name: 'Liam Davis', status: 'present', time: '09:04 AM' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'absent':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'late':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'tempOut':
        return <DoorOpen className="w-5 h-5 text-purple-500" />;
      default:
        return <User className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      present: 'bg-green-100 text-green-800 border-green-200',
      absent: 'bg-red-100 text-red-800 border-red-200',
      late: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      tempOut: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const texts = {
      present: 'Present ✅',
      absent: 'Absent ❌',
      late: 'Late ⏰',
      tempOut: 'Temp Out 🚪'
    };
    return texts[status as keyof typeof texts] || status;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Real-Time Class View</h3>
          <p className="text-gray-600">Live student status for {selectedClass}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 font-medium">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-gray-50 rounded-lg p-4 border hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                {getStatusIcon(student.status)}
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(student.status)}`}>
                {getStatusText(student.status)}
              </span>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 text-sm mb-1">{student.name}</p>
              <p className="text-xs text-gray-500">{student.id}</p>
              {student.time !== '-' && (
                <p className="text-xs text-gray-400 mt-1">Entered: {student.time}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeClassView;