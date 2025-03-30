// Data Types

#include<iostream> // Including the iostream library for input and output operations
#include<string> // Including the string library for string operations
using namespace std; // Using the standard namespace to avoid prefixing std:: before every standard library function

int main(){ // main function and the entry point of the program
  // Integer 
  int a = 5; // Integer variable

  // float 
  float b = 5.5; // Float variable  

  // double
  double c = 5.55; // Double variable

  // char 
  char d = 'A'; // Character variable

  // string 
  string str = "Hello"; // String variable

  // boolean
  bool e = true; // Boolean variable

  // Printing the variables
  cout << "Integer : " << a << endl; // Printing Integer variable
  cout << "Float : " << b << endl; // Printing Float variable
  cout << "Double : " << c << endl; // Printing Double variable
  cout << "Char : " << d << endl; // Printing Character variable
  cout << "String : " << str << endl; // Printing String variable
  cout << "Boolean : " << e << endl; // Printing Boolean variable
}



// explanation about data types
// Integer: A data type that represents whole numbers, both positive and negative.
// Float: A data type that represents decimal numbers with single precision.
// Double: A data type that represents decimal numbers with double precision.
// Char: A data type that represents a single character, enclosed in single quotes.
// String: A data type that represents a sequence of characters, enclosed in double quotes.
// Boolean: A data type that represents a truth value, either true or false.

// What is the main difference between float and double?
// The main difference between float and double is the precision and range of values they can represent. Float is a single-precision floating-point data type, while double is a double-precision floating-point data type. This means that double can represent a wider range of values and has more decimal places than float. In general, double is preferred for calculations that require high precision, while float is used for less precise calculations.

//  for example
// float f = 5.5f; // Float variable with 'f' suffix
// double d = 5.5; // Double variable without 'd' suffix
// The 'f' suffix indicates that the number is a float, while the absence of a suffix indicates that the number is a double. This is important because it can affect the precision of calculations and the amount of memory used to store the variable.

// The size of float and double in C++ is platform-dependent, but typically float is 4 bytes and double is 8 bytes. This means that double can store larger numbers and more decimal places than float. However, using double can also increase memory usage and processing time, so it's important to choose the appropriate data type based on the requirements of your program.


// In summary, float and double are both used to represent decimal numbers in C++, but they differ in precision, range, and memory usage. Float is typically used for less precise calculations, while double is used for more precise calculations. It's important to choose the appropriate data type based on the requirements of your program.

// Character and String in C++
// In C++, a character is represented using the char data type, which can store a single character. A string, on the other hand, is represented using the string class, which can store a sequence of characters. The main difference between char and string is that char can only store one character, while string can store multiple characters.

// For example, to declare a character variable, you can use the following syntax:
// char c = 'A'; // Character variable
// To declare a string variable, you can use the following syntax:
// string str = "Hello"; // String variable
// The string class provides various member functions to manipulate strings, such as length(), substr(), and find(). You can also concatenate strings using the + operator, and compare strings using the == operator.
