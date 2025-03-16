import { Command } from 'commander';

const program = new Command();

program
    .name('gligissue')
    .description('A CLI tool for managing GitHub issues')
    .version('1.0.0');

program.command('template')
    .description('Create a usage template')
    .option('-n --name <name>', 'Name of the template')
    .option('-d --description <description>', 'Description of the template')
    .option('-o --owner <owner>', 'Owner of the repository')
    .option('-r --repository <repository>', 'Repository name')
    .option('-a --assignee <assignee>', 'Assignee of the issue')
    .option('-l --label <label>', 'Label of the issue')
    .option('-m --milestone <milestone>', 'Milestone of the issue')
    .action(() => {
        console.log('Create a new issue template');
    });

program.command('list')
    .description('List all issues')
    .option('-s, --state <state>', 'Filter issues by state')
    .option('-a, --assignee <assignee>', 'Filter issues by assignee')
    .option('-l, --label <label>', 'Filter issues by label')
    .option('-m, --milestone <milestone>', 'Filter issues by milestone')
    .option('-c, --creator <creator>', 'Filter issues by creator')
    .option('-r, --repository <repository>', 'Filter issues by repository')
    .action(() => {
        console.log('List all issues');
    });

program.command('create')
    .description('Create a new issue')
    .option('-t, --title <title>', 'Title of the issue')
    .option('-b, --body <body>', 'Body of the issue')
    .option('-f, --file <file>', 'Template File predefined information')
    .option('-a, --assignee <assignee>', 'Assignee of the issue')
    .option('-l, --label <label>', 'Label of the issue')
    .option('-m, --milestone <milestone>', 'Milestone of the issue')
    .option('-r, --repository <repository>', 'Repository name')
    .action(() => {
        console.log('Create a new issue');
    });

program.command('update')
    .description('Update an existing issue')
    .option('-i, --issue <issue>', 'Issue number')
    .option('-t, --title <title>', 'Title of the issue')
    .option('-b, --body <body>', 'Body of the issue')
    .option('-a, --assignee <assignee>', 'Assignee of the issue')
    .option('-l, --label <label>', 'Label of the issue')
    .option('-m, --milestone <milestone>', 'Milestone of the issue')
    .option('-s, --state <state>', 'State of the issue')
    .action(() => {
        console.log('Update an existing issue');
    });

program.command('close')
    .description('Close an existing issue')
    .option('-i, --issue <issue>', 'Issue number')
    .action(() => {
        console.log('Close an existing issue');
    });