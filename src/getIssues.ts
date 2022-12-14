import { getOctokit } from "@actions/github";

interface Params {
  token: string;
  owner: string;
  repo: string;
  labels: string[];
}

/** Incomplete issue interface (octokit doesn't export this). */
export interface Issue {
  number: number;
  title: string;
  created_at: string; // Timestamp
  labels: Label[];
}

/** Incomplete label interface (also not exported). */
export interface Label {
  name?: string;
}

/** Fetch all relevant issues for a repository. */
const getIssues = async ({
  token,
  owner,
  repo,
  labels,
}: Params): Promise<Issue[]> => {
  const github = getOctokit(token);

  const issues = await github.paginate(github.rest.issues.listForRepo, {
    owner,
    repo,
    state: "open",
    labels: labels.join(","),
    per_page: 100,
  });

  return issues.map((i) => ({
    number: i.number,
    title: i.title,
    created_at: i.created_at,
    labels: i.labels.map((l) => ({ name: typeof l === "string" ? l : l.name })),
  }));
};

export default getIssues;
