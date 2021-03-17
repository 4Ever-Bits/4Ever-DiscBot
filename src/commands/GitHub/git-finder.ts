import { inject, injectable } from "inversify";
import { GitOrgCommand } from "./git-org-link";
import { TYPES } from "../../config/types";

@injectable()
export class GitFinder {
  private prefix = "!";

  private gitOrgCommand: GitOrgCommand;

  constructor(@inject(TYPES.GitOrgCommand) gitOrgCommand: GitOrgCommand) {
    this.gitOrgCommand = gitOrgCommand;
  }

  public gitHandler(args: Array<string>): Promise<string> {
    if (args.find((element: string) => element === "org")) {
      return Promise.resolve(this.gitOrgCommand.getLink());
    }

    return Promise.reject(new Error("Git command not found"));
  }
}
