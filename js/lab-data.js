// lab-data.js
export const snippets = [
    //Overview Page
    {
        id: "overview",
        title: "Playground Overview",
        category: "Getting Started",
        type: "note", // Flags that this is an overview, not an exercise
        prompt: `Personal vanilla JavaScript workshop tracking practical implementations, algorithmic utilities, and native browser APIs without frameworks.`,
        code: `// Current focus
char focus[] = "C Programming";

typedef struct {
    char milestone[50];
    char status[10];
} Milestones;

//Miletones
Milestones milestone[3]{
    {"Basic", "In-Progress"},
    {"Medium", "Upcoming"},
    {"Expert", "Upcoming"}
}`,
        output: "Select a topic from the sidebar to inspect the implementation."
    },
    //Test Demo- 1
    {
        "id": "c-unique-elements",
        "title": "Remove Duplicate Elements from Array in C",
        "category": "Array",
        "difficulty": "Beginner",
        "code": `#include <stdio.h>

int remove_duplicates(int arr[], int n) {
    if (n == 0 || n == 1) return n;
    
    int unique_idx = 0;
    for (int i = 0; i < n; i++) {
        int is_duplicate = 0;
        for (int j = 0; j < unique_idx; j++) {
            if (arr[i] == arr[j]) {
                is_duplicate = 1;
                break;
            }
        }
        if (!is_duplicate) {
            arr[unique_idx++] = arr[i];
        }
    }
    return unique_idx;
}

int main() {
    int numbers[] = {1, 2, 2, 3, 4, 4, 5, 1};
    int n = sizeof(numbers) / sizeof(numbers[0]);
    
    int new_size = remove_duplicates(numbers, n);
    
    for (int i = 0; i < new_size; i++) {
        printf("%d ", numbers[i]);
    }
    return 0;
}`,
        "prompt": "Given an integer array containing duplicate numbers, shift or copy the elements to remove all duplicates, and return the new size of the array.",
        "output": "1 2 3 4 5 "
    },
    {
        id: "even-number-in-1-to-10",
        title: "For loop to find even numbers in 1 to 10",
        category: "Loops - for loop",
        difficulty: "Beginner",
        prompt: "The loop counter starts at 2 and increments by 2 each time. This completely bypasses the need to check every single number using arithmetic conditions.",
        code: `#include <stdio.h>

int main() {
    printf("Even numbers from 1 to 10:\n");
    
    // Start at 2, and increase by 2 in each step
    for (int i = 2; i <= 10; i += 2) {
        printf("%d\n", i);
    }

    return 0;
}`,
        output: `
Even numbers from 1 to 10:
2
4
6
8
10`
    }
];