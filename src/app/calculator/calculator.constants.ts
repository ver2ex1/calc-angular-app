export const BUTTONS = [
  { label: 'AC', class: 'control-button', action: 'clear' },
  { label: '+/-', class: 'control-button', action: 'toggleSign' },
  { label: '%', class: 'control-button', action: 'calculatePercentage' },
  {
    label: '÷',
    class: 'operation-button',
    action: 'performDivision',
    operatorName: 'divide',
  },
  { label: '1', class: 'number-button', action: 'changeValue' },
  { label: '2', class: 'number-button', action: 'changeValue' },
  { label: '3', class: 'number-button', action: 'changeValue' },
  {
    label: 'x',
    class: 'operation-button',
    action: 'performMultiplication',
    operatorName: 'multiply',
  },
  { label: '4', class: 'number-button', action: 'changeValue' },
  { label: '5', class: 'number-button', action: 'changeValue' },
  { label: '6', class: 'number-button', action: 'changeValue' },
  {
    label: '-',
    class: 'operation-button',
    action: 'performSubtraction',
    operatorName: 'subtract',
  },
  { label: '7', class: 'number-button', action: 'changeValue' },
  { label: '8', class: 'number-button', action: 'changeValue' },
  { label: '9', class: 'number-button', action: 'changeValue' },
  {
    label: '+',
    class: 'operation-button',
    action: 'performAddition',
    operatorName: 'add',
  },
  { label: '0', class: 'number-button zero-button', action: 'changeValue' },
  { label: '.', class: 'number-button', action: 'addDecimalPoint' },
  { label: '=', class: 'operation-button', action: 'calculateResult' },
];
