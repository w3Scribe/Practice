// WAP to print the reverse of a 3 digit number

#include<stdio.h>

int main(){
  int number , revNumber = 0;

  printf("Enter the number : ");
  scanf("%d", &number);

  revNumber += number%10; 
  number /= 10;
  revNumber *= 10;

  revNumber += number%10;
  number /= 10;
  revNumber *= 10;

  revNumber += number%10;
  number /= 10;


  printf("Reverse Number is %d", revNumber);
  
  return 0;
}