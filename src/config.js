export const config = {
    url: 'https://api.github.com/',
    token: process.env.GITHUB_KEY || null,
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
    }
};