export default function Component() {
	return (
		<div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4'>
			<div className='md:flex'>
				<div className='md:flex-shrink-0'>
					<img
						alt='Placeholder'
						className='h-48 w-full object-cover md:h-full md:w-48'
						height='300'
						src='/placeholder.svg'
						style={{
							aspectRatio: '500/300',
							objectFit: 'cover'
						}}
						width='500'
					/>
				</div>
				<div className='p-8'>
					<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
						Published by Jane Doe
					</div>
					<p className='block mt-1 text-lg leading-tight font-medium text-black'>
						Published at 11:00am
					</p>
					<p className='mt-2 text-gray-500'>10 minutes ago</p>
					<div className='mt-4 space-x-2'>
						<Button
							className='text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
							variant='outline'>
							<svg
								className=' w-5 h-5'
								fill='none'
								height='24'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								viewBox='0 0 24 24'
								width='24'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M7 10v12' />
								<path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z' />
							</svg>
							Like{'\n                  '}
						</Button>
						<Button
							className='text-red-500 border-red-500 hover:bg-red-500 hover:text-white'
							variant='outline'>
							<svg
								className=' w-5 h-5'
								fill='none'
								height='24'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								viewBox='0 0 24 24'
								width='24'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M17 14V2' />
								<path d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z' />
							</svg>
							Dislike{'\n                  '}
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
