import React from 'react'

const NuevoPassword = () => {
  return (
    <div>
      <h1 className="text-sky-700 font-black text-6xl">
        Reeestablece tu <span className='text-slate-700'>password</span>
         </h1>
      <form className='mt-5'>
        <div className='mb-4'>
          
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Password de registro'
          />
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmar'>Confirmar Password</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='confirmar'
            type='password'
            placeholder='Confirmar Password de registro'
          />


          <input
            className=' w-full bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            value='Registrar'
          />
        </div>
      </form>
      
    </div>
  )
}

export default NuevoPassword
