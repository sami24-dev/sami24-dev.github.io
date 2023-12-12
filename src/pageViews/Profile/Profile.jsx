import {collection, getDocs} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import Avatar from '../../components/Avatar/Avatar'
import ImageAvatar from '../../components/Avatar/ImageAvatar'
import UserName from '../../components/Avatar/UserName'
import Post from '../../components/Post/Post'
import {useUserContext} from '../../context/UserContext'
import {db} from '../../firebase/app'

export default function Component() {
	const [publications, setPublications] = useState()
	const {user} = useUserContext()
	const {uid} = user
	const fechtData = async () => {
		try {
			const q = collection(db, uid)
			const date = await getDocs(q)
			// console.log(date.docs.map((doc) =>{...doc.data(), id: doc.id}))
			setPublications(date.docs.map((doc) => [{...doc.data(), id: doc.id}]))
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (!publications) {
			fechtData()
		}
	}, [db])

	console.log(publications)
	return (
		<main className='md:flex md:w-full h-screen bg-customBgDark dark:bg-gray-900'>
			<section className='w-full md:w-64 md:h-screen md:mx-1 bg-white dark:bg-customBgDark'>
				<header className='w-full h-40 bg-dark relative'>
					<img
						src=''
						alt=''
					/>
				</header>
				<div className='hidden md:block'>
					<Avatar />
				</div>
				<div className='md:hidden'>
					<article className='flex items-center justify-center flex-col gap-2 h-24'>
						<ImageAvatar />
						<UserName />
					</article>
				</div>
			</section>
			<section className='flex flex-col flex-1 md:max-w-4xl bg-white dark:bg-customBgDark'>
				<Post />
				<h2 className='mt-8 pl-3 text-2xl font-poppins dark:text-customTextLight'>
					Your Posts
				</h2>
				<div className='space-y-4 mt-4 md:overflow-auto'>
					{publications &&
						publications.map((subArray) =>
							subArray.map((obj) => {
								return (
									<section
										key={obj.id}
										className='px-4 py-6 md:px-6 md:py-12 lg:py-16 dark:bg-customBgDark'>
										<article
											className='text-card-foreground max-w-md mx-auto shadow-lg dark:shadow-sm rounded-md dark:shadow-customTextDark overflow-hidden md:max-w-2xl'
											data-v0-t='card'>
											<div className='md:flex'>
												<header className='md:flex-shrink-0'>
													<img
														className='h-48 w-full md:aspect-square object-cover md:h-full md:w-48'
														src={obj.foto}
														alt='image'
														width='500'
														height='300'
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
														</div>
													</div>
													<div className='mt-2'>
														<p className='mt-2 text-xl text-customTextDark dark:text-customTextLight'>
															{obj.descripcion}
														</p>
													</div>
												</div>
											</div>
										</article>
									</section>
								)
							})
						)}
				</div>
			</section>
		</main>
	)
}
