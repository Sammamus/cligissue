import { Octokit } from '@octokit/core';

import { config } from '../config.js';

class OctokitClient {
    constructor() {
        this.octokit = new Octokit({ auth: config.token });
    }

    client() {
        return this.octokit;
    }
}