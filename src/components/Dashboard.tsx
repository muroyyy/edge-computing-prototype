import React, { useState, useEffect } from 'react';
import AttendanceSummary from './AttendanceSummary';
import RealTimeClassView from './RealTimeClassView';
import TimelinePanel from './TimelinePanel';
import ClassSelector from './ClassSelector';

const Dashboard = () => {
  const [selectedClass, setSelectedClass] = useState('CS301');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-gray-600 mt-1">
            {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <ClassSelector selectedClass={selectedClass} onClassChange={setSelectedClass} />
      </div>

      <AttendanceSummary selectedClass={selectedClass} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RealTimeClassView selectedClass={selectedClass} />
        </div>
        <div>
          <TimelinePanel selectedClass={selectedClass} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;