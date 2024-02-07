import Logo from '../../components/Logo/Logo'
import FormDataPersonal from '../../components/form/formDataPersonal/formDataPersonal'
import Info from '../../components/iconComponent/Info'
function ConfigUser() {
	// estados

	return (
		<>
			<header className='p-2 bg-customBgDark rounded-md lg:w-[40%]'>
				<div className='bg-light dark:bg-customBgDark rounded-md p-4'>
					<Logo classLogo={'text-5xl'} />
					<h2 className='font-poppins font-medium text-dark dark;text-light text-2xl mt-2'>
						Guía Práctica
					</h2>
					<div className=' flex gap-x-2 font-poppins font-base text-dark dark:text-light mt-2'>
						<span>
							<Info />
						</span>

						<p>
							Complete su información y presione guardar para actualizar su
							perfil.
						</p>
					</div>
					<div className=' flex gap-x-2 font-poppins font-base text-dark dark:text-light mt-2'>
						<span>
							<Info />
						</span>

						<p>
							Antes de enviar el formulario, revisa cuidadosamente toda la
							información para asegurarte de que sea precisa y esté actualizada
						</p>
					</div>
				</div>
			</header>
			<aside></aside>
			<main className='flex justify-center items-center w-full bg-customBgDark py-2 rounded-md'>
				<section className='w-1/2 h-full lg:w-full bg-light  rounded-md p-2'>
					<FormDataPersonal />
				</section>
			</main>
		</>
	)
}
export default ConfigUser
