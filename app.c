// WAP to SWAP four numbers without using five variable

#include<stdio.h>

int main(){
  int a, b, c, d;
  
  printf("Enter the value of A :  ");
  if(!scanf("%d", &a)) goto INVALID_INPUT;

  printf("Enter the value of B :  ");
  if(!scanf("%d", &b)) goto INVALID_INPUT;

  printf("Enter the value of C :  ");
  if(!scanf("%d", &c)) goto INVALID_INPUT;

  printf("Enter the value of D :  ");
  if(!scanf("%d", &d)) goto INVALID_INPUT;

  // a = a + b + c + d;
  // d = a - (b + c + d);
  // c = a - (b + c + d);
  // b = a - (b + c + d);
  // a = a - (b + c + d);

  a = a + b + c + d;
  b = a - (b + c + d);
  c = a - (b + c + d);
  d = a - (b + c + d);
  a = a - (b + c + d);

  printf("The value of \nA : %d\nB : %d\nC : %d\nD : %d", a, b, c, d);

  return 0;
  INVALID_INPUT : 
     printf("Invalid Input.");
     return 0;
}