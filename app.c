// int, short, long, float, double, char, string, unsinged, singed,
//  array, struct,union,enum, typedef, pointer, function, void, const, volatile, static, auto, register, extern, break, continue, return, goto, if, else, switch, case, default, while, do, for
// int vs long int

// preprocessing, Compilation, Assembly, Linking

#include<stdio.h>

int main(){
  int number;
  printf("Enter a number: ");
  scanf("%d", &number);
  printf("You entered: %d\n", number);
  long long int factorial = 1;
  for(int i=1; i<=number; i++) {
    factorial = factorial * i;
  }
  printf("Factorial of %d is %lld\n", number, factorial);
  return 0;
}