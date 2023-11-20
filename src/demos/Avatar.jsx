import {AvatarImage, AvatarFallback, Avatar} from '@/components/ui/avatar'

export default function Component() {
	return (
		<div className='flex flex-col items-center gap-3'>
			<Avatar className='h-16 w-16'>
				<AvatarImage
					alt='User name'
					src='/placeholder-avatar.jpg'
				/>
				<AvatarFallback>UN</AvatarFallback>
			</Avatar>
			<div className='text-lg font-semibold'>User Name</div>
			<div className='flex gap-4'>
				<div className='flex items-center gap-1'>
					<svg
						className=' h-5 w-5 text-zinc-500 dark:text-zinc-400'
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
						<circle
							cx='9'
							cy='7'
							r='4'
						/>
						<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
						<path d='M16 3.13a4 4 0 0 1 0 7.75' />
					</svg>
					<span className='font-medium text-zinc-500 dark:text-zinc-400'>
						1.5k
					</span>
					<span className='text-zinc-500 dark:text-zinc-400'>followers</span>
				</div>
				<div className='flex items-center gap-1'>
					<svg
						className=' h-5 w-5 text-zinc-500 dark:text-zinc-400'
						fill='none'
						height='24'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						width='24'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
						<circle
							cx='9'
							cy='7'
							r='4'
						/>
						<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
						<path d='M16 3.13a4 4 0 0 1 0 7.75' />
					</svg>
					<span className='font-medium text-zinc-500 dark:text-zinc-400'>
						500
					</span>
					<span className='text-zinc-500 dark:text-zinc-400'>following</span>
				</div>
			</div>
		</div>
	)
}
