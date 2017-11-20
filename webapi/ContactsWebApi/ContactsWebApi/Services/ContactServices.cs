using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Repositories;

namespace ContactsWebApi.Services
{
    public class ContactServices : IContactService
    {

        private readonly IContactRepository _contactRepository;

        public ContactServices(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindContacts()
        {

            return _contactRepository.GetAll();
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.GetById(id);
        }
    }
}
