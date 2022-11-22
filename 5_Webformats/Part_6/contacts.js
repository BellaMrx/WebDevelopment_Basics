const person = {
	"firstname": "Max",
	"lastname": "Miller",
	"phone": {
	  "type": "mobile",
	  "number": "01234567"
	},
	"email": "max.miller@example.com",
	"address": {
	  "street": "Sample Street",
	  "number": 99,
	  "code": 12345,
	  "city": "Sampleville"
	}
};  

console.log(person.firstname);      // "Max"
console.log(person.lastname);       // "Miller"
console.log(person.phone.type);     // "mobile"
console.log(person.phone.number);   // "01234567"
console.log(person.email);          // "max.miller@example.com"
console.log(person.address.street); // "Sample Street"
console.log(person.address.number); // 99
console.log(person.address.code);   // 12345
console.log(person.address.city);   // "Sampleville"
