#include<stdio.h>

int add(int a, int b){
  return a + b;
}

int main() {
  int a = 10;
  int b = 20;
  int c = add(a, b);
  printf("The sum of %d and %d is %d\n", a, b, c);
  return 0;
}