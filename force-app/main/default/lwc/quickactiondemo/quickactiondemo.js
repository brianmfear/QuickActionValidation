import { LightningElement } from 'lwc';

export default class Quickactiondemo extends LightningElement {
  options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
  ]
  handleContinueButtonClick() {
    const isValid = [...this.template.querySelectorAll('.input')].reduce(
      function(validSoFar, field) {
        field.reportValidity();
        return validSoFar && field.checkValidity()
      }, true
    );
    if(!isValid) {
      this.reportError(); // Whatever you want to do here
      return;
    }
    this.continueToNext(); // Ditto
  }
  reportError() {
    alert('An error has occurred');
  }
  continueToNext() {
    this.dispatchEvent(new CustomEvent('next'));
    alert('Continue to the next page');
  }
}