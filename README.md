[![npm version](https://badge.fury.io/js/%40adfinis-sygroup%2Fsemantic-release-config.svg)](https://badge.fury.io/js/%40adfinis-sygroup%2Fsemantic-release-config)

# semantic-release-config

Sharable configuration for [semantic release](https://semantic-release.gitbook.io).

## Features

Currently, this config is only a slight modification of the default config:

- Deploy from `next` branch instead of `master`
- Add [@semantic-release/git](https://github.com/semantic-release/git) plugin to publish updated `package.json` to repository after deployment

## Installation

Install the npm package

```bash
yarn add --dev @adfinis-sygroup/semantic-release-config
```

and add the following to the `extends` property of your [semantic release configuration](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file):

```json
{
  "extends": "@adfinis-sygroup/semantic-release-config"
}
```

This repo also contains [commitlint](https://github.com/conventional-changelog/commitlint). Configure it to check that commit messagesas are formatted according to the [conventional commit format](https://www.conventionalcommits.org) by adding the following to `package.json`:

```json
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  }
```

Set up a pre-commit hook to integrate it; e.g. by installing [husky](https://github.com/typicode/husky):

```bash
yarn add husky --dev
```

and adding the following section to `package.json`:

```json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
```

## CI Configuration

- Add credentials for GitHub and npm as described [here](https://semantic-release.gitbook.io/semantic-release/usage/ci-configuration))
- Run semantic-release in the deploy stage as described [here](https://semantic-release.gitbook.io/semantic-release/recipes/recipes/travis)

## Commitizen

Optionally, you can also set up [commitizen](https://github.com/commitizen/cz-cli) for a more interactive way of adding commits:

```
$ git cz

? Select the type of change that you're committing:
? What is the scope of this change (e.g. component or file name)?
? Write a short, imperative tense description of the change:
? Provide a longer description of the change: (press enter to skip)
? Are there any breaking changes? No
? Does this change affect any open issues? No
```

Setup is simple:

```
npm install -g commitizen
commitizen init cz-conventional-changelog --yarn --dev --exact
```

After, run `git cz` instead of `git commit`.
