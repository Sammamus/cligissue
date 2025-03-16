import fs from 'fs';
import path from 'path';

class Template{
    constructor(name, description, owner, repository, assignee, label, milestone){
        this.name = name;
        this.description = description;
        this.owner = owner;
        this.repository = repository;
        this.assignee = assignee;
        this.label = label;
        this.milestone = milestone;
    }

    create() {
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

        const filePath = path.join(__dirname, `${this.name}.json`);
        fs.writeFileSync(filePath, JSON.stringify(templateData, null, 2), 'utf-8');
        
    }

    load() {
        console.log('Loading issue template...');
        const filePath = path.join(__dirname, `${this.name}.json`);
        if (fs.existsSync(filePath
            )) {
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        return null;
    }
}