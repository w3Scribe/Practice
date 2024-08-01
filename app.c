// WAP to convert temp. From Fahrenheit to centigrade. C=(F-32) * 5/9

#include<stdio.h>

int main(){
  float F, c;
  printf("Enter the Fahrenheit value : ");
  if(scanf("%f", &F) != 1){
    printf("Invalid input.");
    return 0;
  }
  c = (F-32)*5.0/9.0;
  printf("%.2f centigrade.", c); 
  return 0;
}