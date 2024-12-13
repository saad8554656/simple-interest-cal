document.getElementById('btn').onclick = function () {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!principal || !rate || !time || principal <= 0 || rate <= 0 || time <= 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    document.getElementById('result').innerHTML = `
        <strong>Interest: </strong> ${interest.toFixed(2)}<br>
        <strong>Total Amount: </strong> ${totalAmount.toFixed(2)}
    `;

    // Display pie chart
    Highcharts.chart('chart-container', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Interest Breakdown'
        },
        series: [{
            name: 'Amount',
            colorByPoint: true,
            data: [
                { name: 'Principal Amount', y: principal },
                { name: 'Interest', y: interest }
            ]
        }]
    });
};
