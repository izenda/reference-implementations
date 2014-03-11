function RelativeTime() {

    /**
     * - absolute values: %today%, %yesterday%
     * - expression terms: %second%, %minute%, %hour%, %day%, %month%, %year%
     * - operators: +, -
     *
     * Example: %today% - %day% + %hour*8%)
     * @returns DateTime calculated from expression
     */
    RelativeTime.prototype.getRelativeTime = function(timeExpression) {
        var terms = ['second', 'minute', 'hour', 'day', 'month', 'year'];
        var values = ['%today%', '%midnight%', '%firstInWeek%', '%firstInMonth%', '%firstInYear%'];
        var operators = ['+', '-'];

        var exressionArray = [];
        var currentElement = null;
        var timeExpressionTrimmed = timeExpression.replace(/\s+/, '');
        for (var i = 0; i < timeExpressionTrimmed.length; i++) {
            var c = timeExpressionTrimmed[i];
            if (c == ' ')
                continue;
            if (c == '%') {
                if (currentElement == null) {
                    currentElement = '%';
                } else {
                    currentElement += '%';
                    exressionArray.push(currentElement);
                    currentElement = null;
                }
            } else if (operators.indexOf(c) >= 0) {
                exressionArray.push(c);
            } else {
                currentElement += c;
            }
        }

        if (exressionArray.length == 0) {
            return null;
        }
        if (values.indexOf(exressionArray[0]) < 0) {
            throw new Error('First element of expression must be in array [\'%today%\', \'%midnight%\', \'%firstInWeek%\', \'%firstInMonth%\', \'%firstInYear%\']');
        }

	    var getCount = function(expr) {
		    var starPos = expr.indexOf('*');
		    if (starPos < 0)
			    return 1;
		    var strVal = expr.substr(starPos + 1);
		    strVal = strVal.substr(0, strVal.length - 1);
		    return parseInt(strVal);
	    };

        // calculate date chain
        var today;
        if (exressionArray[0] == '%today%') {
            today = new Date();
        } else if (exressionArray[0] == '%midnight%') {
            today = new Date();
            today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        } else if (exressionArray[0] == '%firstInWeek%') {
            today = new Date();
            var day = today.getDay(),
                diff = today.getDate() - day; // adjust when day is sunday
            today = new Date(today.setDate(diff));
            today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        } else if (exressionArray[0] == '%firstInMonth%') {
            today = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        } else if (exressionArray[0] == '%firstInYear%') {
            today = new Date(new Date().getFullYear(), 0, 1);
        }
        var operatorType = 0; // 0 - add, 1 - substract, 2 - reserved for future
        for (var i = 1; i < exressionArray.length; i++) {
            var curr = exressionArray[i];
            if (operators.indexOf(curr) >= 0) {
                if (curr == '+') {
                    operatorType = 0;
                } else if (curr == '-') {
                    operatorType = 1;
                }
            } else {
                var count = getCount(curr);
                if (curr.indexOf('second') == 1) {
                    today.setSeconds(today.getSeconds() + (operatorType == 0 ? count : -count));
                } else if (curr.indexOf('minute') == 1) {
                    today.setMinutes(today.getMinutes() + (operatorType == 0 ? count : -count));
                } else if (curr.indexOf('hour') == 1) {
                    today.setHours(today.getHours() + (operatorType == 0 ? count : -count));
                } else if (curr.indexOf('day') == 1) {
                    today.setDate(today.getDate() + (operatorType == 0 ? count : -count));
                } else if (curr.indexOf('month') == 1) {
                    today.setMonth(today.getMonth() + (operatorType == 0 ? count : -count));
                } else if (curr.indexOf('year') == 1) {
                    today.setYear(today.getYear() + (operatorType == 0 ? count : -count));
                }
            }
        }

        return today;
    };
}
