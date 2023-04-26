
// get the values from the page
function getValues(){

    // get values from page
    let startValue = document.getElementById('startValue').value
    let endValue = document.getElementById('endValue').value


    console.log(startValue, endValue)


    // parse to Int
    startValue = parseInt(startValue)
    endValue = parseInt(endValue)

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numbers = generateNumbers(startValue, endValue)
        displayNumbers(numbers)

    } else {
        alert('you must enter integers')
    }

}

// generate numbers from startValue to endValue
function generateNumbers(startValue, endValue){

    let numbers = []

    for( i = startValue; i <= endValue; i++ ){
        numbers.push(i)
    }

    return numbers
}

// display the numbers and mark even numbers bold
function displayNumbers(numbers){
    
    let templateRow = ""

    for( i = 0; i <numbers.length; i++ ){

        let number = numbers[i]
        let className = 'even'

        if( number % 2 === 0 ){
            className = 'even'
        } else {
            className = 'odd'
        }

        templateRow += `<tr><td class="${className}">${number}</td></tr>`
    }

    document.getElementById('results').innerHTML = templateRow

}