using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.WindowsAzure.Storage.Table;


namespace ContactsWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private List<Contact> _contacts;
        private ContactContext _context;

        public ContactRepository(ContactContext context)
        {
            _contacts = new List<Contact>();
            _context = context;
            Initialize();
        }

        public List<Contact> GetAll()
        {
            // return _contacts;
            return _context.Contacts.ToList();
        }

        public Contact GetById(int id)
        {
           // return _contacts.FirstOrDefault(c => c.Id == id);
            return _context.Contacts.FirstOrDefault(c => c.Id == id);
        }

        public Contact AddContact(Contact contact)
        {
           /* int maxId = _contacts.Select(c => c.Id).Max();
            int newId = maxId + 1;
            contact.Id = newId;
            _contacts.Add(contact);
            return contact; */
            _context.Contacts.Add(contact);
            _context.SaveChanges();
            return contact;
        }

        public Contact DeleteContact(int id)
        {
           /* var deleteContact = _contacts.FirstOrDefault(t => t.Id == id);
            _contacts.Remove(deleteContact);
            return deleteContact; */
            var deleteContact = _context.Contacts.FirstOrDefault(t => t.Id == id);
            _context.Contacts.Remove(deleteContact);
            _context.SaveChanges();
            return deleteContact;


        }

        public Contact UpdateContact(int id,Contact contact)
        {
          /*  var updateContact = _contacts.IndexOf(_contacts.FirstOrDefault(t => t.Id == id));

            _contacts[updateContact] = contact;
            return contact;
            */

          var updateContact = _context.Contacts.FirstOrDefault(t => t.Id == id);
            updateContact.FirstName = contact.FirstName;
            updateContact.LastName = contact.LastName;
            updateContact.City = contact.City;
            updateContact.PhoneNumber = contact.PhoneNumber;
            updateContact.StreetAddress = contact.StreetAddress;
             
            


            _context.SaveChanges();
            
            return updateContact;


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
