using System;

class Program
{
    static void Main()
    {
        // Personal Information
        string name = "Pawan Lekurwale";
        int age = 23;
        string location = "Pune";
        string aspiration = "Aspiring SDE 1";

        // Displaying Information
        Console.WriteLine("------ Personal Details ------");
        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Age: {age}");
        Console.WriteLine($"Location: {location}");
        Console.WriteLine($"Career Aspiration: {aspiration}");
        
        Console.WriteLine("\nPress any key to exit...");
        Console.ReadKey();
    }
}
