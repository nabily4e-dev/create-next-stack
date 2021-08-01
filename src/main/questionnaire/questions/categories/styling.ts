import inquirer from "inquirer"
import { stylingOptions } from "../../../create-next-stack-types"
import { arrayToKeyToKeyMap } from "../../../helpers/array-to-key-to-key-map"

type StylingValue = typeof stylingOptions[number]
const stylingValues = arrayToKeyToKeyMap(stylingOptions)

const answerName = "styling"
type Answers = {
  [answerName]: StylingValue
}

export const promptStyling = async (): Promise<StylingValue> => {
  const { styling } = await inquirer.prompt<Answers>({
    name: answerName,
    type: "list",
    message: "Pick your preferred styling method",
    choices: [
      {
        value: stylingValues.emotion,
        name: "Emotion",
        checked: true,
      },
      {
        value: stylingValues["styled-components"],
        name: "styled-components",
      },
      {
        value: stylingValues["css-modules"],
        name: "CSS Modules",
      },
      {
        value: stylingValues["css-modules-with-sass"],
        name: "CSS Modules with Sass",
      },
    ],
  })

  return styling
}
