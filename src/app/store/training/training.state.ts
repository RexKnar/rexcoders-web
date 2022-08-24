export interface TrainingState {
  trainingId: number;
  trainingName: string;
  imageUrl: string;
  amount: string;
  discountAmount: string;
  learnersLevel: string;
  stack: string;
  domain: {
    domainId: number;
    domainName: string;
  };
  language: {
    languageId: number;
    languageName: string;
  };
}

export const initialState: any = {};
