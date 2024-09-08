#include<stdio.h>
#include<time.h>
#include<stdlib.h>

int main(){
  srand(time(NULL)); // seeding to random function
  int randomNumber = rand() % (100 - 1 + 1) * 1;
  printf("%d", randomNumber);
  return 0;
}