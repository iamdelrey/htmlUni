function Accumulator(startingValue) {
	this.value = startingValue

	this.read = function () {
		var userInput = prompt('Введите число:', '')
		var number = parseFloat(userInput)

		if (!isNaN(number)) {
			this.value += number
		} else {
			alert('Вы ввели некорректное число. Попробуйте еще раз.')
		}
	}
}

var accumulator = new Accumulator(0)

accumulator.read()
accumulator.read()

alert('Текущее значение: ' + accumulator.value)
