// WAP to calculate the area of a circle
#include<stdio.h>
#include<math.h>

int main(){
 float radius, area;
 printf("Enter the radius of circle : ");
 scanf("%f", &radius);
 area = M_PI * pow(radius, 2);
 printf("The area of circle is %.2f", area);
 return 0;
} 