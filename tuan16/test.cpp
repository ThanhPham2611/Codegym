#include <iostream>
#include <math.h>
using namespace std;

int main(){
    for(int i=0;i<5;i++){
        cout<<endl;
        for(int j=4;j>=i;j--){
            cout<<"*";
        }
        for(int j=0;j>i+1;j++){
            cout<<" ";
        }
    }
}    
