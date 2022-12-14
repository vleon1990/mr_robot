import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLinks } from '../context/linkContext';

const variants = {
	open: { rotate: -90,},
	closed: { rotate: 0,}
}

const Mder = () => {
	const [isOpen, setIsOpen] = useState(false)
	const {handleDron,svgRotateRight} = useLinks()
return (
	<motion.g 
	type="button" 
	whileHover={{ scale: 1.2 }} 
	whileTap={{ scale: 0.8 }}
	animate={isOpen ? "open" : "closed"}
	variants={variants}
	onClick={() => {
		setIsOpen(isOpen => !isOpen)
		handleDron()
	}}
	>
	<g>
		<motion.path fill="#CEDCE3" d="M407.881,495.725v0.313c0.058,6.042-2.656,11.77-5.636,17.035c-9.185,16.189-21.477,30.371-33.943,44.194
			c-16.177,17.928-34.21,36.309-57.716,41.852c-7.619,1.797-15.574,2.075-23.321,0.939c-8.697-1.276-17.128-4.337-24.538-9.069
			c-7.19-4.581-13.348-10.692-18.114-17.754c-4.534-6.714-7.804-14.275-9.44-22.207c-0.939-4.546-1.357-9.266-0.406-13.8
			c0.754-3.502,2.262-6.714,4.175-9.753c2.099-3.352,4.673-6.471,7.213-9.497c3.235-3.862,6.459-7.724,9.695-11.585
			c2.296-2.748,4.604-5.496,6.9-8.245c9.579-11.434,19.146-22.88,28.713-34.314c7.039-8.408,14.078-16.804,21.106-25.211
			c3.746-4.476,7.967-9.242,13.719-10.263c1.438-0.255,2.876-0.255,4.302-0.082c-1.635,0.742-3.061,1.891-4.036,3.409
			c-5.056,7.828,1.241,20.549,4.847,27.832c5.23,10.553,12.826,20.63,22.637,27.31c4.627,3.154,9.602,5.856,14.797,7.966
			c6.726,2.725,13.823,4.465,21.082,4.894c4.094,0.243,8.593-0.081,11.631-2.841c2.284-2.088,3.317-5.23,3.827-8.28
			c0.116-0.661,0.197-1.322,0.255-1.983C406.953,489.486,407.8,492.524,407.881,495.725z" variants={svgRotateRight} initial="hidden" animate="visible"/>
	</g>
	
</motion.g>
)
}
export default Mder