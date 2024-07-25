// WAP to input two numbers from the keyboard and print their average
#include<stdio.h>

int main(){
 int a, b;
 printf("Enter the value of a : ");
 scanf("%d", &a);

 printf("Enter the value of b : ");
 scanf("%d", &b);

 printf("The average of two numbers a and b is %d", ((a + b) / 2));
 return 0;
}