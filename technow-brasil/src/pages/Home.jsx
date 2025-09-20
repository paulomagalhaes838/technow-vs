import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Newsletter from '../components/Newsletter';

export default function Home() {
  const articles = [
    {title: 'Notícia 1', summary: 'Resumo da notícia 1'},
    {title: 'Notícia 2', summary: 'Resumo da notícia 2'}
  ];

  return (
    <div className='p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
      <div className='md:col-span-2 space-y-4'>
        {articles.map((a,i) => <ArticleCard key={i} {...a} />)}
        <Newsletter />
      </div>
      <div>
        <h3 className='font-bold mb-2'>Últimas</h3>
        <ul className='list-disc pl-4'>
          {articles.map((a,i)=>(<li key={i}>{a.title}</li>))}
        </ul>
      </div>
    </div>
  );
}