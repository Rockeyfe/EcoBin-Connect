// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getDatabase, ref, get, child, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const dataArr = [];
const distanceArr = [];
const dateArr = [];
const dailyData = {};
let currentDayIndex = 0;

async function fetchData() {
    const dbRef = ref(database);
    try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const key = childSnapshot.key;
                const data = childSnapshot.val();
                const timestamp = data.timestamp;
                const distance = data.distance;
                const date = timestamp ? new Date(timestamp) : null;
                const formattedDate = date ? date.toLocaleDateString() : 'N/A';
                if (!dailyData[formattedDate]) {
                    dailyData[formattedDate] = [];
                }
                dailyData[formattedDate].push({ distance, timestamp });
                distanceArr.push(distance);
                dateArr.push(formattedDate);
            });
            displayDataForCurrentDay();
        } else {
            console.log("No data available");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
function displayDataForCurrentDay() {
    const days = Object.keys(dailyData);
    if (days.length === 0) return;
    if (currentDayIndex < 0) {
        currentDayIndex = days.length - 1;
    } else if (currentDayIndex >= days.length) {
        currentDayIndex = 0;
    }
    const currentDay = days[currentDayIndex];
    const dataForCurrentDay = dailyData[currentDay];
    const distances = dataForCurrentDay.map(entry => entry.distance);
    const timestamps = dataForCurrentDay.map(entry => new Date(entry.timestamp).toLocaleTimeString());
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                label: 'Distance',
                data: distances,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
document.getElementById('prevDay').addEventListener('click', () => {
    currentDayIndex--;
    displayDataForCurrentDay();
});
document.getElementById('nextDay').addEventListener('click', () => {
    currentDayIndex++;
    displayDataForCurrentDay();
});
fetchData();

async function addData(distance) {
    const dbRef = ref(database);
    try {
        await push(dbRef, {
            distance: distance,
            timestamp: serverTimestamp() // Add server timestamp
        });
        console.log('Data added successfully');
    } catch (error) {
        console.error("Error adding data:", error);
    }
}
// for (let index = 30; index > 0; index--) {
//     addData(index);
// }

// addData(23)