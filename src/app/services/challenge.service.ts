
import { Injectable } from '@angular/core';
import { Challenge } from '../models/challenge.model'


@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  public Challengies: Challenge[] = [{
    id: 1,
    name: 'Weekly Challenges',
    date: new Date("2023-11-12T00:00:00.000Z"),
    amount: 20000,
    isFinish: true,
    creator: {
      userName: 'Roger K',
      avatar: 'assets/icon/user-6.png',
      id: 1,
      userNickname: '@rog234'
    },
    participants:[{
        userName: "Roger Korsgaard",
        avatar: "assets/icon/user-1.png",
        verified: true,
        id: 1,
        alerts: 20,
        winRate: 85,
        yield: 11,
        income: 7500,
        percentage: 12,
      },
      {
        userName: "Charlie Herwitz",
        avatar: "assets/icon/user-2.png",
        verified: true,
        id: 2,
        alerts: 20,
        winRate: 85,
        yield: 11,
        income: 1430,
        percentage: 12,
      },
      {
        userName: "Ahmad Mango",
        avatar: "assets/icon/user-3.png",
        verified: false,
        id: 1,
        alerts: 20,
        winRate: 85,
        yield: 11,
        income: -1300,
        percentage: 10,
      },
    ]
  },
  {
    id: 2,
    name: 'Double Gain Week Contest',
    date: new Date("2023-11-12T00:00:00.000Z"),
    amount: 20000,
    isFinish: false,
    creator: {
      userName: 'Roger K',
      avatar: 'assets/icon/user-6.png',
      id: 1,
      userNickname: '@rog234'
    },
    participants:[{
        userName: "Roger Korsgaard",
        avatar: "assets/icon/user-4.png",
        verified: true,
        id: 1,
        alerts: 20,
        winRate: 85,
        yield: 11,
        income: 7500,
        percentage: 12,
      },
      {
        userName: "Charlie Herwitz",
        avatar: "assets/icon/user-2.png",
        verified: true,
        id: 2,
        alerts: 20,
        winRate: 85,
        yield: 11,
        income: 1430,
        percentage: 12,
      },
      {
        userName: "Ahmad Mango",
        avatar: "assets/icon/user-3.png",
        verified: false,
        id: 1,
        alerts: 20,
        winRate: 85,
        yield: 11,
        income: -1300,
        percentage: 10,
      },
    ]
  }];

  constructor() {}

  public getWeeklyChallengies(): Challenge[] {
    return this.Challengies;
  }
}
