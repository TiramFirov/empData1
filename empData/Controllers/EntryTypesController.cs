using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using empData.Data;
using empData.Models;

namespace empData.Controllers
{
    public class EntryTypesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EntryTypesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: EntryTypes
        public async Task<IActionResult> Index()
        {
            return View(await _context.EntryTypes.ToListAsync());
        }

        // GET: EntryTypes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var entryType = await _context.EntryTypes
                .FirstOrDefaultAsync(m => m.Id == id);
            if (entryType == null)
            {
                return NotFound();
            }

            return View(entryType);
        }

        // GET: EntryTypes/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: EntryTypes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Code")] EntryType entryType)
        {
            if (ModelState.IsValid)
            {
                _context.Add(entryType);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(entryType);
        }

        // GET: EntryTypes/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var entryType = await _context.EntryTypes.FindAsync(id);
            if (entryType == null)
            {
                return NotFound();
            }
            return View(entryType);
        }

        // POST: EntryTypes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Code")] EntryType entryType)
        {
            if (id != entryType.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(entryType);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EntryTypeExists(entryType.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(entryType);
        }

        // GET: EntryTypes/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var entryType = await _context.EntryTypes
                .FirstOrDefaultAsync(m => m.Id == id);
            if (entryType == null)
            {
                return NotFound();
            }

            return View(entryType);
        }

        // POST: EntryTypes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var entryType = await _context.EntryTypes.FindAsync(id);
            _context.EntryTypes.Remove(entryType);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool EntryTypeExists(int id)
        {
            return _context.EntryTypes.Any(e => e.Id == id);
        }
    }
}
