import React, {FC} from "react";
import {RangeInputProps} from "./declaration";

function orDefault(val, defaultVal) {
    return (val) ? val : defaultVal;
}

const RangedInput: FC<RangeInputProps> = (props) => {
    const { max, min, step } = props;

    const attributes = {
        max: orDefault(max, 100),
        min: orDefault(min, 0),
        step: orDefault(step, 1)
    };

    return (
        <div>
            <span>A</span>
            <input type="range" {...attributes}/>
            <span>B</span>
        </div>
    )
};

export default RangedInput;
