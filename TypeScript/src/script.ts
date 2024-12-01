type tesla = ['tesla', 'model 3', 'model X', 'model Y'];

// type TuppleLen<T extends any[]> = T  extends any[] ? T['length'] : never;
// type TuppleLen<T extends any[]> = T['length'];
// type TuppleLen<T extends any[]> = T extends { length: infer L } ? L : never;

type teslaLength = TuppleLen<tesla>; // expected 4