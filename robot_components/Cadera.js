import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLinks } from '../context/linkContext'

const variants = {
	open: { rotate: 90,},
	closed: { rotate: 0,}
}

const Cadera = () => {
	const [isOpen, setIsOpen] = useState(false)
	const {handleMac,svgRotateRight} = useLinks()
return (
	<motion.g 
	type="button" 
	whileHover={{ scale: 1.2 }} 
	whileTap={{ scale: 0.8 }}
	animate={isOpen ? "open" : "closed"}
	variants={variants}
	onClick={() => {
		setIsOpen(isOpen => !isOpen)
		handleMac()
	}}
	>
	<g>
		<motion.path fill="#CEDCE3" d="M745.829,778.403c-0.826-12.728-2.591-25.391-5.265-37.862c-0.892-4.163-1.886-8.305-2.98-12.42
			c-1.241-4.666-2.698-9.421-5.234-13.471c-0.021,0.01-0.041,0.022-0.062,0.032c-4.795,2.174-10.292,1.931-15.548,1.622
			c-82.836-4.866-165.193-15.687-247.459-26.533c-3.66-0.482-7.989-1.47-9.281-4.928c-0.608-1.628-0.344-3.274,0.37-4.843
			l-0.164,0.031c-1.647,1.948-2.18,4.615-2.284,7.178c-0.29,7.039,2.145,13.869,4.256,20.595
			c4.755,15.192,7.978,30.801,11.631,46.282c0.313,1.299,0.626,2.632,1.345,3.769c1.106,1.74,2.864,2.676,4.865,3.196
			c2.172,0.565,4.632,0.639,6.871,0.7c8.036,0.209,16.049,1.716,23.61,4.442c3.688,1.333,7.306,2.969,10.414,5.381
			c2.505,1.937,4.615,4.349,6.517,6.888c2.826,3.814,5.188,7.981,7.009,12.372c0.599,1.446,1.938,2.455,3.488,2.67
			c6.465,0.897,12.918,1.75,19.368,2.583c35.279,4.556,70.385,8.207,105.936,11.467c0.719,0.066,1.376-0.193,1.859-0.638
			c0.535-0.493,0.857-1.216,0.786-2.014c-0.544-6.117-0.523-12.439,2.625-17.605c2.714-4.477,7.468-7.422,12.478-8.953
			c4.598-1.405,9.439-1.733,14.257-1.886c0.432-0.014,0.863-0.028,1.294-0.04c0.999-0.025,1.997-0.034,2.996-0.052
			c15.686-0.274,31.385,0.41,46.977,2.108c0.007-0.001,0.013-0.002,0.019-0.003C746.292,778.449,746.06,778.426,745.829,778.403z" variants={svgRotateRight} initial="hidden" animate="visible"/>
	</g>
	
</motion.g>
)
}
export default Cadera