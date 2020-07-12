using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using empData.Data;
using empData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace empData.Controllers
{
    public class CalendarController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        

           
        
    }
}