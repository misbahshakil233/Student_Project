import inquirer from 'inquirer'

// how to add students in typescript?
//solution:

//class

class Student {
    name: string;
    age: number;
    id: string;
    courses: string[];
    balance: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.id = this.generateUniqueId(); // Correctly call the generateUniqueId method
        this.courses = [];
        this.balance = 0;
    }

    // Method to generate a unique ID
    private generateUniqueId(): string {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }

    // Enroll new courses
    enrollnewCourses(courses: string[]) {
        this.courses.push(...courses);
        console.log(`${this.name} has been enrolled in the courses: ${courses.join(', ')}`);
    }

    // View balance
    viewBalance() {
        console.log(`${this.name} has a balance of $${this.balance}`);
    }

    // Pay tuition fees
    // payTuition(amount: number) {
    //     if (amount <= this.balance) {
    //         this.balance -= amount;
    //         console.log(`${this.name} has paid $${amount} towards tuition fees.`);
    //         this.viewBalance();
    //     } else {
    //         console.log(`${this.name} does not have sufficient balance to pay $${amount}.`);
    //     }
    // }

    // Display student information
    displayFunction() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Id: ${this.id}`);
        console.log(`Enrolled Courses: ${this.courses.join(', ')}`);
        
    }
}

let s1 = new Student("ali", 12);
s1.enrollnewCourses(["sst", "urdu"]);
// s1.payTuition(500);
s1.viewBalance();
s1.displayFunction();
