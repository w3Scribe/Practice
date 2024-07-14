#include<stdio.h>

#define ROW 2
#define COL 3

int main(){
  int a[ROW][COL];
  int b[COL][ROW];

  printf("Enter the matrix : \n");
  for(int i=0; i<ROW; i++){
    for(int j=0; j<COL; j++){
      scanf("%d", &a[i][j]);
    }
  }

  for(int i=0; i<COL; i++){
    for(int j=0; j<ROW; j++){
      b[j][i] = a[j][i];
    }
  }                                                                                                                                                                                                         printf("The transpose of matrix : \n");                   
  for(int i=0; i<COL; i++){
    for(int j=0; j<ROW; j++){
      printf("%d\t",b[j][i]);
    }
    printf("\n");
  }                                                                                                                                                                                                        
  return 0;
}