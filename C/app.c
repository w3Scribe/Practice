//  WAP to check whether a number input through the keyboard is even or odd (with or without modulus operator)
#include<stdio.h>


int main(){
  int number, result;
  printf("Enter the number : ");
  scanf("%d", &number);
 
  while (number > 0){
    if(number == 0) printf("even");
    else printf("odd");
    number -= 2;
  }
  

  return 0;
}