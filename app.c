// int, short, long, float, double, char, string, unsinged, singed,
//  array, struct,union,enum, typedef, pointer, function, void, const, volatile, static, auto, register, extern, break, continue, return, goto, if, else, switch, case, default, while, do, for
// int vs long int

// preprocessing, Compilation, Assembly, Linking

#include<stdio.h>


void isSortedArray(int* arry, int size){
  int isTrue = 1;
  for(int i = 0; i<size; i++){
    if(arry[i] > arry[i+1]) isTrue = 0;
  }
  if(isTrue) printf("Array is Sorted\n");
  else printf("Array is not Sorted\n");
}


int main(){
 int arry[] = {1,2,3,4,5,6,7,8,9,10};
 int size = sizeof(arry)/sizeof(arry[0]);
 isSortedArray(arry, size);
 return 0;
}