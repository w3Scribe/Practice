#include<stdio.h>

#define NUMBER_OF_STD 5
#define NUMBER_OF_SUBJECTS 3

int main(){
  int marks[NUMBER_OF_STD][NUMBER_OF_SUBJECTS];
  int roll_number[NUMBER_OF_STD];
  float total_marks_of_all_std = 0;
  float total_marks_of_each_std[NUMBER_OF_STD], total_marks = 0;

  printf("Enter the roll number of %d students :\n", NUMBER_OF_STD);
  for(int i=0; i<NUMBER_OF_STD; i++){
   scanf("%d", &roll_number[i]);
  }

 for(int i = 0; i<NUMBER_OF_STD; i++){
  printf("Enter the marks of student %d in %d subjects :\n", roll_number[i], NUMBER_OF_SUBJECTS);
  total_marks = 0;
  for(int j=0; j<NUMBER_OF_SUBJECTS; j++){
    scanf("%d", &marks[i][j]);
    total_marks_of_all_std += marks[i][j];
    total_marks += marks[i][j];
  }
  total_marks_of_each_std[i] = total_marks;
 }

 for(int i=0; i<NUMBER_OF_STD; i++){
  printf("Total marks of student %d is : %.2f\n", roll_number[i], total_marks_of_each_std[i]);
 }
 
 printf("Total marks of all students is : %.2f\n", total_marks_of_all_std);

 return 0;
}

