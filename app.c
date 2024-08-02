// WAP to SWAP (interchange) 2 numbers without using third variable.
#include<stdio.h>

int main(){
  int a, b;

  printf("Enter the value of A : ");
  if(!scanf("%d", &a)) goto INVALID_INPUT;

  printf("Enter the value of B : ");
  if(!scanf("%d", &b)) goto INVALID_INPUT;
 
  a = a + b;  
  b = a - b;
  a = a - b;

  printf("The value of A and B is %d %d", a, b);
  
  return 0;

  INVALID_INPUT : 
    printf("Invalid Input.");
    return 0;
}
