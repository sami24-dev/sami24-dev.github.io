import Panel from '../../components/Panel/Panel'
import '../../scroll.css'
function Publication() {
	return (
		<>
			<main className='lg:flex flex-col lg:w-full lg:h-screen rounded-md px-2 md:px-0 lg:px-0 lg:py-2'>
				<section className='box md:overflow-y-scroll h-full rounded-md'></section>
			</main>
			<aside className='bg-customBgDark dark:bg-gray-900 hidden md:block p-2'>
				<Panel />
			</aside>
		</>
	)
}
export default Publication
