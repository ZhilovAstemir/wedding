interface Plan {
  planTime: string;
  doing: string;
}

export enum Patterns {
  first,
  second,
}

export interface Pattern {
  nameOfGroom: string;
  nameOfBride: string;
  weddingDate: string;
  tillTitle: string;
  firstTitle: string;
  textOfFirstTitle: string;
  secondTitle: string;
  textOfSecondTitle: string;
  waiting: string;
  startAt: string;
  planSection: Plan[];
  place: {
    media: string | null,
    whereText: string,
  }
  patternKey: Patterns;
}

export type Weddings = Record<string, Pattern>;