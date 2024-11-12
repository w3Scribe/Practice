// omit, partial, readonly, record, pick, exclude, extract, nonNullable, returnType, instanceType, required, thisType, typeOf, unionize, intersect, promiseType, deepReadonly, deepRequired, deepNonNullable, deepPartial, deepExtract, deepExclude, deepOmit, deepPick, deepUnionize, deepIntersect, deepPromiseType, deepInstanceType, deepReturnType, deepTypeOf, deepKeys, deepMerge, deepMergeTwo, deepMergeThree, deepMergeFour, deepMergeFive, deepMergeSix, deepMergeSeven, deepMergeEight, deepMergeNine, deepMergeTen, deepMergeEleven, deepMergeTwelve, deepMergeThirteen, deepMergeFourteen, deepMergeFifteen, deepMergeSixteen, deepMergeSeventeen, deepMergeEighteen, deepMergeNineteen, deepMergeTwenty, deepMergeTwentyOne, deepMergeTwentyTwo, deepMergeTwentyThree, deepMergeTwentyFour, deepMergeTwentyFive, deepMergeTwentySix, deepMergeTwentySeven, deepMergeTwentyEight, deepMergeTwentyNine, deepMergeThirty, deepMergeThirtyOne, deepMergeThirtyTwo, deepMergeThirtyThree, deepMergeThirtyFour, deepMergeThirtyFive, deepMergeThirtySix, deepMergeThirtySeven, deepMergeThirtyEight, deepMergeThirtyNine, deepMergeForty, deepMergeFortyOne, deepMergeFortyTwo, deepMergeFortyThree, deepMergeFortyFour, deepMergeFortyFive, deepMergeFortySix, deepMergeFortySeven, deepMergeFortyEight, deepMergeFortyNine, deepMergeFifty, deepMergeFiftyOne, deepMergeFiftyTwo, deepMergeFiftyThree, deepMergeFiftyFour, deepMergeFiftyFive, deepMergeFiftySix, deepMergeFiftySeven, deepMergeFiftyEight, deepMergeFiftyNine, deepMergeSixty, deepMergeSixtyOne, deepMergeSixtyTwo, deepMergeSixtyThree, deepMergeSixtyFour, deepMergeSixtyFive, deepMergeSixtySix, deepMergeSixtySeven, deepMergeSixtyEight, deepMergeSixtyNine, deepMergeSeventy, deepMergeSeventyOne, deepMergeSeventyTwo, deepMergeSeventyThree, deepMergeSeventyFour, deepMergeSeventyFive, deepMergeSeventySix, deepMergeSevent

// omit

type A = {
  a: string;
  b: number;
  c: boolean;
};

type B = Omit<A, 'a' | 'b'>;

