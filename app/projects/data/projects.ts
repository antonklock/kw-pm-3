type Project = {
    id: string;
    name: string;
    status: 'healthy' | 'at risk' | 'needs attention';
    localPath: string;
    notionLink?: string;
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'Project 1',
        localPath: 'C:\\Users\\User\\Documents\\Project 1',
        status: 'healthy',
        notionLink: 'www.notion.so'
    },
    {
        id: '2',
        name: 'Project 2',
        localPath: 'C:\\Users\\User\\Documents\\Project 2',
        status: 'at risk',
        notionLink: 'www.notion.so/project2'
    },
    {
        id: '3',
        name: 'Project 3',
        localPath: 'C:\\Users\\User\\Documents\\Project 3',
        status: 'needs attention',
    },
];