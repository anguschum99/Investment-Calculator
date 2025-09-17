import { Component, Input } from '@angular/core';
import { InvestmentModel } from '../investment-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  providers: [],
})
export class InvestmentResultsComponent {
  // @Input() results: InvestmentModel[] = [];
  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[] | null = [];
}
