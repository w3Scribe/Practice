// write a programming to reverse the three digit number
#include<stdio.h>

int main(){
  int number = 123;
  int rev_number = 0;

  for(int i=0; i<3; i++){
    rev_number *= 10;
    rev_number += number % 10;
    number /= 10;
  }

  printf("%d", rev_number);

  return 0;
}