import { OctokitClient } from './octokitClient.js';
import { config } from '../config.js';

export class Issues {
    constructor() {
        this.client = new OctokitClient().client();
        this.url = config.url;
        this.headers = config.headers;
    }

    async getIssues(data) {
        try {
            const response = await this.client.request(`GET /repos/${data.owner}/${data.repo}/issues`, {
                owner: data.owner,
                repo: data.repository,
                state: data.state,
                assignee: data.assignee,
                label: data.label,
                milestone: data.milestone,
                creator: data.creator,
                repository: data.repository,
                per_page: data.per_page
            });

            const output = response.data.map((issue) => {
                return {
                    issueID: issue.number,
                    title: issue.title,
                    body: issue.body,
                    state: issue.state,
                    assignee: issue.assignee.login,
                    label: issue.labels,
                    milestone: issue.milestone,
                    creator: issue.creator,
                    url: issue.url
                };
            });

            return output;
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }

    async createIssue(data) {
        try {
            const response = await this.client.request(`POST /repos/${data.owner}/${data.repo}/issues`, {
                owner: data.owner,
                repo: data.repository,
                title: data.title,
                body: data.body,
                assignee: data.assignee,
                label: data.label,
                milestone: data.milestone
            });

            const output = {}

            output.issueID = response.data.number;
            output.title = response.data.title;
            output.body = response.data.body;
            output.state = response.data.state;
            output.assignee = response.data.assignee.login;
            output.label = response.data.labels;
            output.milestone = response.data.milestone;
            output.creator = response.data.user.login;
            output.url = response.data.url;

            return output;
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }

    async updateIssue(data) {
        try {
            const response = await this.client.request(`PATCH /repos/${data.owner}/${data.repo}/issues/${data.issue}`, {
                owner: data.owner,
                repo: data.repository,
                title: data.title,
                body: data.body,
                assignee: data.assignee,
                label: data.label,
                milestone: data.milestone,
                state: data.state
            });

            const output = {}

            output.issueID = response.data.number;
            output.title = response.data.title;
            output.body = response.data.body;
            output.state = response.data.state;
            output.assignee = response.data.assignee.login;
            output.label = response.data.labels;
            output.milestone = response.data.milestone;
            output.creator = response.data.user.login;
            output.url = response.data.url;

            return output;
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }

    async closeIssue(data) {
        try {
            const response = await this.client.request(`PATCH /repos/${data.owner}/${data.repo}/issues/${data.issue}`, {
                owner: data.owner,
                repo: data.repository,
                state: 'closed'
            });
            const output = {}

            output.issueID = response.data.number;
            output.title = response.data.title;
            output.body = response.data.body;
            output.state = response.data.state;
            output.assignee = response.data.assignee.login;
            output.label = response.data.labels;
            output.milestone = response.data.milestone;
            output.creator = response.data.user.login;
            output.url = response.data.url;

            return output;
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }

}