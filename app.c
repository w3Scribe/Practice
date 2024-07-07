// int, short, long, float, double, char, string, unsinged, singed,
//  array, struct,union,enum, typedef, pointer, function, void, const, volatile, static, auto, register, extern, break, continue, return, goto, if, else, switch, case, default, while, do, for
// int vs long int

// preprocessing, Compilation, Assembly, Linking

// #include<stdio.h>

// void reverseArray(int* arry, int size){
//   int revIndex = 0;
//   int revArray[size];
//   for(int i = 1; i <= size; i++){
//      revIndex+=1;
//     revArray[size-i] = arry[revIndex - 1];
//   }

//   for(int j = 0; j < revIndex; j++){
//     printf("%d\n", revArray[j]);
//   }
// }

// int main(){
//   int arry[] = {1,2,3,4,5,6};
//   reverseArray(arry, sizeof(arry)/sizeof(arry[0]));
//   return 0;
// }

#include <stdio.h>

void reverseArray(int *arry, int size)
{
  int revArray[size];
  for (int i = 0; i < size; i++)
  {
    revArray[size - 1 - i] = arry[i];
  }

  for (int j = 0; j < size; j++)
  {
    printf("%d\n", revArray[j]);
  }
}

int main()
{
  int arry[] = {1, 2, 3, 4, 5, 6};
  reverseArray(arry, sizeof(arry) / sizeof(arry[0]));
  return 0;
}