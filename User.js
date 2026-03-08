class User {
    constructor(userId, name, email, role, fitnessStats) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.role = role; // 'student' or 'gym teacher'
        this.fitnessStats = fitnessStats; // object to hold fitness statistics
    }

    // Method to update fitness stats
    updateFitnessStats(newStats) {
        this.fitnessStats = { ...this.fitnessStats, ...newStats };
    }

    // Method to display user details
    displayUserInfo() {
        return `ID: ${this.userId}, Name: ${this.name}, Email: ${this.email}, Role: ${this.role}, Fitness Stats: ${JSON.stringify(this.fitnessStats)}`;
    }
}

// Example usage:
// const student = new User(1, 'Jane Doe', 'jane@example.com', 'student', { weight: 60, height: 165 });
// console.log(student.displayUserInfo());