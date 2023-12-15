interface Participant {
  userName: string;
  avatar: string;
  verified: boolean;
  id: number;
  alerts: number;
  winRate: number;
  yield: number;
  income: number;
  percentage: number;
}

interface Creator {
  userName: string;
  avatar: string;
  id: number;
  userNickname: string;
}

export interface Challenge {
  id: number;
  name: string;
  participants: Participant[];
  date: Date;
  amount: number;
  creator: Creator;
  isFinish: boolean;
}
