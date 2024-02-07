import {useDataDb} from '../../hooks/useDataDb'
import Avatar from '../Avatar/Avatar'
import ImgFrontPage from './ImgFrontPage'
function FrontPage() {
	/* const udapteFrontPage = async (photo) => {
		const udapteRef = doc(db, uid, 'DATA-USUARIOS');
		await updateDoc(udapteRef, {
		descripcion: descriptions.toString(),
		foto: photo.toString(),
	});
	}
 */
	const {data} = useDataDb()
	return (
		<>
			<article className='w-full h-[30%] min-h-[200px] lg:h-1/2  lg:min-h-[350px] relative bg-customTextLight dark:bg-customBgDark rounded-md mb-2'>
				<ImgFrontPage />
				<div className='pl-5'>
					<Avatar
						classContainImg={
							'rounded-full w-[48px] md:w-[18%] lg:w-[20%] mt-[-5%] md:mt-[-10%] lg:mt-[-12%] z-50'
						}
						classImg={'rounded-full bg-dark object-cover'}
					/>
				</div>
				<footer className='flex flex-col justify-start items-start pl-[20%] md:pl-[24%] py-2 mt-[-8%] md:mt-[-7%] font-poppins text-dark dark:text-light font-medium'>
					<h2 className='capitalize'>
						{data?.firstName} <span>{data?.lastName}</span>{' '}
					</h2>
					<h3 className='capitalize'>{data?.profession}</h3>
				</footer>
			</article>
		</>
	)
}
export default FrontPage
