type Tuple<L, T, A extends T[] = []> = A["length"] extends L ? A : Readonly<Tuple<L, T, [T, ...A]>>;
