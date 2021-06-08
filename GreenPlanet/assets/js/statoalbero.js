const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 1,
    data: [10, 20, 30, 40, 50, 0, 5],
  }]
};