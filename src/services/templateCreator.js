import fs from 'fs';


export class Template{

    create(data) {
        console.log('Creating a new issue template...');
        const templateData = {
            name: data.name,
            description: data.description,
            owner: data.owner,
            repository: data.repository,
            assignee: data.assignee,
            label: data.label,
            milestone: data.milestone
        };

        const filePath = `${data.name}.json`;
        fs.writeFileSync(filePath, JSON.stringify(templateData, null, 2), 'utf-8');
        
    }

    load() {
        console.log('Loading issue template...');
        const filePath = `${data.name}.json`;
        if (fs.existsSync(filePath
            )) {
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        return null;
    }
}
