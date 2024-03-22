import {Link} from 'react-router-dom';

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className=''>
        {/* left */}
        <div className=''>
        <Link 
          to="/" 
          className='font-bold dark:text-white text-4xl'
        >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
          via-purple-500 to-pink-500 rounded-lg text-white'>
          Case
          </span>
          Blog
        </Link>
      </div>
        {/* right */}
      </div>
    </div>
  )
}
