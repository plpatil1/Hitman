// 1. Variables with Types
let userName: string = "Pawan";
const age: number = 25;
let isDeveloper: boolean = true;

console.log(`Hello, my name is ${userName} and I am ${age} years old.`);

// 2. Function with Type Annotations
function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}
console.log(greet(userName));

// 3. Interface and Object
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    profession?: string; // Optional Property
}

let person: Person = {
    firstName: "Pawan",
    lastName: "Lekurwale",
    age: 25,
    profession: "Web Developer"
};

console.log("Person Details:", person);

// 4. Array and Loop
let colors: string[] = ["Red", "Green", "Blue"];
colors.push("Yellow");

colors.forEach((color) => {
    console.log(color);
});

// 5. DOM Manipulation
document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("changeText") as HTMLButtonElement;
    let text = document.getElementById("displayText") as HTMLHeadingElement;

    button.addEventListener("click", () => {
        text.innerText = "Text Changed!";
    });
});
