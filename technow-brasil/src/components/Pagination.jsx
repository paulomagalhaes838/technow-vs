import React from 'react';
export default function Pagination({currentPage, totalPages, onPageChange}) {
  return (
    <div className='flex justify-center space-x-2 mt-4'>
      {[...Array(totalPages).keys()].map(p => (
        <button key={p} onClick={() => onPageChange(p+1)} className={`px-3 py-1 border ${currentPage===p+1?'bg-blue-500 text-white':''}`}>{p+1}</button>
      ))}
    </div>
  );
}