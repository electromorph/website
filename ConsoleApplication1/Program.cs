using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            //Load words from file
            var wordList = LoadWords(@"C:\_max\fileinput.txt");
            //Generate word count
            var duplicates = wordList.GroupBy(x => x).Select(x => new { Word = x.Key, Occurrences = x.Count() }).OrderBy(x => x.Word);
            //Remove count of white space
            var duplicates2 = duplicates.Select(x => x).Where(x => !string.IsNullOrWhiteSpace(x.Word));
            //Display results
            foreach (var dup in duplicates2)
            {
                Console.WriteLine(dup.Word + "\t" + dup.Occurrences.ToString());
            }
            Console.ReadKey();
        }

        /// <summary>
        /// Process file line-by-line and generate word list, splitting words by punctuation and spacing.
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns></returns>
        static List<string> LoadWords(string fileName)
        {
            List<string> words = new List<string>();

            using (StreamReader reader = File.OpenText(fileName))
            {
                while (!reader.EndOfStream)
                {
                    string line = reader.ReadLine();
                    var wordList = line.ToLower().Split(new char[] { ' ', ';', ':', ',', '.', '(', ')', '`', '\'' }).ToList<string>();
                    words.AddRange(wordList);
                }
            }
            return words;
        }
    }
}
