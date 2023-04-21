import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1 className="text-sky-700 font-black text-6xl">
        Inicia sesion y administra tus <span className='text-slate-700'>proyectos</span>
      </h1>
      <form className='mt-5'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email'
          />
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Password de registro'
          />
          <input
            className=' w-full bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            value='Iniciar sesion'
          />
        </div>
      </form>
      <nav className='mt-5'>
        <NavLink to='/olvide-password' className='text-sm text-sky-500 hover:text-sky-700'>Olvide mi password</NavLink>
        <NavLink to='/registrar' className='ml-5 text-sm text-sky-500 hover:text-sky-700'>Crear una cuenta nueva</NavLink>
      </nav>
    </div>
  )
}

export default Login;
