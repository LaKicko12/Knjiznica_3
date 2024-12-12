#include <stdio.h>
void main()
{
int totalNumberOfEntries, numberOfEntries;
printf("Koliko unosa zelis: ");
scanf("%d", &totalNumberOfEntries);
char roomNames[totalNumberOfEntries][100 + 1];
for (numberOfEntries = 1; numberOfEntries <= totalNumberOfEntries;
numberOfEntries++)
{
printf("Unesi naziv %d. prostorije: ", numberOfEntries);
scanf("%s", &roomNames[numberOfEntries - 1]);
}
printf("\n\nPOPIS PROSTORIJA\n");
int indeks;
for (indeks = 0; indeks < totalNumberOfEntries; indeks++)
{
printf("%d.\t%s\n", indeks + 1, roomNames[indeks]);