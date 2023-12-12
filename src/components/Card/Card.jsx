import ImageAvatar from '../Avatar/ImageAvatar'
import UserName from '../Avatar/UserName'

function Card(photo, description) {
	return (
		<section className='px-4 py-6 md:px-6 md:py-12 lg:py-16'>
			<article
				className='border text-card-foreground max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'
				data-v0-t='card'>
				<div className='md:flex'>
					<header className='md:flex-shrink-0'>
						<img
							className='h-48 w-full object-cover md:h-full md:w-48'
							src={photo}
							alt='Post image'
							width='500'
							height='300'
							style={{aspectRatio: '500/300', objectFit: 'cover'}}
						/>
					</header>
					<div className='p-8'>
						<div className='flex items-center gap-3'>
							<span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9'>
								<span className='flex h-full w-full items-center justify-center rounded-full bg-muted'>
									<ImageAvatar />
								</span>
							</span>
							<div className='grid gap-0.5 text-xs'>
								<UserName />
								{/* <div className='text-zinc-500 dark:text-zinc-400'>
									20 minutes ago
								</div> */}
							</div>
						</div>
						<div className='mt-2'>
							{/* <p className='text-2xl font-semibold'>Post title</p> */}
							<p className='mt-2 text-gray-500'>{description}</p>
						</div>
						{/* <div className='flex items-center mt-4'>
							<div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mr-2'>
								♥ 120
							</div>
							<div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mr-2'>
								✉ 60
							</div>
							<div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mr-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth={2}
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5 mr-1 inline-block'>
									<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
									<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
								</svg>{' '}
								300
							</div>
						</div> */}
					</div>
				</div>
			</article>
		</section>
	)
}
export default Card
