// Traversal, Insertion, Deletion, Searching, Sorthing
// strlen, strrev, strcpy, strcat, strupr, strlwr

#include <stdio.h>

void main(){
  int arr[3][3];
  int arr1[3][3];
  int arr2[3][3];

  printf("Enter the array element for array 1 : \n");
  for(int i=0; i<3; i++){
    for(int j=0; j<3; j++){
      scanf("%d", &arr[i][j]);
    }
  }

  printf("\nEnter the array element for array 2 : \n");
  for(int i=0; i<3; i++){
    for(int j=0; j<3; j++){
      scanf("%d", &arr1[i][j]);
    }
  }

  for(int i=0; i<3; i++){
    for(int j=0; j<3; j++){
      arr2[i][j] = arr[i][j] + arr1[i][j];
    }
  }

  printf("\nThe sum of two array is : \n");
  for(int i=0; i<3; i++){
    for(int j=0; j<3; j++){
      printf("%d\t", arr2[i][j]);
    }
    printf("\n");
  }

}
