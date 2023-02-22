using System;
using System.Text.RegularExpressions;

namespace ValidPalandrome
{
    class Program
    {
        public static void Main(string[] args)
        {
            CheckPal("A man, a plan");

            Console.ReadKey();
        }

        public static void CheckPal(string s)
        {
            s = Regex.Replace(s, @"[^\w\d\s]", "");

            char[] CharArr = s.ToCharArray();

            List<char> NewArr = CharArr.ToList();

            int Len = NewArr.Count;

            List<char> FinalArr = new List<char>();

            for (int i = 0; i < Len; i++)
            {
                if (NewArr[i].ToString() == " ")
                {
                    NewArr.RemoveAt(i);
                    Len -= 1;
                }
            }

            for (int j = Len - 1; j > 0; j--)
            {
                FinalArr.Add(NewArr[j]);
            }

            if (NewArr == FinalArr)
            {
                Console.Write(true);
            }

            Console.Write(false);
        }
    }
}