"use strict"; 

    class Math {

       constructor(number) {

           this.number = number;

       }

       /* This function will return the square of the number that the constructor of this class receives.*/

       square(){
       
          return this.number * this.number;

       }

    }

    module.exports = Math;