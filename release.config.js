module.exports = {
  branches: ["release"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "yarn.lock"],
        message:
          "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
      }
    ]
  ]
};
