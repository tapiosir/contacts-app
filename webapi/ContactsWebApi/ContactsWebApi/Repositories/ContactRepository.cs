﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private List<Contact> _contacts;

        public ContactRepository()
        {
            _contacts = new List<Contact>();
            Initialize();
        }

        public List<Contact> GetAll()
        {
            return _contacts;
        }

        public Contact GetById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        private void Initialize()
        {
            _contacts=  new List<Contact> {
                new Contact(1,"tapio","sirvio","5654","kuja","kaupunki"),
                new Contact(2,"tpio","srvio","564","uja","kaupungi")
            };
        }
    }

}
