using FizzBuzz_MVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Globalization;

namespace FizzBuzz_MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public void fizzBuzz(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                var output = "";

                if (arr[i] % 3 == 0)
                {
                    output += "Fizz";
                }

                if (arr[i] % 5 == 0)
                {
                    output += "Buzz";
                }

                if (arr.Length == 0)
                {
                    output += "Invalid Item";
                }
            }
        }
    }
}
