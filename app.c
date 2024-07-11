// int, short, long, float, double, char, string, unsinged, singed,
//  array, struct,union,enum, typedef, pointer, function, void, const, volatile, static, auto, register, extern, break, continue, return, goto, if, else, switch, case, default, while, do, for
// int vs long int

// preprocessing, Compilation, Assembly, Linking

#include<stdio.h>

#define NUMBER_OF_STD 5

int main(){
  int std[NUMBER_OF_STD], marks[NUMBER_OF_STD];
  float total_marks = 0, avg_marks;

  printf("\nEnter the roll number of %d std : \n", NUMBER_OF_STD);

  for(int i = 0; i<NUMBER_OF_STD; i++)
    scanf("\n%d", &std[i]);

  for(int j = 0; j<NUMBER_OF_STD; j++){
    printf("\nEnter the marks of std %d : ", std[j]);
    scanf("%d", &marks[j]);
    total_marks += marks[j];
  }

  avg_marks = total_marks/NUMBER_OF_STD;
  printf("\nTotal marks is : %.2f", total_marks);
  printf("\nAverage mark of std is : %.2f", avg_marks);

  return 0;
}