import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./button";

const testText = "this is a test";

storiesOf("Button", module).add(
	"text test",
	() => (<><Button text={testText}/> </>));