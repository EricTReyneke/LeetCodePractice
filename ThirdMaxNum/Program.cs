namespace ThirdMaxNum
{
    class Program{
        public static void Main(){
            int[] numArr = new int[]{2,2,3,1};
            Console.WriteLine(FetchThirdMax(numArr));

            Console.ReadKey();
        }

        public static int FetchThirdMax(int[] nums){
            HashSet<int> numsHash = nums.ToHashSet();
            List<int> numsList = numsHash.ToList();
            int len = numsList.Count;
            int counter = 0;

            if (len > 2)
            {
                while (counter < 2)
                {
                    numsList.Remove(numsList.Max());
                    counter++;
                }
            }
            else
            {
                return numsList.Max();
            }

            return numsList.Max();
        }
    }
}