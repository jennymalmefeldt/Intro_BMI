const calculateBMI = ()=> {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(parseInt(weightInput.nodeValue) ,parseInt(heightInput.value))
    let message = getBMIClassification(parsFloat(results))
    let displayResultsElement = document.getElementById('results')
    displayResultsElement.innerHTML = `<h1>Your BMI value is: ${results} and you are deemed ${message}</h1>`
    
    

}