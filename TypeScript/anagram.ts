/**
 * Check if two strings are anagrams of each other
 * @param str1 - First string
 * @param str2 - Second string
 * @returns true if strings are anagrams, false otherwise
 */
function isAnagram(str1: string, str2: string): boolean {
    // Remove spaces and convert to lowercase
    const normalized1 = str1.replace(/\s/g, '').toLowerCase();
    const normalized2 = str2.replace(/\s/g, '').toLowerCase();
    
    // If lengths are different, they can't be anagrams
    if (normalized1.length !== normalized2.length) {
        return false;
    }
    
    // Sort characters and compare
    const sorted1 = normalized1.split('').sort().join('');
    const sorted2 = normalized2.split('').sort().join('');
    
    return sorted1 === sorted2;
}

function main(): void {
    console.log("=== Anagram Checker ===\n");
    
    // Test cases
    const testCases: [string, string][] = [
        ["listen", "silent"],
        ["triangle", "integral"],
        ["hello", "world"],
        ["typescript", "scripttepy"],
        ["The Morse Code", "Here come dots"]
    ];
    
    testCases.forEach(([str1, str2]) => {
        const result = isAnagram(str1, str2);
        console.log(`"${str1}" and "${str2}" are ${result ? '' : 'NOT '}anagrams`);
    });
    
    // For Node.js interactive mode (uncomment if running with Node.js)
    /*
    console.log("\n--- Interactive Mode ---");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    function askQuestion(): void {
        rl.question("\nEnter first word (or 'quit' to exit): ", (word1: string) => {
            if (word1.toLowerCase() === 'quit') {
                rl.close();
                return;
            }
            
            rl.question("Enter second word: ", (word2: string) => {
                if (isAnagram(word1, word2)) {
                    console.log(`✓ "${word1}" and "${word2}" are anagrams!`);
                } else {
                    console.log(`✗ "${word1}" and "${word2}" are NOT anagrams`);
                }
                askQuestion();
            });
        });
    }
    
    askQuestion();
    */
}

// Export for module usage
export { isAnagram };

// Run main function
main();
