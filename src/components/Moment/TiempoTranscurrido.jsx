/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'

const TiempoTranscurrido = ({fechaPublicacion}) => {
	const [tiempoTranscurrido, setTiempoTranscurrido] = useState('')

	useEffect(() => {
		const calcularTiempoTranscurrido = () => {
			const ahora = new Date()
			const fechaPublicacionDate = new Date(fechaPublicacion)
			const diff = Math.floor((ahora - fechaPublicacionDate) / (1000 * 60)) // Diferencia en minutos

			let tiempo

			if (diff < 60) {
				tiempo = `${diff} minutos`
			} else if (diff < 1440) {
				tiempo = `${Math.floor(diff / 60)} horas`
			} else {
				tiempo = `${Math.floor(diff / 1440)} días`
			}

			setTiempoTranscurrido(tiempo)
		}

		calcularTiempoTranscurrido()
		const interval = setInterval(calcularTiempoTranscurrido, 60000) // Actualizar cada minuto

		return () => clearInterval(interval)
	}, [fechaPublicacion])

	return <span>{`Hace ${tiempoTranscurrido}`}</span>
}

export default TiempoTranscurrido
