import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ClassSelectorProps {
  selectedClass: string;
  onClassChange: (classId: string) => void;
}

const ClassSelector = ({ selectedClass, onClassChange }: ClassSelectorProps) => {
  const classes = [
    { id: 'CS301', name: 'Computer Networks', students: 45, time: '09:00-10:30 AM' },
    { id: 'CS302', name: 'Database Systems', students: 52, time: '11:00-12:30 PM' },
    { id: 'CS401', name: 'Software Engineering', students: 38, time: '02:00-03:30 PM' },
  ];

  const selectedClassInfo = classes.find(c => c.id === selectedClass);

  return (
    <div className="relative">
      <select
        value={selectedClass}
        onChange={(e) => onClassChange(e.target.value)}
        className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-gray-900 font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {classes.map((cls) => (
          <option key={cls.id} value={cls.id}>
            {cls.id} - {cls.name} ({cls.students} students)
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      
      {selectedClassInfo && (
        <div className="mt-2 text-sm text-gray-600">
          <p>{selectedClassInfo.time}</p>
        </div>
      )}
    </div>
  );
};

export default ClassSelector;