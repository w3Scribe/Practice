// int, short, long, float, double, char, string, unsinged, singed,
//  array, struct,union,enum, typedef, pointer, function, void, const, volatile, static, auto, register, extern, break, continue, return, goto, if, else, switch, case, default, while, do, for
// int vs long int

// preprocessing, Compilation, Assembly, Linking

#include<stdio.h>

int NumberOfOccurance(int * arry, int size, int element){
 int totalRepeatation = 0;
  for(int  i = 0; i<size; i++)
    if(arry[i] == element) totalRepeatation++;
  return totalRepeatation;
}


int main(){
 int arry[] = {1,2,3,4,5,6,77,8,9,5,5};
 int result = NumberOfOccurance(arry, sizeof(arry)/sizeof(arry[0]), 5);
 printf("Number of Occurance of 5 is %d\n", result);
 return 0;
}