// WAP to merge three number. E.g. a= 1, b= 2, c = 8 is 128

#include<stdio.h>

int main(){
  int a, b, c, number = 0;

  printf("Enter the value of A : ");
  scanf("%d", &a);
  printf("Enter the value of B : ");
  scanf("%d", &b);
  printf("Enter the value of C : ");
  scanf("%d", &c);

  number += a; // 0+1 = 1

  number *= 10; //10
  number += b; //12

  number *= 10; //120
  number += c; //3

  printf("The number is %d", number);

  return 0;
}