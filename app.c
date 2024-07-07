// int, short, long, float, double, char, string, unsinged, singed,
//  array, struct,union,enum, typedef, pointer, function, void, const, volatile, static, auto, register, extern, break, continue, return, goto, if, else, switch, case, default, while, do, for
// int vs long int

// preprocessing, Compilation, Assembly, Linking

#include<stdio.h>

void findAvgAndSum(int* arry, int size){
  int sum = 0;
  
  for(int i = 0; i<size; i++)
    sum += arry[i];

  int average = sum / size;
  printf("Sum : %d\n Avgrage : %d", sum, average);
}



int main(){
 int arry[] = {1,2,3,4,5,6,7,8,9};
 findAvgAndSum(arry, sizeof(arry)/sizeof(arry[0]));
 return 0;
}