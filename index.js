#!/usr/local/bin/node

import { Command } from 'commander';

import { Main } from './src/main.js';

const program = new Command();


program
    .name('cligissue')
    .description('A CLI tool for managing GitHub issues')
    .version('1.0.0');

program.command('template')
    .description('Create a usage template')
    .allowExcessArguments(true)
    .requiredOption('-n --name <name>', 'Name of the template')
    .option('-d --description <description>', 'Description of the template')
    .requiredOption('-o --owner <owner>', 'Owner of the repository')
    .requiredOption('-r --repository <repository>', 'Repository name')
    .option('-a --assignee <assignee>', 'Assignee of the issue')
    .option('-l --label <label>', 'Label of the issue')
    .option('-m --milestone <milestone>', 'Milestone of the issue')
    .action((options) => {
        // const options = program.opts();
        const main = new Main(options);
        main.createTemplate();
    });

program.command('list')
    .description('List all issues')
    .allowExcessArguments(true)
    .option('-s, --state <state>', 'Filter issues by state')
    .option('-a, --assignee <assignee>', 'Filter issues by assignee')
    .option('-l, --label <label>', 'Filter issues by label')
    .option('-m, --milestone <milestone>', 'Filter issues by milestone')
    .option('-c, --creator <creator>', 'Filter issues by creator')
    .option('-r, --repository <repository>', 'Filter issues by repository')
    .option('-f, --file <file>', 'Template File predefined information')
    .action((options) => {
        // const options = program.opts();
        const main = new Main(options);
        main.list();
    });

program.command('create')
    .description('Create a new issue')
    .allowExcessArguments(true)
    .requiredOption('-t, --title <title>', 'Title of the issue')
    .option('-b, --body <body>', 'Body of the issue')
    .option('-f, --file <file>', 'Template File predefined information')
    .option('-a, --assignee <assignee>', 'Assignee of the issue')
    .option('-l, --label <label>', 'Label of the issue')
    .option('-m, --milestone <milestone>', 'Milestone of the issue')
    .option('-r, --repository <repository>', 'Repository name')
    .option('-o, --owner <owner>', 'Owner of the repository')
    .action((options) => {
        // const options = program.opts();
        const main = new Main(options);
        main.create();
    });

program.command('update')
    .description('Update an existing issue')
    .allowExcessArguments(true)
    .requiredOption('-i, --issue <issue>', 'Issue number')
    .option('-t, --title <title>', 'Title of the issue')
    .option('-b, --body <body>', 'Body of the issue')
    .option('-f, --file <file>', 'Template File predefined information')
    .option('-a, --assignee <assignee>', 'Assignee of the issue')
    .option('-l, --label <label>', 'Label of the issue')
    .option('-m, --milestone <milestone>', 'Milestone of the issue')
    .option('-s, --state <state>', 'State of the issue')
    .option('-r, --repository <repository>', 'Repository name')
    .option('-o, --owner <owner>', 'Owner of the repository')
    .action((options) => {
        // const options = program.opts();
        const main = new Main(options);
        main.update();
    });

program.command('close')
    .description('Close an existing issue')
    .allowExcessArguments(true)
    .requiredOption('-i, --issue <issue>', 'Issue number')
    .option('-r, --repository <repository>', 'Repository name')
    .option('-o, --owner <owner>', 'Owner of the repository')
    .option('-f, --file <file>', 'Template File predefined information')
    .action((options) => {
        // const options = program.opts();
        const main = new Main(options);
        main.close();
    });

program.parse();