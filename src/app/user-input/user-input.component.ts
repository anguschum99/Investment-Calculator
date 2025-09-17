import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentResults } from '../../investment-results';
import { InvestmentModel } from '../investment-model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService: InvestmentService) {

   }


  initialInvestment = '0'
  annualInvestment = '0'
  expectedReturn = '5'
  duration = '10'

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    })
    this.initialInvestment = '0'
    this.annualInvestment = '0'
    this.expectedReturn = '5'
    this.duration = '10'
  }


  



}
