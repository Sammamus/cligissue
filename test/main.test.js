// import { expect } from 'chai';
// import "mocha"
// import sinon from 'sinon';
// import { Main } from '../src/main.js';
// import { Template } from '../src/services/templateCreator.js';
// import { Issues } from '../src/services/gitIssues.js';

// describe('Main Class Test Suite', () => {
//     let main;

//     beforeEach(() => {
//         main = new Main({
//             name: 'test-template',
//             description: 'Test description',
//             owner: 'Sammamus',
//             repository: 'cligissue',
//             assignee: 'Sammamus',
//             label: '',
//             milestone: '',
//             state: 'open',
//             creator: 'Sammamus',
//             file: 'test-template.json',
//             title: 'Test Issue',
//             body: 'Test issue body',
//             issue: 1
//         });
//     });

//     it('should create a new template', async () => {
//         const template = new Template();
//         const createStub = sinon.stub(template, 'create').returns(true);
//         await main.createTemplate();
//         expect(createStub.calledOnce).to.be.true;
//     });

//     it('should list issues', async () => {
//         const issues = new Issues();
//         const getIssuesStub = sinon.stub(issues, 'getIssues').returns([]);
//         await main.list();
//         expect(getIssuesStub.calledOnce).to.be.true;
//     });

//     it('should create a new issue', async () => {
//         const issues = new Issues();
//         const createIssueStub = sinon.stub(issues, 'createIssue').returns({});
//         await main.create();
//         expect(createIssueStub.calledOnce).to.be.true;
//     });

//     it('should update an existing issue', async () => {
//         const issues = new Issues();
//         const updateIssueStub = sinon.stub(issues, 'updateIssue').returns({});
//         await main.update();
//         expect(updateIssueStub.calledOnce).to.be.true;
//     });

//     it('should close an existing issue', async () => {
//         const issues = new Issues();
//         const closeIssueStub = sinon.stub(issues, 'closeIssue').returns({});
//         await main.close();
//         expect(closeIssueStub.calledOnce).to.be.true;
//     });
// });