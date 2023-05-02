import React from 'react'

import { NavLink } from 'react-router-dom'


const Registrar = () => {
  const [nombre , setNombre] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [ repetirPassword , setRepetirPassword] = useState('')


  return (
    
    <div>
      <h1 className="text-sky-700 font-black text-6xl">
        Registrate y administra tus <span className='text-slate-700'>proyectos</span>
      </h1>
      <form className='mt-5'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>Nombre</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='nombre'
            type='text'
            placeholder='Nombre'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}

          />
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Password de registro'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmar'>Confirmar Password</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='confirmar'
            type='password'
            placeholder='Confirmar Password de registro'
            value={repetirPassword}
            onChange={e => setRepetirPassword(e.target.value)}
          />


          <input
            className=' w-full bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            value='Registrar'
          />
        </div>
      </form>
      <nav className='mt-5'>
        <NavLink to='/olvide-password' className='text-sm text-sky-500 hover:text-sky-700'>Olvide mi password</NavLink>
        <NavLink to='/' className='ml-5 text-sm text-sky-500 hover:text-sky-700'>Ya tienes una cuenta?</NavLink>
      </nav>
    </div>
  )
}

export default Registrar
