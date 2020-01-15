
import React from 'react';

export interface ButtonProperties {
	text: string;
}

const Button = (props: ButtonProperties) => {
	return (<button>{props.text}</button>)
};

export default Button;