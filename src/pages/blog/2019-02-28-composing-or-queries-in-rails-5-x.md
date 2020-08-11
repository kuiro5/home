---
templateKey: post
title: Composing OR Queries in Rails 5.x
date: 2018-11-13T06:34:07.647Z
tags:
  - programming
---
Rails 5 introduced the #or method to ActiveRecord::Relation. Combining ActiveRecord::Relation#or with lazy evaluation, you can compose dynamic OR queries that are pure ActiveRecord and protected from SQL injection:

```
bikes = [
  { kind: 'unicycle', color: 'blue' },
  { kind: 'road', color: 'white' },
  { kind: 'mountain', color: 'green' }
]
bikes.map do |bike|
  Bike.where(kind: bike.kind, color: bike.color)
end.reduce(&:or)
```

<br>
Produces an Active Record query like:

``
Bike
  .where(kind: 'unicycle', color: 'blue)
  .or(Bike.where(kind: 'road', color: 'white'))
  .or(Bike.where(kind: 'mountain', color: 'green'))
```
<br>
Produces 1 SQL query like:

```
SELECT *
FROM bikes
WHERE (kind = 'unicycle' AND color = 'blue')
OR (kind = 'road' AND color = 'white')
OR (kind = 'mountain' AND color = 'green');
```
<br>
