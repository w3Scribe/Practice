// two sum
#include<stdio.h>
#include<stdlib.h>

int* twoSum(int* nums, int numsSize, int target) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                int* result = (int*)malloc(2 * sizeof(int));
                if (result == NULL) {
                    return NULL; // Memory allocation failed
                }
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    return NULL; // No solution found
}

int main(){
  int arr[] = {1,2,3};
  int *indx = twoSum(arr, 7, 4);

  if(indx != NULL){
    printf("%d %d", indx[0], indx[1]);
    free(indx);
  } else{
    printf("something went wrong!");
  }

  return 0;
}