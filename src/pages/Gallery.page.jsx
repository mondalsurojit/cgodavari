import React from 'react'

const Gallery = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Gallery</h1>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto mb-2">
                    Visual snapshot of key project activities, events, and milestones
                </p>
                <p className="text-sm text-gray-500">Start Date: <span className="font-semibold text-gray-700">01/04/2024</span></p>
            </div>
        </div>
    )
}

export default Gallery;