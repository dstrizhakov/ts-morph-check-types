const codeExample = `
export type User = {
  name: string,
  age: number,
  occupation: string;
  job: string; // this string is occuring error messages
};
export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User): void {
    console.log(user.name, user.age);
}
console.log('Users:');
users.forEach(logPerson);


// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
// 
`;
const testExample = `;
import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";
import { User, logPerson, users } from "./code";

assert<Equals<User, { name: string; age: number; occupation: string }>>();
assert<Equals<typeof users, { name: string; age: number; occupation: string }[]>>();
assert<Equals<typeof logPerson, (user: { name: string; age: number; occupation: string }) => void>>();`;

module.exports = { codeExample, testExample };
