// daily-update-script.js
// Add this to your daily-cricket.html before </body>

// Match Data for Different Days
const weeklyMatches = [
    {
        day: "Monday",
        team1: "Royal Challengers Bangalore",
        team1Short: "RCB",
        team2: "Mumbai Indians", 
        team2Short: "MI",
        venue: "Wankhede Stadium, Mumbai",
        time: "7:30 PM IST",
        stats: {
            team1Wins: 12,
            team2Wins: 19,
            team1Last5: 4,
            team2Last5: 3,
            team1AvgScore: 182.5,
            team2AvgScore: 175.8
        }
    },
    {
        day: "Tuesday",
        team1: "Chennai Super Kings",
        team1Short: "CSK",
        team2: "Kolkata Knight Riders",
        team2Short: "KKR",
        venue: "MA Chidambaram Stadium, Chennai",
        time: "7:30 PM IST",
        stats: {
            team1Wins: 18,
            team2Wins: 10,
            team1Last5: 3,
            team2Last5: 2,
            team1AvgScore: 168.3,
            team2AvgScore: 172.6
        }
    },
    {
        day: "Wednesday",
        team1: "Sunrisers Hyderabad",
        team1Short: "SRH",
        team2: "Delhi Capitals",
        team2Short: "DC",
        venue: "Rajiv Gandhi Stadium, Hyderabad",
        time: "3:30 PM IST",
        stats: {
            team1Wins: 11,
            team2Wins: 9,
            team1Last5: 3,
            team2Last5: 3,
            team1AvgScore: 158.9,
            team2AvgScore: 161.2
        }
    },
    {
        day: "Thursday",
        team1: "Rajasthan Royals",
        team1Short: "RR",
        team2: "Punjab Kings",
        team2Short: "PBKS",
        venue: "Sawai Mansingh Stadium, Jaipur",
        time: "7:30 PM IST",
        stats: {
            team1Wins: 14,
            team2Wins: 15,
            team1Last5: 4,
            team2Last5: 1,
            team1AvgScore: 176.8,
            team2AvgScore: 169.4
        }
    },
    {
        day: "Friday",
        team1: "Mumbai Indians",
        team1Short: "MI",
        team2: "Chennai Super Kings",
        team2Short: "CSK",
        venue: "Wankhede Stadium, Mumbai",
        time: "7:30 PM IST",
        stats: {
            team1Wins: 20,
            team2Wins: 16,
            team1Last5: 2,
            team2Last5: 3,
            team1AvgScore: 178.2,
            team2AvgScore: 165.7
        }
    },
    {
        day: "Saturday",
        team1: "Royal Challengers Bangalore",
        team1Short: "RCB",
        team2: "Gujarat Titans",
        team2Short: "GT",
        venue: "M Chinnaswamy Stadium, Bangalore",
        time: "7:30 PM IST",
        stats: {
            team1Wins: 3,
            team2Wins: 4,
            team1Last5: 3,
            team2Last5: 2,
            team1AvgScore: 188.5,
            team2AvgScore: 179.3
        }
    },
    {
        day: "Sunday",
        team1: "Lucknow Super Giants",
        team1Short: "LSG",
        team2: "Delhi Capitals",
        team2Short: "DC",
        venue: "Ekana Stadium, Lucknow",
        time: "3:30 PM IST",
        stats: {
            team1Wins: 2,
            team2Wins: 3,
            team1Last5: 2,
            team2Last5: 3,
            team1AvgScore: 162.4,
            team2AvgScore: 155.8
        }
    }
];

// Player Data
const playerDatabase = {
    "RCB": [
        { name: "Virat Kohli", role: "Batsman", form: "good", lastScores: [82, 45, 101], avg: 56.2, credits: 10.5 },
        { name: "Glenn Maxwell", role: "All-rounder", form: "poor", lastScores: [12, 8, 5], avg: 22.4, credits: 8.5 },
        { name: "Mohammed Siraj", role: "Bowler", form: "average", lastScores: [2, 1, 3], avg: 25.6, credits: 8.0 }
    ],
    "MI": [
        { name: "Rohit Sharma", role: "Batsman", form: "average", lastScores: [28, 65, 12], avg: 36.2, credits: 9.5 },
        { name: "Jasprit Bumrah", role: "Bowler", form: "good", lastScores: [3, 2, 4], avg: 18.3, credits: 9.0 },
        { name: "Suryakumar Yadav", role: "Batsman", form: "good", lastScores: [45, 78, 62], avg: 42.8, credits: 9.0 }
    ],
    "CSK": [
        { name: "MS Dhoni", role: "Wicket-keeper", form: "good", lastScores: [28, 35, 42], avg: 38.2, credits: 9.0 },
        { name: "Ravindra Jadeja", role: "All-rounder", form: "average", lastScores: [25, 18, 32], avg: 28.6, credits: 8.5 }
    ]
    // Add more teams as needed
};

