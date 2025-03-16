import { OctokitClient } from './octokitClient.js';
import { config } from '../config.js';

export class Issues {
    constructor() {
        this.client = new OctokitClient().client();
        this.url = config.url;
        this.headers = config.headers;
    }

    async getIssues(data) {
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
        return response.data;
    }

    async createIssue(data) {
        const response = await this.client.request(`POST /repos/${data.owner}/${data.repo}/issues`, {
            owner: data.owner,
            repo: data.repository,
            title: data.title,
            body: data.body,
            assignee: data.assignee,
            label: data.label,
            milestone: data.milestone
        });
        return response.data;
    }

    async updateIssue(data) {
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
        return response.data;
    }

    async closeIssue(data) {
        const response = await this.client.request(`PATCH /repos/${data.owner}/${data.repo}/issues/${data.issue}`, {
            owner: data.owner,
            repo: data.repository,
            state: 'closed'
        });
        return response.data;
    }
}