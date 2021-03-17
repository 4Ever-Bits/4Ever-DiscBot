// Command example: !git org

import { inject, injectable } from "inversify";
import { TYPES } from "../../config/types";

@injectable()
export class GitOrgCommand {
  private prefix = "!git";
  private readonly githubOrgLink: string;

  constructor(@inject(TYPES.GitOrgLink) githubOrgLink: string) {
    this.githubOrgLink = githubOrgLink;
  }

  public getLink(): string {
    return `aqui está o link da nossa organização: ${this.githubOrgLink}`;
  }
}
