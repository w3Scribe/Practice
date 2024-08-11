#include<stdio.h>
#include<stdlib.h>

struct BT {
  int price;
  int day;
};

struct BT* bestTime(int *arr, const int SIZE){
  int i, j;

  struct BT Buy;
  Buy.price = arr[0];
  Buy.day = 0;

  for(i=1; i<SIZE; i++){
    if(Buy.price > arr[i]){
      Buy.price = arr[i];
      Buy.day = i+1;
    }
  }

  struct BT Sell;
  Sell.price = Buy.price;
  Sell.day = Buy.day;

  for(j=Sell.day; j<SIZE; j++){
    if(Sell.price < arr[j]){
      Sell.price = arr[j];
      Sell.day = j+1;
    }
  }

  struct BT* result = (struct BT*)malloc(sizeof(struct BT)*2);
  if(result != NULL){
    result[0] = Buy;
    result[1] = Sell;
  }

  return result;
}

void main(){
  int prices[] = {7,1,5,3,6,4};
  int size = sizeof(prices)/sizeof(prices[0]);
  struct BT* best = bestTime(prices, size);

  if (best != NULL){
    printf("Buy at price: %d on day: %d\n", best[0].price, best[0].day);
    printf("Sell at price: %d on day: %d\n", best[1].price, best[1].day);
    printf("Profit is %d", (best[1].price - best[0].price));
    free(best);
  }else{
    printf("Memory allocation failed\n");
  }

}