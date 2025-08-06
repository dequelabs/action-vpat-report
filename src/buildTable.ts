import * as core from "@actions/core";
import { format } from "date-fns";
import type { Issue } from "./getIssues";
import { LEVEL_A, LEVEL_AA } from "./wcag";

interface Params {
  level: "A" | "AA";
  issues: Issue[];
  owner: string;
  repo: string;
}

/** Build a Markdown table for the given `issues`. */
const buildTable = ({ level, issues, owner, repo }: Params) => {
  const table: string[] = [];
  const successCriteria = level === "A" ? LEVEL_A : LEVEL_AA;
  const tableNumber = level === "A" ? "1" : "2";

  table.push(`## Table ${tableNumber}: Success Criteria, Level ${level}`);
  table.push("");
  table.push("| Criteria | Conformance Level | Remarks and Explanations |");
  table.push("| --- | --- | --- |");

  for (const sc of successCriteria) {
    const relevantIssues = issues
      .filter((issue) => {
        const labels = issue.labels.map((l) => l.name);
        return labels.includes("VPAT") && labels.includes("WCAG " + sc.id);
      })
      .sort((a, b) => {
        const aDate = new Date(a.created_at);
        const bDate = new Date(b.created_at);
        return aDate.getTime() - bDate.getTime();
      });

    core.debug(`Issues for ${sc.id}: ${relevantIssues.length}`);

    const remarks: string[] = [];
    if (relevantIssues.length) {
      remarks.push("<ul>");
      for (const issue of relevantIssues) {
        const { title, number, created_at } = issue;
        const issueDate = format(new Date(created_at), "yyyy-MM-dd");
        const text = `[#${number}] ${title}`;
        const href = `https://github.com/${owner}/${repo}/issues/${number}`;
        const suffix = ` (${issueDate})`;
        remarks.push(`<li>[${text}](${href})${suffix}</li>`);
      }
      remarks.push("</ul>");
    }

    const conformance = relevantIssues.length
      ? "Partially Supports"
      : "Supports";
    const remarksText = remarks.length ? remarks.join(" ") : "";

    const criteria = `[${sc.id} ${sc.name}](${sc.url}) (Level ${sc.level})`;

    table.push(`| ${criteria} | ${conformance} | ${remarksText} |`);
  }

  return table.join("\n");
};

export default buildTable;
