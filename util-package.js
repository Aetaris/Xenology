
// Contains generally useful functions and classes

class Numbers { // Static methods used to manipulate numbers in various ways
	
	static roundTo(number, digits) { // Rounds to x digits after 0. Negative numbers round to 10s (-1), 100s (-2), etc.
		let num;
		if(digits >= 0) {
			num = Math.round(number * Math.pow(10, digits)) / 100;
		} else {
			num = Math.round(number / Math.pow(10, -1 * digits)) * 100; // CURRENTLY BROKEN. do not use.
		}
		return num;
	}

}