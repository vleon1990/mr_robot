import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLinks } from '../context/linkContext';

const variants = {
	open: { rotate: 90,},
	closed: { rotate: 0,}
}

const Cabeza = () => {
	const [isOpen, setIsOpen] = useState(false)
	const {handleAllParts,svgRotateRight,svgRotateLeft} = useLinks()
return (
	<motion.g 
	type="button" 
	whileHover={{ scale: 1.2 }} 
	whileTap={{ scale: 0.8 }}
	animate={isOpen ? "open" : "closed"}
	variants={variants}
	onClick={() => {
		setIsOpen(isOpen => !isOpen)
		handleAllParts()
	}}
	>
	<g>
			<motion.path fill="#CEDCE3" d="M695.697,253.947c-0.905-63.375-6.169-126.669-15.771-189.302c-0.707-4.604-1.577-9.474-3.467-13.684
				c-10.228-0.708-20.468-1.078-30.731-0.928c-0.278,0-0.568,0.012-0.847,0.023c-26.916,0.464-53.646,4.418-80.283,8.361
				C464.333,73.261,364.081,88.116,263.817,102.96c-1.368,0.208,0.557,23.135,3.514,51.871
				c4.708,45.726,12.06,106.19,12.965,113.298c2.203,17.175,4.581,34.326,7.143,51.454c0.928,6.147,0.406,19.134,3.734,24.26
				c4.673,7.179,3.224,6.831,13.139,5.37c0.081-0.012,0.162-0.023,0.243-0.035c30.661-4.499,54.399-9.602,80.677-14.473
				c1.148-0.208,2.296-0.429,3.444-0.638c3.038-0.557,6.123-1.113,9.254-1.659c3.259-0.568,6.575-1.136,9.961-1.693
				c4.047-0.673,8.199-1.333,12.478-1.972c39.011-5.891,83.449-10.332,122.495-16.073c40.715-5.972,78.996-10.471,118.9-12.756
				c2.609-0.151,5.207-0.29,7.828-0.417c8.57-0.417,17.221-0.754,26.011-0.963c0.162-8.802,0.22-17.604,0.22-26.394
				C695.812,266.078,695.778,260.012,695.697,253.947z M657.706,204.616c-0.893,10.912-9.254,18.473-18.381,23.332
				c-15.168,8.094-33.027,11.029-49.865,13.336c-13.116,1.798-26.278,3.235-39.417,4.824c-5.114,0.614-10.228,1.253-15.342,1.937
				c-13.672,1.844-27.333,3.711-41.005,5.578c-16.224,2.226-32.459,4.465-48.683,6.668c-3.247,0.441-6.506,0.87-9.753,1.31
				c-17.662,2.389-35.323,4.732-52.996,6.981c-10.611,1.357-21.222,2.679-31.833,3.955c-1.16,0.139-2.331,0.301-3.514,0.464
				c-1.114,0.163-2.238,0.313-3.363,0.476c-0.302,0.046-0.591,0.081-0.881,0.127c-1.113,0.151-2.226,0.29-3.351,0.417
				c-0.197,0.023-0.406,0.046-0.615,0.07c-1.171,0.127-2.343,0.232-3.514,0.313c-0.046,0-0.104,0.012-0.151,0.012
				c-0.104,0.011-0.209,0.011-0.313,0.011c-0.522,0.035-1.032,0.058-1.554,0.07c-0.267,0.011-0.533,0.011-0.8,0.023
				c-0.441,0-0.881,0-1.322-0.012c-0.302,0-0.592-0.011-0.893-0.011c-0.418-0.023-0.835-0.046-1.253-0.07
				c-0.302-0.023-0.603-0.046-0.905-0.07c-0.418-0.046-0.835-0.093-1.241-0.151c-0.29-0.046-0.58-0.081-0.87-0.127
				c-0.429-0.07-0.858-0.151-1.276-0.243c-0.278-0.058-0.545-0.105-0.811-0.174c-0.441-0.104-0.893-0.232-1.334-0.371
				c-0.232-0.07-0.475-0.127-0.708-0.209c-0.487-0.162-0.974-0.348-1.45-0.545c-0.185-0.081-0.371-0.139-0.557-0.22
				c-0.649-0.29-1.31-0.603-1.948-0.963c-9.973-5.578-17.105-16.491-19.111-27.623c-0.963-5.288-0.754-11.098,0.557-16.687
				c2.807-12.06,10.727-23.089,23.124-25.652c1.763-0.36,3.525-0.719,5.288-1.079c20.688-4.233,41.423-8.199,62.216-11.921
				c15.029-2.69,30.093-5.254,45.169-7.677h0.012c11.967-1.925,23.947-3.769,35.949-5.532c5.926-0.87,11.852-1.716,17.777-2.54
				c5.207-0.73,10.414-1.45,15.632-2.134c12.304-1.659,24.631-3.212,36.97-4.685c1.484-0.174,2.957-0.348,4.442-0.522
				c17.951-2.11,37.353-4.801,56.093-5.288c5.021-0.139,9.985-0.116,14.867,0.116c15.806,0.754,27.982,7.434,35.59,20.549
				C655.862,186.687,658.274,197.53,657.706,204.616z" variants={svgRotateRight} initial="hidden" animate="visible"/>
		</g>
		<g>
		<motion.path fill="#929BA8" d="M885.161,264.28c0,1.96-0.012,3.919-0.012,5.879c0,2.401,0,4.801-0.012,7.19
			c-0.012,2.053-0.023,4.094-0.035,6.146c-0.023,2.285-0.023,4.57-0.046,6.854c-0.023,2.482-1.658,4.558-3.896,5.3l-84.075,1.461
			c-4.07,0.046-8.152,0.104-12.223,0.163c-1.113,0.011-2.238,0.035-3.351,0.046c-4.047,0.058-8.083,0.116-12.119,0.174h-0.603
			c-1.473,0.023-2.934,0.046-4.406,0.07c-10.599,0.139-21.164,0.29-31.659,0.441c-4.094,0.046-8.164,0.104-12.234,0.163
			c-5.903,0.081-11.782,0.162-17.615,0.243c-2.424,0.035-4.848,0.07-7.271,0.127c0.162-8.802,0.22-17.604,0.22-26.394
			c-0.012-6.064-0.046-12.13-0.127-18.195c-0.905-63.375-6.169-126.669-15.771-189.302c-0.707-4.604-1.577-9.474-3.467-13.684
			c21.303,1.473,42.525,4.453,63.677,7.422c46.259,6.494,92.552,12.988,138.347,22.254c0.313,4.326,0.626,8.663,0.916,13.011
			c0.22,3.305,0.441,6.61,0.649,9.915c0.058,1.044,0.139,2.076,0.197,3.119c0.151,2.377,0.29,4.766,0.429,7.144
			c0.116,1.983,0.244,3.954,0.348,5.937c0.104,1.798,0.197,3.607,0.302,5.404c0.116,2.029,0.22,4.071,0.336,6.111
			c0.023,0.533,0.058,1.055,0.081,1.589c0.081,1.704,0.162,3.421,0.244,5.126c0.116,2.134,0.22,4.279,0.325,6.413
			c0.023,0.533,0.046,1.055,0.07,1.589c0.07,1.403,0.127,2.818,0.185,4.221c0.139,2.98,0.267,5.949,0.394,8.918
			c0.035,1.009,0.07,2.029,0.116,3.038c0.139,3.328,0.267,6.679,0.394,10.019v0.093c0.058,1.612,0.104,3.224,0.162,4.824
			c0.081,2.482,0.162,4.963,0.255,7.445c0,0.29,0.012,0.58,0.023,0.87c0.058,1.89,0.104,3.769,0.151,5.648
			c0.07,2.122,0.128,4.233,0.185,6.366c0.012,0.383,0.023,0.777,0.035,1.16c0.046,1.739,0.081,3.479,0.116,5.23
			c0.07,2.632,0.139,5.276,0.185,7.921c0.046,1.751,0.07,3.502,0.104,5.242c0.046,2.644,0.104,5.276,0.139,7.909
			c0.012,0.893,0.023,1.797,0.046,2.69c0,0.939,0.012,1.879,0.035,2.83c0.035,2.54,0.07,5.079,0.093,7.619
			c0.023,2.018,0.035,4.024,0.058,6.042c0.023,2.354,0.046,4.72,0.058,7.085c0.012,1.972,0.012,3.943,0.023,5.926
			C885.138,259.479,885.161,261.88,885.161,264.28z" variants={svgRotateLeft} initial="hidden" animate="visible"/>
	</g>
	
</motion.g>
)
}
export default Cabeza