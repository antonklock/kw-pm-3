type Project = {
    id: string;
    name: string;
    localPath: string;
    notionLink?: string;
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'Project 1',
        localPath: 'C:\\Users\\User\\Documents\\Project 1',
        notionLink: 'www.notion.so'
    },
    {
        id: '2',
        name: 'Project 2',
        localPath: 'C:\\Users\\User\\Documents\\Project 2',
        notionLink: 'www.notion.so/project2'
    },
    {
        id: '3',
        name: 'Project 3',
        localPath: 'C:\\Users\\User\\Documents\\Project 3'
    },
];