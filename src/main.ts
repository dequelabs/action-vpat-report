import * as core from "@actions/core";
import { context } from "@actions/github";
import { format } from "date-fns";
import dedent from "ts-dedent";
import * as fs from "fs";
import getIssues from "./getIssues";
import buildTable from "./buildTable";

const main = async () => {
  const token = core.getInput("github-token", { required: true });
  const productName = core.getInput("product-name", { required: true });
  const vpatLabel = core.getInput("vpat-label", { required: false });
  const additionalLabels = core.getInput("additional-labels", {
    required: false,
  });
  const outputFileTemplate = core.getInput("output-file", { required: false });

  core.setSecret(token);

  const { owner, repo } = context.repo;
  const labels = [vpatLabel, ...additionalLabels.split(",")];
  const date = format(new Date(), "yyyy-MM-dd");
  const productSlug = productName.toLowerCase().replace(/\s/g, "-");
  const outputFilename = outputFileTemplate
    .replace("{DATE}", date)
    .replace("{PRODUCT}", productSlug);

  core.debug(`owner: ${owner}`);
  core.debug(`repo: ${repo}`);
  core.debug(`labels: ${labels.join(", ")}`);
  core.debug(`outputFilename: ${outputFilename}`);

  const issues = await getIssues({ token, owner, repo, labels });
  core.debug(`issues: ${issues.length}`);

  const tableA = buildTable({ level: "A", issues, owner, repo });
  const tableAA = buildTable({ level: "AA", issues, owner, repo });

  const report = dedent`
    # ${productName} Accessibility Conformance Report WCAG Edition

    **Name of Product**: ${productName}

    **Report Date**: ${date}

    ${tableA}

    ${tableAA}
  `;

  fs.writeFileSync(outputFilename, report);
};

main().catch((err: Error) => {
  core.setFailed(err.message);
});
