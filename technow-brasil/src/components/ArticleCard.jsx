import React from 'react';
export default function ArticleCard({title, summary}) {
  return (
    <div className='border rounded p-4 shadow hover:shadow-lg transition'>
      <h2 className='font-bold text-lg mb-2'>{title}</h2>
      <p>{summary}</p>
    </div>
  );
}