type Tuple<Length extends number, Type, Acc extends Type[] = []> =
  Acc["length"] extends Length ? Acc : Readonly<Tuple<Length, Type, [Type, ...Acc]>>;

type HTuple = Tuple<4, number, []>
// ^?  

const tuple: HTuple = [1, 2, 3, 4];
