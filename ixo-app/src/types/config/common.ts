export interface LocalizeText {
  [local: string]: string;
}

///////////////////////
///// NumberRange /////
///////////////////////
type NumberEnumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : NumberEnumerate<N, [...Acc, Acc['length']]>;
export type NumberRange<F extends number, T extends number> = Exclude<NumberEnumerate<T>, NumberEnumerate<F>>; // 1 | 2 | 3 | ... | N

type StringEnumerate<N extends number, Acc extends string[] = []> = Acc['length'] extends N
  ? Acc[number]
  : StringEnumerate<N, [...Acc, `${Acc['length']}`]>;
export type StringRange<F extends number, T extends number> = Exclude<StringEnumerate<T>, StringEnumerate<F>>;