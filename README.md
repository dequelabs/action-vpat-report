# action-vpat-report

> Generate a VPAT report based on a repository's currently open issues (and their labels).

## Example workflow

```yaml
name: Generate a VPAT report

on:
  workflow_dispatch: # Manually trigger.
  schedule:
    - cron: "0 0 * * SUN" # Every Sunday at 00:00.

jobs:
  generate_report:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: dequelabs/action-vpat-report@main
        with:
          github-token: ${{ secrets.PAT }}
          product-name: axe DeveloperHub
          output-file: vpats/{DATE}-{PRODUCT}.md
          vpat-label: VPAT
          additional-labels: "PROD: axe-devhub,some-other-label"
```

## Inputs

| Name                | Description                                                                                                 | Default                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `github-token`      | Optional [PAT](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) | `secrets.GITHUB_TOKEN`                |
| `product-name`      | Product name the report is for                                                                              |                                       |
| `output-file`       | Outputted markdown file name                                                                                | `vpat-{YYYY-MM-DD}-{PRODUCT NAME}.md` |
| `vpat-label`        | VPAT issue label                                                                                            | `VPAT`                                |
| `additional-labels` | Additional comma separated labels for issue filtering                                                       |

## Developer notes

- make sure `dist/` is checked in after updating files in `src/` (_the precommit hook should do this for you_)
- test by opening a _draft_ PR with your changes

## License

Unlicensed, this likely won't work outside of `dequelabs` repositories anyway.
