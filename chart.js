//let elChart = document.getElementById('myChart').getContext('2d');

function populateChart(property) {
    let propertyArray = [];
    for(let i= 0;i < carImageArray.length; i++) {
        propertyArray.push(carImageArray[i][property]);
    }
    return propertyArray;
}

function displayChart() {
    elChart.innerHTML = '';
    let myChart = new Chart(elChart, {
        type: 'bar',
        data: {
            labels: populateChart('model'),
            datasets: [{
                label: 'Number of Clicks',
                data: populateChart('clicked'),
                backgroundColor: 'blue',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: 'Number of Times Shown',
                data: populateChart('shown'),
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}