module.exports = {
  branches: [
    { name: "master" },
    { name: "main" },
    { name: "alpha", prerelease: true },
    { name: "beta", prerelease: true },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/git",
  ],
};
