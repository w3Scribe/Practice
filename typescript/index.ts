type IsEq<T1, T2> = 
   (<U>()=> U extends T1 ? 1 : 2) extends
  (<U>() => U extends T2 ? 1 : 2) ? true : false;
   
