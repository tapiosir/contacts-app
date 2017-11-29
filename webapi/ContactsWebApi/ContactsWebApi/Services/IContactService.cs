using ContactsWebApi.Models;
using System.Collections.Generic;

namespace ContactsWebApi.Services
{
    public interface IContactService
   {
       List<Contact> FindContacts();
       Contact FindContactById(int id);
        Contact AddContact(Contact contact);
       Contact DeleteContact(int id);
       Contact UpdateContact(int id, Contact contact);

   }
}