// Auto Update Function
function autoUpdateDailyContent() {
    const today = new Date();
    const dayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Adjust for our array (Monday = 0)
    const matchIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    const todayMatch = weeklyMatches[matchIndex];
    
    // Update match details
    document.querySelectorAll('.team-logo')[0].textContent = todayMatch.team1Short;
    document.querySelectorAll('.team-logo')[1].textContent = todayMatch.team2Short;
    
    document.querySelectorAll('.match-card h3')[0].textContent = todayMatch.team1;
    document.querySelectorAll('.match-card h3')[1].textContent = todayMatch.team2;
    
    // Update stats
    const statBoxes = document.querySelectorAll('.stat-box .stat-value');
    if (statBoxes.length >= 8) {
        // Team 1 stats
        statBoxes[0].textContent = todayMatch.stats.team1Wins;
        statBoxes[1].textContent = todayMatch.stats.team1Last5;
        statBoxes[2].textContent = todayMatch.stats.team1AvgScore;
        
        // Team 2 stats
        statBoxes[4].textContent = todayMatch.stats.team2Wins;
        statBoxes[5].textContent = todayMatch.stats.team2Last5;
        statBoxes[6].textContent = todayMatch.stats.team2AvgScore;
    }
    
    // Update venue and time
    const venueElement = document.querySelector('.match-grid > div:nth-child(2) div:nth-child(3)');
    if (venueElement) {
        venueElement.textContent = todayMatch.venue;
    }
    
    // Update poll buttons
    document.querySelector('.poll-btn.team1').innerHTML = `🏏 Vote ${todayMatch.team1Short}`;
    document.querySelector('.poll-btn.team2').innerHTML = `🎯 Vote ${todayMatch.team2Short}`;
    
    // Update player stats based on teams
    updatePlayerStats(todayMatch.team1Short, todayMatch.team2Short);
    
    // Update schedule for the week
    updateWeeklySchedule(matchIndex);
}

function updatePlayerStats(team1, team2) {
    const players1 = playerDatabase[team1] || [];
    const players2 = playerDatabase[team2] || [];
    
    // Update player cards (simplified - you'd need more player cards in HTML)
    const playerCards = document.querySelectorAll('.player-card');
    
    // This is a simplified example - you'd need to create dynamic player cards
    console.log(`Today's players: ${team1} vs ${team2}`);
}

function updateWeeklySchedule(startIndex) {
    const scheduleContainer = document.querySelector('.update-schedule');
    if (!scheduleContainer) return;
    
    let scheduleHTML = '<h2 style="color: #1e293b; margin-bottom: 20px;">📅 This Week\'s Cricket Schedule</h2>';
    
    for (let i = 0; i < 5; i++) {
        const matchIndex = (startIndex + i) % weeklyMatches.length;
        const match = weeklyMatches[matchIndex];
        const dayName = i === 0 ? 'Today' : match.day;
        
        scheduleHTML += `
            <div class="schedule-day">
                <span><strong>${dayName}</strong> - ${match.team1Short} vs ${match.team2Short}</span>
                <span>${match.time}</span>
            </div>
        `;
    }
    
    scheduleContainer.innerHTML = scheduleHTML;
}

// Weather Conditions (Randomized daily)
function getDailyWeather() {
    const conditions = [
        { emoji: '☀️', text: 'Clear skies, 32°C', humidity: '45%' },
        { emoji: '⛅', text: 'Partly cloudy, 30°C', humidity: '55%' },
        { emoji: '🌧️', text: 'Chance of rain, 28°C', humidity: '75%' },
        { emoji: '💨', text: 'Windy, 31°C', humidity: '40%' }
    ];
    
    // Use day of month to determine weather (consistent per day)
    const today = new Date();
    const weatherIndex = today.getDate() % conditions.length;
    return conditions[weatherIndex];
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Auto-update content
    autoUpdateDailyContent();
    
    // Update weather
    const weather = getDailyWeather();
    const weatherEmoji = document.querySelector('.weather-info div:first-child');
    const weatherText = document.querySelector('.weather-info p:nth-child(2)');
    
    if (weatherEmoji) weatherEmoji.textContent = weather.emoji;
    if (weatherText) weatherText.innerHTML = `<strong>Weather:</strong> ${weather.text}`;
    
    // Auto-refresh commentary every 2 minutes
    setInterval(refreshCommentary, 120000);
    
    // Update poll results randomly (simulating live updates)
    setInterval(() => {
        if (Math.random() > 0.5) {
            rcbVotes += Math.floor(Math.random() * 3);
        } else {
            miVotes += Math.floor(Math.random() * 3);
        }
        updatePoll();
    }, 30000);
});

function refreshCommentary() {
    const commentaryContainer = document.querySelector('.live-commentary');
    const items = commentaryContainer.querySelectorAll('.commentary-item');
    
    // Keep last 4 items only
    if (items.length > 4) {
        for (let i = 0; i < items.length - 4; i++) {
            items[i].remove();
        }
    }
    
    // Add new commentary
    const commentaries = [
        "Partnership building, running between wickets good",
        "Boundary hit! Excellent placement",
        "Wicket! Caught at deep mid-wicket",
        "Strategic timeout taken by batting team",
        "New bowler introduced into attack",
        "Excellent fielding effort saves boundary"
    ];
    
    const randomCommentary = commentaries[Math.floor(Math.random() * commentaries.length)];
    const lastItem = commentaryContainer.querySelector('.commentary-item:last-child');
    const lastTime = lastItem ? lastItem.querySelector('.commentary-time').textContent : "Over 0:";
    
    // Extract over number and increment
    const overMatch = lastTime.match(/Over (\d+)/);
    let nextOver = 1;
    if (overMatch) {
        nextOver = parseInt(overMatch[1]) + 1;
        if (nextOver > 20) nextOver = 1;
    }
    
    const newItem = document.createElement('div');
    newItem.className = 'commentary-item';
    newItem.innerHTML = `<span class="commentary-time">Over ${nextOver}:</span>
                         <span style="color: #e2e8f0;">${randomCommentary}</span>`;
    
    commentaryContainer.appendChild(newItem);
}
