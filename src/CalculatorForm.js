import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение кнопки

        let value1 = parseFloat(num1);
        let value2 = parseFloat(num2);

        switch (operation) {
            case '+':
                setResult(value1 + value2);
                break;
            case '-':
                setResult(value1 - value2);
                break;
            case '*':
                setResult(value1 * value2);
                break;
            case '/':
                setResult(value1 / value2);
                break;
            default:
                setResult('Invalid operation');
        }
    };

    return (
        <div>
            <input value={num1} onChange={(e) => setNum1(e.target.value)} />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input value={num2} onChange={(e) => setNum2(e.target.value)} />
            <button onClick={handleCalculate}>=</button>

            {result && <p>Result: {result}</p>}
        </div>
    );
};

const CalculatorForm = () => {
    return (
        <form>
            <Calculator />
        </form>
    );
};

export default CalculatorForm;