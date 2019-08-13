workflow "Build and Publish" {
  on = "push"
  resolves = ["Git Commit"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Run Filter" {
  needs = ["Build"]
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Run" {
  needs = ["Run Filter"]
  uses = "actions/npm@master"
  secrets = ["GOOGLE_CREDENTIAL_B64"]
  runs = "node"
  args = "cli.js go --output=logs"
}

action "Git Add" {
  needs = "Run"
  uses = "actions/npm@master"
  runs = "git"
  args = "add logs"
}

action "Git Commit" {
  needs = "Git Add"
  uses = "actions/npm@master"
  runs = "git"
  args = "commit -m 'log: publish'"
}

