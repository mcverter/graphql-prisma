import { GraphQLServer } from 'graphql-yoga';
import myAddFunction, { subtract } from './math';

console.log(myAddFunction(1,-2));
console.log(subtract(10,2));
console.log('Hello GraphQL');

const typeDefs = `
  type Query {
    greeting(name: String, position: String): String!
    addTwo(a: Float!, b: Float!): Float!
    add(numbers: [Float!]): Float!
    grades: [Int!]!
    me: User!
    post: Post!

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

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }


`

const resolvers = {
    Query: {
	greeting(parent, args, ctx, info) {
	    if (args.name && args.position) {
		return `hello ${args.name}. you str ${args.position}`;
	    } else {
		return 'hello'
	    }
	},
	grades(parent, args, ctx, info) {
	    return [10, 12, 13]
	}
	add(parent, args, ctx, info) {
	    return args.numbers.reduce((acc, curr) => acc + curr, 0)
	},
	add2(parent, args, ctx, info){
	    return args.a + args.b
	},
	me() {
	    return {
		id: '123',
		name: 'mitchell',
		email: 'mitchell@example.com'
	    }
	},
	post() {
	    return {
		id: '092',
		title: 'Graphql 101',
		body: '',
		published: false
	    }
	},
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
