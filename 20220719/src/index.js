import { GraphQLServer } from 'graphql-yoga';
import myAddFunction, { subtract } from './math';

console.log(myAddFunction(1,-2));
console.log(subtract(10,2));
console.log('Hello GraphQL');

const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    isStock: Boolean!
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`

const resolvers = {
    Query: {
	title(){
	    "the art of war"
	},
	price(){
	    return 12.99
	},
	releaseYear(){
	    return null
	},
	rating(){
	    return 5;
	},
	isStock(){
	    return true;
	},	
	hello() {
	    return "hi"
	},
	name() {
	    return "mitchell"
	},
	location() {
	    return "bk"
	},
	bio() {
	    return "schmoo"
	}
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("The server is up");
})
