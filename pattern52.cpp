#include<iostream>
using namespace std;

int main()
{
    int i, j, n=5;
    
    for(i=0; i<n; i++)
    {
        for(j=0; j<i; j++)
        {
            cout<<" ";
        }
        for(j=0; j< (2*(n-i)-1); j++)
        {
            cout<<"*";
        }
        cout<<"\n";
    }
    for(i=n-2; i>=0; i--){
        for(j=0; j<i; j++)
        {
            cout<<" ";
        }
        for(j=0; j<(2*(n-i)-1); j++)
        {
            cout<<"*";
        }
        cout<<"\n";
    }
}
