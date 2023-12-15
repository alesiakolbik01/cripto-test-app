import { Component, Input, inject } from '@angular/core';
import { Challenge } from '../../models/challenge.model';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-user-competition',
  templateUrl: './user-competition.component.html',
  styleUrls: ['./user-competition.component.scss'],
})
export class UserCompetitionComponent {

  constructor() { }

  private platform = inject(Platform);
  @Input() challenge!: Challenge;

  formattedNumber = (value:number) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  numberToOrdinal = (n:number) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return (s[(v - 20) % 10] || s[v] || s[0]);
  };

  numberWithSpaces = (x:number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  
  isIos() {
    return this.platform.is('ios')
  }
}