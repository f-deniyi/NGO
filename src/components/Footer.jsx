import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-900 pb-5 pt-8 px-10 md:px-20 w-full'>
                <div className='flex flex-col md:flex-row justify-between md:items-center'>
                    <div>
                        <h1 className='text-5xl text-slate-500 mb-2 self-start'>PAF</h1>
                    </div>
                    <div className='mb-2'>
                        <p className='text-sm text-slate-400 mb-2'>Blog</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>

                    </div>
                    <div className='mb-2'>
                        <p className='text-sm text-slate-400 mb-2'>News</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                    </div>
                    <div className='mb-2'>
                        <p className='text-sm text-slate-400 mb-2'>Twitter</p>
                        <p className='text-sm text-slate-400 mb-2'>Facebook</p>
                        <p className='text-sm text-slate-400 mb-2'>Instagram</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                    </div>
                </div>
                <p className='text-slate-400 text-center md:text-left'>Copyright © FemiDEV</p>
            </footer>

  )
}

export default Footer