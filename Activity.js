class Activity {
    constructor(activityId, userId, activityType, duration, caloriesBurned, distance, timestamp) {
        this.activityId = activityId;
        this.userId = userId;
        this.activityType = activityType;
        this.duration = duration; // in minutes
        this.caloriesBurned = caloriesBurned;
        this.distance = distance; // in kilometers
        this.timestamp = timestamp; // in YYYY-MM-DD HH:MM:SS format
    }

    getSummary() {
        return `Activity ID: ${this.activityId}, User ID: ${this.userId}, Type: ${this.activityType}, Duration: ${this.duration} min, Calories Burned: ${this.caloriesBurned}, Distance: ${this.distance} km, Timestamp: ${this.timestamp}`;
    }
}

// Example Usage:
// const activity = new Activity(1, 'user123', 'Running', 30, 300, 5, '2026-03-08 06:36:08');
// console.log(activity.getSummary());