class WorkoutSuggestion {
    constructor(userFitnessLevel, userPreferences, userActivityHistory) {
        this.userFitnessLevel = userFitnessLevel;  // e.g., 'beginner', 'intermediate', 'advanced'
        this.userPreferences = userPreferences; // e.g., ['strength', 'cardio', 'flexibility']
        this.userActivityHistory = userActivityHistory; // Array of past activities
    }
    
    getRecommendations() {
        let recommendations = [];
        
        // Generate recommendations based on fitness level
        if (this.userFitnessLevel === 'beginner') {
            recommendations.push('Start with bodyweight exercises like squats and push-ups.');
            recommendations.push('Incorporate walking for at least 20 minutes a day.');
        } else if (this.userFitnessLevel === 'intermediate') {
            recommendations.push('Add weight training with dumbbells or resistance bands.');
            recommendations.push('Try interval training for cardio workouts.');
        } else if (this.userFitnessLevel === 'advanced') {
            recommendations.push('Incorporate high-intensity interval training (HIIT).');
            recommendations.push('Focus on compound movements like deadlifts and bench presses.');
        }
        
        // Filter recommendations based on user preferences
        recommendations = recommendations.filter(rec => {
            return this.userPreferences.some(pref => rec.includes(pref));
        });
        
        // Add suggestions based on activity history
        if (this.userActivityHistory.length > 0) {
            recommendations.push('Consider mixing in some of your favorite past activities.');
        } else {
            recommendations.push('Try to explore different activities to find what you enjoy.');
        }
        
        return recommendations;
    }
}

// Example usage:
const userFitnessLevel = 'intermediate';
const userPreferences = ['strength', 'cardio'];
const userActivityHistory = ['running', 'yoga'];

const workoutSuggester = new WorkoutSuggestion(userFitnessLevel, userPreferences, userActivityHistory);
const suggestions = workoutSuggester.getRecommendations();
console.log(suggestions);