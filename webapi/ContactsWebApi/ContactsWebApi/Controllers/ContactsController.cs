﻿using ContactsWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Services;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace ContactsWebApi.Controllers
{
    [Route("api/contacts")]
    public class ContactsController : Controller
    {

        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            this._contactService = contactService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var contacts = _contactService.FindContacts();

            return new JsonResult(contacts);

        }

        [HttpGet("{id}")]
        public IActionResult GetById( int id)
        {
            var contact = _contactService.FindContactById(id);
                return new JsonResult(contact);
        }
    }
}
