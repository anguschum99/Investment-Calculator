import { Component, inject, Input } from '@angular/core';
import { InvestmentModel } from '../investment-model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

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
  private investmentResults = inject(InvestmentService);

  get results() {
    return this.investmentResults.resultsData;
  }
}
