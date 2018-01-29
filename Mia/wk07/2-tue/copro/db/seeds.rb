=begin

Project.delete_all
User.delete_all

arr1 = ['mistyrose', 'fairy', 'cake', 'candy']
arr2 = ['pudding', 'muffin', 'floss', 'crush']

user = User.find_by(email: 'mia@email.com')

10.times do
  Project.create(title: "#{arr1.sample} #{arr2.sample}",
  user_id: user.id
  )
end

=end

