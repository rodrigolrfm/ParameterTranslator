import { DocumentClient } from "aws-sdk/clients/dynamodb";
import PeopleService from "../service/PeopleService";
import  PeopleDto from "../dto/PeopleDto";

class MockDocumentClient {
    get(params: any): any {
        return {
            promise: () => Promise.resolve({ Item: params.Key })
        };
    }
    put(params: any): any {
        // Simulate putting an item into the database (you can modify this behavior as needed)
        const { TableName, Item } = params;
        console.log(`Putting item into table ${TableName}:`, Item);

        return {
            promise: () => Promise.resolve('Success') // Adjust return value as needed
        };
    }
}

// Mock the DocumentClient methods
jest.mock("aws-sdk/clients/dynamodb");


describe('PeopleService', () => {
    
    let peopleService: PeopleService;
    let mockDocumentClient: DocumentClient;

    beforeEach(() => {
        mockDocumentClient = new MockDocumentClient() as any;
        peopleService = new PeopleService(mockDocumentClient);
    });

    it('should get a person from DynamoDB', async () => {
        const mockId = 'some_id';
        const result = await peopleService.getPerson(mockId);

        expect(result).toEqual({ id: mockId });
    });
    
    /*

    it('should throw an error when getting a non-existent person from DynamoDB', async () => {
        const mockId = 'no_exist'; // Provide a non-existent ID
        console.log(peopleService.getPerson(mockId));
        await expect(peopleService.getPerson(mockId)).rejects.toThrow('No existe el atributo');
    });*/

    it('should throw an error when getting a non-existent person from DynamoDB', async () => {
        const mockId = 'no_exist'; // Provide a non-existent ID
    
        // Mock the DynamoDB client's get method to return an item that does not exist
        mockDocumentClient.get = jest.fn().mockReturnValue({
            promise: jest.fn().mockResolvedValue({ Item: null }) // Simulate item not found
        });
    
        // Now, when the service attempts to get a person with this ID, it should not find the item
        await expect(peopleService.getPerson(mockId)).rejects.toThrow('No existe el atributo');
    });



    it('should create a person in DynamoDB', async () => {
        const mockPersonDto: PeopleDto = new PeopleDto(
            'mock_id',
            '1990',
            'blue',
            ['xxxx'],
            'male',
            'black',
            '165',
            '75',
            '12',
            'luke',
            'light',
            'vvvv',
            'gggg',
            ['https://swapi.py4e.com/api/species/1/'],
            ['https://swapi.py4e.com/api/planets/1/'],
            'ffffff',
            ['2014-12-10T15:53:41.121000Z'],

    );
        const result = await peopleService.createPerson(mockPersonDto);

        expect(result.altura).toEqual(mockPersonDto.height);
    });
});