#include<stdio.h>

int main(){
  int const row = 3;
  int const col = 3;
  int arr[row][col];
  int rowSum = 0;
  int colSum = 0;

  printf("Enter the number of rows and columns: \n");
  for(int i=0; i<row; i++){
    for(int j=0; j<col; j++){
      scanf("%d", &arr[i][j]);
    }
  }

  printf("\nYou have entered the matrix : \n");
  for(int i=0; i<row; i++){
    for(int j=0; j<col; j++){
      printf("%d\t", arr[i][j]);
    }
    printf("\n");
  }

  for(int i=0; i<row; i++){
    for(int j=0; j<col; j++){
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }
  }

  printf("\nThe sum of rows is : %d", rowSum);
  printf("\nThe sum of cols is : %d", colSum);

  return 0;
}