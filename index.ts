type UserType = {
	firstName: string
	lastName: string
	age: number
}

type PhotoType = {
	large: string
	small: string
}

type ServerResponseType<T> = {
	errorCode: number
	messages: Array<string>
	data: T
 }

const response: ServerResponseType<UserType> = {
	errorCode: 1,
	messages: ["Hello", "World"],
	data: {
		firstName: "Baxtiyor",
		lastName: "Erkinov",
		age: 18
	}
}
const res: ServerResponseType<PhotoType> = {
	errorCode: 1,
	messages: ["Hello", "World"],
	data: {
		large: 'asasd'
		small: 'aasd'
	}
} 
