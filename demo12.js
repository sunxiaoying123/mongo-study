db.createUser({
  user:'xiaoying',
  pwd: '1212',
  customData: {
    name: '小英',
    email: 'sun_xiao_ying@sina.com',
    age: 29
  },
  roles: [
    {
      role: 'readWrite',
      db: 'company'
    },
    'read'
  ]
})

// db.system.users.remove({user: 'xiaoying'})