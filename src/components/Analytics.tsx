import React, { useState } from 'react';
import { TrendingUp, PieChart, BarChart3, Calendar } from 'lucide-react';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const attendanceTrends = [
    { date: '2025-01-03', present: 42, absent: 8, percentage: 84 },
    { date: '2025-01-04', present: 45, absent: 5, percentage: 90 },
    { date: '2025-01-05', present: 41, absent: 9, percentage: 82 },
    { date: '2025-01-06', present: 43, absent: 7, percentage: 86 },
    { date: '2025-01-07', present: 44, absent: 6, percentage: 88 },
    { date: '2025-01-08', present: 46, absent: 4, percentage: 92 },
    { date: '2025-01-09', present: 38, absent: 12, percentage: 76 },
  ];

  const statusData = [
    { status: 'Present', count: 259, color: 'bg-green-500', percentage: 74 },
    { status: 'Absent', count: 51, color: 'bg-red-500', percentage: 15 },
    { status: 'Late', count: 28, color: 'bg-yellow-500', percentage: 8 },
    { status: 'Temp Out', count: 12, color: 'bg-purple-500', percentage: 3 },
  ];

  const maxAttendance = Math.max(...attendanceTrends.map(d => d.present + d.absent));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Analytics</h2>
          <p className="text-gray-600 mt-1">Attendance trends and insights</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="semester">This Semester</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Average Attendance</p>
              <p className="text-3xl font-bold">84.3%</p>
            </div>
            <TrendingUp className="w-10 h-10 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Best Day</p>
              <p className="text-3xl font-bold">92%</p>
            </div>
            <BarChart3 className="w-10 h-10 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Total Classes</p>
              <p className="text-3xl font-bold">7</p>
            </div>
            <Calendar className="w-10 h-10 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100">Improvement</p>
              <p className="text-3xl font-bold">+5.2%</p>
            </div>
            <TrendingUp className="w-10 h-10 text-yellow-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trends */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Attendance Trends</h3>
            <BarChart3 className="w-6 h-6 text-blue-500" />
          </div>
          
          <div className="space-y-4">
            {attendanceTrends.map((day, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="font-semibold text-gray-900">{day.percentage}%</span>
                </div>
                <div className="flex space-x-1 h-6">
                  <div 
                    className="bg-green-500 rounded flex items-center justify-center text-white text-xs font-medium"
                    style={{ width: `${(day.present / maxAttendance) * 100}%` }}
                  >
                    {day.present > 5 ? day.present : ''}
                  </div>
                  <div 
                    className="bg-red-500 rounded flex items-center justify-center text-white text-xs font-medium"
                    style={{ width: `${(day.absent / maxAttendance) * 100}%` }}
                  >
                    {day.absent > 2 ? day.absent : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-600">Present</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-600">Absent</span>
            </div>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Status Distribution</h3>
            <PieChart className="w-6 h-6 text-purple-500" />
          </div>

          <div className="space-y-4">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{item.status}</span>
                    <span className="text-sm text-gray-500">{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.percentage}%</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-sm text-gray-600">Total Records</p>
              <p className="text-2xl font-bold text-gray-900">350</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;