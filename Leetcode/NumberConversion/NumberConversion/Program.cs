using System;
using System.Collections.Generic;

namespace NumberConversion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(ConvertNumbers("44", "33"));

            Console.ReadKey();
        }

        public static string ConvertNumbers(string num1, string num2)
        {
            long num1Len = num1.Length;
            long num2Len = num2.Length;
            int actualNumber = 0;

            List<char> numbers = new List<char>() 
            { 
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9'
            };

            char[] num1Arr = num1.ToCharArray();
            char[] num2Arr = num2.ToCharArray();

            double intNum1 = 0;
            double intNum2 = 0;

            for (int i = 0; i < num1Len; i++)
            {
                for(int j = 0; j < numbers.Count; j++)
                {
                    if (num1Arr[i].Equals(numbers[j]))
                    {
                        actualNumber = j;
                        intNum1 += actualNumber * Math.Pow(10, (num1Len - (i + 1)));
                        break;
                    }
                }
            }

            for (int i = 0; i < num2Len; i++)
            {
                for (int j = 0; j < numbers.Count; j++)
                {
                    if (num2Arr[i].Equals(numbers[j]))
                    {
                        actualNumber = j;
                        intNum2 += actualNumber * Math.Pow(10, (num2Len - (i + 1)));
                        break;
                    }
                }
            }

            return (intNum1 * intNum2).ToString();
        }

        public string Multiply(string num1, string num2)
        {
            long num1Len = num1.Length;
            long num2Len = num2.Length;

            char[] num1Arr = num1.ToCharArray();
            char[] num2Arr = num2.ToCharArray();

            double intNum1 = 0;
            double intNum2 = 0;

            for (int i = 0; i < num1Len; i++)
            {
                intNum1 += long.Parse(num1Arr[i].ToString()) * Math.Pow(10, (num1Len - (i + 1)));
            }

            for (int i = 0; i < num2Len; i++)
            {
                intNum2 += long.Parse(num2Arr[i].ToString()) * Math.Pow(10, (num2Len - (i + 1)));
            }

            return (intNum1 * intNum2).ToString();
        }
    }
}