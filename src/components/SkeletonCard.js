// src/components/SkeletonCard.js
import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-lg animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
      </div>
      <div className="h-8 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
