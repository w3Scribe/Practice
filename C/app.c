#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main(){
  srand(time(NULL)); // seed to rand function 
  int randNumber = rand() % (20 - 10 + 1) + 10;
  printf("%d", randNumber);
  return 0;
}