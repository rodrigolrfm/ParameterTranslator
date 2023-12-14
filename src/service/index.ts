import dynamoDBClient from "../model";
import PeopleService from "./PeopleService"

const peopleService = new PeopleService(dynamoDBClient());

export default peopleService;