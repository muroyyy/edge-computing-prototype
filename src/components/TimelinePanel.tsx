import React from 'react';
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react';

interface TimelinePanelProps {
  selectedClass: string;
}

const TimelinePanel = ({ selectedClass }: TimelinePanelProps) => {
  const activities = [
    { id: 1, student: 'Alice Johnson', action: 'entered', time: '09:00 AM', type: 'entry' },
    { id: 2, student: 'Bob Smith', action: 'entered', time: '09:02 AM', type: 'entry' },
    { id: 3, student: 'Eva Brown', action: 'entered', time: '09:01 AM', type: 'entry' },
    { id: 4, student: 'Henry Taylor', action: 'entered', time: '09:03 AM', type: 'entry' },
    { id: 5, student: 'Carol Davis', action: 'entered (late)', time: '09:15 AM', type: 'late' },
    { id: 6, student: 'Frank Miller', action: 'temporary exit', time: '09:30 AM', type: 'exit' },
    { id: 7, student: 'Grace Lee', action: 'entered', time: '09:00 AM', type: 'entry' },
    { id: 8, student: 'Ivy Chen', action: 'entered (late)', time: '09:12 AM', type: 'late' },
    { id: 9, student: 'Kate Wilson', action: 'entered', time: '09:00 AM', type: 'entry' },
    { id: 10, student: 'Liam Davis', action: 'entered', time: '09:04 AM', type: 'entry' },
  ].reverse(); // Show most recent first

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'entry':
        return <ArrowRight className="w-4 h-4 text-green-500" />;
      case 'exit':
        return <ArrowLeft className="w-4 h-4 text-red-500" />;
      case 'late':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'entry':
        return 'border-green-200 bg-green-50';
      case 'exit':
        return 'border-red-200 bg-red-50';
      case 'late':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Timeline</h3>
          <p className="text-gray-600">Recent activity for {selectedClass}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-blue-600 font-medium">Live</span>
        </div>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`p-3 rounded-lg border transition-all hover:shadow-sm ${getActivityColor(activity.type)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.student}
                </p>
                <p className="text-sm text-gray-600">
                  {activity.action}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
          View Full Timeline
        </button>
      </div>
    </div>
  );
};

export default TimelinePanel;