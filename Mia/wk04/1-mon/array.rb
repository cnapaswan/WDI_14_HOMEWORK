days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

#pop "Sunday" insert to index 0
days_of_the_week.insert(0, days_of_the_week.pop)

new_week = []
weekday = days_of_the_week.slice(1,5)
weekend = days_of_the_week.first,days_of_the_week.last
new_week.push(weekday,weekend)

new_week.pop
new_week[0].sort
