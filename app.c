// Traversal, Insertion, Deletion, Searching, Sorthing
#include<stdio.h>

void main(){
  int arr[50];
  int arrSize;
  int pos, number;
  
  printf("Enter the length : ");
  scanf("%d", &arrSize);

  printf("Enter the array elements :\n");
  for(int i=0; i<arrSize; i++){
    scanf("%d",&arr[i]);
  }

  printf("\nYou have entered the following array : \n");
  for(int i=0; i<arrSize; i++){
    printf("%d ",arr[i]);
  }

  printf("\nEnter the position of element that you want to insert : ");
  scanf("%d", &pos);

  printf("Enter the element that you want to insert : ");
  scanf("%d", &number);

  for(int i=arrSize; i>=pos; i--){
    arr[i] = arr[i-1];
  }

  arr[pos] = number;
  arrSize +=1;

  for(int i=0; i<arrSize; i++){
    printf("%d ",arr[i]);
  }

}