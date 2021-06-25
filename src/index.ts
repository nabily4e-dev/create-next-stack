import { Command, flags } from "@oclif/command"
import { createNextApp } from "./steps/create-next-app"
import { getProjectName } from "./steps/get-project-name"
import { updateYarn } from "./steps/update-yarn"

type Answers = {
  projectName?: string
}

class Boil extends Command {
  static description =
    "Boil is an opinionated interactive command to easily setup the boilerplate of your next frontend."

  static flags = {
    help: flags.help({ char: "h" }),
    version: flags.version({ char: "v" }),
  }

  answers: Answers = {}

  async run() {
    this.parse(Boil)

    const steps = [getProjectName, updateYarn, createNextApp]

    for (const step of steps) {
      // eslint-disable-next-line no-await-in-loop
      await step.call(this)
    }

    this.log(`Successfully created project ${this.answers.projectName}`)
  }
}

export = Boil
