import React from 'react'

const Button: React.FC<Parameters> = ({children, ...rest}) => {
	return (
		<button {...rest}>
			{children}
		</button>
	)
}

export default Button

interface Parameters {
	children: any;
}