function describePerson(person: {
  name: string;
  age: number;
  hobbies: [string, string]; // tuple
}) {
  return `${person.name} is ${person.age} years old and love ${person.hobbies.join(" and  ")}.`;
}

const alex = {
  name: 'Alex',
  age: 20,
  hobbies: ['walking', 'cooking'] // type string[] != [string, string]
}

describePerson(alex) /* Type string[] is not assignable to type [string, string] */

const alex: GetFirstArgumentOfAnyFunction<typeof describePerson> = {
  name: "Alex",
  age: 20,
  hobbies: ["walking", "cooking"],
};

describePerson(alex); /* No TypeScript errors */ 