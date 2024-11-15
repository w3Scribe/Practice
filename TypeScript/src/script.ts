// usage of is keyword in typescript
// typeof, instanceof, in, as, satisfies, is, type guards,, 

type ArrayWithLength<Length extends number, DataType> = [DataType, ...DataType[]] & { length: Length };

const arr : ArrayWithLength<4, number | string> = ['one', 2, 'three', 4];