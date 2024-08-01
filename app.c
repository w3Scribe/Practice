#include <stdio.h>

int main()
{
  int hr, min, sec;
  long int t_sec;

  printf("Enter the total HOURS: ");
  if (!scanf("%d", &hr))
    goto INVALID_INPUT;

  printf("Enter the total MINUTES: ");
  if (!scanf("%d", &min))
    goto INVALID_INPUT;

  printf("Enter the total SECONDS: ");
  if (!scanf("%d", &sec))
    goto INVALID_INPUT;

  t_sec = (hr * 3600) + (min * 60) + sec;
  printf("The total seconds is: %ld sec\n", t_sec);
  return 0;

INVALID_INPUT:
  printf("Invalid Input.\n");
  return 0;
}