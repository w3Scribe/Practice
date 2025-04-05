# C++ Object-Oriented Programming Notes

## Table of Contents
- [Introduction to OOP](#introduction-to-oop)
- [Basic Concepts](#basic-concepts)
  - [Classes and Objects](#classes-and-objects)
  - [Access Modifiers](#access-modifiers)
  - [Constructors and Destructors](#constructors-and-destructors)
- [Intermediate Concepts](#intermediate-concepts)
  - [The `this` Pointer](#the-this-pointer)
  - [Static Members](#static-members)
  - [Friend Functions and Classes](#friend-functions-and-classes)
  - [Function Overloading](#function-overloading)
  - [Operator Overloading](#operator-overloading)
  - [Inheritance](#inheritance)
- [Advanced Concepts](#advanced-concepts)
  - [Polymorphism](#polymorphism)
  - [Virtual Functions](#virtual-functions)
  - [Abstract Classes](#abstract-classes)
  - [Templates](#templates)
  - [Exception Handling](#exception-handling)
  - [Smart Pointers](#smart-pointers)
  - [Memory Management in OOP](#memory-management-in-oop)
- [Practice and Assessment](#practice-and-assessment)
  - [Self-Assessment Questions](#self-assessment-questions)
  - [Coding Challenges](#coding-challenges)
- [Additional Resources](#additional-resources)

---

## Introduction to OOP

### What is Object-Oriented Programming?

Object-Oriented Programming (OOP) is a programming paradigm that organizes code around "objects" rather than functions and logic. An object represents a real-world entity and contains both data (attributes) and functions (methods) that operate on the data.

#### Key Principles of OOP:

1. **Encapsulation**: Bundling data and methods that work on that data into a single unit (class)
2. **Abstraction**: Hiding complex implementation details while exposing only necessary parts
3. **Inheritance**: Creating new classes based on existing ones
4. **Polymorphism**: Ability of different classes to be treated through the same interface

#### Real-world Analogy:

Think of a car as an object:
- **Attributes**: color, make, model, fuel level
- **Methods**: start(), accelerate(), brake(), turnOff()
- The driver (user) doesn't need to know how the engine works (abstraction)

```
    [Driver] ------> [Car Object]
                       |     |
                       |     |
                   Attributes Methods
                   (data)    (functions)
```

OOP allows us to model real-world systems with clarity and structure. Consider these everyday examples:

1. **Banking System**
   - `BankAccount` class with `balance` attribute and `deposit()`, `withdraw()` methods
   - Different account types extend the base class: `SavingsAccount`, `CheckingAccount`

2. **E-commerce Website**
   - `Product` class with attributes like `price`, `name`, `description`
   - `ShoppingCart` class containing multiple `Product` objects
   - `Customer` class with methods like `checkout()` and `addToCart()`

This approach helps organize code in a way that mirrors how we think about the world, making programs easier to understand, maintain, and extend.

## Basic Concepts

### Classes and Objects

#### Class Definition:

A class is a blueprint for creating objects. It defines properties (data) and behaviors (functions).

```cpp
// A simple class definition
class Car {
private:
    // Attributes (data members)
    std::string make{};      // Car manufacturer
    std::string model{};     // Car model name
    int year{2023};          // Manufacturing year
    double fuelLevel{0.0};   // Current fuel level (0-100%)
    
public:
    // Methods (member functions)
    void start() {
        // Code to start the car
        std::cout << "Car started!" << std::endl;
    }
    
    void addFuel(double amount) {
        // Add fuel to the car
        fuelLevel += amount;
        if (fuelLevel > 100.0) {
            fuelLevel = 100.0;  // Can't exceed maximum
        }
    }
    
    // Constructor - special method called when object is created
    Car(std::string mk, std::string mdl, int yr) {
        make = mk;
        model = mdl;
        year = yr;
    }
};
```

#### Creating and Using Objects:

Objects are instances of a class. You can create multiple objects from one class definition.

```cpp
#include <iostream>
#include <string>

int main() {
    // Create Car objects
    Car myCar{"Toyota", "Corolla", 2022};  // Using modern initialization
    Car friendsCar{"Honda", "Civic", 2021};
    
    // Using the objects
    myCar.start();                // Calling a method
    myCar.addFuel(45.5);          // Adding fuel to my car
    
    friendsCar.start();           // Friend's car also starts
    
    return 0;
}
```

#### Visualizing Classes and Objects:

```
CLASS (blueprint)          OBJECTS (instances)
+---------------+         +-----------------+     +-----------------+
| Car           |  ---→   | myCar           |     | friendsCar      |
+---------------+         +-----------------+     +-----------------+
| - make        |         | - make: Toyota  |     | - make: Honda   |
| - model       |         | - model: Corolla|     | - model: Civic  |
| - year        |         | - year: 2022    |     | - year: 2021    |
| - fuelLevel   |         | - fuelLevel: 45.5|     | - fuelLevel: 0.0|
+---------------+         +-----------------+     +-----------------+
| + start()     |         | + start()       |     | + start()       |
| + addFuel()   |         | + addFuel()     |     | + addFuel()     |
+---------------+         +-----------------+     +-----------------+
```

### Access Modifiers

Access modifiers control the visibility and accessibility of class members.

#### Types of Access Modifiers:

1. **public**: Members are accessible from anywhere
2. **private**: Members are accessible only within the class
3. **protected**: Similar to private, but also accessible in derived classes

```cpp
class BankAccount {
private:
    // Private members - only accessible within the class
    double balance{0.0};         // Account balance
    std::string accountNumber{}; // Account number
    
protected:
    // Protected members - accessible in this class and derived classes
    std::string accountType{};   // Type of account (checking, savings)
    
public:
    // Public members - accessible from anywhere
    std::string ownerName{};     // Account owner's name
    
    // Public methods to access private data (getters)
    double getBalance() const {
        return balance;  // Anyone can check the balance through this method
    }
    
    // Public methods to modify private data (setters)
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;  // Increases the private balance
        }
    }
};
```

#### Access Control in Practice:

```cpp
int main() {
    BankAccount myAccount{};
    
    myAccount.ownerName = "John Doe";   // OK - public member
    
    // myAccount.balance = 1000.0;      // Error - balance is private
    // myAccount.accountType = "Savings"; // Error - accountType is protected
    
    myAccount.deposit(1000.0);         // OK - using public method to modify private data
    double currentBalance = myAccount.getBalance(); // OK - using public method to access private data
    
    return 0;
}
```

#### Encapsulation Benefits:

1. **Data Protection**: Prevents unauthorized access to data
2. **Maintenance**: Code changes affect only the class implementation, not external code
3. **Controlled Access**: Data can be made read-only or write-only as needed

### Constructors and Destructors

Constructors and destructors are special member functions that are called when objects are created and destroyed.

#### Constructors:

1. **Default Constructor**: Has no parameters or all parameters have default values
2. **Parameterized Constructor**: Takes parameters to initialize object attributes
3. **Copy Constructor**: Creates a new object as a copy of an existing object
4. **Move Constructor**: Transfers resources from temporary objects (C++11)

```cpp
class Student {
private:
    std::string name{};
    int id{0};
    double gpa{0.0};
    
public:
    // Default constructor
    Student() {
        std::cout << "Default constructor called" << std::endl;
        // Default initialization already done with member initializers
    }
    
    // Parameterized constructor
    Student(std::string studentName, int studentId, double studentGpa) {
        std::cout << "Parameterized constructor called" << std::endl;
        name = studentName;
        id = studentId;
        gpa = studentGpa;
    }
    
    // Copy constructor
    Student(const Student& other) {
        std::cout << "Copy constructor called" << std::endl;
        name = other.name;
        id = other.id;
        gpa = other.gpa;
    }
    
    // Member initialization list (more efficient)
    Student(std::string studentName) : name{studentName}, id{0}, gpa{0.0} {
        std::cout << "Constructor with initialization list called" << std::endl;
    }
    
    // Display student information
    void display() const {
        std::cout << "Name: " << name << ", ID: " << id << ", GPA: " << gpa << std::endl;
    }
};
```

#### Destructors:

Destructors are called when an object goes out of scope or is explicitly deleted.

```cpp
class Resource {
private:
    int* data; // Dynamically allocated resource
    
public:
    // Constructor - allocates resource
    Resource() {
        std::cout << "Resource allocated" << std::endl;
        data = new int{0}; // Allocate memory for an integer
    }
    
    // Destructor - frees resource
    ~Resource() {
        std::cout << "Resource deallocated" << std::endl;
        delete data; // Free the allocated memory
    }
    
    // Set data value
    void setValue(int value) {
        *data = value;
    }
    
    // Get data value
    int getValue() const {
        return *data;
    }
};
```

#### Object Lifecycle Example:

```cpp
void demonstrateLifecycle() {
    // 1. Constructor called when object is created
    std::cout << "Creating resource..." << std::endl;
    Resource myResource{};
    
    // 2. Object is used
    myResource.setValue(42);
    std::cout << "Resource value: " << myResource.getValue() << std::endl;
    
    // 3. Destructor called automatically when object goes out of scope
    std::cout << "Function ending, resource will be destroyed..." << std::endl;
} // <-- Destructor called here
```

#### Constructor Best Practices:

1. Initialize all member variables
2. Use member initializer lists for better performance
3. Consider providing multiple constructors for flexibility
4. Follow the Rule of Three/Five/Zero (more on this later)

---

## Intermediate Concepts

### The `this` Pointer

The `this` pointer is a hidden parameter in every non-static member function that points to the current object instance.

#### Uses of `this`:

1. Distinguishing between member variables and parameters
2. Returning the current object for method chaining
3. Checking self-assignment in operator overloading

```cpp
class Counter {
private:
    int count{0};
    
public:
    // Increment count and return the updated object
    Counter& increment() {
        count++;        // Increment the count
        return *this;   // Return the current object
    }
    
    // Set count (parameter has same name as member)
    void setCount(int count) {
        this->count = count;  // "this->count" refers to the member variable
                              // "count" refers to the parameter
    }
    
    // Get current count value
    int getCount() const {
        return count;
    }
};
```

#### Method Chaining Example:

```cpp
int main() {
    Counter c{};
    
    // Method chaining using 'this'
    c.increment().increment().increment();
    
    std::cout << "Count: " << c.getCount() << std::endl;  // Outputs: Count: 3
    
    return 0;
}
```

### Static Members

Static members belong to the class rather than any specific object instance.

#### Static Variables:

1. Shared among all objects of the class
2. Exist even when no objects are created
3. Must be defined outside the class declaration

#### Static Methods:

1. Can only access static members
2. Don't have a `this` pointer
3. Can be called using the class name

```cpp
class MathUtility {
private:
    static int objectCount;  // Declaration of static member variable
    
public:
    // Constructor increments the object count
    MathUtility() {
        objectCount++;
    }
    
    // Destructor decrements the object count
    ~MathUtility() {
        objectCount--;
    }
    
    // Static method to get object count
    static int getObjectCount() {
        return objectCount;  // Can only access static members
    }
    
    // Static method for common math operation
    static double square(double value) {
        return value * value;
    }
};

// Definition of static member (required)
int MathUtility::objectCount = 0;
```

#### Using Static Members:

```cpp
int main() {
    // Call static method without creating an object
    double result = MathUtility::square(4.0);  // result = 16.0
    
    std::cout << "Objects created: " << MathUtility::getObjectCount() << std::endl; // 0
    
    MathUtility util1{};
    MathUtility util2{};
    
    std::cout << "Objects created: " << MathUtility::getObjectCount() << std::endl; // 2
    
    return 0;
}
```

### Friend Functions and Classes

Friend functions and classes have access to private and protected members of a class.

#### Friend Functions:

```cpp
class Box {
private:
    double width{0.0};
    double height{0.0};
    double depth{0.0};
    
public:
    // Constructor
    Box(double w, double h, double d) : width{w}, height{h}, depth{d} {}
    
    // Member function to calculate volume
    double volume() const {
        return width * height * depth;
    }
    
    // Friend function declaration
    friend void displayBoxInfo(const Box& box);
    
    // Friend function to compare two boxes
    friend bool areSimilarSized(const Box& box1, const Box& box2);
};

// Friend function definition - can access private members
void displayBoxInfo(const Box& box) {
    std::cout << "Box dimensions: " << box.width << " x "
              << box.height << " x " << box.depth << std::endl;
}

// Compare two boxes - returns true if their dimensions are within 10% of each other
bool areSimilarSized(const Box& box1, const Box& box2) {
    double vol1 = box1.width * box1.height * box1.depth;
    double vol2 = box2.width * box2.height * box2.depth;
    
    return std::abs(vol1 - vol2) < 0.1 * std::max(vol1, vol2);
}
```

#### Friend Classes:

```cpp
class Engine; // Forward declaration

class Car {
private:
    std::string make{};
    std::string model{};
    Engine* engine{}; // Car has an Engine
    
public:
    Car(const std::string& mk, const std::string& mdl);
    
    // Make Mechanic a friend class
    friend class Mechanic;
};

class Engine {
private:
    std::string type{};
    int horsepower{0};
    bool running{false};
    
public:
    Engine(const std::string& t, int hp) : type{t}, horsepower{hp} {}
    
    // Make Mechanic a friend class
    friend class Mechanic;
};

class Mechanic {
public:
    // Can access private members of both Car and Engine
    void repair(Car& car) {
        std::cout << "Repairing " << car.make << " " << car.model << std::endl;
        
        // Access car's engine
        if (car.engine) {
            std::cout << "Engine type: " << car.engine->type << std::endl;
            std::cout << "Horsepower: " << car.engine->horsepower << std::endl;
            
            // Reset engine status
            car.engine->running = false;
        }
    }
};
```

#### When to Use Friends:

1. When two classes need to closely cooperate
2. For operator overloading when the left operand isn't the class
3. For specific functions that need full access but don't fit as members

> **Note:** Friends should be used sparingly as they reduce encapsulation.

### Function Overloading

Function overloading allows multiple functions with the same name but different parameter lists. The compiler determines which version to call based on the arguments provided.

#### Key Features of Function Overloading:

1. Functions must differ in number, type, or order of parameters
2. Return type alone is not enough to distinguish overloaded functions
3. Provides cleaner, more intuitive interfaces for related operations

```cpp
#include <iostream>
#include <string>

class Calculator {
private:
    std::string name{"Basic Calculator"};  // Calculator's name/model
    
public:
    // Overloaded functions with different parameter types
    int add(int a, int b) {
        std::cout << "Adding integers" << std::endl;
        return a + b;  // Add two integers
    }
    
    double add(double a, double b) {
        std::cout << "Adding doubles" << std::endl;
        return a + b;  // Add two floating-point numbers
    }
    
    // Different number of parameters
    int add(int a, int b, int c) {
        std::cout << "Adding three integers" << std::endl;
        return a + b + c;  // Add three integers
    }
    
    // Different order of parameters
    std::string add(std::string a, int b) {
        std::cout << "Adding int to string" << std::endl;
        return a + std::to_string(b);  // Append int to string
    }
    
    std::string add(int a, std::string b) {
        std::cout << "Adding string to int" << std::endl;
        return std::to_string(a) + b;  // Prepend int to string
    }
};
```

#### Using Overloaded Functions:

```cpp
int main() {
    Calculator calc{};
    
    // Using different versions of the same function
    int sum1 = calc.add(5, 10);                  // Calls add(int, int)
    double sum2 = calc.add(3.5, 2.5);            // Calls add(double, double)
    int sum3 = calc.add(1, 2, 3);                // Calls add(int, int, int)
    std::string s1 = calc.add("Value: ", 100);   // Calls add(string, int)
    std::string s2 = calc.add(100, " units");    // Calls add(int, string)
    
    std::cout << "Sum1: " << sum1 << std::endl;           // 15
    std::cout << "Sum2: " << sum2 << std::endl;           // 6.0
    std::cout << "Sum3: " << sum3 << std::endl;           // 6
    std::cout << "String1: " << s1 << std::endl;          // Value: 100
    std::cout << "String2: " << s2 << std::endl;          // 100 units
    
    return 0;
}
```

#### When to Use Function Overloading:

1. When functions perform similar operations on different data types
2. To provide variations of the same functionality with different sets of parameters
3. To implement default parameters when you need more control than default arguments

#### Common Pitfalls:

1. **Ambiguous Function Calls**: When the compiler can't determine which function to call
   ```cpp
   void display(int a, double b = 0.0) { /*...*/ }
   void display(int a) { /*...*/ }
   
   // Error: Ambiguous call
   display(10); // Which function should be called?
   ```

2. **Type Conversion Confusion**: When automatic type conversion can lead to unexpected function selection
   ```cpp
   void process(int a) { std::cout << "Int version" << std::endl; }
   void process(double a) { std::cout << "Double version" << std::endl; }
   
   // This will call the double version due to automatic conversion
   process(10.0f); // Calls process(double) with float->double conversion
   ```

### Operator Overloading

Operator overloading allows operators to work with user-defined types.

#### Common Overloaded Operators:

1. Arithmetic operators (`+`, `-`, `*`, `/`)
2. Comparison operators (`==`, `!=`, `<`, `>`)
3. Assignment operators (`=`, `+=`, `-=`)
4. Stream operators (`<<`, `>>`)

```cpp
class Complex {
private:
    double real{0.0};
    double imag{0.0};
    
public:
    // Constructor
    Complex(double r = 0.0, double i = 0.0) : real{r}, imag{i} {}
    
    // Member operator overloading: addition
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }
    
    // Member operator overloading: multiplication
    Complex operator*(const Complex& other) const {
        return Complex(real * other.real - imag * other.imag,
                       real * other.imag + imag * other.real);
    }
    
    // Friend operator overloading: output stream
    friend std::ostream& operator<<(std::ostream& os, const Complex& c);
    
    // Overload assignment operator
    Complex& operator=(const Complex& other) {
        if (this != &other) {  // Prevent self-assignment
            real = other.real;
            imag = other.imag;
        }
        return *this;
    }
};

// Stream operator implementation (friend function)
std::ostream& operator<<(std::ostream& os, const Complex& c) {
    os << c.real;
    if (c.imag >= 0) {
        os << "+";
    }
    os << c.imag << "i";
    return os;
}
```

#### Using Overloaded Operators:

```cpp
int main() {
    Complex a{2.0, 3.0};
    Complex b{1.0, 2.0};
    
    // Using overloaded operators
    Complex sum = a + b;      // Calls a.operator+(b)
    Complex product = a * b;  // Calls a.operator*(b)
    
    // Using overloaded stream operator
    std::cout << "a = " << a << std::endl;       // Uses operator<<(std::cout, a)
    std::cout << "b = " << b << std::endl;
    std::cout << "sum = " << sum << std::endl;
    std::cout << "product = " << product << std::endl;
    
    return 0;
}
```

### Inheritance

Inheritance allows a class to acquire properties and behaviors of another class.

#### Types of Inheritance:

1. **Single Inheritance**: One derived class inherits from one base class
2. **Multiple Inheritance**: One derived class inherits from multiple base classes
3. **Multilevel Inheritance**: A derived class becomes a base class for another
4. **Hierarchical Inheritance**: Multiple derived classes from one base class
5. **Hybrid Inheritance**: Combination of multiple inheritance types

```cpp
// Base class
class Shape {
protected:
    std::string name{};
    std::string color{};
    
public:
    // Constructor
    Shape(const std::string& n, const std::string& c) : name{n}, color{c} {}
    
    // Virtual function (polymorphism)
    virtual double area() const {
        return 0.0;  // Default implementation
    }
    
    // Base class method
    void display() const {
        std::cout << "This is a " << color << " " << name << std::endl;
    }
};

// Derived class (Single inheritance)
class Circle : public Shape {
private:
    double radius{0.0};
    
public:
    // Constructor calls base constructor
    Circle(const std::string& c, double r) : Shape("Circle", c), radius{r} {}
    
    // Override base class method
    double area() const override {
        return 3.14159 * radius * radius;
    }
};

// Another derived class
class Rectangle : public Shape {
private:
    double width{0.0};
    double height{0.0};
    
public:
    Rectangle(const std::string& c, double w, double h) 
        : Shape("Rectangle", c), width{w}, height{h} {}
    
    double area() const override {
        return width * height;
    }
};
```

#### Using Inheritance:

```cpp
int main() {
    // Create objects of derived classes
    Circle redCircle("red", 5.0);
    Rectangle blueRect("blue", 4.0, 6.0);
    
    // Use base class methods
    redCircle.display();
    blueRect.display();
    
    // Use overridden methods
    std::cout << "Circle area: " << redCircle.area() << std::endl;
    std::cout << "Rectangle area: " << blueRect.area() << std::endl;
    
    // Polymorphism: Base class pointer can point to derived class objects
    Shape* shape1 = &redCircle;
    Shape* shape2 = &blueRect;
    
    std::cout << "Shape1 area: " << shape1->area() << std::endl;  // Calls Circle::area()
    std::cout << "Shape2 area: " << shape2->area() << std::endl;  // Calls Rectangle::area()
    
    return 0;
}
```

#### Inheritance Visualization:

```
           +-------------------+
           |      Shape        |
           +-------------------+
           | # name            |
           | # color           |
           +-------------------+
           | + area()          |
           | + display()       |
           +-------------------+
                  ↑
        ┌─────────┴───────────┐
        │                     │
+-------------------+  +-------------------+
|      Circle       |  |     Rectangle     |
+-------------------+  +-------------------+
| - radius          |  | - width           |
+-------------------+  | - height          |
| + area() override |  +-------------------+
+-------------------+  | + area() override |
                       +-------------------+
```

---

## Advanced Concepts

### Polymorphism

Polymorphism allows objects of different types to be treated through a common interface.

#### Types of Polymorphism:

1. **Compile-time (Static) Polymorphism**:
   - Function overloading
   - Operator overloading
   - Resolved at compile time

2. **Run-time (Dynamic) Polymorphism**:
   - Virtual functions
   - Resolved at runtime through virtual function tables

```cpp
// Base class
class Animal {
protected:
    std::string name{};
    
public:
    Animal(const std::string& n) : name{n} {}
    
    // Virtual function for dynamic polymorphism
    virtual void makeSound() const {
        std::cout << "Animal makes a sound" << std::endl;
    }
    
    // Non-virtual function
    void identify() const {
        std::cout << "I am an animal named " << name << std::endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    Dog(const std::string& n) : Animal(n) {}
    
    // Override the virtual function
    void makeSound() const override {
        std::cout << name << " says: Woof!" << std::endl;
    }
    
    // Dog-specific method
    void wagTail() const {
        std::cout << name << " wags tail" << std::endl;
    }
};

// Another derived class
class Cat : public Animal {
public:
    Cat(const std::string& n) : Animal(n) {}
    
    // Override the virtual function
    void makeSound() const override {
        std::cout << name << " says: Meow!" << std::endl;
    }
    
    // Cat-specific method
    void purr() const {
        std::cout << name << " purrs" << std::endl;
    }
};
```

#### Demonstrating Polymorphism:

```cpp
int main() {
    // Create objects
    Dog fido{"Fido"};
    Cat whiskers{"Whiskers"};
    
    // Direct calls to methods
    fido.makeSound();      // Fido says: Woof!
    whiskers.makeSound();  // Whiskers says: Meow!
    
    // Polymorphic behavior with base class pointers
    Animal* animal1 = &fido;
    Animal* animal2 = &whiskers;
    
    animal1->makeSound();  // Dynamic binding: Fido says: Woof!
    animal2->makeSound();  // Dynamic binding: Whiskers says: Meow!
    
    // Both call Animal::identify() (non-virtual function)
    animal1->identify();   // I am an animal named Fido
    animal2->identify();   // I am an animal named Whiskers
    
    // Not accessible through base class pointer:
    // animal1->wagTail();  // Error - Animal has no wagTail() method
    
    return 0;
}
```

### Virtual Functions

Virtual functions enable dynamic polymorphism in C++.

#### Key Concepts:

1. **Virtual Function Table (vtable)**: A table of function pointers created for each class with virtual functions
2. **vptr**: A hidden pointer added to objects of classes with virtual functions, pointing to their vtable
3. **Late Binding**: Function calls resolved at runtime based on the actual object type

```cpp
class Base {
public:
    // Virtual destructor - important for polymorphic classes
    virtual ~Base() {
        std::cout << "Base destructor" << std::endl;
    }
    
    // Virtual function
    virtual void display() const {
        std::cout << "Base class display" << std::endl;
    }
    
    // Non-virtual function
    void show() const {
        std::cout << "Base class show" << std::endl;
    }
};

class Derived : public Base {
public:
    // Destructor
    ~Derived() override {
        std::cout << "Derived destructor" << std::endl;
    }
    
    // Override virtual function
    void display() const override {
        std::cout << "Derived class display" << std::endl;
    }
    
    // Hide base class's show method (not override)
    void show() const {
        std::cout << "Derived class show" << std::endl;
    }
};
```

#### Virtual Function Importance:

```cpp
int main() {
    // Proper cleanup with polymorphic objects
    Base* ptr = new Derived();
    
    ptr->display();  // Calls Derived::display() due to virtual function
    ptr->show();     // Calls Base::show() as it's not virtual
    
    delete ptr;  // Without virtual destructor, Derived destructor wouldn't be called
                 // Output: "Derived destructor" followed by "Base destructor"
    
    return 0;
}
```

### Abstract Classes

Abstract classes provide interfaces for derived classes to implement.

#### Pure Virtual Functions:

A pure virtual function is declared with `= 0` and must be overridden by derived classes.

```cpp
// Abstract base class
class Vehicle {
protected:
    std::string brand{};
    
public:
    Vehicle(const std::string& b) : brand{b} {}
    
    // Pure virtual function - makes the class abstract
    virtual void start() const = 0;
    
    // Regular virtual function
    virtual void stop() const {
        std::cout << "Vehicle stopping" << std::endl;
    }
    
    // Non-virtual function
    void displayBrand() const {
        std::cout << "Brand: " << brand << std::endl;
    }
    
    // Virtual destructor
    virtual ~Vehicle() {}
};

// Concrete derived class
class Car : public Vehicle {
private:
    int doors{0};
    
public:
    Car(const std::string& b, int d) : Vehicle(b), doors{d} {}
    
    // Must implement the pure virtual function
    void start() const override {
        std::cout << brand << " car starting - Turn key and press gas" << std::endl;
    }
    
    // Optional: override regular virtual function
    void stop() const override {
        std::cout << brand << " car stopping - Apply brake" << std::endl;
    }
};

// Another concrete derived class
class Motorcycle : public Vehicle {
public:
    Motorcycle(const std::string& b) : Vehicle(b) {}
    
    // Must implement the pure virtual function
    void start() const override {
        std::cout << brand << " motorcycle starting - Push button" << std::endl;
    }
};
```

#### Using Abstract Classes:

```cpp
int main() {
    // Vehicle v("Generic");  // Error - cannot instantiate abstract class
    
    Car myCar("Toyota", 4);
    Motorcycle myBike("Harley");
    
    // Call methods directly
    myCar.start();      // Toyota car starting - Turn key and press gas
    myBike.start();     // Harley motorcycle starting - Push button
    
    // Polymorphic behavior
    Vehicle* vehicles[2];
    vehicles[0] = &myCar;
    vehicles[1] = &myBike;
    
    for (const auto& vehicle : vehicles) {
        vehicle->displayBrand();
        vehicle->start();
        vehicle->stop();
        std::cout << "---------------------" << std::endl;
    }
    
    return 0;
}
```

### Templates

Templates enable generic programming in C++, allowing you to write code that works with any data type.

#### Basic Function Templates:

```cpp
#include <iostream>
#include <string>

// Function template to find maximum of two values
template <typename T>
T maximum(T a, T b) {
    std::cout << "Determining maximum value" << std::endl;
    return (a > b) ? a : b;  // Return the larger value
}

// Function template with multiple type parameters
template <typename T1, typename T2>
void printPair(T1 a, T2 b) {
    std::cout << "Pair: " << a << ", " << b << std::endl;
}
```

#### Class Templates:

```cpp
// Class template for a simple storage container
template <typename T>
class Box {
private:
    T content{};  // Stores an item of type T
    bool hasContent{false};  // Tracks whether the box contains something
    
public:
    // Default constructor - creates an empty box
    Box() : hasContent{false} {
        std::cout << "Empty box created" << std::endl;
    }
    
    // Constructor with initial content
    Box(const T& item) : content{item}, hasContent{true} {
        std::cout << "Box created with content" << std::endl;
    }
    
    // Set content
    void put(const T& item) {
        content = item;
        hasContent = true;
        std::cout << "Item placed in box" << std::endl;
    }
    
    // Get content
    T get() const {
        if (!hasContent) {
            throw std::runtime_error("Box is empty");
        }
        return content;
    }
    
    // Check if box has content
    bool isEmpty() const {
        return !hasContent;
    }
};
```

#### Using Templates:

```cpp
int main() {
    // Using function templates
    int maxInt = maximum<int>(10, 20);           // Explicit type specification
    double maxDouble = maximum(3.14, 2.72);      // Type deduced from arguments
    std::string maxString = maximum("apple", "banana"); // Works with strings too!
    
    std::cout << "Max int: " << maxInt << std::endl;       // 20
    std::cout << "Max double: " << maxDouble << std::endl; // 3.14
    std::cout << "Max string: " << maxString << std::endl; // "banana"
    
    // Using mixed types with multiple type parameters
    printPair(100, "meters");               // int and string
    printPair("Temperature", 98.6);         // string and double
    
    // Using class templates
    Box<int> intBox{5};                     // Box containing an integer
    Box<std::string> stringBox;             // Empty box for strings
    Box<double> doubleBox{3.14159};         // Box containing a double
    
    std::cout << "Int box contains: " << intBox.get() << std::endl;
    std::cout << "Double box contains: " << doubleBox.get() << std::endl;
    
    stringBox.put("Hello, Templates!");
    std::cout << "String box contains: " << stringBox.get() << std::endl;
    
    // This would throw an exception if uncommented (box is empty)
    // Box<float> emptyBox;
    // float value = emptyBox.get();
    
    return 0;
}
```

#### Template Specialization:

Template specialization allows you to provide a specific implementation for particular data types.

```cpp
// General template
template <typename T>
void display(T value) {
    std::cout << "Generic display: " << value << std::endl;
}

// Specialization for char pointers (C-style strings)
template <>
void display<const char*>(const char* value) {
    std::cout << "String display: \"" << value << "\"" << std::endl;
}

// Usage:
// display(42);           // Generic display: 42
// display(3.14);         // Generic display: 3.14
// display("Hello");      // String display: "Hello"
```

#### Benefits of Templates:

1. **Code Reusability**: Write once, use with many types
2. **Type Safety**: Compiler checks types at compile-time
3. **Performance**: No runtime overhead compared to type-specific functions
4. **Flexibility**: Can work with user-defined types that support needed operations

#### Limitations and Considerations:

1. **Code Bloat**: Each instantiation generates separate code
2. **Compilation Time**: Can increase compilation time significantly
3. **Error Messages**: Can be cryptic and difficult to understand
4. **Interface Requirements**: Template parameters must support operations used in template

### Exception Handling

Exception handling provides a way to detect and react to runtime errors in a structured manner.

#### Basic Exception Handling:

```cpp
#include <iostream>
#include <stdexcept>
#include <string>

// Function that might throw an exception
double divide(double a, double b) {
    if (b == 0) {
        // Throw an exception when dividing by zero
        throw std::runtime_error("Division by zero");
    }
    return a / b;  // Normal case: return the division result
}

int main() {
    try {
        // Code that might throw exceptions
        double result1 = divide(10.0, 2.0);  // Works fine
        std::cout << "10 / 2 = " << result1 << std::endl;
        
        double result2 = divide(5.0, 0.0);   // This will throw
        std::cout << "This line will not execute" << std::endl;
    }
    catch (const std::runtime_error& e) {
        // Handler for runtime_error
        std::cout << "Caught exception: " << e.what() << std::endl;
    }
    catch (const std::exception& e) {
        // Handler for other standard exceptions
        std::cout << "Caught standard exception: " << e.what() << std::endl;
    }
    catch (...) {
        // Handler for any other exception
        std::cout << "Caught unknown exception" << std::endl;
    }
    
    std::cout << "Program continues after exception handling" << std::endl;
    return 0;
}
```

#### Custom Exceptions:

```cpp
// Custom exception class
class InsufficientFundsException : public std::exception {
private:
    std::string message;  // Custom error message
    
public:
    // Constructor with error message
    InsufficientFundsException(double available, double requested) {
        message = "Insufficient funds: Available: $" + 
                  std::to_string(available) + 
                  ", Requested: $" + 
                  std::to_string(requested);
    }
    
    // Override the what() method to return custom message
    const char* what() const noexcept override {
        return message.c_str();
    }
};

// Class using custom exceptions
class BankAccount {
private:
    double balance{0.0};  // Account balance
    std::string owner{};  // Account owner
    
public:
    // Constructor
    BankAccount(const std::string& name, double initialDeposit)
        : owner{name}, balance{initialDeposit} {}
    
    // Withdraw money - might throw exception
    void withdraw(double amount) {
        if (amount > balance) {
            throw InsufficientFundsException(balance, amount);
        }
        balance -= amount;
        std::cout << "Withdrew $" << amount << ". New balance: $" << balance << std::endl;
    }
    
    // Deposit money
    void deposit(double amount) {
        if (amount <= 0) {
            throw std::invalid_argument("Deposit amount must be positive");
        }
        balance += amount;
        std::cout << "Deposited $" << amount << ". New balance: $" << balance << std::endl;
    }
    
    // Get balance
    double getBalance() const {
        return balance;
    }
};
```

#### Using Custom Exceptions:

```cpp
int main() {
    try {
        BankAccount account{"John Doe", 100.0};
        
        account.deposit(50.0);           // Works fine
        account.withdraw(75.0);          // Works fine
        
        account.withdraw(100.0);         // This will throw InsufficientFundsException
    }
    catch (const InsufficientFundsException& e) {
        std::cout << "Transaction failed: " << e.what() << std::endl;
    }
    catch (const std::invalid_argument& e) {
        std::cout << "Invalid argument: " << e.what() << std::endl;
    }
    catch (const std::exception& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
    
    return 0;
}
```

#### Exception Safety Guarantees:

1. **Basic Guarantee**: Operations may fail, but no resources are leaked and objects remain in valid states
2. **Strong Guarantee**: Operations either succeed or have no effect (atomic operations)
3. **No-throw Guarantee**: Operations never throw exceptions

#### RAII and Exceptions:

Resource Acquisition Is Initialization (RAII) is crucial for exception safety:

```cpp
class ResourceManager {
private:
    Resource* resource{nullptr};  // Pointer to managed resource
    
public:
    // Constructor acquires resource
    ResourceManager() {
        resource = new Resource();
    }
    
    // Destructor releases resource
    ~ResourceManager() {
        delete resource;  // This will be called even if an exception occurs
    }
    
    // Use resource
    void useResource() {
        resource->doSomething();  // If this throws, destructor still cleans up
    }
};

void safeFunction() {
    ResourceManager manager;  // Resource acquired
    
    // If an exception occurs here, ResourceManager's destructor
    // will still be called when the stack unwinds
    manager.useResource();
    
    // Resource automatically released when manager goes out of scope
}
```

### Smart Pointers

Smart pointers automate memory management by handling object deletion when they go out of scope.

#### Types of Smart Pointers:

1. **`std::unique_ptr`**: Exclusive ownership model
2. **`std::shared_ptr`**: Shared ownership model with reference counting
3. **`std::weak_ptr`**: Non-owning observer of `std::shared_ptr`

```cpp
#include <iostream>
#include <memory>
#include <string>
#include <vector>

class Resource {
private:
    std::string name{};  // Resource name
    
public:
    // Constructor
    Resource(const std::string& n) : name{n} {
        std::cout << "Resource '" << name << "' created" << std::endl;
    }
    
    // Destructor
    ~Resource() {
        std::cout << "Resource '" << name << "' destroyed" << std::endl;
    }
    
    // Use the resource
    void use() const {
        std::cout << "Using resource '" << name << "'" << std::endl;
    }
    
    // Get resource name
    std::string getName() const {
        return name;
    }
};
```

#### Using `std::unique_ptr`:

```cpp
void demonstrateUniquePtr() {
    std::cout << "\n=== std::unique_ptr Demo ===" << std::endl;
    
    // Create unique_ptr with new Resource
    std::unique_ptr<Resource> res1 = std::make_unique<Resource>("Unique1");
    
    // Use the resource
    res1->use();
    
    // Transfer ownership (move)
    std::unique_ptr<Resource> res2 = std::move(res1);
    
    // res1 is now null
    if (!res1) {
        std::cout << "res1 is null after move" << std::endl;
    }
    
    // Use through new owner
    res2->use();
    
    // Unique pointers in containers
    std::vector<std::unique_ptr<Resource>> resources;
    resources.push_back(std::make_unique<Resource>("Unique2"));
    resources.push_back(std::make_unique<Resource>("Unique3"));
    
    // Unique pointers are automatically deleted when the function ends
    std::cout << "Function ending, resources will be destroyed" << std::endl;
}
```

#### Using `std::shared_ptr`:

```cpp
void demonstrateSharedPtr() {
    std::cout << "\n=== std::shared_ptr Demo ===" << std::endl;
    
    // Create shared_ptr
    std::shared_ptr<Resource> res1 = std::make_shared<Resource>("Shared1");
    std::cout << "Reference count: " << res1.use_count() << std::endl;  // Count: 1
    
    {
        // Create another shared_ptr pointing to the same resource
        std::shared_ptr<Resource> res2 = res1;
        std::cout << "Reference count: " << res1.use_count() << std::endl;  // Count: 2
        
        // Both pointers can use the resource
        res1->use();
        res2->use();
    } // res2 goes out of scope, but resource is not deleted yet
    
    std::cout << "After inner scope - Reference count: " << res1.use_count() << std::endl;  // Count: 1
    
    // Create a vector of shared_ptrs
    std::vector<std::shared_ptr<Resource>> resources;
    resources.push_back(res1);  // Adds another reference
    resources.push_back(std::make_shared<Resource>("Shared2"));
    
    std::cout << "Reference count after adding to vector: " << res1.use_count() << std::endl;  // Count: 2
    
    // Clear the vector
    resources.clear();
    std::cout << "Reference count after clearing vector: " << res1.use_count() << std::endl;  // Count: 1
    
    std::cout << "Function ending, last reference will be destroyed" << std::endl;
}
```

#### Using `std::weak_ptr`:

```cpp
void demonstrateWeakPtr() {
    std::cout << "\n=== std::weak_ptr Demo ===" << std::endl;
    
    // Create a shared_ptr
    std::shared_ptr<Resource> shared = std::make_shared<Resource>("WeakDemo");
    
    // Create a weak_ptr from the shared_ptr
    std::weak_ptr<Resource> weak = shared;
    
    std::cout << "Shared count: " << shared.use_count() << std::endl;  // Count: 1 (weak_ptr doesn't increase count)
    
    // Using a weak_ptr requires converting it to shared_ptr first
    if (auto temp = weak.lock()) {  // Create temporary shared_ptr if object exists
        std::cout << "Resource still exists: " << temp->getName() << std::endl;
        std::cout << "Shared count during lock: " << shared.use_count() << std::endl;  // Count: 2
    } else {
        std::cout << "Resource no longer exists" << std::endl;
    }
    
    // Reset the shared_ptr, which will delete the resource
    shared.reset();
    std::cout << "After resetting shared_ptr" << std::endl;
    
    // Try to use the weak_ptr again
    if (auto temp = weak.lock()) {
        std::cout << "Resource still exists" << std::endl;  // Won't execute
    } else {
        std::cout << "Resource no longer exists" << std::endl;  // Will execute
    }
}
```

#### Circular References:

```cpp
class Node {
public:
    std::string name{};
    std::shared_ptr<Node> next;  // Creates potential for circular reference
    std::weak_ptr<Node> weakNext;  // Breaks the circular reference
    
    Node(const std::string& n) : name{n} {
        std::cout << "Node " << name << " created" << std::endl;
    }
    
    ~Node() {
        std::cout << "Node " << name << " destroyed" << std::endl;
    }
};

void demonstrateCircularReference() {
    std::cout << "\n=== Circular Reference Demo ===" << std::endl;
    
    // Problem: Circular reference with shared_ptr
    {
        std::shared_ptr<Node> node1 = std::make_shared<Node>("One");
        std::shared_ptr<Node> node2 = std::make_shared<Node>("Two");
        
        // Create circular reference
        node1->next = node2;
        node2->next = node1;
        
        std::cout << "Nodes will not be deleted due to circular reference" << std::endl;
    } // Neither node1 nor node2 will be deleted despite going out of scope!
    
    // Solution: Using weak_ptr to break circular reference
    {
        std::shared_ptr<Node> node3 = std::make_shared<Node>("Three");
        std::shared_ptr<Node> node4 = std::make_shared<Node>("Four");
        
        // Use weak_ptr for one of the links
        node3->weakNext = node4;  // Doesn't increase reference count
        node4->weakNext = node3;  // Doesn't increase reference count
        
        std::cout << "Nodes will be properly deleted" << std::endl;
    } // Both nodes will be properly deleted
}
```

#### Smart Pointer Best Practices:

1. **Use `std::make_unique` and `std::make_shared`** rather than `new`
2. **Prefer `std::unique_ptr`** for exclusive ownership
3. **Use `std::shared_ptr`** only when multiple ownership is truly needed
4. **Use `std::weak_ptr`** to break circular dependencies
5. **Never use `delete`** on a pointer managed by a smart pointer
6. **Avoid `std::auto_ptr`** (deprecated in C++11, removed in C++17)
7. **Don't mix smart pointers with raw pointers** for the same resource

### Memory Management in OOP

Proper memory management is crucial in C++ OOP, especially when working with dynamic memory.

#### Dynamic Memory and Resource Management:

```cpp
class DynamicArray {
private:
    int* data{nullptr};  // Pointer to dynamic array
    size_t size{0};      // Size of the array
    
public:
    // Constructor
    DynamicArray(size_t s) : size{s} {
        data = new int[size]{};  // Allocate and initialize to zero
        std::cout << "Array of size " << size << " created" << std::endl;
    }
    
    // Destructor - clean up resources
    ~DynamicArray() {
        delete[] data;  // Free allocated memory
        data = nullptr; // Good practice to avoid dangling pointers
        std::cout << "Array deleted" << std::endl;
    }
    
    // Copy constructor - deep copy
    DynamicArray(const DynamicArray& other) : size{other.size} {
        data = new int[size];
        for (size_t i = 0; i < size; ++i) {
            data[i] = other.data[i];
        }
        std::cout << "Array copied" << std::endl;
    }
    
    // Copy assignment operator - deep copy
    DynamicArray& operator=(const DynamicArray& other) {
        if (this != &other) {  // Check for self-assignment
            delete[] data;     // Free old resource
            
            size = other.size;
            data = new int[size];
            for (size_t i = 0; i < size; ++i) {
                data[i] = other.data[i];
            }
        }
        std::cout << "Array assigned" << std::endl;
        return *this;
    }
    
    // Accessor method
    int get(size_t index) const {
        if (index >= size) {
            std::cerr << "Index out of range" << std::endl;
            return -1;
        }
        return data[index];
    }
    
    // Mutator method
    void set(size_t index, int value) {
        if (index >= size) {
            std::cerr << "Index out of range" << std::endl;
            return;
        }
        data[index] = value;
    }
    
    // Get size
    size_t getSize() const {
        return size;
    }
};
```

#### Using the Dynamic Memory Class:

```cpp
int main() {
    // Create dynamic array
    DynamicArray arr1(5);
    
    // Set values
    for (size_t i = 0; i < arr1.getSize(); ++i) {
        arr1.set(i, i * 10);
    }
    
    // Copy the array
    DynamicArray arr2 = arr1;  // Calls copy constructor
    
    // Modify the original
    arr1.set(0, 999);
    
    // Display both arrays
    std::cout << "arr1: ";
    for (size_t i = 0; i < arr1.getSize(); ++i) {
        std::cout << arr1.get(i) << " ";
    }
    std::cout << std::endl;
    
    std::cout << "arr2: ";
    for (size_t i = 0; i < arr2.getSize(); ++i) {
        std::cout << arr2.get(i) << " ";
    }
    std::cout << std::endl;
    
    // Assignment
    DynamicArray arr3(2);
    arr3 = arr1;  // Calls copy assignment operator
    
    return 0;
    // Destructors called automatically for arr1, arr2, and arr3
}
```

#### Memory Management Best Practices:

1. **Rule of Three/Five/Zero**:
   - If you define one of destructor, copy constructor, or copy assignment operator, you should define all three
   - In modern C++, consider move constructor and move assignment operator too (Rule of Five)
   - Or use RAII and standard library containers to avoid manual resource management (Rule of Zero)

2. **Smart Pointers**:
   - Use `std::unique_ptr` for exclusive ownership
   - Use `std::shared_ptr` for shared ownership
   - Use `std::weak_ptr` to break circular references with shared pointers

3. **RAII (Resource Acquisition Is Initialization)**:
   - Acquire resources in constructor
   - Release resources in destructor
   - Ensures proper cleanup even when exceptions occur

---

## Practice and Assessment

### Self-Assessment Questions

1. **Basic OOP**:
   - What are the four pillars of OOP? Explain each briefly.
   - How do classes and objects differ? Give an example.
   - What is the difference between public, private, and protected access modifiers?

2. **Constructors and Memory Management**:
   - What happens when you don't provide any constructor for a class?
   - Explain the Rule of Three/Five/Zero.
   - Why is a virtual destructor important in a base class?

3. **Inheritance and Polymorphism**:
   - What is the difference between early binding and late binding?
   - Why would you use abstract classes?
   - How does method overriding differ from method hiding?

4. **Templates and Exceptions**:
   - What is the advantage of using function templates over function overloading?
   - Explain why RAII is important for exception safety.
   - What are the three exception safety guarantees?

5. **Advanced Memory Management**:
   - When would you use `std::unique_ptr` vs. `std::shared_ptr`?
   - How do circular references cause memory leaks and how can they be prevented?
   - What is a smart pointer and why is it better than a raw pointer?

### Coding Challenges

1. **Class Design Challenge**:
   Create a `BankAccount` class hierarchy with:
   - An abstract `Account` base class
   - `CheckingAccount` and `SavingsAccount` derived classes
   - Appropriate constructors, methods, and polymorphic behavior

2. **Resource Management Challenge**:
   Implement a `SmartResource` class that:
   - Manages a dynamically allocated resource
   - Properly handles copying and assignment
   - Demonstrates the Rule of Five

3. **Generic Programming Challenge**:
   Create a template-based `Stack<T>` class that:
   - Provides push, pop, and peek operations
   - Properly handles underflow and overflow conditions
   - Includes a specialization for `Stack<char*>` that compares strings properly

4. **Exception Handling Challenge**:
   Implement a robust division calculator that:
   - Handles division by zero with custom exceptions
   - Provides different exception types for different error conditions
   - Demonstrates proper exception safety

## Additional Resources

1. **Books**:
   - "Effective C++" by Scott Meyers
   - "Modern C++ Design" by Andrei Alexandrescu
   - "The C++ Programming Language" by Bjarne Stroustrup

2. **Online Resources**:
   - [cppreference.com](https://en.cppreference.com/w/) - Complete C++ reference
   - [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines) - Best practices
   - [CppCon Conference Videos](https://www.youtube.com/user/CppCon) - Advanced topics

3. **Practice Platforms**:
   - [LeetCode](https://leetcode.com/) - Coding challenges
   - [Exercism C++ Track](https://exercism.io/tracks/cpp) - Guided learning
   - [C++ Insights](https://cppinsights.io/) - See what your code really does

## Final Quiz

```cpp
// What's wrong with this code?
class Resource {
private:
    int* data;
public:
    Resource() { data = new int(0); }
    ~Resource() { delete data; }
    void setValue(int value) { *data = value; }
    int getValue() const { return *data; }
};

int main() {
    Resource r1;
    Resource r2 = r1;  // What happens here?
    r2.setValue(100);
    std::cout << r1.getValue() << std::endl;
    return 0;
}
```

**Answer**: The code violates the Rule of Three by providing a destructor without also providing a copy constructor and copy assignment operator. When `r2 = r1` happens, a shallow copy is performed, so both objects point to the same `data`. When the destructor runs for both objects, the same memory is deleted twice (double-free), causing undefined behavior.

## Quick Quiz
```cpp
// What will be the output of the following code?
#include <iostream>

class Base {
public:
    virtual void show() { std::cout << "Base"; }
};

class Derived : public Base {
public:
    void show() override { std::cout << "Derived"; }
};

int main() {
    Base* b = new Derived();
    b->show();
    delete b;
    return 0;
}

// A) Base
// B) Derived
// C) Compilation error
// D) Runtime error
```
Answer: B) Derived