export default function Messages() {
	return (
		<section className='flex md:w-3/5 h-screen bg-light dark:bg-zinc-900'>
			<article className='w-64 border-r bg-white dark:bg-zinc-800'>
				<div className='p-4 space-y-2'>
					<h2 className='text-2xl font-semibold text-gray-900 dark:text-white'>
						Participants
					</h2>
					<ul>
						<li className='p-2 relative'>
							<img
								alt='Participant avatar'
								className='rounded-full mr-2 inline-block'
								height='32'
								src='/placeholder.svg'
								style={{
									aspectRatio: '32/32',
									objectFit: 'cover'
								}}
								width='32'
							/>
							<span className='font-medium text-gray-900 dark:text-white'>
								John Doe
							</span>
							<span className='absolute top-0 right-0 inline-block w-5 h-5 bg-red-500 rounded-full text-xs text-white text-center'>
								3
							</span>
						</li>
						<li className='p-2 relative'>
							<img
								alt='Participant avatar'
								className='rounded-full mr-2 inline-block'
								height='32'
								src='/placeholder.svg'
								style={{
									aspectRatio: '32/32',
									objectFit: 'cover'
								}}
								width='32'
							/>
							<span className='font-medium text-gray-900 dark:text-white'>
								Jane Doe
							</span>
							<span className='absolute top-0 right-0 inline-block w-5 h-5 bg-red-500 rounded-full text-xs text-white text-center'>
								1
							</span>
						</li>
					</ul>
				</div>
			</article>
			<article className='flex flex-col flex-1'>
				<header className='p-4 border-b bg-white dark:bg-zinc-800'>
					<div className='flex items-center justify-between'>
						<h2 className='text-2xl font-semibold text-gray-900 dark:text-white'>
							Chat Title
						</h2>
						<div className='relative'>
							<svg
								className=' absolute left-3 top-3 h-5 w-5 text-gray-500 dark:text-gray-400'
								fill='none'
								height='24'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								viewBox='0 0 24 24'
								width='24'
								xmlns='http://www.w3.org/2000/svg'>
								<circle
									cx='11'
									cy='11'
									r='8'
								/>
								<path d='m21 21-4.3-4.3' />
							</svg>
							<input
								className='pl-10'
								id='search'
								placeholder='Search chat'
								type='search'
							/>
						</div>
					</div>
				</header>
				<section className='flex-1 overflow-y-auto p-4 space-y-4'>
					<div className='p-4 rounded-lg bg-gray-100 dark:bg-zinc-700'>
						<p className='font-medium text-gray-900 dark:text-white'>
							John Doe
						</p>
						<p className='text-gray-900 dark:text-white'>Hello, Jane!</p>
					</div>
				</section>
				<footer className='p-4 border-t bg-white dark:bg-zinc-800 flex items-center'>
					<textarea
						className='w-3/4 h-20 mr-4'
						id='message'
						placeholder='Type your message'></textarea>
					<button className='w-14 h-14 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center'>
						<svg
							className=' h-6 w-6 text-white dark:text-gray-800'
							fill='none'
							height='24'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'
							width='24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='m22 2-7 20-4-9-9-4Z' />
							<path d='M22 2 11 13' />
						</svg>
					</button>
				</footer>
			</article>
		</section>
	)
}
