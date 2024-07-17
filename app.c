// Traversal, Insertion, Deletion, Searching, Sorthing

#include<stdio.h>

void main(){
  int arr[20];
  int arrSize;
  int pos;
  
  ARRAY_SIZE : 
  printf("Enter the size of the array : ");
  scanf("%d", &arrSize);

  if(arrSize > sizeof(arr)/4){
    printf("invalid array size.\n");
    goto ARRAY_SIZE;
  }

  printf("\nEnter the array elements : \n");
  for(int i=0; i<arrSize; i++){
    scanf("%d", &arr[i]);
  }

  printf("\nyou have entered the following array : \n");
  for(int i=0; i<arrSize; i++){
    printf("%d\t", arr[i]);
  }

  printf("\nEnter the position of array element that you want to delete : ");
  scanf("%d", &pos);

  for(int i=pos-1; i<arrSize-1; i++){
    arr[i] = arr[i+1];
  }

  arrSize--;
  for(int i=0; i<arrSize; i++){
    printf("%d\t", arr[i]);
  }
  
}