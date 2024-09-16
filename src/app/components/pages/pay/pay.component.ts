import { Component } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  selectedPaymentMethod: string = ''; // Correctly declared property

  selectPayment(method: string): void { // Method to set the selected payment method
    this.selectedPaymentMethod = method;
    console.log("Selected payment method:", this.selectedPaymentMethod);
  }

  proceedToPayment(): void {
    console.log("Proceeding to payment with:", this.selectedPaymentMethod);
  }
}
