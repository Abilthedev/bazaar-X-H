export interface VoteItem {
  id: string;
  score: number; // 1 to 5
  comment: string;
  createdAt: string;
}

export interface VoteStats {
  average: number;
  totalVotes: number;
  breakdown: Record<number, number>;
  votes: VoteItem[];
}

export interface BazaarProduct {
  id: string;
  name: string;
  category: 'pot' | 'pupuk' | 'tanaman' | 'edukasi';
  description: string;
  badge: string;
  status: string;
  image: string;
  benefits: string[];
  specs: string[];
}

export interface WasteItemQuiz {
  id: string;
  name: string;
  type: 'organik' | 'anorganik' | 'b3';
  description: string;
  icon: string;
}
