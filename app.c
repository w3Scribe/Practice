// WAP to calculate the remainder of 2 numbers without using % operator.

#include<stdio.h>

int main(){
  int divident, divisor;
  divisor = 2;

  printf("Enter the number : ");
  
  if(!scanf("%d", &divident)){
    printf("Enter the Integer value.");
    return 0;
  }

  while(divident>=divisor){
    divident -= divisor;
  }

  if (divident == 0)
    printf("Even Number");
  else
    printf("Odd Number");

  return 0;
}