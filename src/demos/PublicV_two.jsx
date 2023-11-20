export default function Component() {
	return (
		<div className='px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
			<div className='flex items-center justify-between mb-4'>
				<div className='flex items-center space-x-3'>
					<Avatar className='h-9 w-9'>
						<AvatarImage
							alt="Author's Name"
							src='/placeholder-avatar.jpg'
						/>
						<AvatarFallback>AN</AvatarFallback>
					</Avatar>
					<div>
						<h3 className='text-lg font-semibold text-gray-700 dark:text-white'>
							Author's Name
						</h3>
						<span className='text-sm text-gray-500 dark:text-gray-300'>
							Posted 3 hours ago
						</span>
					</div>
				</div>
				<span className='text-sm text-gray-500 dark:text-gray-300'>
					3 min read
				</span>
			</div>
			<img
				alt='Post Cover'
				className='object-cover rounded-md'
				height='200'
				src='/placeholder.svg'
				style={{
					aspectRatio: '300/200',
					objectFit: 'cover'
				}}
				width='300'
			/>
			<div className='mt-4 flex items-center space-x-3'>
				<Button
					className='flex items-center space-x-2 text-gray-600 dark:text-gray-300'
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
						<path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
					</svg>
					<span>13</span>
				</Button>
				<Button
					className='flex items-center space-x-2 text-gray-600 dark:text-gray-300'
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
						<polyline points='9 17 4 12 9 7' />
						<path d='M20 18v-2a4 4 0 0 0-4-4H4' />
					</svg>
					<span>4</span>
				</Button>
			</div>
		</div>
	)
}
