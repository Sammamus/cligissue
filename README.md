# cligissue

Management tool for GitHub issues via CLI because... I'm too lazy to open a browser some days.

## Project Details

`cligissue` is a command-line tool designed to help you manage GitHub issues without needing to open a web browser. It allows you to create, list, update, and close issues directly from your terminal.

## Requirements

- Node.js (>= 14.x)
- npm (>= 6.x)
- GitHub Personal Access Token (with repo scope)

## Commands

- `template`: Create a usage template
- `list`: List all issues
- `create`: Create a new issue
- `update`: Update an existing issue
- `close`: Close an existing issue

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/Sammamus/cligissue.git
    cd cligissue
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Link the package globally:
    ```sh
    npm run setup
    ```

4. Set your GitHub Personal Access Token as an environment variable:
    ```sh
    export GITHUB_KEY=your_personal_access_token
    ```

## Usage

### Create a Template

```sh
cligissue template -n <name> -o <owner> -r <repository> [-d <description>] [-a <assignee>] [-l <label>] [-m <milestone>]
```

### List Issues

```sh
cligissue list [-s <state>] [-a <assignee>] [-l <label>] [-m <milestone>] [-c <creator>] [-r <repository>] [-f <file>]
```

### Create a New Issue

```sh
cligissue create -t <title> [-b <body>] [-f <file>] [-a <assignee>] [-l <label>] [-m <milestone>] [-r <repository>] [-o <owner>]
```

### Update an Existing Issue

```sh
cligissue update -i <issue> [-t <title>] [-b <body>] [-f <file>] [-a <assignee>] [-l <label>] [-m <milestone>] [-s <state>] [-r <repository>] [-o <owner>]
```

### Close an Existing Issue

```sh
cligissue close -i <issue> [-r <repository>] [-o <owner>] [-f <file>]
```

### License
This project is licensed under the MIT License - see the LICENSE file for details.
