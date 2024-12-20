// Pointers
#include<stdio.h>

int main(){
  int *ptr;
  int num = 10;
  ptr = &num;
  
  printf("The value of num is: %d\n", *ptr);
  printf("The address of num is: %p\n", ptr);

  return 0;
}