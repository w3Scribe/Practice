// WAP to print the total seconds in a given time (hrs, min, sec’s)
#include<stdio.h>

int main(){
  int hr, min, sec;
  long int t_sec;
  printf("Enter the total HOURS : ");
  scanf("%d", &hr);
  printf("Enter the total MINUTES : ");
  scanf("%d", &min);
  printf("Enter the total SECONDS : ");
  scanf("%d", &sec);
  t_sec = (hr * 3600 ) + (min*60) + sec;
  printf("The total seconds is : %ldsec", t_sec);
  return 0;
}