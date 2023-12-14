import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import PeopleService from '../../service';
import { PeopleCreatedDto } from '../../dto';
import axios from 'axios';

import { v4 } from "uuid";


export const createPerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const id_generate = v4();
        const people_create_dto = JSON.parse(event.body) as PeopleCreatedDto;
        const responseBodySwapi = await axios.get('https://swapi.py4e.com/api/people/'+people_create_dto.id +'/');
        console.log("Swapi Data: ", responseBodySwapi.data);
        const responseBodyValues = responseBodySwapi.data;
        const person = await PeopleService.createPerson({
            id: id_generate,
            ...responseBodyValues
        })
        return formatJSONResponse({
            person
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})


export const getPerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id;
    
    try {
        const person = await PeopleService.getPerson(id)
        return formatJSONResponse({
            person, id
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})

