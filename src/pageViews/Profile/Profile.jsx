import Avatar from '../../assets/avatar.png'
export default function Component() {
	return (
		<main className='flex md:w-3/5 h-screen bg-light dark:bg-zinc-900'>
			<section className='w-64 h-min border-r bg-white dark:bg-zinc-800 relative'>
				<header className='w-full h-40 bg-dark'>
					<img
						src=''
						alt=''
					/>
				</header>
				<article>
					<div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<img
							alt='Profile'
							className='rounded-full bg-light'
							height='100'
							src={Avatar}
							style={{
								aspectRatio: '100/100',
								objectFit: 'cover'
							}}
							width='100'
						/>
					</div>
					<h2 className='mt-14 text-center text-3xl text-dark font-poppins font-medium'>
						Jack Parrows
					</h2>
					<p className='mt-2 text-center text-zinc-600 dark:text-zinc-400'>
						Short description about you
					</p>
				</article>
				<footer className='flex justify-center items-center gap-3'>
					<article className='flex flex-col justify-center items-center'>
						<span className='font-medium text-zinc-500 dark:text-zinc-400'>
							1.5k
						</span>
						<span className='text-zinc-500 dark:text-zinc-400'>followers</span>
					</article>
					<article className='flex flex-col justify-center items-center'>
						<span className='font-medium text-zinc-500 dark:text-zinc-400'>
							500
						</span>
						<span className='text-zinc-500 dark:text-zinc-400'>following</span>
					</article>
				</footer>
			</section>
			<section className='flex flex-col flex-1'>
				<header className='p-4 border-b bg-white dark:bg-zinc-800'>
					<h2 className='text-2xl font-semibold'>Publish</h2>
					<div className='mt-4'>
						<textarea
							className='w-full h-32 p-3 rounded-md border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100'
							placeholder="What's on your mind?"
						/>
						<button
							className='mt-2 w-full bg-zinc-800 text-zinc-50'
							type='submit'>
							Post
						</button>
					</div>
				</header>
				<h2 className='mt-8 text-2xl font-semibold'>Your Posts</h2>
				<div className='space-y-4 mt-4'>
					<div className='p-4 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 rounded-md'>
						<p>First post content...</p>
					</div>
					<div className='p-4 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 rounded-md'>
						<p>Second post content...</p>
					</div>
				</div>
			</section>
		</main>
	)
}
