const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    mood: '',
  };

// pole mood

user.mood = 'happy'
console.log(user.mood);

// user name

user.hobby = 'skydiving'
console.log(user.hobby);

// znachenie premium-flase

user.premium = false
console.log(user.premium);

// for ... of

for (key in user) {
  console.log('user', key);
}