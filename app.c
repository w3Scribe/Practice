// WAP to SWAP (interchange) three numbers

#include<stdio.h>

int main(){
  int a, b, c, d;
  
  printf("Enter the value of A :  ");
  if(!scanf("%d", &a)) goto INVALID_INPUT;

  printf("Enter the value of B :  ");
  if(!scanf("%d", &b)) goto INVALID_INPUT;

  printf("Enter the value of C :  ");
  if(!scanf("%d", &c)) goto INVALID_INPUT;

  d = a + b + c;
  b = d - c;
  a = c - a;
  c = b - a;

  printf("The value of \nA : %d\nB : %d\nC : %d", a, b, c);

  return 0;
  INVALID_INPUT : 
     printf("Invalid Input.");
     return 0;
}