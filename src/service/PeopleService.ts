import { DocumentClient } from "aws-sdk/clients/dynamodb";

import People from "../model/People";
import { PeopleDto } from "../dto";
import PeopleMapping from "../mappers/PeopleMapping";

export default class PeopleServerice {

    private Tablename: string = "PeopleTable";


    constructor(private docClient: DocumentClient) { }

    async getPerson(id_value: string): Promise<any> {

        const one_people = await this.docClient.get({
            TableName: this.Tablename,
            Key: {
                id: id_value
            }
        }).promise()
        if (!one_people.Item) {
            throw new Error("No existe el atributo");
        }
        return one_people.Item as People;

        
    }

    async createPerson(one_person: PeopleDto): Promise<People> {
        const object = new PeopleMapping(one_person);
        const person = object.toSpanish() as People;
        console.log('person', person);
        await this.docClient.put({
            TableName: this.Tablename,
            Item: person
        }).promise()
        return person as People;

    }

}