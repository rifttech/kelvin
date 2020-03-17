
import React from 'react';

export interface ButtonProperties {
	text: string;
	clicked: () => void;
}

const Button = (props: ButtonProperties) => {
	return (<button onClick={props.clicked}>{props.text}</button>)
};

export default Button;