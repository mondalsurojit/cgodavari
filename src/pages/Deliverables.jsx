import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Calendar, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { DELIVERABLES_DATA } from '../data/constants';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

// ===============================
// 📊 Project Timeline Component (Chart.js)
// ===============================
const ProjectTimeline = ({ data }) => {
    const [isOpen, setIsOpen] = useState(true);

    const quarters = data.map(q => q.quarter);
    const deliverableCounts = data.map(q => q.items.length);

    const chartData = {
        labels: quarters,
        datasets: [
            {
                label: 'Deliverables Count',
                data: deliverableCounts,
                backgroundColor: 'rgba(37, 99, 235, 0.7)', // blue
                borderRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Deliverables',
                },
                ticks: {
                    stepSize: 1,
                    precision: 0,
                },
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {/* Collapsible Header */}
            <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Calendar className="mr-2 text-blue-600" />
                    Project Timeline
                </h2>
                <span className="text-sm text-blue-600 font-medium">
                    {isOpen ? 'Hide ▲' : 'Show ▼'}
                </span>
            </div>

            {isOpen && (
                <div className="h-64">
                    <Bar data={chartData} options={options} />
                </div>
            )}
        </div>
    );
};

// ===============================
// 📋 Main Deliverables Component
// ===============================
const Deliverables = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuarter, setSelectedQuarter] = useState('All');
  const [expandedQuarters, setExpandedQuarters] = useState({});

  const quarters = ['All', ...Array.from(new Set(DELIVERABLES_DATA.map(q => q.quarter)))];

  const filteredData = useMemo(() => {
    return DELIVERABLES_DATA.map(quarterData => ({
      ...quarterData,
      items: quarterData.items.filter(item => {
        const matchesSearch =
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.outcome.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesQuarter =
          selectedQuarter === 'All' || quarterData.quarter === selectedQuarter;
        return matchesSearch && matchesQuarter;
      })
    })).filter(q => q.items.length > 0);
  }, [searchTerm, selectedQuarter]);

  const totalDeliverables = filteredData.reduce((acc, q) => acc + q.items.length, 0);

  const toggleQuarter = (quarter) => {
    setExpandedQuarters(prev => ({
      ...prev,
      [quarter]: !prev[quarter]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Deliverables</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            Comprehensive overview of research reports, datasets, and outcomes across all project quarters
          </p>
          <p className="text-sm text-gray-500">Start Date: <span className="font-semibold text-gray-700">01/04/2024</span></p>
        </div>

        {/* Collapsible Chart Timeline */}
        <ProjectTimeline data={DELIVERABLES_DATA} />

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search deliverables..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative w-full md:w-48">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={selectedQuarter}
                onChange={(e) => setSelectedQuarter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                {quarters.map(q => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-600 whitespace-nowrap">
            Showing {totalDeliverables} deliverables
          </div>
        </div>

        {/* Table View */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-600 to-cyan-500">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Quarter
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                    Deliverable
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((quarterData, qIndex) => {
                  const isExpanded = expandedQuarters[quarterData.quarter] ?? true;
                  const isCollapsible = quarterData.items.length > 1;

                  return (
                    <React.Fragment key={qIndex}>
                      {quarterData.items.map((item, iIndex) => {
                        const isFirst = iIndex === 0;

                        return (
                          <tr
                            key={`${qIndex}-${iIndex}`}
                            className={`transition-all ${
                              !isExpanded && isCollapsible ? (isFirst ? '' : 'hidden') : ''
                            } hover:bg-gray-50`}
                          >
                            {isFirst && (
                              <td
                                onClick={() => isCollapsible && toggleQuarter(quarterData.quarter)}
                                className="px-6 py-4 align-top whitespace-nowrap text-sm font-bold text-blue-600 bg-blue-50 cursor-pointer select-none relative"
                                rowSpan={isExpanded ? quarterData.items.length : 1}
                              >
                                <div className="flex items-center gap-2">
                                  {quarterData.quarter}
                                  {isCollapsible &&
                                    (isExpanded ? (
                                      <ChevronUp size={16} className="text-blue-600" />
                                    ) : (
                                      <ChevronDown size={16} className="text-blue-600" />
                                    ))}
                                </div>
                              </td>
                            )}
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {item.title}
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>

            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <Filter className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No deliverables found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
