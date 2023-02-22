using System;
using System.Data;
using System.Globalization;
using System.Reflection.PortableExecutable;
using System.Text;

namespace RecursionDate
{
    class Program
    {
        public static void Main(string[] args)
        {
            DateTime lastRun = new DateTime(2023, 01, 20 ,13, 0, 0);
            DateTime currentDate = DateTime.Now;
            double hours = currentDate.Subtract(lastRun).TotalHours;

            CheckHours(hours);
            Console.ReadKey();
        }

        public static void CheckHours(double hours)
        {
            if(hours > 0)
            {
                DateTime CheckDate = DateTime.Now;
                DateTime dt = CheckDate.AddHours((double)-hours);
                hours--;
                StringBuilder path = new StringBuilder();
                StringBuilder path1 = new StringBuilder();

                path.Append(@$"C:\{dt.Year}")
                    .Append(@$"\0{dt.Month}")
                    .Append(@$"\{dt.Day}")
                    .Append(@$"\{dt.Hour}")
                    .Append(@$"\Bike4.txt");

                path1.Append(@$"C:\{dt.Year}\0{dt.Month}\{dt.Day}\{dt.Hour}\Bike4.txt");

                Console.WriteLine(path1.ToString());

                Console.WriteLine(@$"C:\{dt.Year}" + $@"\0{dt.Month}" + @$"\{dt.Day}" + @$"\{dt.Hour}" + @"\Bike4.txt");

                string[] lines = System.IO.File.ReadAllLines(path.ToString());

                Console.WriteLine(path.ToString());

                foreach (string line in lines)
                    Console.WriteLine(line);
            }
        }
    }
}