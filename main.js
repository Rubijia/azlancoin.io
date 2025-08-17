const ctx = document.getElementById('tokenomicsChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Liquidity 40%', 'Marketing 30%', 'Development 20%', 'Reserve 10%'],
        datasets: [{
            data: [40,30,20,10],
            backgroundColor: ['#3b82f6','#9333ea','#facc15','#10b981']
        }]
    }
});