import fs from 'fs';


export class Template{

    create(data) {
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

    load(filename) {
        console.log('Loading issue template...');
        const filePath = filename;
        if (fs.existsSync(filePath
            )) {
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        return null;
    }
}
