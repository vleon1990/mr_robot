import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLinks } from '../context/linkContext'

const variants = {
	open: { rotate: 90,},
	closed: { rotate: 0,}
}

const Pizq = () => {
	const [isOpen, setIsOpen] = useState(false)
	const {handleMulti,svgRotateRight,svgRotateLeft} = useLinks()

return (
	<motion.g 
	type="button" 
	whileHover={{ scale: 1.2 }} 
	whileTap={{ scale: 0.8 }}
	animate={isOpen ? "open" : "closed"}
	variants={variants}
	onClick={() => {
		setIsOpen(isOpen => !isOpen)
		handleMulti()
	}}
	>
    <g>
		<motion.path fill="#CEDCE3" d="M790.846,921.586c-3.502,45.481-7.004,90.952-10.506,136.422c-0.383,5.056-0.476,10.344-1.38,15.377
			c-1.392,7.7-4.743,13.406-12.281,16.328c-1.067,0.417-2.169,0.766-3.27,1.09c-2.656,0.777-5.392,1.299-8.152,1.67
			c-2.226,0.325-4.465,0.533-6.68,0.696c-11.365,0.846-22.868,1.658-34.21,0.267c-4.488-0.557-8.976-1.496-13.324-2.865
			c-4.986-1.565-9.787-3.687-14.159-6.494c-1.345-0.87-2.215-2.308-2.319-3.897c-0.591-8.848-1.102-17.707-1.519-26.567
			c-1.751-36.785-1.983-73.638-0.684-110.446c0.429-12.362,1.032-24.724,1.809-37.074c0.116-1.693,0.232-3.433,0.626-5.08
			c0.267-1.09,0.649-2.122,1.229-3.084c2.018-3.386,5.775-4.848,9.799-5.52c-0.023,0.986-0.035,1.983-0.058,2.969
			c-0.023,2.389-0.012,4.917,1.264,6.947c1.333,2.122,3.792,3.235,6.158,4.07c9.66,3.398,20.051,4.036,30.29,4.395
			c8.106,0.29,16.537,0.324,24.573-0.927c8.106-1.253,15.806-3.815,22.335-8.756c2.818-2.122,3.108-5.856,3.073-9.706
			c0.012,0,0.023,0,0.046,0.012c1.635,0.324,3.328,0.742,4.615,1.809c1.438,1.194,2.238,2.969,2.69,4.917
			c0.591,2.528,0.614,5.335,0.684,7.515C791.67,910.975,791.252,916.286,790.846,921.586z" variants={svgRotateRight} initial="hidden" animate="visible"/>
	</g>
	<g>
		<motion.path fill="#A1C4D7" d="M790.846,921.586c-0.591,7.724-1.194,15.446-1.786,23.158c-0.765,9.973-1.531,19.946-2.307,29.92
			c-2.134,27.785-4.268,55.571-6.413,83.345c-0.383,5.056-0.476,10.344-1.38,15.377c-1.392,7.7-4.743,13.406-12.281,16.328
			c-1.067,0.417-2.169,0.766-3.27,1.09c-2.656,0.777-5.392,1.299-8.152,1.67c0-60.963,9.95-122.216,2.795-182.611
			c8.106-1.253,15.806-3.815,22.335-8.756c2.818-2.122,3.108-5.856,3.073-9.706c0.012,0,0.023,0,0.046,0.012
			c1.635,0.324,3.328,0.742,4.615,1.809c1.438,1.194,2.238,2.969,2.69,4.917c0.591,2.528,0.614,5.335,0.684,7.515
			C791.67,910.975,791.252,916.286,790.846,921.586z" variants={svgRotateLeft} initial="hidden" animate="visible"/>
	</g>
	
</motion.g>
)
}
export default Pizq