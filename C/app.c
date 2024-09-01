// WAP  to  create  a  calculator  which  can  do  addition,  subtraction,
// multiplication, division, & modulus (remainder)

#include<stdio.h>

int main(){
  int num1, num2, operation;
  printf("Enter two numbers : ");
  scanf("%d %d", &num1, &num2);

  printf("1:\tAdd\n2:\tSubtract\n3:\tMultiply\n4:\tDivide\n5:\tModulus\nEnter your choice: ");

  scanf("%d", &operation);
  printf("Answer is : ");
  
  switch (operation){
    case 1 : printf("%d", num1+num2);
    break;
    case 2 : printf("%d", num1-num2);
    break;
    case 3 : printf("%d", num1*num2);
    break;
    case 4 : printf("%f", num1/num2);
    break;
    case 5 : printf("%d", num1%num2);
    break;
    default : printf("something went wrong.");
  }

  return 0;
}