import {Link} from 'react-router-dom'

export default function Component() {
	return (
		<div className='grid min-h-screen w-full lg:grid-cols-[280px_1fr]'>
			<div className='hidden border-r bg-zinc-100/40 lg:block dark:bg-zinc-800/40'>
				<div className='flex flex-col gap-2'>
					<div className='flex h-[60px] items-center border-b px-6'>
						<Link
							className='flex items-center gap-2 font-semibold'
							href='#'>
							<IconCalendar className='h-6 w-6' />
							<span className=''>Dashboard</span>
						</Link>
					</div>
					<div className='flex-1 overflow-auto py-2'>
						<nav className='grid items-start px-4 text-sm font-medium'>
							<Link
								className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
								href='#'>
								<IconCalendar className='h-4 w-4' />
								Calendar
							</Link>
							<Link
								className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
								href='#'>
								<IconClock className='h-4 w-4' />
								Appointments
							</Link>
							<Link
								className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
								href='#'>
								<IconUsers className='h-4 w-4' />
								Clients
							</Link>
							<Link
								className='flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
								href='#'>
								<IconShoppingcart className='h-4 w-4' />
								Sales
							</Link>
						</nav>
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-zinc-100/40 px-6 dark:bg-zinc-800/40'>
					<Link
						className='lg:hidden'
						href='#'>
						<IconCalendar className='h-6 w-6' />
						<span className='sr-only'>Dashboard</span>
					</Link>
					<div className='w-full flex-1'>
						<nav className='hidden lg:flex items-center gap-6 text-lg font-medium'>
							<Link
								className='text-zinc-500 dark:text-zinc-400'
								href='#'>
								Appointments
							</Link>
							<Link
								className='text-zinc-500 dark:text-zinc-400'
								href='#'>
								Sales
							</Link>
							<Link
								className='text-zinc-500 dark:text-zinc-400'
								href='#'>
								Reports
							</Link>
							<Link
								className='text-zinc-500 dark:text-zinc-400'
								href='#'>
								Settings
							</Link>
						</nav>
					</div>
				</header>
				<main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
					<div className='grid gap-6 md:grid-cols-2'>
						<Card>
							<CardHeader className='pb-4'>
								<CardTitle>Appointments</CardTitle>
								<CardDescription>
									View and manage your appointments
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									className='w-full'
									size='sm'>
									Manage Appointments
								</Button>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='pb-4'>
								<CardTitle>Sales</CardTitle>
								<CardDescription>Track and analyze your sales</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									className='w-full'
									size='sm'>
									View Sales
								</Button>
							</CardContent>
						</Card>
					</div>
				</main>
			</div>
		</div>
	)
}

function IconCalendar(props) {
	return (
		<svg
			{...props}
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
				y='4'
				rx='2'
				ry='2'
			/>
			<line
				x1='16'
				x2='16'
				y1='2'
				y2='6'
			/>
			<line
				x1='8'
				x2='8'
				y1='2'
				y2='6'
			/>
			<line
				x1='3'
				x2='21'
				y1='10'
				y2='10'
			/>
		</svg>
	)
}

function IconClock(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<circle
				cx='12'
				cy='12'
				r='10'
			/>
			<polyline points='12 6 12 12 16 14' />
		</svg>
	)
}

function IconShoppingcart(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<circle
				cx='8'
				cy='21'
				r='1'
			/>
			<circle
				cx='19'
				cy='21'
				r='1'
			/>
			<path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
		</svg>
	)
}

function IconUsers(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
			<circle
				cx='9'
				cy='7'
				r='4'
			/>
			<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
			<path d='M16 3.13a4 4 0 0 1 0 7.75' />
		</svg>
	)
}
