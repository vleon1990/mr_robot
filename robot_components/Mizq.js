import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLinks } from '../context/linkContext';

const variants = {
	open: { rotate: 90,},
	closed: { rotate: 0,}
}

const Mizq = () => {
	const [isOpen, setIsOpen] = useState(false)
	const {handleOcr,svgRotateRight,svgRotateLeft} = useLinks()
return (
	<motion.g 
	type="button" 
	whileHover={{ scale: 1.2 }} 
	whileTap={{ scale: 0.8 }}
	animate={isOpen ? "open" : "closed"}
	variants={variants}
	onClick={() => {
		setIsOpen(isOpen => !isOpen)
		handleOcr()
	}}
	>
    <g>
		<motion.path fill="#CEDCE3" d="M957.652,602.576c-4.094,9.428-8.871,18.555-14.113,27.379c-6.459,10.866-13.649,21.326-21.233,31.427
			c-6.436,8.581-13.023,18.45-21.303,25.373c-3.896,3.259-8.373,5.427-13.162,6.726c1.96-1.728,3.607-3.78,4.766-6.146
			c2.227-4.499,2.574-9.683,2.574-14.716c0-5.404-0.394-10.982-2.772-15.841c-1.554-3.189-3.896-5.926-6.459-8.384
			c-7.735-7.387-17.743-12.373-28.307-14.102c-0.127-0.023-0.267-0.046-0.394-0.069c-10.704-1.659-21.906,0.046-31.636,4.801
			c-4.001,1.96-7.828,4.488-10.402,8.106c-0.464,0.649-0.87,1.357-1.229,2.087c-0.023-0.232-0.046-0.464-0.07-0.696
			c0.997-9.729,6.784-16.977,12.42-25.211c3.641-5.335,7.375-10.657,11.202-15.922c0.823-1.136,1.647-2.273,2.493-3.398
			c8.686-11.817,17.847-23.344,27.6-34.233c1.635-1.844,3.294-3.664,4.975-5.462c0.104-0.104,0.209-0.22,0.302-0.324
			c11.272-11.991,26.011-22.44,42.42-24.225c4.186-0.464,8.489-0.348,12.872,0.441c3.085,0.557,6.1,1.426,9.022,2.575
			c9.022,3.525,17.035,9.683,22.637,17.592c2.853,4.036,5.126,8.605,5.74,13.51C966.813,583.58,961.444,593.866,957.652,602.576z" variants={svgRotateRight} initial="hidden" animate="visible"/>
	</g>
	<g>
		<motion.path fill="#A1C4D7" d="M965.595,573.862c-0.615-4.905-2.888-9.474-5.74-13.51c-5.601-7.909-13.614-14.066-22.637-17.592
			c-2.922-1.148-5.937-2.018-9.022-2.575c-4.384-0.788-8.686-0.904-12.872-0.441c0.429,1.496,0.615,3.073,0.545,4.615
			c-0.185,4.395-2.029,8.535-3.989,12.466c-0.796,1.605-1.616,3.197-2.456,4.777c4.909,0.734,9.661,2.429,13.159,5.857
			c0.22,0.209,0.441,0.441,0.499,0.742c0.058,0.371-0.151,0.73-0.359,1.044c-6.993,10.901-13.985,21.801-20.99,32.703
			c-5.101-2.064-10.43-3.521-15.856-4.407c-7.186,9.37-14.823,18.425-22.552,27.333c-2.424,2.794-4.975,5.845-5.682,9.416
			c10.564,1.728,20.572,6.714,28.307,14.102c2.563,2.459,4.905,5.195,6.459,8.384c2.377,4.859,2.772,10.437,2.772,15.841
			c0,5.033-0.348,10.217-2.574,14.716c-1.16,2.366-2.806,4.418-4.766,6.146c4.789-1.298,9.266-3.467,13.162-6.726
			c8.28-6.923,14.867-16.792,21.303-25.373c7.584-10.101,14.774-20.561,21.233-31.427c5.242-8.825,10.019-17.951,14.113-27.379
			C961.444,593.866,966.813,583.58,965.595,573.862z" variants={svgRotateLeft} initial="hidden" animate="visible"/>
	</g>
	
</motion.g>
)
}
export default Mizq