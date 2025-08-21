import React, { useState } from 'react';
import { Download, FileText, Calendar, Filter } from 'lucide-react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('daily');
  const [selectedClass, setSelectedClass] = useState('CS301');

  const reportTypes = [
    { id: 'daily', name: 'Daily Report', description: 'Today\'s attendance summary' },
    { id: 'weekly', name: 'Weekly Report', description: 'Week-by-week attendance analysis' },
    { id: 'monthly', name: 'Monthly Report', description: 'Complete monthly attendance overview' },
    { id: 'student', name: 'Student Report', description: 'Individual student attendance history' },
  ];

  const classes = ['CS301', 'CS302', 'CS401'];

  const recentReports = [
    { name: 'CS301_Daily_Report_2025-01-09.pdf', date: '2025-01-09', size: '245 KB' },
    { name: 'CS302_Weekly_Report_2025-01-06.xlsx', date: '2025-01-06', size: '392 KB' },
    { name: 'CS401_Monthly_Report_2024-12.pdf', date: '2024-12-31', size: '1.2 MB' },
    { name: 'Student_Attendance_Summary_2024.xlsx', date: '2024-12-30', size: '856 KB' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Reports</h2>
          <p className="text-gray-600 mt-1">Generate and download attendance reports</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Generation */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Generate New Report</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Report Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {reportTypes.map((report) => (
                    <button
                      key={report.id}
                      onClick={() => setSelectedReport(report.id)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        selectedReport === report.id
                          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h4 className="font-medium text-gray-900">{report.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Classes</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      defaultValue="2025-01-09"
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
                <button className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  <FileText className="w-5 h-5" />
                  <span>Download Excel</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Reports</h3>
            
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{report.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">Generated on {report.date}</p>
                      <p className="text-xs text-gray-500">{report.size}</p>
                    </div>
                    <button className="ml-2 p-1 text-blue-600 hover:text-blue-800">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;