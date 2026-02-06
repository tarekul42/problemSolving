#include <stdio.h>

int find_min(int array[], int length)
{
    int min;

    min = array[0];

                     for (int i = 1; i < length; i++)
    {
        if (array[i] < min)
        {
            min = array[i];
        }
    }

    return min;
}

int main(void)
{

    int myArray[] = {9, 7, 9, 39, 7, 4};

    int myArray2[] = {8, 73, 7, 9, 7};

    int length = sizeof(myArray) / sizeof(myArray[0]);
    int length2 = sizeof(myArray2) / sizeof(myArray2[0]);

    int min = find_min(myArray, length);
    int min2 = find_min(myArray2, length2);

    printf("The minimum number from your array is: %d\n", min);
    printf("The minimum number from your array is: %d\n", min2);
    return 0;
}
