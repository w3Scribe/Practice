type Tuple<Length, Type, Acc extends Type[] = []> =
  Acc["length"] extends Length ?
  Acc :
  Tuple<Length, Type, [Type, ...Acc]>;

type A = Tuple<3, string>; // [string, string, string]