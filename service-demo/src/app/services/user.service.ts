export class UserService {
  constructor() {}
  userData = [
    {
      name: 'Shani',
      company: 'Gemini',
      email: 'shani@gmail.com',
    },
    {
      name: 'Priyanshu',
      company: 'Gemini',
      email: 'priyanshu@gmail.com',
    },
    {
      name: 'Keshavi',
      company: 'Gemini',
      email: 'keshavi@gmail.com',
    },
    {
      name: 'Yshika',
      company: 'Gemini',
      email: 'yshika@gmail.com',
    },
  ];

  addUser(name: string, company: string, email: string){
    this.userData.push({name, company,})
  }
}
