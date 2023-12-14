import { handlerPath } from '@libs/handler-resolver';


export const createPerson = {
    handler: `${handlerPath(__dirname)}/handler.createPerson`,
    events: [
        {
            http: {
                method: 'post',
                path: 'api/v1/person',
            },
        },
    ],
};

export const getPerson = {
    handler: `${handlerPath(__dirname)}/handler.getPerson`,
    events: [
        {
            http: {
                method: 'get',
                path: 'api/v1/person/{id}',
            },
        },
    ],
};

