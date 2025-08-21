import React from 'react';
import { Users, UserCheck, UserX, Clock, DoorOpen } from 'lucide-react';

interface AttendanceSummaryProps {
  selectedClass: string;
}

const AttendanceSummary = ({ selectedClass }: AttendanceSummaryProps) => {
  // Mock data based on selected class
  const getClassData = (classId: string) => {
    const data = {
      'CS301': { total: 45, present: 38, absent: 4, late: 2, tempOut: 1 },
      'CS302': { total: 52, present: 47, absent: 3, late: 1, tempOut: 1 },
      'CS401': { total: 38, present: 32, absent: 5, late: 1, tempOut: 0 },
    };
    return data[classId as keyof typeof data] || data['CS301'];
  };

  const stats = getClassData(selectedClass);
  const attendanceRate = ((stats.present / stats.total) * 100).toFixed(1);

  const summaryCards = [
    {
      title: 'Total Students',
      value: stats.total,
      icon: Users,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      title: 'Present',
      value: stats.present,
      icon: UserCheck,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      title: 'Absent',
      value: stats.absent,
      icon: UserX,
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    },
    {
      title: 'Late',
      value: stats.late,
      icon: Clock,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    {
      title: 'Temp Out',
      value: stats.tempOut,
      icon: DoorOpen,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Attendance Summary - {selectedClass}</h3>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">{attendanceRate}%</p>
          <p className="text-sm text-gray-500">Attendance Rate</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className={`${card.bgColor} rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className={`text-2xl font-bold ${card.textColor} mt-1`}>{card.value}</p>
                </div>
                <div className={`${card.color} rounded-lg p-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceSummary;