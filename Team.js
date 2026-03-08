class Team {
    constructor(teamId, teamName) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.members = [];
        this.totalCalories = 0;
        this.goals = {};
    }

    addMember(member) {
        this.members.push(member);
    }

    removeMember(memberId) {
        this.members = this.members.filter(member => member.id !== memberId);
    }

    setGoal(goal, target) {
        this.goals[goal] = target;
    }

    updateCalories(calories) {
        this.totalCalories += calories;
    }

    getTeamInfo() {
        return {
            teamId: this.teamId,
            teamName: this.teamName,
            members: this.members,
            totalCalories: this.totalCalories,
            goals: this.goals
        };
    }
}

// Example usage:
// const myTeam = new Team(1, 'Avengers');
// myTeam.addMember({ id: 1, name: 'Iron Man' });
// myTeam.setGoal('Run 5K', '2026-05-01');
// console.log(myTeam.getTeamInfo());
