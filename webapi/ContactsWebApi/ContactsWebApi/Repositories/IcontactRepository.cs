﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Repositories
{
    public interface IContactRepository
    {
        List<Contact> GetAll();
        Contact GetById(int id);

        Contact AddContact(Contact contact);

        Contact DeleteContact(int id);

        Contact UpdateContact(int id, Contact contact );
        //todo add, update, delete
    }
}
