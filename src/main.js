import { Template } from './services/templateCreator.js';
import { Issues } from './services/gitIssues.js';

const template = new Template();
const issues = new Issues();


export class Main {
    constructor(options) {
        this.name = options.name || '';
        this.description = options.description || '';
        this.owner = options.owner || '';
        this.repository = options.repository || '';
        this.assignee = options.assignee || '';
        this.label = options.label || '';
        this.milestone = options.milestone || '';
        this.state = options.state || '';
        this.creator = options.creator || '';
        this.file = options.file || '';
        this.title = options.title || '';
        this.body = options.body || '';
        this.issue = options.issue || '';
    }

    async createTemplate() {
        console.log('Creating a new issue template...');
        const templateData = {
            name: this.name,
            description: this.description,
            owner: this.owner,
            repository: this.repository,
            assignee: this.assignee,
            label: this.label,
            milestone: this.milestone
        };

        template.create(templateData);
    }

    async ifFile() {
        if (this.file) {
            const templateData = await template.load(this.file);
            console.log(templateData);

            this.name = templateData.name && templateData.name !== '' ? templateData.name : this.name;
            this.description = templateData.description && templateData.description !== '' ? templateData.description : this.description;
            this.owner = templateData.owner && templateData.owner !== '' ? templateData.owner : this.owner;
            this.repository = templateData.repository && templateData.repository !== '' ? templateData.repository : this.repository;
            this.assignee = templateData.assignee && templateData.assignee ? templateData.assignee : this.assignee;
            this.label = templateData.label && templateData.label !== '' ? templateData.label : this.label;
            this.milestone = templateData.milestone && templateData.milestone ? templateData.milestone : this.milestone;
        }
    }

    async list() {
        await this.ifFile();

        console.log('Listing issues...');

        const data = {
            owner: this.owner,
            repo: this.repository,
        };

        if (this.state !== '') {
            data.state = this.state;
        }
        if (this.assignee !== '') {
            data.assignee = this.assignee;
        }
        if (this.label !== '') {
            data.label = this.label;
        }
        if (this.milestone !== '') {
            data.milestone = this.milestone;
        }
        if (this.creator !== '') {
            data.creator = this.creator;
        }

        const getissues = await issues.getIssues(data);
        console.log(JSON.stringify(getissues, null, 2));
    }

    async create() {
        await this.ifFile();

        console.log('Creating a new issue...');

        const data = {
            owner: this.owner,
            repo: this.repository,
            title: this.title,
        }

        if (this.body !== '') {
            data.body = this.body;
        }
        if (this.assignee !== '') {
            data.assignee = this.assignee;
        }
        if (this.label !== '') {
            data.label = this.label;
        }
        if (this.milestone !== '') {
            data.milestone = this.milestone;
        }

        const response = await issues.createIssue(data);
        console.log(JSON.stringify(response, null, 2));
    }

    async update() {
        await this.ifFile();

        console.log('Updating an existing issue...');

        const data = {
            owner: this.owner,
            repo: this.repository,
            issue: this.issue
        }

        if (this.title !== '') {
            data.title = this.title;
        }
        if (this.body !== '') {
            data.body = this.body;
        }
        if (this.assignee !== '') {
            data.assignee = this.assignee;
        }
        if (this.label !== '') {
            data.label = this.label;
        }
        if (this.milestone !== '') {
            data.milestone = this.milestone;
        }
        if (this.state !== '') {
            data.state = this.state;
        }

        const response = await issues.updateIssue(data);
        console.log(JSON.stringify(response, null, 2));
    }

    async close() {
        await this.ifFile();

        console.log('Closing an existing issue...');

        const data = {
            owner: this.owner,
            repo: this.repository,
            issue: this.issue
        }
        const response = await issues.closeIssue(data);
        console.log(JSON.stringify(response, null, 2));
    }
}
