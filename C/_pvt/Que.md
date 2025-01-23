1. WAP to input two numbers from the keyboard and print their sum.
2. WAP to input two numbers from the keyboard and print their average
3. WAP to calculate the area of a circle
4. WAP to print the total seconds in a given time (hrs, min, sec’s)
5. WAP to convert temp. From Fahrenheit to centigrade. C=(F-32) \* 5/9
6. WAP to SWAP (interchange) two numbers
7. WAP to SWAP (interchange) 2 numbers without using third variable.
8. WAP to SWAP (interchange) three numbers
9. WAP to SWAP three numbers without using fourth variable
10. WAP to calculate the remainder of 2 numbers without using % operator.

11. WAP to calculate the sum of digits of a three digit number e.g. 125 is 8 (with or without loop)
12. WAP to merge three number. E.g. a= 1, b= 2, c = 8 is 128
13. WAP to print the reverse of a 3 digit number (with or without loop)
14. WAP to create a calculator which can do addition, subtraction,
    multiplication, division, & modulus (remainder)
15. WAP to check whether a number input through the keyboard is even or odd (with or without modulus operator)


# C Language Basic Cheatsheet

## 1. **Basic Structure of a C Program**
```c
#include <stdio.h> // Preprocessor directive

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

---

## 2. **Data Types**

### Primitive Data Types
| Type       | Size (bytes) | Description           |
|------------|--------------|-----------------------|
| `int`      | 2 or 4       | Integer numbers       |
| `float`    | 4            | Floating-point numbers|
| `double`   | 8            | Double precision float|
| `char`     | 1            | Single character      |
| `void`     | 0            | No value              |

### Modifiers
| Modifier    | Description                  |
|-------------|------------------------------|
| `short`     | Reduces integer size         |
| `long`      | Increases integer size       |
| `unsigned`  | Positive values only         |
| `signed`    | Default: allows negatives    |

---

## 3. **Control Flow**

### Conditional Statements
```c
if (condition) {
    // Code block
} else if (condition) {
    // Code block
} else {
    // Code block
}

switch (variable) {
    case value1:
        // Code block
        break;
    case value2:
        // Code block
        break;
    default:
        // Code block
}
```

### Loops
#### `for` Loop
```c
for (initialization; condition; increment) {
    // Code block
}
```

#### `while` Loop
```c
while (condition) {
    // Code block
}
```

#### `do-while` Loop
```c
do {
    // Code block
} while (condition);
```

---

## 4. **Input and Output**

### Input
```c
int num;
printf("Enter a number: ");
scanf("%d", &num); // Use & for address-of operator
```

### Output
```c
int num = 10;
printf("Number: %d\n", num);
```

| Format Specifier | Description          |
|------------------|----------------------|
| `%d`             | Integer             |
| `%f`             | Float               |
| `%c`             | Character           |
| `%s`             | String              |
| `%lf`            | Double              |

---

## 5. **Functions**
```c
// Function declaration
return_type function_name(parameters);

// Function definition
return_type function_name(parameters) {
    // Code block
    return value;
}

// Example
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("Sum: %d\n", result);
    return 0;
}
```

---

## 6. **Pointers**
```c
int x = 10;
int *ptr = &x; // Pointer to x

printf("Value of x: %d\n", x);
printf("Address of x: %p\n", ptr);
printf("Value at address: %d\n", *ptr); // Dereference pointer
```

---

## 7. **Arrays**
```c
// Declaration and Initialization
int arr[5] = {1, 2, 3, 4, 5};

// Accessing elements
printf("First element: %d\n", arr[0]);
```

---

## 8. **Strings**
```c
char str[20] = "Hello";
printf("String: %s\n", str);

// Input strings
printf("Enter a string: ");
scanf("%s", str); // Avoid spaces in input
```

---

## 9. **Structs**
```c
struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {10, 20};
    printf("x: %d, y: %d\n", p1.x, p1.y);
    return 0;
}
```

---

## 10. **Common Libraries**
| Library     | Functions                            |
|-------------|-------------------------------------|
| `<stdio.h>` | Input/output (printf, scanf)        |
| `<stdlib.h>`| Memory management, conversions      |
| `<string.h>`| String operations                   |
| `<math.h>`  | Math functions (sqrt, pow, etc.)    |
| `<ctype.h>` | Character operations (toupper, etc.)|

---

## 11. **Preprocessor Directives**
```c
#define PI 3.14 // Constant definition
#include <header.h> // Include header file
#ifdef DEBUG // Conditional compilation
    printf("Debug mode\n");
#endif
```

---

## 12. **File Handling**
```c
FILE *file;
file = fopen("example.txt", "w"); // Open file in write mode

if (file) {
    fprintf(file, "Hello, File!\n"); // Write to file
    fclose(file); // Close file
}
```

---

## 13. **Memory Management**
```c
#include <stdlib.h>

int *ptr = malloc(5 * sizeof(int)); // Allocate memory
if (ptr) {
    free(ptr); // Free memory
}
```

