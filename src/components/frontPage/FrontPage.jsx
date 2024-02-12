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

	return (
		<>
			<article className='w-full h-[30%] min-h-[200px] lg:h-1/2  lg:min-h-[350px] bg-customTextLight dark:bg-customBgDark rounded-md mb-2'>
				<ImgFrontPage />
				<Avatar
					
				/>
			</article>
		</>
	)
}
export default FrontPage
