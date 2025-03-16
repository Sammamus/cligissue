import { Octokit } from '@octokit/core';

import { config } from '../config.js';

export class OctokitClient {
    constructor() {
        this.octokit = new Octokit({ auth: config.token });
    }

    client() {
        return this.octokit;
    }
}