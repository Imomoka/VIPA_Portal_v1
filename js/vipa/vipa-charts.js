// Define the values
var annualTarget = 100000;
var moneyMade = 2562;
var percentage = (moneyMade / annualTarget) * 100; // Calculate progress

// Configure the chart
var annualTargetChartOptions = {
    series: [percentage], // Dynamic percentage
    chart: {
        height: 250,
        type: "radialBar",
        toolbar: { show: false }
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: "70%",
                background: "#262626"
            },
            track: {
                background: "#000000",
                strokeWidth: "67%",
                margin: 0
            },
            dataLabels: {
                show: true,
                name: {
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    offsetY: -10,
                    color: "#6C757D",
                    fontFamily: "Poppins"
                },
                value: {
                    formatter: function (value) {
                        return value.toFixed(2) + "%"; // Show percentage
                    },
                    color: "#ffffff",
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily: "Poppins",
                    offsetY: 5
                },
                total: {
                    show: true,
                    label: "ANNUAL TARGET",
                    formatter: function () {
                        return moneyMade.toLocaleString() + " / " + annualTarget.toLocaleString();
                    },
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    offsetY: -10,
                    color: "#6C757D",
                    fontFamily: 'Poppins'
                }
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#e6c157"], // Lighter gold
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
            colorStops: [
                { offset: 0, color: "#a67201", opacity: 1 }, // Dark gold at the start
                { offset: 100, color: "#e6c157", opacity: 1 } // Light gold at the end
            ]
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Progress"]
};

// Render the chart
var annualTargetChartElement = document.querySelector("#annualTargetChart");

if (annualTargetChartElement) {
    var annualTargetChart = new ApexCharts(annualTargetChartElement, annualTargetChartOptions);
    annualTargetChart.render();
}
