import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLinks } from '../context/linkContext';

const variants = {
	open: { rotate: -90,},
	closed: { rotate: 0,}
}

const Pecho = () => {
	const [isOpen, setIsOpen] = useState(false)
	const {handleCollaz,svgRotateRight} = useLinks()
return (
	<motion.g 
	type="button" 
	whileHover={{ scale: 1.2 }} 
	whileTap={{ scale: 0.8 }}
	animate={isOpen ? "open" : "closed"}
	variants={variants}
	onClick={() => {
		setIsOpen(isOpen => !isOpen)
		handleCollaz()
	}}
	>
	<g>
		<motion.path fill="#CEDCE3" d="M732.466,585.306c-0.929-4.955-1.891-9.902-2.847-14.844c-3.547-18.326-7.448-36.584-11.702-54.759
			c-1.937-8.276-3.467-16.559-5.177-24.896c-1.681-8.173-6.224-19.756-3.357-28.279c-9.755-2.37-20.136-1.634-30.223-0.933
			c-81.164,5.694-162.596,7.677-243.934,5.938c-2.934-0.058-6.297-0.429-8.825-1.751c0.023,1.82,0.441,3.746,0.905,5.473
			c0.97,3.585,1.938,7.17,2.905,10.756c1.277,4.73,2.553,9.459,3.832,14.189c3.944,14.607,8.113,29.255,12.401,43.897
			c7.64,26.088,15.668,52.155,23.549,77.937c11.522,0.148,23.07,0.321,34.634,0.513c76.571,1.271,153.906,3.468,230.174,6.027
			c1.125-0.081,2.238-0.243,3.316-0.487v-0.499C736.996,610.759,734.849,598.009,732.466,585.306z" variants={svgRotateRight} initial="hidden" animate="visible"/>
	</g>
	
</motion.g>
)
}
export default Pecho