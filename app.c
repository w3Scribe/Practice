// WAP to SWAP (interchange) two numbers

#include<stdio.h>

int main(){
  int a, b, c;

  printf("Enter the value of A : ");
  if (!scanf("%d", &a))
    goto INVALID_INPUT;

  printf("Enter the value of B : ");
  if (!scanf("%d", &b))
    goto INVALID_INPUT;

  c = a;
  a = b;
  b = c;

  printf("The value of A and B is : %d and %d", a, b);

  return 0;

  INVALID_INPUT : 
    printf("Envalid input.");
    return 0;
}