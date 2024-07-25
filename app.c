// Traversal, Insertion, Deletion, Searching, Sorthing
// strlen, strrev, strcpy, strcat, strupr, strlwr

#include <stdio.h>
// 1 2 3 4 5
int main(){
 int arrSize = 5;
 int arr[arrSize];
 int pos, element;

 printf("Enter the arry element : ");
 for(int i=0; i<arrSize; i++){
   scanf("%d", &arr[i]);
 }
 
 printf("you have entered the following array elements : \n");
 for(int i=0; i<arrSize; i++){
   printf("%d\t", arr[i]);
 }
 
 printf("\nEnter the postion of element : ");
 scanf("%d", &pos);
 printf("Enter the element : ");
 scanf("%d", &element);

 if(pos < 0 || pos == arrSize){
   printf("Invalid position!\n");
   return 1;
 }

 for(int i=arrSize; i>=pos-1; i--){
   arr[i] = arr[i-1];
 }
 
 arr[pos-1] = element;
 arrSize++;

 for(int i=0; i<arrSize; i++){
    printf("%d\t", arr[i]);
 }

}
