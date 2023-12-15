import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../models/challenge.model'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(ChallengeService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getWeeklyChallengies(): Challenge[] {
    return this.data.getWeeklyChallengies();
  }
}
