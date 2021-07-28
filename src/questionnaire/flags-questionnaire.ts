import { ValidCreateNextStackFlags } from "../create-next-stack-types"
import { exitWithError } from "../helpers/exit-with-error"
import { promptTechnologies } from "./questions/technologies"

export const performFlagsQuestionnaire =
  async (): Promise<ValidCreateNextStackFlags> => {
    const technologies = await promptTechnologies()

    return {
      "package-manager": getPackageManager(technologies),
      prettier: technologies.includes("prettier"),
      styling: getStyling(technologies),
      "react-hook-form": technologies.includes("reactHookForm"),
      formik: technologies.includes("formik"),
      "framer-motion": technologies.includes("framerMotion"),
      "formatting-pre-commit-hook": technologies.includes("preCommitHook"),
    }
  }

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

const getPackageManager = (
  technologies: ThenArg<ReturnType<typeof promptTechnologies>>
) => {
  if (technologies.includes("yarn")) {
    return "yarn"
  } else if (technologies.includes("npm")) {
    return "npm"
  } else {
    exitWithError("No package manager found.")
    process.exit(1)
  }
}

const getStyling = (
  technologies: ThenArg<ReturnType<typeof promptTechnologies>>
) => {
  if (technologies.includes("emotion")) {
    return "emotion"
  } else if (technologies.includes("styledComponents")) {
    return "styled-components"
  } else if (technologies.includes("cssModules")) {
    return "css-modules"
  } else {
    exitWithError("No styling method found.")
    process.exit(1)
  }
}