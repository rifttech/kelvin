import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./button";

const testText = "Blalalal";

storiesOf("Button", module).add(
	"text test",
	() => (<><Button clicked={()=>{console.log("clicked")}} text={testText}/> </>));
