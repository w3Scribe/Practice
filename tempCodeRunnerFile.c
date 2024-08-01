// WAP to calculate the area of a circle
#include <stdio.h>
#include <math.h>

int main() {
  float radius, area;
  printf("Enter the radius of the circle: ");
  if (scanf("%f", &radius) != 1) {
    printf("Invalid input.\n");
    return 1;
  }
  area = M_PI * pow(radius, 2);
  printf("The area of the circle is %.2f\n", area);
  return 0;
}