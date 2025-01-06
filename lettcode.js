class Calculator {
    constructor(value) {
        this.result = value;
        console.log(`Calculator initialized with value: ${value}`);
    }

    add(value) {
        this.result += value;
        console.log(`Added ${value} to the result. New result: ${this.result}`);
        return this;
    }
/*const calculator1 = new Calculator(10);
calculator1.add(5);
calculator1.getResult();
output: 15
// firstly initialize value with calculator, then add, then subract from the result and then final result*/

    subtract(value) {
        this.result -= value;
        console.log(`Subtracted ${value} from the result. New result: ${this.result}`);
        return this;
    }
/* const calculator2 = new Calculator(15);
calculator2.subtract(3);
calculator2.getResult();
output : 12 */
    multiply(value) {
        this.result *= value;
        console.log(`Multiplied the result by ${value}. New result: ${this.result}`);
        return this;
    }
    /*const calculator3 = new Calculator(4);
    calculator3.multiply(5);
    calculator3.getResult();
    output : 20 */
    
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        console.log(`Divided the result by ${value}. New result: ${this.result}`);
        return this;
    }
    /*const calculator4 = new Calculator(20);
    calculator4.divide(4);
    calculator4.getResult();
    output : 5 */
    power(value) {
        this.result = Math.pow(this.result, value);
        console.log(`Raised the result to the power of ${value}. New result: ${this.result}`);
        return this;
    }
    /*const calculator5 = new Calculator(2);
    calculator5.power(3);
    calculator5.getResult();
    output : 8 */
    getResult() {
        console.log(`Final result: ${this.result}`);
        return this.result;
    }
}

new Calculator(10).add(5).subtract(7).power(3).getResult()

