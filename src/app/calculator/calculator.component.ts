import { Component } from '@angular/core';
import { BUTTONS } from './calculator.constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [NgClass],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  buttons = BUTTONS;

  displayedValue: string = '0';
  currentValue: number = 0;
  previousValue: number = 0;
  lastOperator: string | null = null;
  operatorInProgress: boolean = false;

  changeValue(value: string) {
    if (this.operatorInProgress) {
      this.displayedValue = value;
      this.operatorInProgress = false;
    } else {
      if (this.displayedValue === '0') {
        this.displayedValue = value;
      } else {
        this.displayedValue += value;
      }
    }
    this.currentValue = parseFloat(this.displayedValue);
  }

  clear = () => {
    this.displayedValue = '0';
    this.currentValue = 0;
    this.previousValue = 0;
    this.operatorInProgress = false;
    this.lastOperator = null;
  };

  toggleSign = () => {
    this.displayedValue = (parseFloat(this.displayedValue) * -1).toString();
    this.currentValue = parseFloat(this.displayedValue);
  };

  performAddition = () => {
    if (this.lastOperator) {
      this.calculate();
    } else {
      this.previousValue = this.currentValue;
    }
    this.operatorInProgress = true;
    this.lastOperator = 'add';
  };

  performSubtraction = () => {
    if (this.lastOperator) {
      this.calculate();
    } else {
      this.previousValue = this.currentValue;
    }
    this.operatorInProgress = true;
    this.lastOperator = 'subtract';
  };

  performMultiplication = () => {
    if (this.lastOperator) {
      this.calculate();
    } else {
      this.previousValue = this.currentValue;
    }
    this.operatorInProgress = true;
    this.lastOperator = 'multiply';
  };

  performDivision = () => {
    if (this.lastOperator) {
      this.calculate();
    } else {
      this.previousValue = this.currentValue;
    }
    this.operatorInProgress = true;
    this.lastOperator = 'divide';
  };

  calculatePercentage = () => {
    if (this.lastOperator) {
      this.currentValue = this.previousValue * (this.currentValue / 100);
    } else {
      this.currentValue = this.currentValue / 100;
    }
    this.displayedValue = this.currentValue.toString();
  };

  addDecimalPoint = () => {
    if (this.operatorInProgress) {
      this.displayedValue = '0.';
      this.operatorInProgress = false;
    } else if (this.displayedValue.indexOf('.') === -1) {
      this.displayedValue += '.';
    }
    this.currentValue = parseFloat(this.displayedValue);
  };

  calculateResult = () => {
    if (this.lastOperator) {
      this.calculate();
      this.lastOperator = null;
      this.operatorInProgress = true;
    }
    this.displayedValue = this.currentValue.toString();
    this.lastOperator = 'calculate_result';
  };

  calculate = () => {
    switch (this.lastOperator) {
      case 'add':
        this.previousValue += this.currentValue;
        break;
      case 'subtract':
        this.previousValue -= this.currentValue;
        break;
      case 'multiply':
        this.previousValue *= this.currentValue;
        break;
      case 'divide':
        this.previousValue /= this.currentValue;
        break;
      case 'calculate_result':
        this.previousValue = this.currentValue;
        break;
    }
    this.displayedValue = this.previousValue.toString();
    this.currentValue = this.previousValue;
  };

  private actionsMap: { [key: string]: (label: string) => void } = {
    clear: this.clear.bind(this),
    toggleSign: this.toggleSign.bind(this),
    calculatePercentage: this.calculatePercentage.bind(this),
    performDivision: this.performDivision.bind(this),
    performMultiplication: this.performMultiplication.bind(this),
    performSubtraction: this.performSubtraction.bind(this),
    performAddition: this.performAddition.bind(this),
    addDecimalPoint: this.addDecimalPoint.bind(this),
    calculateResult: this.calculateResult.bind(this),
    changeValue: this.changeValue.bind(this),
  };

  handleButtonClick(action: string, label: string) {
    const method = this.actionsMap[action];
    if (method) {
      method(label);
    }
  }
}
