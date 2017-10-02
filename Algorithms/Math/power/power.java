/* package whatever; // don't place package name! */

import java.io.*;

class myCode
{
    public static void main (String[] args) throws java.lang.Exception
    {
        System.out.println(Power.compute(10, 4));
    }
}


class Power
{
    private static int result = 1;
    private static int base;
    private static int exponent;


    public static int compute(int b, int e){
        base = b;
        exponent = e;


        multiply(0);


        return result;
    }

    private static void multiply(int count){
        if(count == e){
            return;
        } else {
            result *= b;
            multiply(count + 1);
        }
    }

}
