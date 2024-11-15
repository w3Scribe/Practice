// usage of is keyword in typescript
// typeof, instanceof, in, as, satisfies, is, type guards,, 


type Tuple<Length, DataType, Acc extends DataType[] = []> =
  Acc["length"] extends Length ? Acc : Readonly<Tuple<Length, DataType, [DataType, ...Acc]>>;

type RGB = Tuple<3, number>;

const rgb = [255, 255, 255] satisfies RGB; 

