#include<stdio.h>

#define sum(a,b) (printf(#a" and "#b" sum is %d", a+b))

void main(){
  sum(1,35);
}