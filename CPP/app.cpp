// Constants values Set in Stone

#include <iostream>

int main(){
  const int MaxValue = 100; // Constant value for maximum value
  constexpr int MaxValue2 = 100; // Constant expression for maximum value
  #define MAX_VALUE 100 // Preprocessor macro for maximum value

}

// The above code demonstrates three different ways to define constant values in C++:
// 1. Using `const` keyword: This creates a constant variable that cannot be modified after its initialization.
// 2. Using `constexpr` keyword: This creates a constant expression that can be evaluated at compile time. It is often used for constants that are known at compile time and can be used in template arguments or array sizes.
// 3. Using `#define` preprocessor directive: This creates a macro that replaces occurrences of the macro name with its value during preprocessing. It is not type-safe and does not have scope like the other two methods.
// which can be a greate way to define constants in C++.
// However, it is generally recommended to use `const` or `constexpr` for defining constants in modern C++ code, as they provide better type safety and scoping rules. The `#define` directive is more commonly used for defining macros or conditional compilation flags.
// In summary, the choice of which method to use depends on the specific use case and coding style preferences. However, `const` and `constexpr` are generally preferred for defining constants in C++.