using System;
using System.Collections.Generic;

namespace program
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[] Arr = new int[] {8, 9, 9, 9};

            int[] FinalArr = PlusOne(Arr);

            foreach (var i in FinalArr){
                Console.Write(i);
            }

            Console.ReadKey();
        }

        public static int[] PlusOne(int[] Arr)
        {
            List<int> Numbers = Arr.ToList();

            int NumLen = Numbers.Count;

            if (Numbers[NumLen - 1] != 9)
            {
                Numbers[NumLen - 1]++;
            }
            else if (NumLen == 1 && Numbers[NumLen - 1] == 9)
            {
                Numbers[NumLen - 1] = 1;
                Numbers.Add(0);
            }
            else
            {
                for (int i = NumLen - 1; i >= 0; i--)
                {
                    if (Numbers[i] != 9 && NumLen != i)
                    {
                        for (int j = i + 1; j < NumLen; j++)
                        {
                            Numbers[j] = 0;
                        }
                        Numbers[i]++;
                        break;
                    }
                    else if (Numbers[i] == 9 && i == 0)
                    {
                        for (int j = i + 1; j < NumLen; j++)
                        {
                            Numbers[j] = 0;
                        }
                        Numbers[i] = 1;

                        Numbers.Add(0);
                        break;
                    }
                }
            }

            int[] FinalArr = Numbers.ToArray();

            return FinalArr;
        }
    }
}