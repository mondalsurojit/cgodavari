import React, { useState, useMemo, useEffect } from 'react';
import { Search, FileText, CheckCircle, Eye, FileEdit, Clock, Download, ExternalLink } from 'lucide-react';
import { fetchAllReports } from '../utils/googleDriveAPI';

const Reports = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const statusConfig = {
        'Final Reports': {
            icon: CheckCircle,
            bgColor: 'bg-green-50',
            textColor: 'text-green-700',
            borderColor: 'border-green-200',
            iconColor: 'text-green-600'
        },
        'Reviewed by cGanga': {
            icon: Eye,
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-700',
            borderColor: 'border-blue-200',
            iconColor: 'text-blue-600'
        },
        'Draft Reports Under Review': {
            icon: Clock,
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700',
            borderColor: 'border-orange-200',
            iconColor: 'text-orange-600'
        },
        'Preliminary Drafts': {
            icon: FileEdit,
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-700',
            borderColor: 'border-yellow-200',
            iconColor: 'text-yellow-600'
        }
    };

    const statuses = ['All', ...Object.keys(statusConfig)];

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await fetchAllReports();
                setReports(data || []);
            } catch (err) {
                console.error(err);
                setError('Failed to load reports');
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    const filteredReports = useMemo(() => {
        return reports.filter(report => {
            const q = searchTerm.trim().toLowerCase();
            const matchesSearch = !q || (
                (report.title || '').toLowerCase().includes(q) ||
                (report.description || '').toLowerCase().includes(q) ||
                (report.author || '').toLowerCase().includes(q)
            );
            const matchesStatus = selectedStatus === 'All' || report.status === selectedStatus;
            return matchesSearch && matchesStatus;
        });
    }, [reports, searchTerm, selectedStatus]);

    const getStatusCounts = () => {
        const counts = {};
        Object.keys(statusConfig).forEach(status => {
            counts[status] = reports.filter(r => r.status === status).length;
        });
        return counts;
    };

    const statusCounts = getStatusCounts();

    const getThumbnailSrc = (report) => {
        if (report.id) {
            return `https://drive.google.com/thumbnail?sz=w640&id=${report.id}`;
        }
        return null;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Reports</h1>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
                            Explore research reports, drafts, and publications from cGodavari
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 opacity-60 pointer-events-none">
                        {Object.entries(statusConfig).map(([status, cfg]) => {
                            const Icon = cfg.icon;
                            return (
                                <div
                                    key={status}
                                    className={`flex items-center justify-between rounded-full px-4 py-2 text-sm font-medium w-full border ${cfg.borderColor} ${cfg.bgColor} ${cfg.textColor}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon size={16} className={cfg.iconColor} />
                                        <span>{status}</span>
                                    </div>
                                    <span className={`flex items-center justify-center w-6 h-6 rounded-full border text-xs font-bold ${cfg.textColor} ${cfg.borderColor}`}>0</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 opacity-60">
                        <div className="h-10 bg-gray-200 rounded mb-2" />
                        <div className="h-10 bg-gray-200 rounded w-1/2" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full animate-pulse"
                            >
                                <div className="w-full h-40 bg-gray-200" />
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-3" />
                                    <div className="h-3 bg-gray-200 rounded w-full mb-2" />
                                    <div className="h-3 bg-gray-200 rounded w-5/6 mb-2" />
                                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-3" />
                                    <div className="flex justify-between mt-auto">
                                        <div className="h-5 w-20 bg-gray-200 rounded" />
                                        <div className="h-5 w-16 bg-gray-200 rounded" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Error</h3>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Reports</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-2">
                        Explore research reports, drafts, and publications from cGodavari
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {Object.entries(statusConfig).map(([status, cfg]) => {
                        const Icon = cfg.icon;
                        return (
                            <button
                                key={status}
                                onClick={() => setSelectedStatus(status)}
                                className={`flex items-center justify-between rounded-full px-4 py-2 text-sm font-medium w-full transition
                                    ${cfg.bgColor} ${cfg.textColor} border ${cfg.borderColor}
                                    ${selectedStatus === status ? 'ring-2 ring-blue-500' : ''}`}
                            >
                                <div className="flex items-center gap-2">
                                    <Icon size={16} className={cfg.iconColor} />
                                    <span>{status}</span>
                                </div>
                                <span className={`flex items-center justify-center w-6 h-6 rounded-full border text-xs font-bold ${cfg.textColor} ${cfg.borderColor}`}>
                                    {statusCounts[status] || 0}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <div className="relative flex-1 sm:flex-none sm:w-72">
                                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search by title..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>

                            <div className="relative flex-1 sm:flex-none sm:w-72">
                                <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                                >
                                    {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600 text-left sm:text-right">
                            Showing {filteredReports.length} reports
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReports.map((report, idx) => {
                        const cfg = statusConfig[report.status] || {};
                        const Icon = cfg.icon || FileText;
                        const thumb = getThumbnailSrc(report);

                        return (
                            <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col h-full">
                                {thumb ? (
                                    <img
                                        src={thumb}
                                        alt={report.title}
                                        className="w-full h-60 object-cover"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.replaceWith(
                                                (() => {
                                                    const div = document.createElement('div');
                                                    div.className = 'w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400';
                                                    const icon = document.createElement('div');
                                                    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-file-text" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`;
                                                    div.appendChild(icon);
                                                    return div;
                                                })()
                                            );
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                                        <FileText size={32} />
                                    </div>
                                )}

                                <div className="p-4 flex flex-col flex-grow">
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                                            {report.title}
                                        </h3>

                                        {report.description && (
                                            <p className="text-sm text-gray-600 line-clamp-3 mb-3">{report.description}</p>
                                        )}
                                    </div>

                                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                                        <div className={`inline-flex items-center px-2 py-1 rounded-md ${cfg.bgColor} ${cfg.borderColor}`}>
                                            <Icon className={`${cfg.iconColor} mr-1`} size={14} />
                                            <span className={`text-xs font-medium ${cfg.textColor}`}>{report.status}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {report.url && (
                                                <a
                                                    href={report.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition"
                                                >
                                                    <Download size={14} />
                                                    {report.size && (
                                                        <span className="text-xs font-medium">{report.size}</span>
                                                    )}
                                                </a>
                                            )}
                                            {report.viewUrl && (
                                                <a
                                                    href={report.viewUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center p-1.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition"
                                                >
                                                    <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredReports.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-lg shadow-md mt-6">
                        <FileText className="mx-auto text-gray-400 mb-4" size={48} />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No reports found</h3>
                        <p className="text-gray-600">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reports;
