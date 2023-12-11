import Avatar from '../../components/Avatar/Avatar'
export default function Component() {
	return (
		<main className='md:flex md:w-full h-screen bg-customBgDark dark:bg-gray-900'>
			<section className='w-full md:w-64 md:h-screen md:mx-1 bg-white dark:bg-customBgDark'>
				<header className='w-full h-40 bg-dark relative'>
					<img
						src=''
						alt=''
					/>
				</header>
				<Avatar />
			</section>
			<section className='flex flex-col flex-1 md:max-w-4xl bg-white dark:bg-customBgDark'>
				<header className='bg-white dark:bg-customBgLight relative'>
					<h2 className='text-2xl pl-3 dark:text-customTextLight font-normal font-poppins'>
						Publish
					</h2>

					<textarea
						className='w-full h-12 p-3 rounded-md resize-none outline-none text-customTextDark font-poppins dark:bg-customBgLight dark:text-customTextLight'
						placeholder="What's on your mind?"
					/>
					<input
						className='invisible'
						type='file'
						name=''
						id='inputFiled'
					/>
					<label
						className='absolute top-11 right-3 cursor-pointer w-10 h-10 text-customTextDark dark:text-customTextLight'
						htmlFor='inputFiled'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<rect
								width='18'
								height='18'
								x='3'
								y='3'
								rx='2'
								ry='2'
							/>
							<circle
								cx='9'
								cy='9'
								r='2'
							/>
							<path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
						</svg>
					</label>

					<button
						className='mt-2 w-full bg-zinc-800 text-zinc-50'
						type='submit'>
						Post
					</button>
				</header>
				<h2 className='mt-8 pl-3 text-2xl font-poppins dark:text-customTextLight'>
					Your Posts
				</h2>
				<div className='space-y-4 mt-4'></div>
			</section>
		</main>
	)
}
