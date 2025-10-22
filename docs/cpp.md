# C++ by Example: A Beginner's Guide

## Introduction
C++ is a versatile, high-performance programming language that supports multiple programming paradigms, making it ideal for a variety of applications. As a beginner, you'll learn to write clear, efficient code using:
- Procedural Programming: Writing step-by-step instructions.
- Object-Oriented Programming: Encapsulating data and behaviors into objects.
- Generic Programming: Creating reusable code with templates.

C++ is popular in system development, game design, and other performance-critical areas thanks to its rich feature set and expansive standard library.

### Key Features of C++
- **High Performance**: Provides low-level control over memory and system resources, essential for performance-intensive applications.
- **Object-Oriented Programming**: Supports fundamental concepts like encapsulation, inheritance, and polymorphism to simplify complex problems.
- **Generic Programming**: Enables writing type-safe, reusable code with templates.
- **Standard Template Library (STL)**: Offers a collection of ready-to-use classes and functions for common data structures and algorithms.
- **Cross-Platform**: Allows you to write code that compiles across different operating systems with minimal modifications.

Embark on your C++ journey to build efficient, scalable, and robust applications.

## Table of Contents
1. [Basics](#basics)
   - [Hello World](#hello-world)
   - [Syntax](#syntax)
   - [Compilation](#compilation)
2. [Data Types & Variables](#data-types--variables)
3. [Control Structures](#control-structures)
   - [if/else](#ifelse)
   - [Loops](#loops)
   - [Switch](#switch)
4. [Functions & Overloading](#functions--overloading)
5. [Classes & Objects](#classes--objects)
6. [Inheritance & Polymorphism](#inheritance--polymorphism)
7. [Pointers & References](#pointers--references)
8. [Memory Management](#memory-management)
   - [Manual Memory Management](#manual-memory-management)
   - [Smart Pointers](#smart-pointers)
   - [RAII Principle](#raii-principle)
9. [Templates & Generics](#templates--generics)
10. [STL (Standard Template Library)](#stl-standard-template-library)
11. [Modern C++ Features](#modern-cpp-features)
    - [Move Semantics](#move-semantics)
    - [Lambda Functions](#lambda-functions)
    - [constexpr and Compile-Time Computation](#constexpr-and-compile-time-computation)
    - [Modern STL Utilities](#modern-stl-utilities)
12. [Exception Handling](#exception-handling)
    - [Basic Exception Handling](#basic-exception-handling)
    - [Exception Safety](#exception-safety)
    - [noexcept Specifier](#noexcept-specifier)
13. [Concurrency](#concurrency)
    - [std::thread Basics](#stdthread-basics)
    - [Synchronization Primitives](#synchronization-primitives)
14. [File I/O](#file-io)
15. [Code Organization](#code-organization)
    - [Header and Source Files](#header-and-source-files)
    - [Project Management with CMake](#project-management-with-cmake)
16. [Testing and Quality](#testing-and-quality)
    - [Unit Testing](#unit-testing)
    - [Static Analysis](#static-analysis)
17. [Advanced Object-Oriented Practices](#advanced-object-oriented-practices)
    - [Rule of Three/Five/Zero](#rule-of-threefivezero)
    - [Virtual Destructors](#virtual-destructors)
18. [Advanced Topics](#advanced-topics)

---

## Basics

### Hello World
The "Hello World" program demonstrates the basic structure of a C++ program and how to output text to the console.

```cpp
#include <iostream>  // Include the input/output stream library

int main() {
    // Output "Hello, World!" to the console
    std::cout << "Hello, World!" << std::endl;

    return 0;  // Indicate successful program execution
}
```

**Compilation and Execution:**
```bash
$ g++ hello.cpp -o hello  # Compile the program
$ ./hello                 # Run the program
Hello, World!
```

**Explanation:**
- `#include <iostream>`: Includes the input/output stream library
- `int main()`: The entry point of every C++ program
- `std::cout`: Standard output stream for console output
- `std::endl`: Ends the line and flushes the output buffer
- `return 0`: Indicates successful program execution

### Syntax
C++ syntax builds upon C with additional features for object-oriented and generic programming:

```cpp
#include <iostream>

int main() {
    // Modern initialization with curly braces prevents narrowing conversions
    int x{5};  
    
    // Output the value of x to the console
    std::cout << "The value of x is: " << x << std::endl;
    
    return 0;  // Indicate successful execution
}
```

**Compilation and Execution:**
```bash
$ g++ syntax.cpp -o syntax
$ ./syntax
The value of x is: 5
```

### Compilation
To compile and run a C++ program, follow these steps:

1. Save your code in a file (e.g., `app.cpp`)
2. Open a terminal and navigate to the file's directory
3. Compile the program:
   ```bash
   g++ app.cpp -o app
   ```
4. Run the compiled program:
   ```bash
   ./app
   ```

---

## Data Types & Variables

C++ supports various data types for different kinds of values. Variables store data that can be used throughout your program.

### Example:
```cpp
#include <iostream>
#include <string>

int main() {
    // Integer type - stores whole numbers
    int age{25};
    
    // Float type - stores decimal numbers (note the 'f' suffix)
    float height{5.9f};
    
    // Character type - stores a single character (note the single quotes)
    char grade{'A'};
    
    // String type - stores text (requires #include <string>)
    std::string name{"John"};

    // Display all information with descriptive labels
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << " years" << std::endl;
    std::cout << "Height: " << height << " feet" << std::endl;
    std::cout << "Grade: " << grade << std::endl;

    return 0;
}
```

**Output:**
```
Name: John
Age: 25 years
Height: 5.9 feet
Grade: A
```

**Key Points:**
- Use `{}` for initialization (modern C++ practice)
- Different data types store different kinds of values
- The `std::string` type requires `#include <string>`

---

## Control Structures

### if/else
Control the flow of your program using conditional statements to make decisions.

```cpp
#include <iostream>

int main() {
    // Initialize a number to test
    int number{10};

    // Check if number is positive
    if (number > 0) {
        // This code runs only if number is greater than 0
        std::cout << "The number is positive." << std::endl;
    } else if (number < 0) {
        // This code runs only if number is less than 0
        std::cout << "The number is negative." << std::endl;
    } else {
        // This code runs only if number equals 0
        std::cout << "The number is zero." << std::endl;
    }

    return 0;
}
```

**Output:**
```
The number is positive.
```

**Explanation:**
- `if`: Executes a block of code if the condition is true
- `else if`: Provides additional conditions to check
- `else`: Executes when no conditions are true

---

## Functions & Overloading

Functions are reusable blocks of code that perform specific tasks. They help organize code and eliminate repetition.

### Example: Basic Function
```cpp
#include <iostream>

// Function declaration: takes two integers and returns their sum
int add(int a, int b) {
    // Add the two parameters and return the result
    int result{a + b};
    return result;
}

int main() {
    // Declare and initialize two variables
    int x{5};
    int y{10};
    
    // Call the add function and store the result
    int sum{add(x, y)};
    
    // Display the result
    std::cout << "The sum of " << x << " and " << y << " is: " << sum << std::endl;
    
    return 0;
}
```

**Output:**
```
The sum of 5 and 10 is: 15
```

**Function Components:**
- **Return Type**: What the function gives back (`int` in this example)
- **Name**: Identifier used to call the function (`add` in this example)
- **Parameters**: Input values the function works with (`int a, int b` in this example)
- **Body**: Code that runs when the function is called (inside the `{}`)

### Function Overloading
C++ allows multiple functions with the same name but different parameter types or counts.

```cpp
#include <iostream>

// Version for integers - calculates square of an integer
int square(int x) {
    return x * x;  // Multiply integer by itself
}

// Version for doubles - calculates square of a double
double square(double x) {
    return x * x;  // Multiply double by itself
}

int main() {
    // The compiler automatically chooses the right function based on argument type
    std::cout << "Square of 5 (int): " << square(5) << std::endl;
    std::cout << "Square of 5.5 (double): " << square(5.5) << std::endl;
    
    return 0;
}
```

**Output:**
```
Square of 5 (int): 25
Square of 5.5 (double): 30.25
```

**Key Benefits:**
- Intuitive function names (use same name for similar operations)
- Type safety (compiler chooses correct function)
- Code readability (clearer than having different names for similar operations)

---

## Classes & Objects

Classes are blueprints for creating objects that combine data (attributes) and functions (methods).

### Example: Basic Class
```cpp
#include <iostream>
#include <string>

// Define a Car class to represent automobiles
class Car {
private:
    // Private members (data) - only accessible within class methods
    std::string brand;  // Car's manufacturer
    int year;           // Year of manufacture

public:
    // Constructor - initializes object when created
    Car(std::string b, int y) : brand{b}, year{y} {
        // Modern initialization syntax using member initializer list
    }

    // Public method to display car information
    void display() {
        std::cout << "Car: " << brand << " (" << year << ")" << std::endl;
    }
    
    // Getter methods - provide controlled access to private data
    std::string getBrand() const {
        return brand;
    }
    
    int getYear() const {
        return year;
    }
};

int main() {
    // Create a Car object
    Car myCar{"Toyota", 2020};
    
    // Use the display method to show car details
    myCar.display();
    
    // Use getter methods to access specific properties
    std::cout << "Brand: " << myCar.getBrand() << std::endl;
    std::cout << "Year: " << myCar.getYear() << std::endl;
    
    return 0;
}
```

**Output:**
```
Car: Toyota (2020)
Brand: Toyota
Year: 2020
```

**Explanation:**
- `class Car`: Defines a class named `Car`.
- `private`: Members that cannot be accessed directly from outside the class.
- `public`: Members that can be accessed from outside the class.
- `Car(std::string b, int y)`: A constructor to initialize the object.
- `void display()`: A method to display the car’s details.

---

## Inheritance & Polymorphism

Inheritance allows a class to inherit properties and behavior from another class. Polymorphism enables using a single interface for different underlying types.

### Example: Inheritance
```cpp
#include <iostream>
#include <string>

// Base class (parent)
class Animal {
protected:
    // Protected members - accessible in this class and derived classes
    std::string name;

public:
    // Constructor initializes the animal's name
    Animal(std::string n) : name{n} {}
    
    // Virtual function - can be overridden by derived classes
    virtual void speak() {
        std::cout << name << " makes a sound." << std::endl;
    }
    
    // Destructor should be virtual when inheritance is used
    virtual ~Animal() {
        std::cout << "Animal " << name << " destroyed." << std::endl;
    }
};

// Derived class (child) - inherits from Animal
class Dog : public Animal {
public:
    // Constructor calls the parent constructor with the name
    Dog(std::string n) : Animal{n} {}
    
    // Override the speak method for Dog-specific behavior
    void speak() override {
        std::cout << name << " barks: Woof! Woof!" << std::endl;
    }
    
    // Additional method specific to Dog
    void fetch() {
        std::cout << name << " fetches the ball." << std::endl;
    }
};

// Another derived class
class Cat : public Animal {
public:
    // Constructor calls the parent constructor
    Cat(std::string n) : Animal{n} {}
    
    // Override the speak method for Cat-specific behavior
    void speak() override {
        std::cout << name << " meows: Meow!" << std::endl;
    }
};

int main() {
    // Create objects of different types
    Animal genericAnimal{"Generic Animal"};
    Dog dog{"Buddy"};
    Cat cat{"Whiskers"};
    
    // Call the speak method on each object
    std::cout << "--- Direct object calls:" << std::endl;
    genericAnimal.speak();  // Animal version
    dog.speak();           // Dog version
    cat.speak();           // Cat version
    
    // Polymorphism through base class pointers
    std::cout << "\n--- Polymorphic calls:" << std::endl;
    Animal* animals[3] = {&genericAnimal, &dog, &cat};
    
    for (int i{0}; i < 3; ++i) {
        animals[i]->speak();  // Calls appropriate version based on actual object type
    }
    
    return 0;
}
```

**Output:**
```
--- Direct object calls:
Generic Animal makes a sound.
Buddy barks: Woof! Woof!
Whiskers meows: Meow!

--- Polymorphic calls:
Generic Animal makes a sound.
Buddy barks: Woof! Woof!
Whiskers meows: Meow!
```

**Key Concepts:**
- **Base Class**: The parent class that provides common functionality
- **Derived Class**: A child class that inherits and can extend or modify behavior
- **virtual**: Keyword that enables polymorphic behavior
- **override**: Clarifies that a method is intended to override a base class method
- **Polymorphism**: Ability to process objects differently based on their data type

---

## Pointers & References

Pointers and references provide ways to work with memory addresses, enabling powerful programming techniques.

### Example: Pointers
```cpp
#include <iostream>

int main() {
    // Declare and initialize a variable
    int number{42};
    
    // Declare a pointer and make it point to 'number'
    int* ptr{&number};  // & is the "address-of" operator
    
    // Display information about the variable and pointer
    std::cout << "Variable information:" << std::endl;
    std::cout << "- Value of number: " << number << std::endl;
    std::cout << "- Address of number: " << &number << std::endl;
    
    std::cout << "\nPointer information:" << std::endl;
    std::cout << "- Value stored in ptr (address): " << ptr << std::endl;
    std::cout << "- Value pointed to by ptr: " << *ptr << std::endl;  // * is the dereference operator
    std::cout << "- Address of ptr itself: " << &ptr << std::endl;
    
    // Modify the value through the pointer
    *ptr = 100;
    std::cout << "\nAfter modification through pointer:" << std::endl;
    std::cout << "- Value of number: " << number << std::endl;
    std::cout << "- Value pointed to by ptr: " << *ptr << std::endl;
    
    return 0;
}
```

**Output:**
```
Variable information:
- Value of number: 42
- Address of number: 0x7ffee4b3c8ac

Pointer information:
- Value stored in ptr (address): 0x7ffee4b3c8ac
- Value pointed to by ptr: 42
- Address of ptr itself: 0x7ffee4b3c8a0

After modification through pointer:
- Value of number: 100
- Value pointed to by ptr: 100
```

**Pointer Concepts:**
- **Declaration**: `int* ptr;` (a pointer to an integer)
- **Address-of operator** (`&`): Gets the memory address of a variable
- **Dereference operator** (`*`): Accesses the value at an address

### Example: References
```cpp
#include <iostream>

int main() {
    // Declare and initialize a variable
    int number{42};
    
    // Declare a reference to 'number'
    int& ref{number};  // Reference must be initialized when declared
    
    // Display original values
    std::cout << "Original values:" << std::endl;
    std::cout << "- number: " << number << std::endl;
    std::cout << "- ref: " << ref << std::endl;
    
    // Modify through the reference
    ref = 100;
    std::cout << "\nAfter modifying through reference:" << std::endl;
    std::cout << "- number: " << number << std::endl;
    std::cout << "- ref: " << ref << std::endl;
    
    // Modify the original variable
    number = 200;
    std::cout << "\nAfter modifying original variable:" << std::endl;
    std::cout << "- number: " << number << std::endl;
    std::cout << "- ref: " << ref << std::endl;
    
    return 0;
}
```

**Output:**
```
Original values:
- number: 42
- ref: 42

After modifying through reference:
- number: 100
- ref: 100

After modifying original variable:
- number: 200
- ref: 200
```

**Reference Concepts:**
- References are aliases (alternative names) for existing variables
- Must be initialized when declared
- Cannot be reassigned to refer to different variables
- No dereference operator needed to access the value

---

## Memory Management

C++ gives you control over memory allocation and deallocation using `new` and `delete` operators.

### Example: Dynamic Memory Allocation
```cpp
#include <iostream>

int main() {
    // Dynamically allocate a single integer
    int* singleInt{new int{42}};
    
    // Access and modify the dynamically allocated integer
    std::cout << "Dynamically allocated integer: " << *singleInt << std::endl;
    *singleInt = 100;
    std::cout << "Modified value: " << *singleInt << std::endl;
    
    // Free the memory when done (IMPORTANT!)
    delete singleInt;
    singleInt = nullptr;  // Good practice: set to nullptr after deletion
    
    // Dynamically allocate an array of integers
    int size{5};
    int* numbers{new int[size]};
    
    // Initialize the array elements
    for (int i{0}; i < size; ++i) {
        numbers[i] = i * 10;
    }
    
    // Display the array contents
    std::cout << "\nDynamically allocated array:" << std::endl;
    for (int i{0}; i < size; ++i) {
        std::cout << "numbers[" << i << "] = " << numbers[i] << std::endl;
    }
    
    // Free the array memory
    delete[] numbers;  // Note: use delete[] for arrays
    numbers = nullptr;
    
    return 0;
}
```

**Output:**
```
Dynamically allocated integer: 42
Modified value: 100

Dynamically allocated array:
numbers[0] = 0
numbers[1] = 10
numbers[2] = 20
numbers[3] = 30
numbers[4] = 40
```

**Memory Management Concepts:**
- `new`: Allocates memory on the heap (returns a pointer)
- `delete`: Deallocates memory allocated with `new`
- `new[]`: Allocates an array on the heap
- `delete[]`: Deallocates an array allocated with `new[]`
- Setting pointers to `nullptr` after deletion helps prevent accessing freed memory

### Smart Pointers
Smart pointers provide automatic memory management by wrapping raw pointers in classes that handle allocation and deallocation.

```cpp
#include <iostream>
#include <memory>  // Required for smart pointers

int main() {
    // unique_ptr - exclusive ownership
    // Only one unique_ptr can own the resource at a time
    std::cout << "=== unique_ptr Example ===" << std::endl;
    {
        // Create a unique_ptr to an integer
        std::unique_ptr<int> uniqPtr{new int{100}};
        
        // Access the value using the dereference operator (*)
        std::cout << "Value: " << *uniqPtr << std::endl;
        
        // Modify the value
        *uniqPtr = 200;
        std::cout << "Modified value: " << *uniqPtr << std::endl;
        
        // No need to delete - memory will be freed automatically
        // when uniqPtr goes out of scope
    }
    std::cout << "unique_ptr has been destroyed automatically" << std::endl;
    
    // shared_ptr - shared ownership
    // Multiple shared_ptr objects can own the same resource
    std::cout << "\n=== shared_ptr Example ===" << std::endl;
    {
        // Create a shared_ptr to an integer
        std::shared_ptr<int> sharedPtr1{new int{300}};
        
        // Create another shared_ptr that shares ownership
        std::shared_ptr<int> sharedPtr2 = sharedPtr1;
        
        // Both pointers point to the same object
        std::cout << "sharedPtr1 value: " << *sharedPtr1 << std::endl;
        std::cout << "sharedPtr2 value: " << *sharedPtr2 << std::endl;
        
        // Modify through one pointer affects the shared object
        *sharedPtr2 = 400;
        std::cout << "After modification:" << std::endl;
        std::cout << "sharedPtr1 value: " << *sharedPtr1 << std::endl;
        std::cout << "sharedPtr2 value: " << *sharedPtr2 << std::endl;
        
        // Check reference count (how many shared_ptr objects own the resource)
        std::cout << "Reference count: " << sharedPtr1.use_count() << std::endl;
        
        // Resource will be freed when the last shared_ptr is destroyed
    }
    std::cout << "shared_ptrs have been destroyed automatically" << std::endl;
    
    // Modern way to create smart pointers
    std::cout << "\n=== Modern Creation with make_unique and make_shared ===" << std::endl;
    {
        // Safer way to create unique_ptr (C++14 and later)
        auto modernUniqPtr = std::make_unique<int>(500);
        std::cout << "make_unique value: " << *modernUniqPtr << std::endl;
        
        // Safer way to create shared_ptr
        auto modernSharedPtr = std::make_shared<int>(600);
        std::cout << "make_shared value: " << *modernSharedPtr << std::endl;
    }
    
    return 0;
}
```

**Output:**
```
=== unique_ptr Example ===
Value: 100
Modified value: 200
unique_ptr has been destroyed automatically

=== shared_ptr Example ===
sharedPtr1 value: 300
sharedPtr2 value: 300
After modification:
sharedPtr1 value: 400
sharedPtr2 value: 400
Reference count: 2
shared_ptrs have been destroyed automatically

=== Modern Creation with make_unique and make_shared ===
make_unique value: 500
make_shared value: 600
```

**Smart Pointer Benefits:**
- Automatic memory management (no manual delete required)
- Exception safety (memory freed even when exceptions occur)
- Clear ownership semantics
- Prevention of memory leaks

### RAII Principle
Resource Acquisition Is Initialization (RAII) is a C++ programming technique where resource management is tied to object lifetime.

```cpp
#include <iostream>
#include <fstream>  // For file handling
#include <mutex>    // For mutex example

// RAII example for file handling
class FileHandler {
private:
    std::ofstream file;  // The resource this class manages

public:
    // Constructor acquires the resource
    FileHandler(const std::string& filename) {
        file.open(filename);
        if (!file.is_open()) {
            throw std::runtime_error("Failed to open file: " + filename);
        }
        std::cout << "File opened successfully" << std::endl;
    }
    
    // Write to the file
    void write(const std::string& text) {
        if (file.is_open()) {
            file << text << std::endl;
        }
    }
    
    // Destructor releases the resource
    ~FileHandler() {
        if (file.is_open()) {
            file.close();
            std::cout << "File closed automatically" << std::endl;
        }
    }
};

// RAII example for mutex locking
class LockGuard {
private:
    std::mutex& mtx;  // Reference to the mutex to lock/unlock

public:
    // Constructor acquires the lock
    explicit LockGuard(std::mutex& m) : mtx(m) {
        mtx.lock();
        std::cout << "Mutex locked" << std::endl;
    }
    
    // Destructor releases the lock
    ~LockGuard() {
        mtx.unlock();
        std::cout << "Mutex unlocked automatically" << std::endl;
    }
    
    // Prevent copying and assignment
    LockGuard(const LockGuard&) = delete;
    LockGuard& operator=(const LockGuard&) = delete;
};

int main() {
    try {
        // Example 1: File handling with RAII
        std::cout << "--- File Handling with RAII ---" << std::endl;
        {
            // Create a FileHandler (resource acquisition)
            FileHandler file("example.txt");
            
            // Use the resource
            file.write("Hello, RAII!");
            file.write("This file will be closed automatically.");
            
            // No need to explicitly close the file
            // It will be closed when the FileHandler goes out of scope
        }
        // File is automatically closed here when FileHandler is destroyed
        
        // Example 2: Mutex locking with RAII
        std::cout << "\n--- Mutex Locking with RAII ---" << std::endl;
        std::mutex mtx;
        {
            // Lock the mutex (resource acquisition)
            LockGuard lock(mtx);
            
            // Critical section - protected by the mutex
            std::cout << "Executing critical section code..." << std::endl;
            
            // No need to explicitly unlock the mutex
            // It will be unlocked when the LockGuard goes out of scope
        }
        // Mutex is automatically unlocked here when LockGuard is destroyed
        
    } catch (const std::exception& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
    
    return 0;
}
```

**Output:**
```
--- File Handling with RAII ---
File opened successfully
File closed automatically

--- Mutex Locking with RAII ---
Mutex locked
Executing critical section code...
Mutex unlocked automatically
```

**RAII Benefits:**
- Automatic resource management (files, memory, locks, etc.)
- Exception safety (resources are released even when exceptions occur)
- Cleaner code (no explicit release/cleanup code needed)
- Reduced risk of resource leaks

---

## Templates & Generics

Templates allow you to write generic, type-independent code that works with multiple data types.

### Example: Function Template
```cpp
#include <iostream>
#include <string>

// Template function that finds the maximum of two values
// Works with any type that supports the > operator
template <typename T>
T findMax(T a, T b) {
    // Return the larger value using conditional operator
    return (a > b) ? a : b;
}

int main() {
    // Test with integers
    int int1{42};
    int int2{57};
    std::cout << "Max integer: " << findMax(int1, int2) << std::endl;
    
    // Test with floating-point numbers
    double d1{3.14};
    double d2{2.71};
    std::cout << "Max double: " << findMax(d1, d2) << std::endl;
    
    // Test with strings (compares lexicographically)
    std::string s1{"apple"};
    std::string s2{"orange"};
    std::cout << "Max string: " << findMax(s1, s2) << std::endl;
    
    return 0;
}
```

**Output:**
```
Max integer: 57
Max double: 3.14
Max string: orange
```

**Template Concepts:**
- **Type Parameter**: The placeholder (`T` in this example) that represents any type
- **Template Instantiation**: The compiler generates specific versions of the template for each type used
- Templates enable type-safe generic programming

### Example: Class Template
```cpp
#include <iostream>
#include <string>

// Template class for storing a pair of values of the same type
template <typename T>
class Pair {
private:
    T first;
    T second;

public:
    // Constructor to initialize both values
    Pair(T a, T b) : first{a}, second{b} {}
    
    // Getters
    T getFirst() const { return first; }
    T getSecond() const { return second; }
    
    // Returns the sum (must work with type T)
    T getSum() const { return first + second; }
    
    // Display the pair
    void display() const {
        std::cout << "(" << first << ", " << second << ")" << std::endl;
    }
};

int main() {
    // Create a pair of integers
    Pair<int> intPair{10, 20};
    std::cout << "Integer pair: ";
    intPair.display();
    std::cout << "Sum: " << intPair.getSum() << std::endl;
    
    // Create a pair of doubles
    Pair<double> doublePair{3.14, 2.71};
    std::cout << "\nDouble pair: ";
    doublePair.display();
    std::cout << "Sum: " << doublePair.getSum() << std::endl;
    
    // Create a pair of strings
    Pair<std::string> stringPair{"Hello", "World"};
    std::cout << "\nString pair: ";
    stringPair.display();
    std::cout << "Concatenation: " << stringPair.getSum() << std::endl;
    
    return 0;
}
```

**Output:**
```
Integer pair: (10, 20)
Sum: 30

Double pair: (3.14, 2.71)
Sum: 5.85

String pair: (Hello, World)
Concatenation: HelloWorld
```

**Class Template Benefits:**
- Create type-safe container classes
- Reuse algorithms and data structures for different types
- Compiler ensures type correctness

---

## STL (Standard Template Library)

The STL provides a collection of ready-to-use template classes and algorithms.

### Example: Using `std::vector`
```cpp
#include <iostream>
#include <vector>  // Include the vector header

int main() {
    // Create a vector of integers (dynamic array)
    std::vector<int> numbers{1, 2, 3, 4, 5};
    
    // Display the initial vector
    std::cout << "Initial vector contents:" << std::endl;
    for (int i{0}; i < numbers.size(); ++i) {
        std::cout << "numbers[" << i << "] = " << numbers[i] << std::endl;
    }
    
    // Add more elements to the end
    numbers.push_back(6);
    numbers.push_back(7);
    
    // Display using range-based for loop (modern C++)
    std::cout << "\nAfter adding elements:" << std::endl;
    for (const int& num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Get vector size and capacity
    std::cout << "\nVector size: " << numbers.size() << std::endl;
    std::cout << "Vector capacity: " << numbers.capacity() << std::endl;
    
    // Access elements
    std::cout << "\nFirst element: " << numbers.front() << std::endl;
    std::cout << "Last element: " << numbers.back() << std::endl;
    
    // Remove the last element
    numbers.pop_back();
    
    // Check if vector is empty
    std::cout << "\nIs vector empty? " << (numbers.empty() ? "Yes" : "No") << std::endl;
    
    return 0;
}
```

**Output:**
```
Initial vector contents:
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5

After adding elements:
1 2 3 4 5 6 7

Vector size: 7
Vector capacity: 10

First element: 1
Last element: 7

Is vector empty? No
```

**Vector Benefits:**
- Dynamic size (grows and shrinks as needed)
- Random access (constant time)
- Many built-in methods for common operations

### Example: Using `std::map`
```cpp
#include <iostream>
#include <map>
#include <string>

int main() {
    // Create a map to store name-age pairs
    std::map<std::string, int> ageMap;
    
    // Insert elements (key-value pairs)
    ageMap["Alice"] = 25;
    ageMap["Bob"] = 30;
    ageMap["Charlie"] = 22;
    
    // Display all entries
    std::cout << "Age map contents:" << std::endl;
    for (const auto& entry : ageMap) {
        std::cout << entry.first << " is " << entry.second << " years old." << std::endl;
    }
    
    // Check if a key exists and access its value
    std::string name{"Bob"};
    if (ageMap.find(name) != ageMap.end()) {
        std::cout << "\nFound " << name << "'s age: " << ageMap[name] << std::endl;
    } else {
        std::cout << "\n" << name << " not found in the map." << std::endl;
    }
    
    // Add a new entry
    ageMap["David"] = 35;
    
    // Get the size of the map
    std::cout << "\nMap contains " << ageMap.size() << " entries." << std::endl;
    
    // Remove an entry
    ageMap.erase("Charlie");
    std::cout << "After removing Charlie, map contains " << ageMap.size() << " entries." << std::endl;
    
    return 0;
}
```

**Output:**
```
Age map contents:
Alice is 25 years old.
Bob is 30 years old.
Charlie is 22 years old.

Found Bob's age: 30

Map contains 4 entries.
After removing Charlie, map contains 3 entries.
```

**Map Benefits:**
- Stores key-value pairs
- Keys are automatically sorted
- Fast lookups by key
- No duplicate keys allowed

---

## Exception Handling

Exception handling provides a structured way to detect and handle runtime errors.

### Example: Basic Exception Handling
```cpp
#include <iostream>
#include <stdexcept>  // For standard exception classes

// Function that may throw an exception
double divide(double a, double b) {
    // Check for division by zero
    if (b == 0.0) {
        // Throw an exception if b is zero
        throw std::runtime_error("Math error: Division by zero is not allowed");
    }
    
    // If no exception, return the result
    return a / b;
}

int main() {
    // Variables for input
    double numerator{10.0};
    double denominator{0.0};  // This will cause an exception
    
    // Try block contains code that might throw exceptions
    try {
        std::cout << "Attempting to divide " << numerator << " by " << denominator << std::endl;
        
        // This might throw an exception
        double result{divide(numerator, denominator)};
        
        // This line only executes if no exception was thrown
        std::cout << "Result: " << result << std::endl;
    }
    // Catch block handles the exception
    catch (const std::runtime_error& e) {
        // Handle the specific exception
        std::cout << "Exception caught: " << e.what() << std::endl;
        std::cout << "Please use a non-zero denominator." << std::endl;
    }
    // Generic catch block for any other exceptions
    catch (...) {
        std::cout << "Unknown exception occurred" << std::endl;
    }
    
    // Program continues after exception handling
    std::cout << "Program continues executing..." << std::endl;
    
    return 0;
}
```

**Output:**
```
Attempting to divide 10 by 0
Exception caught: Math error: Division by zero is not allowed
Please use a non-zero denominator.
Program continues executing...
```

**Exception Handling Concepts:**
- `try`: Defines a block of code to monitor for exceptions
- `throw`: Signals that an exception has occurred
- `catch`: Handles exceptions when they occur
- `std::exception`: Base class for standard exceptions
- `e.what()`: Returns a description of the exception

---

### Exception Safety
Exception safety refers to how well your code handles exceptions and maintains program invariants when they occur.

```cpp
#include <iostream>
#include <memory>
#include <vector>
#include <stdexcept>

// Different levels of exception safety
class ExceptionSafetyDemo {
private:
    int* rawPtr;                // Raw pointer - unsafe if an exception occurs during construction
    std::unique_ptr<int> safePtr; // Smart pointer - exception safe
    std::vector<int> data;      // STL container - exception safe

public:
    // Constructor that demonstrates different levels of exception safety
    ExceptionSafetyDemo(int size) : rawPtr(nullptr) {
        std::cout << "Creating ExceptionSafetyDemo object..." << std::endl;
        
        // Unsafe: If an exception occurs after this allocation but before the end of constructor
        // this memory will leak (no destructor called for incomplete objects)
        rawPtr = new int{42};
        std::cout << "- Allocated raw pointer" << std::endl;
        
        // Safe: If an exception occurs, the unique_ptr's destructor still runs and frees memory
        safePtr = std::make_unique<int>(100);
        std::cout << "- Allocated smart pointer" << std::endl;
        
        // What if we want to simulate an exception during construction?
        if (size <= 0) {
            // Clean up the raw pointer manually before throwing
            delete rawPtr;
            throw std::invalid_argument("Size must be positive");
        }
        
        // Safe: std::vector handles its own memory and cleanup if an exception occurs
        data.reserve(size);  // Reserve space for efficiency
        for (int i = 0; i < size; ++i) {
            data.push_back(i);
        }
        std::cout << "- Populated vector with " << size << " elements" << std::endl;
        
        std::cout << "Construction complete!" << std::endl;
    }
    
    // Destructor
    ~ExceptionSafetyDemo() {
        std::cout << "Destroying ExceptionSafetyDemo object..." << std::endl;
        delete rawPtr;  // Smart pointers and vector clean up automatically
    }
    
    // Function with basic exception guarantee
    // (If an exception occurs, no resources are leaked, but state may be modified)
    void basicGuarantee(int value) {
        std::cout << "Function with basic exception guarantee..." << std::endl;
        
        // Modify state
        data.push_back(value);
        
        // If this throws, the function exits with data already modified
        if (value == 999) {
            throw std::runtime_error("Special value triggered exception");
        }
        
        std::cout << "Function completed successfully" << std::endl;
    }
    
    // Function with strong exception guarantee
    // (If an exception occurs, state is unchanged - "all or nothing")
    void strongGuarantee(int value) {
        std::cout << "Function with strong exception guarantee..." << std::endl;
        
        // Create a temporary copy of the state
        std::vector<int> tempData = data;
        
        // Modify the temporary copy
        tempData.push_back(value);
        
        // If this throws, the original data is untouched
        if (value == 999) {
            throw std::runtime_error("Special value triggered exception");
        }
        
        // All operations succeeded, now commit changes
        data = std::move(tempData);  // Efficient move operation
        
        std::cout << "Function completed successfully" << std::endl;
    }
    
    // Function with nothrow guarantee (C++11's noexcept)
    void nothrowGuarantee() noexcept {
        std::cout << "Function with nothrow guarantee..." << std::endl;
        
        // This function guarantees it will never throw
        // If it does, std::terminate will be called
        
        // Only perform operations that cannot throw
        if (!data.empty()) {
            data[0] = 100;  // Array access doesn't throw
        }
        
        std::cout << "Function completed successfully" << std::endl;
    }
    
    // Display the current state
    void display() const {
        std::cout << "Current state:" << std::endl;
        std::cout << "- rawPtr value: " << *rawPtr << std::endl;
        std::cout << "- safePtr value: " << *safePtr << std::endl;
        std::cout << "- data contents: ";
        for (int val : data) {
            std::cout << val << " ";
        }
        std::cout << std::endl;
    }
};

int main() {
    try {
        // Create an object with valid size
        std::cout << "\n=== Creating object with valid parameters ===" << std::endl;
        ExceptionSafetyDemo demo(5);
        demo.display();
        
        // Test basic guarantee
        std::cout << "\n=== Testing basic exception guarantee ===" << std::endl;
        try {
            demo.basicGuarantee(10);  // This should succeed
            demo.display();
            
            demo.basicGuarantee(999);  // This should throw
        } catch (const std::exception& e) {
            std::cout << "Caught exception: " << e.what() << std::endl;
            std::cout << "State after exception with basic guarantee:" << std::endl;
            demo.display();  // State is modified even though exception occurred
        }
        
        // Test strong guarantee
        std::cout << "\n=== Testing strong exception guarantee ===" << std::endl;
        try {
            demo.strongGuarantee(20);  // This should succeed
            demo.display();
            
            demo.strongGuarantee(999);  // This should throw
        } catch (const std::exception& e) {
            std::cout << "Caught exception: " << e.what() << std::endl;
            std::cout << "State after exception with strong guarantee:" << std::endl;
            demo.display();  // State should be unchanged
        }
        
        // Test nothrow guarantee
        std::cout << "\n=== Testing nothrow guarantee ===" << std::endl;
        demo.nothrowGuarantee();
        demo.display();
        
    } catch (const std::exception& e) {
        std::cout << "Caught exception during construction: " << e.what() << std::endl;
    }
    
    // Try creating an object that will throw during construction
    std::cout << "\n=== Creating object with invalid parameters ===" << std::endl;
    try {
        ExceptionSafetyDemo failedDemo(-5);  // This should throw
    } catch (const std::exception& e) {
        std::cout << "Caught exception: " << e.what() << std::endl;
        // Note: No memory leak because we manually cleaned up before throwing
    }
    
    return 0;
}
```

**Exception Safety Guarantees:**

1. **Basic Guarantee:** If an exception occurs, no resources are leaked, and the program is in a valid but potentially modified state.

2. **Strong Guarantee:** If an exception occurs, the operation has no effect (state is unchanged, "all or nothing" semantics).

3. **Nothrow Guarantee:** The operation will not throw exceptions (C++11's `noexcept` specifier).

4. **No Guarantee:** If an exception occurs, the program may be in an invalid state (resource leaks, corrupted data).

**Key Exception Safety Techniques:**

1. **RAII (Resource Acquisition Is Initialization):** Resources are tied to object lifetimes, ensuring cleanup.

2. **Smart Pointers:** Use `std::unique_ptr`, `std::shared_ptr` instead of raw pointers.

3. **Copy-and-Swap:** Create a temporary copy, modify it, and swap if all operations succeed.

4. **STL Containers:** Leverage the exception safety of standard containers.

5. **noexcept Specification:** Mark functions that guarantee no exceptions.

### noexcept Specifier
The `noexcept` specifier indicates that a function won't throw exceptions. It can optimize move operations and provide stronger guarantees.

```cpp
#include <iostream>
#include <vector>
#include <utility>  // For std::move

// Function that won't throw exceptions
void never_throws() noexcept {
    std::cout << "This function promises not to throw exceptions" << std::endl;
}

// Function that might throw exceptions
void might_throw() {
    std::cout << "This function might throw exceptions" << std::endl;
    // Uncommenting the next line would violate the noexcept guarantee
    // throw std::runtime_error("Oops!");
}

// Class demonstrating noexcept move operations
class MyString {
private:
    char* data;
    size_t size;

public:
    // Constructor
    MyString(const char* str) : size(0), data(nullptr) {
        if (str) {
            size = strlen(str);
            data = new char[size + 1];
            strcpy(data, str);
        }
    }
    
    // Destructor
    ~MyString() {
        delete[] data;
    }
    
    // Copy constructor
    MyString(const MyString& other) : size(other.size), data(nullptr) {
        if (other.data) {
            data = new char[size + 1];
            strcpy(data, other.data);
        }
    }
    
    // Move constructor - noexcept (important for standard containers)
    MyString(MyString&& other) noexcept
        : size(other.size), data(other.data) {
        // Take ownership of resources
        other.data = nullptr;
        other.size = 0;
    }
    
    // Move assignment - also noexcept
    MyString& operator=(MyString&& other) noexcept {
        if (this != &other) {
            delete[] data;
            
            // Take ownership of resources
            data = other.data;
            size = other.size;
            
            other.data = nullptr;
            other.size = 0;
        }
        return *this;
    }
    
    // Display the string
    void print() const {
        std::cout << (data ? data : "empty") << std::endl;
    }
};

int main() {
    std::cout << "=== noexcept Specifier Examples ===" << std::endl;
    
    // Basic function examples
    never_throws();  // This function won't throw
    might_throw();   // This function might throw
    
    std::cout << "\n=== noexcept and move semantics ===" << std::endl;
    
    // Create some string objects
    MyString s1("Hello");
    std::cout << "s1: ";
    s1.print();
    
    // Move construction
    std::cout << "Moving s1 to s2..." << std::endl;
    MyString s2(std::move(s1));
    std::cout << "s1 (after move): ";
    s1.print();
    std::cout << "s2: ";
    s2.print();
    
    // Checking if a function is noexcept
    std::cout << "\n=== Checking noexcept status ===" << std::endl;
    std::cout << "never_throws() is noexcept: " 
              << std::boolalpha << noexcept(never_throws()) << std::endl;
    std::cout << "might_throw() is noexcept: " 
              << std::boolalpha << noexcept(might_throw()) << std::endl;
    
    std::cout << "\n=== Vector with noexcept move ===" << std::endl;
    std::vector<MyString> vec;
    vec.reserve(2);  // Reserve space to avoid initial relocations
    
    vec.push_back(MyString("First"));
    vec.push_back(MyString("Second"));
    
    std::cout << "Vector contents:" << std::endl;
    for (const auto& str : vec) {
        str.print();
    }
    
    std::cout << "\nWhen vector needs to grow, it can move elements efficiently "
              << "because MyString's move operations are noexcept" << std::endl;
    
    return 0;
}
```

**Key Points about noexcept:**

1. **Purpose:** Indicates that a function will not throw exceptions
2. **Performance:** Enables compiler optimizations, especially for move operations
3. **Vector Growth:** Containers like `std::vector` use `std::move_if_noexcept`, preferring moves over copies only when the move is `noexcept`
4. **Violation:** If a `noexcept` function throws, `std::terminate` is called immediately
5. **Conditional noexcept:** `noexcept(expression)` allows for conditional exception guarantees

---

## Concurrency

### std::thread Basics
Modern C++ provides built-in support for multi-threading through the `<thread>` library, allowing you to execute multiple tasks simultaneously.

```cpp
#include <iostream>
#include <thread>
#include <vector>
#include <chrono>  // For sleep functions

// Function to be executed in a separate thread
void countNumbers(int id, int maxCount) {
    std::cout << "Thread " << id << " starting" << std::endl;
    
    // Count up to maxCount with small pauses
    for (int i = 1; i <= maxCount; ++i) {
        std::cout << "Thread " << id << ": " << i << std::endl;
        std::this_thread::sleep_for(std::chrono::milliseconds(100));  // Small pause
    }
    
    std::cout << "Thread " << id << " finished" << std::endl;
}

int main() {
    std::cout << "=== Multi-threading with std::thread ===" << std::endl;
    
    // Create multiple threads
    std::vector<std::thread> threads;
    
    // Launch 3 threads that count to different values
    threads.push_back(std::thread(countNumbers, 1, 3));
    threads.push_back(std::thread(countNumbers, 2, 4));
    threads.push_back(std::thread(countNumbers, 3, 2));
    
    std::cout << "Main thread: All worker threads launched" << std::endl;
    
    // Wait for all threads to finish (join them)
    for (auto& t : threads) {
        t.join();  // Wait for this thread to finish
    }
    
    std::cout << "Main thread: All worker threads have completed" << std::endl;
    
    // Thread with lambda function
    std::thread lambdaThread([](std::string message) {
        std::cout << "Lambda thread says: " << message << std::endl;
    }, "Hello from lambda!");
    
    lambdaThread.join();  // Wait for the lambda thread to finish
    
    return 0;
}
```

**Key Points about std::thread:**
- Create threads by passing a function and its arguments to the `std::thread` constructor
- Use `join()` to wait for a thread to finish execution
- Remember: all threads must be either joined or detached before the std::thread object is destroyed
- Threads share the same memory space, so be careful with shared data
- The number of concurrent threads depends on the system hardware and resources

### Synchronization Primitives
When multiple threads access shared data, you need synchronization mechanisms to prevent race conditions and data corruption.

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
#include <string>

// Shared data that needs protection
int sharedCounter{0};
std::mutex counterMutex;  // Mutex to protect access to sharedCounter

// Simple mutex example
void incrementCounter(int numTimes, const std::string& threadName) {
    for (int i = 0; i < numTimes; ++i) {
        // Lock the mutex before accessing shared data
        counterMutex.lock();
        
        // Critical section - only one thread can execute this at a time
        ++sharedCounter;
        std::cout << threadName << " incremented counter to " << sharedCounter << std::endl;
        
        // Unlock the mutex to allow other threads to access
        counterMutex.unlock();
        
        // Sleep a bit to simulate work and increase chance of thread interleaving
        std::this_thread::sleep_for(std::chrono::milliseconds(10));
    }
}

// Using lock_guard for safer mutex handling (RAII approach)
void safeIncrement(int numTimes, const std::string& threadName) {
    for (int i = 0; i < numTimes; ++i) {
        // lock_guard automatically locks the mutex and unlocks when it goes out of scope
        {
            std::lock_guard<std::mutex> lock(counterMutex);
            
            // Critical section
            ++sharedCounter;
            std::cout << threadName << " safely incremented counter to " << sharedCounter << std::endl;
        } // mutex automatically unlocked here
        
        std::this_thread::sleep_for(std::chrono::milliseconds(10));
    }
}

int main() {
    std::cout << "=== Mutex Synchronization Example ===" << std::endl;
    sharedCounter = 0;
    
    // Create threads that use manual locking/unlocking
    std::thread t1(incrementCounter, 5, "Thread 1");
    std::thread t2(incrementCounter, 5, "Thread 2");
    
    // Join the threads
    t1.join();
    t2.join();
    
    std::cout << "\nFinal counter value after manual locking: " << sharedCounter << std::endl;
    
    // Reset the counter
    sharedCounter = 0;
    std::cout << "\n=== lock_guard Example (RAII approach) ===" << std::endl;
    
    // Create threads that use lock_guard
    std::thread t3(safeIncrement, 5, "Thread 3");
    std::thread t4(safeIncrement, 5, "Thread 4");
    
    // Join the threads
    t3.join();
    t4.join();
    
    std::cout << "\nFinal counter value after RAII locking: " << sharedCounter << std::endl;
    
    return 0;
}
```

**Key Synchronization Primitives:**
1. **mutex** - Basic mutual exclusion mechanism
   - `lock()` - Acquires the lock (blocks if already locked)
   - `unlock()` - Releases the lock
   - `try_lock()` - Tries to acquire the lock without blocking

2. **lock_guard** - RAII wrapper for mutex
   - Automatically locks mutex on construction
   - Automatically unlocks mutex on destruction
   - Prevents forgetting to unlock (even if exceptions occur)

3. **unique_lock** - More flexible RAII mutex wrapper
   - Can be locked/unlocked multiple times
   - Compatible with condition variables

4. **shared_mutex** (C++17) - Allows multiple readers or one writer
   - Good for read-heavy scenarios

5. **condition_variable** - For thread communication
   - Allows threads to wait for a condition to become true
   - More efficient than busy-waiting

---

## File I/O

File I/O allows you to read from and write to files, enabling data persistence and interaction with external data sources.

### Example: Reading from a File
```cpp
#include <iostream>
#include <fstream>  // Include the file stream library
#include <string>

int main() {
    // Open a file for reading
    std::ifstream inputFile("example.txt");
    
    // Check if the file was opened successfully
    if (!inputFile) {
        std::cerr << "Error opening file." << std::endl;
        return 1;
    }
    
    // Read and display the contents of the file
    std::string line;
    while (std::getline(inputFile, line)) {
        std::cout << line << std::endl;
    }
    
    // Close the file
    inputFile.close();
    
    return 0;
}
```

**Output:**
```
Contents of example.txt
```

### Example: Writing to a File
```cpp
#include <iostream>
#include <fstream>  // Include the file stream library

int main() {
    // Open a file for writing
    std::ofstream outputFile("output.txt");
    
    // Check if the file was opened successfully
    if (!outputFile) {
        std::cerr << "Error opening file." << std::endl;
        return 1;
    }
    
    // Write data to the file
    outputFile << "Hello, File I/O!" << std::endl;
    outputFile << "This is a test." << std::endl;
    
    // Close the file
    outputFile.close();
    
    std::cout << "Data written to output.txt" << std::endl;
    
    return 0;
}
```

**Output:**
```
Data written to output.txt
```

**Key Points about File I/O:**
- **File Streams**: Use `std::ifstream` for reading and `std::ofstream` for writing
- **Opening Files**: Check if the file was opened successfully
- **Reading and Writing**: Use stream operators (`<<` and `>>`) for reading and writing data
- **Closing Files**: Always close files after use to release resources

---

## Code Organization

### Header and Source Files
Proper code organization involves separating interface from implementation using header and source files.

```cpp
// --- Rectangle.h ---
#ifndef RECTANGLE_H
#define RECTANGLE_H

// Rectangle class declaration - the interface
class Rectangle {
private:
    double width;   // Width of rectangle
    double height;  // Height of rectangle

public:
    // Constructor declaration
    Rectangle(double w, double h);
    
    // Method declarations
    double getArea() const;
    double getPerimeter() const;
    
    // Getter/setter declarations
    double getWidth() const;
    void setWidth(double w);
    double getHeight() const;
    void setHeight(double h);
};

#endif // RECTANGLE_H

// --- Rectangle.cpp ---
#include "Rectangle.h"  // Include the corresponding header

// Constructor implementation
Rectangle::Rectangle(double w, double h) : width{w}, height{h} {
    // Initialize with provided dimensions
}

// Method implementations
double Rectangle::getArea() const {
    return width * height;
}

double Rectangle::getPerimeter() const {
    return 2 * (width + height);
}

// Getter/setter implementations
double Rectangle::getWidth() const {
    return width;
}

void Rectangle::setWidth(double w) {
    width = w;
}

double Rectangle::getHeight() const {
    return height;
}

void Rectangle::setHeight(double h) {
    height = h;
}

// --- main.cpp ---
#include <iostream>
#include "Rectangle.h"  // Include our rectangle class header

int main() {
    // Create a rectangle object
    Rectangle rect{5.0, 3.0};
    
    // Use the rectangle methods
    std::cout << "Rectangle dimensions: " << rect.getWidth() << " x " 
              << rect.getHeight() << std::endl;
    std::cout << "Area: " << rect.getArea() << std::endl;
    std::cout << "Perimeter: " << rect.getPerimeter() << std::endl;
    
    // Modify the rectangle
    rect.setWidth(7.0);
    rect.setHeight(4.0);
    
    std::cout << "\nAfter resizing:" << std::endl;
    std::cout << "Rectangle dimensions: " << rect.getWidth() << " x " 
              << rect.getHeight() << std::endl;
    std::cout << "Area: " << rect.getArea() << std::endl;
    std::cout << "Perimeter: " << rect.getPerimeter() << std::endl;
    
    return 0;
}
```

**Compilation Process:**
```bash
# Compile the implementation file to an object file
g++ -c Rectangle.cpp -o Rectangle.o

# Compile the main file to an object file
g++ -c main.cpp -o main.o

# Link the object files to create the executable
g++ Rectangle.o main.o -o rectangle_program

# Run the program
./rectangle_program
```

**Benefits of Separating Interface and Implementation:**
- **Encapsulation:** Users only see what they need (the interface)
- **Compilation Speed:** Changes to implementation don't require recompiling dependent files
- **Code Organization:** Easier to navigate and maintain large projects
- **Reusability:** Compiled implementations can be reused in multiple projects

### Project Management with CMake
CMake is a cross-platform build system that simplifies the build process for C++ projects.

**Example CMake Project Structure:**
```
project_root/
├── CMakeLists.txt
├── include/
│   └── Rectangle.h
├── src/
│   ├── Rectangle.cpp
│   └── main.cpp
└── build/
```

**CMakeLists.txt:**
```cmake
# Specify the minimum CMake version
cmake_minimum_required(VERSION 3.10)

# Set the project name and language
project(GeometryExample VERSION 1.0 LANGUAGES CXX)

# Specify the C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Include directories for header files
include_directories(include)

# Create an executable from source files
add_executable(geometry_app src/main.cpp src/Rectangle.cpp)

# Installation rules (optional)
install(TARGETS geometry_app DESTINATION bin)
```

**Building with CMake:**
```bash
# Create and enter the build directory
mkdir -p build
cd build

# Generate build files
cmake ..

# Build the project
cmake --build .

# Run the executable
./geometry_app
```

**Benefits of Using CMake:**
- **Cross-Platform:** Works on Windows, Linux, macOS, and other platforms
- **Configuration:** Easily configure build options and dependencies
- **IDE Integration:** Generates project files for popular IDEs
- **Dependencies:** Helps manage external libraries and dependencies
- **Scalability:** Works well for both small and large projects

---

## Testing and Quality

Testing and quality assurance are essential for ensuring that your code works correctly and meets requirements.

### Unit Testing
Unit testing involves testing individual components or functions to ensure they work as expected.

```cpp
#include <iostream>
#include <cassert>  // For basic assertions

// A simple function to test
bool isPrime(int number) {
    // Handle edge cases
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 == 0 || number % 3 == 0) return false;
    
    // Check for factors using 6k±1 optimization
    for (int i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0)
            return false;
    }
    return true;
}

// Basic test function using assertions
void testIsPrime() {
    // Test with known prime numbers
    assert(isPrime(2) == true);   // 2 is prime
    assert(isPrime(3) == true);   // 3 is prime
    assert(isPrime(5) == true);   // 5 is prime
    assert(isPrime(7) == true);   // 7 is prime
    assert(isPrime(11) == true);  // 11 is prime
    assert(isPrime(13) == true);  // 13 is prime
    assert(isPrime(17) == true);  // 17 is prime
    
    // Test with known non-prime numbers
    assert(isPrime(1) == false);  // 1 is not prime by definition
    assert(isPrime(4) == false);  // 4 = 2 × 2
    assert(isPrime(6) == false);  // 6 = 2 × 3
    assert(isPrime(9) == false);  // 9 = 3 × 3
    assert(isPrime(15) == false); // 15 = 3 × 5
    assert(isPrime(21) == false); // 21 = 3 × 7
    
    std::cout << "All isPrime tests passed!" << std::endl;
}

// A more complex example: test a Rectangle class
class Rectangle {
private:
    double width;
    double height;
    
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    
    double getArea() const { return width * height; }
    double getPerimeter() const { return 2 * (width + height); }
    
    bool isSquare() const { return width == height; }
};

// Test function for Rectangle
void testRectangle() {
    // Test a rectangle
    Rectangle rect(5.0, 3.0);
    assert(rect.getArea() == 15.0);
    assert(rect.getPerimeter() == 16.0);
    assert(rect.isSquare() == false);
    
    // Test a square
    Rectangle square(4.0, 4.0);
    assert(square.getArea() == 16.0);
    assert(square.getPerimeter() == 16.0);
    assert(square.isSquare() == true);
    
    std::cout << "All Rectangle tests passed!" << std::endl;
}

// Using a more structured testing approach with test cases
struct TestCase {
    int input;
    bool expected;
    std::string description;
};

void runPrimeTests() {
    // Define test cases
    TestCase testCases[] = {
        {2, true, "2 is prime"},
        {3, true, "3 is prime"},
        {4, false, "4 is not prime (2×2)"},
        {17, true, "17 is prime"},
        {21, false, "21 is not prime (3×7)"},
        {97, true, "97 is prime"},
        {100, false, "100 is not prime (2×2×5×5)"}
    };
    
    // Run each test case
    int passCount = 0;
    int totalTests = sizeof(testCases) / sizeof(testCases[0]);
    
    for (const TestCase& tc : testCases) {
        bool result = isPrime(tc.input);
        if (result == tc.expected) {
            std::cout << "PASS: " << tc.description << std::endl;
            passCount++;
        } else {
            std::cout << "FAIL: " << tc.description 
                      << " (got " << (result ? "true" : "false") 
                      << ", expected " << (tc.expected ? "true" : "false") << ")" << std::endl;
        }
    }
    
    std::cout << "\nTests passed: " << passCount << "/" << totalTests << std::endl;
}

// Example with a professional testing framework (pseudocode)
/*
// Using Google Test framework
#include <gtest/gtest.h>

TEST(PrimeTest, BasicCases) {
    EXPECT_TRUE(isPrime(2));
    EXPECT_TRUE(isPrime(3));
    EXPECT_TRUE(isPrime(5));
    EXPECT_FALSE(isPrime(1));
    EXPECT_FALSE(isPrime(4));
    EXPECT_FALSE(isPrime(6));
}

TEST(RectangleTest, AreaAndPerimeter) {
    Rectangle rect(5.0, 3.0);
    EXPECT_DOUBLE_EQ(15.0, rect.getArea());
    EXPECT_DOUBLE_EQ(16.0, rect.getPerimeter());
}

TEST(RectangleTest, SquareDetection) {
    Rectangle rect(5.0, 3.0);
    Rectangle square(4.0, 4.0);
    EXPECT_FALSE(rect.isSquare());
    EXPECT_TRUE(square.isSquare());
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
*/

int main() {
    std::cout << "=== Running unit tests ===" << std::endl;
    
    // Run simple assert-based tests
    testIsPrime();
    testRectangle();
    
    // Run structured test cases
    std::cout << "\n=== Running structured test cases ===" << std::endl;
    runPrimeTests();
    
    return 0;
}
```

**Output:**
```
=== Running unit tests ===
All isPrime tests passed!
All Rectangle tests passed!

=== Running structured test cases ===
PASS: 2 is prime
PASS: 3 is prime
PASS: 4 is not prime (2×2)
PASS: 17 is prime
PASS: 21 is not prime (3×7)
PASS: 97 is prime
PASS: 100 is not prime (2×2×5×5)

Tests passed: 7/7
```

**Benefits of Unit Testing:**
- **Early Bug Detection**: Identify issues before they reach production
- **Refactoring Safety**: Ensure code changes don't break existing functionality
- **Documentation**: Tests serve as executable documentation
- **Design Improvement**: Good tests encourage better software design
- **Confidence**: Build confidence in the correctness of your code

### Static Analysis
Static analysis tools analyze your code without executing it, identifying potential problems, bad practices, and bugs early in development.

**Common C++ Static Analysis Tools:**
1. **Clang-Tidy**: A clang-based C++ "linter"
   ```bash
   # Install clang-tidy (Ubuntu example)
   sudo apt-get install clang-tidy
   
   # Run on your source file
   clang-tidy myfile.cpp -- -std=c++17
   ```

2. **Cppcheck**: A tool for detecting bugs that compilers typically don't find
   ```bash
   # Install cppcheck (Ubuntu example)
   sudo apt-get install cppcheck
   
   # Run on your source file or directory
   cppcheck --enable=all myfile.cpp
   ```

3. **PVS-Studio**: A professional static analyzer that finds various errors and vulnerabilities
   
4. **SonarQube**: A platform for continuous inspection of code quality

**Example Cppcheck Output:**
```
Checking main.cpp...
[main.cpp:45]: (style) Variable 'unused_var' is assigned a value that is never used
[main.cpp:120]: (error) Array 'buffer[10]' index 10 out of bounds
```

**Benefits of Static Analysis:**
- **Catching Bugs Early**: Identify issues before compilation or testing
- **Security Vulnerabilities**: Find potential security issues
- **Code Style Enforcement**: Ensure adherence to coding standards
- **Performance Issues**: Identify inefficient code patterns
- **Time Saving**: Automated analysis saves debugging time

---

## Advanced Object-Oriented Practices

Advanced object-oriented practices help you write more maintainable and robust code.

### Rule of Three/Five/Zero
The Rule of Three/Five/Zero is a guideline for implementing special member functions in classes that manage resources.

```cpp
#include <iostream>
#include <cstring>  // For string manipulation functions

// A simple string class that manages dynamic memory
class MyString {
private:
    char* data;  // Dynamically allocated character array

public:
    // Constructor
    MyString(const char* str = nullptr) : data(nullptr) {
        std::cout << "Constructor called" << std::endl;
        if (str) {
            // Allocate memory for the string plus null terminator
            data = new char[strlen(str) + 1];
            // Copy the string
            strcpy(data, str);
        }
    }
    
    // Rule of Three: 1. Destructor
    ~MyString() {
        std::cout << "Destructor called for: " << (data ? data : "empty") << std::endl;
        delete[] data;  // Free the allocated memory
    }
    
    // Rule of Three: 2. Copy Constructor
    MyString(const MyString& other) : data(nullptr) {
        std::cout << "Copy constructor called" << std::endl;
        if (other.data) {
            // Allocate new memory and copy the data
            data = new char[strlen(other.data) + 1];
            strcpy(data, other.data);
        }
    }
    
    // Rule of Three: 3. Copy Assignment Operator
    MyString& operator=(const MyString& other) {
        std::cout << "Copy assignment operator called" << std::endl;
        if (this != &other) {  // Protect against self-assignment
            // Free existing resource
            delete[] data;
            data = nullptr;
            
            // Allocate and copy new resource
            if (other.data) {
                data = new char[strlen(other.data) + 1];
                strcpy(data, other.data);
            }
        }
        return *this;
    }
    
    // Rule of Five: 4. Move Constructor (C++11)
    MyString(MyString&& other) noexcept : data(nullptr) {
        std::cout << "Move constructor called" << std::endl;
        // Steal the resource from the other object (no deep copy)
        data = other.data;
        // Leave the other object in a valid but empty state
        other.data = nullptr;
    }
    
    // Rule of Five: 5. Move Assignment Operator (C++11)
    MyString& operator=(MyString&& other) noexcept {
        std::cout << "Move assignment operator called" << std::endl;
        if (this != &other) {  // Protect against self-assignment
            // Free existing resource
            delete[] data;
            
            // Steal the resource from the other object
            data = other.data;
            other.data = nullptr;
        }
        return *this;
    }
    
    // Display the string content
    void display() const {
        std::cout << "String: " << (data ? data : "empty") << std::endl;
    }
};

// Example of Rule of Zero - let existing classes manage resources
class Person {
private:
    std::string name;  // std::string handles memory management
    int age;

public:
    // Constructor
    Person(const std::string& n, int a) : name(n), age(a) {}
    
    // No need to define destructor, copy/move constructors, or assignment operators
    // The compiler-generated ones are sufficient because std::string handles the memory
    
    void display() const {
        std::cout << "Person: " << name << ", Age: " << age << std::endl;
    }
};

int main() {
    std::cout << "=== Rule of Three/Five Demonstration ===" << std::endl;
    
    // Create an object using the constructor
    MyString s1("Hello");
    std::cout << "s1: ";
    s1.display();
    
    // Use copy constructor
    std::cout << "\n--- Copy Constructor ---" << std::endl;
    MyString s2(s1);
    std::cout << "s1: ";
    s1.display();
    std::cout << "s2: ";
    s2.display();
    
    // Use copy assignment operator
    std::cout << "\n--- Copy Assignment ---" << std::endl;
    MyString s3;
    s3 = s1;
    std::cout << "s1: ";
    s1.display();
    std::cout << "s3: ";
    s3.display();
    
    // Use move constructor
    std::cout << "\n--- Move Constructor ---" << std::endl;
    MyString s4(std::move(MyString("Temporary")));
    std::cout << "s4: ";
    s4.display();
    
    // Use move assignment
    std::cout << "\n--- Move Assignment ---" << std::endl;
    MyString s5;
    s5 = std::move(s4);  // s4's data will be moved to s5
    std::cout << "s4 (after move): ";
    s4.display();
    std::cout << "s5: ";
    s5.display();
    
    // Rule of Zero example
    std::cout << "\n=== Rule of Zero Demonstration ===" << std::endl;
    Person person("Alice", 30);
    person.display();
    
    Person person2 = person;  // Uses compiler-generated copy constructor
    person2.display();
    
    return 0;
}
```

**Output:**
```
=== Rule of Three/Five Demonstration ===
Constructor called
s1: String: Hello

--- Copy Constructor ---
Copy constructor called
s1: String: Hello
s2: String: Hello

--- Copy Assignment ---
Constructor called
Copy assignment operator called
s1: String: Hello
s3: String: Hello

--- Move Constructor ---
Constructor called
Move constructor called
Destructor called for: empty
s4: String: Temporary

--- Move Assignment ---
Constructor called
Move assignment operator called
s4 (after move): String: empty
s5: String: Temporary

=== Rule of Zero Demonstration ===
Person: Alice, Age: 30
Person: Alice, Age: 30
Destructor called for: empty
Destructor called for: Temporary
Destructor called for: Hello
Destructor called for: Hello
Destructor called for: Hello
```

**Key Points about Rule of Three/Five/Zero:**
1. **Rule of Three (C++98)**: If a class needs any of these three special member functions, it probably needs all three:
   - Destructor
   - Copy constructor
   - Copy assignment operator
   
2. **Rule of Five (C++11)**: In addition to the Rule of Three, consider:
   - Move constructor
   - Move assignment operator
   
3. **Rule of Zero**: If a class doesn't manage resources directly, don't declare any special member functions (rely on compiler-generated ones).

### Virtual Destructors
Virtual destructors are essential when using polymorphism with inheritance to ensure proper cleanup of derived objects.

```cpp
#include <iostream>
#include <string>

// Base class without virtual destructor (problematic)
class ResourceBase {
private:
    std::string resource;

public:
    ResourceBase(const std::string& res) : resource(res) {
        std::cout << "ResourceBase constructor: allocated " << resource << std::endl;
    }
    
    // Non-virtual destructor
    ~ResourceBase() {
        std::cout << "ResourceBase destructor: released " << resource << std::endl;
    }
    
    // Display the resource
    void showResource() const {
        std::cout << "Resource: " << resource << std::endl;
    }
};

// Derived class that allocates its own resources
class DerivedResource : public ResourceBase {
private:
    int* data;

public:
    DerivedResource(const std::string& res, int value) 
        : ResourceBase(res), data(new int(value)) {
        std::cout << "DerivedResource constructor: allocated int with value " << *data << std::endl;
    }
    
    // Derived destructor
    ~DerivedResource() {
        std::cout << "DerivedResource destructor: releasing int with value " << *data << std::endl;
        delete data;
    }
};

// Base class with virtual destructor (correct approach)
class ResourceBaseVirtual {
private:
    std::string resource;

public:
    ResourceBaseVirtual(const std::string& res) : resource(res) {
        std::cout << "ResourceBaseVirtual constructor: allocated " << resource << std::endl;
    }
    
    // Virtual destructor
    virtual ~ResourceBaseVirtual() {
        std::cout << "ResourceBaseVirtual destructor: released " << resource << std::endl;
    }
    
    // Virtual method for polymorphism
    virtual void showResource() const {
        std::cout << "Resource: " << resource << std::endl;
    }
};

// Derived class for the virtual base
class DerivedResourceVirtual : public ResourceBaseVirtual {
private:
    int* data;

public:
    DerivedResourceVirtual(const std::string& res, int value) 
        : ResourceBaseVirtual(res), data(new int(value)) {
        std::cout << "DerivedResourceVirtual constructor: allocated int with value " << *data << std::endl;
    }
    
    // Derived destructor
    ~DerivedResourceVirtual() override {
        std::cout << "DerivedResourceVirtual destructor: releasing int with value " << *data << std::endl;
        delete data;
    }
    
    // Override the virtual method
    void showResource() const override {
        std::cout << "Derived resource with int value: " << *data << std::endl;
    }
};

int main() {
    std::cout << "=== Non-Virtual Destructor Problem ===" << std::endl;
    
    // Problem: Base class pointer to derived object with non-virtual destructor
    ResourceBase* base1 = new DerivedResource("Database Connection", 42);
    base1->showResource();
    
    // This will only call ~ResourceBase(), not ~DerivedResource() -> MEMORY LEAK!
    delete base1;
    
    std::cout << "\n=== Virtual Destructor Solution ===" << std::endl;
    
    // Solution: Base class pointer to derived object with virtual destructor
    ResourceBaseVirtual* base2 = new DerivedResourceVirtual("Network Socket", 100);
    base2->showResource();  // Calls the derived version due to virtual function
    
    // This will correctly call both ~DerivedResourceVirtual() and ~ResourceBaseVirtual()
    delete base2;
    
    return 0;
}
```

**Output:**
```
=== Non-Virtual Destructor Problem ===
ResourceBase constructor: allocated Database Connection
DerivedResource constructor: allocated int with value 42
Resource: Database Connection
ResourceBase destructor: released Database Connection

=== Virtual Destructor Solution ===
ResourceBaseVirtual constructor: allocated Network Socket
DerivedResourceVirtual constructor: allocated int with value 100
Derived resource with int value: 100
DerivedResourceVirtual destructor: releasing int with value 100
ResourceBaseVirtual destructor: released Network Socket
```

**Key Points about Virtual Destructors:**
1. **Problem**: Without virtual destructors, deleting a derived object through a base pointer only calls the base destructor, causing memory leaks.
2. **Rule**: Always make base class destructors virtual when:
   - The class is meant to be used as a base class
   - The class has virtual functions (indicating polymorphic use)
3. **Benefits**:
   - Proper cleanup of derived class resources
   - Prevention of memory leaks in polymorphic hierarchies
   - Complete object destruction in the correct order (derived → base)
4. **override Keyword**: Use `override` with derived class destructors and virtual functions for clarity and compiler checking

---

## Advanced Topics

Explore advanced topics to deepen your understanding of C++ and enhance your programming skills.

### Example: Template Metaprogramming
Template metaprogramming allows you to perform computations and generate code at compile time.

**Example: Compile-Time Factorial**
```cpp
#include <iostream>

template <int N>
struct Factorial {
    static constexpr int value = N * Factorial<N - 1>::value;
};

template <>
struct Factorial<0> {
    static constexpr int value = 1;
};

int main() {
    std::cout << "Factorial of 5: " << Factorial<5>::value << std::endl;
    return 0;
}
```

**Output:**
```
Factorial of 5: 120
```

**Key Points about Advanced Topics:**
- **Template Metaprogramming**: Perform computations and generate code at compile time
- **SFINAE**: Substitution Failure Is Not An Error, a technique for function overloading
- **Concepts**: Define constraints on template parameters (C++20)
- **Coroutines**: Write asynchronous code using coroutines (C++20)

---

## Conclusion

Congratulations on completing this beginner's guide to C++! You've learned the fundamentals of C++ programming, including syntax, data types, control structures, functions, classes, inheritance, pointers, memory management, templates, the STL, modern C++ features, exception handling, concurrency, file I/O, code organization, testing, and advanced object-oriented practices.

As you continue your C++ journey, remember to practice writing code, explore additional resources, and build projects to reinforce your knowledge. C++ is a powerful language with a rich ecosystem, and mastering it will open up many opportunities in software development.

Happy coding!
