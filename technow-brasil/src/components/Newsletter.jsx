import React from 'react';
export default function Newsletter() {
  return (
    <div className='p-4 bg-gray-100 mt-4'>
      <h3 className='font-bold'>Assine nossa Newsletter</h3>
      <input type='email' placeholder='Seu email' className='border p-2 w-full mt-2'/>
      <button className='bg-blue-600 text-white px-4 py-2 mt-2'>Inscrever</button>
    </div>
  );
}