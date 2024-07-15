from turtle import *

width(7)
color("blue")
forward(300)
left(90)

forward(300)
left(90)

forward(300)
left(90)

forward(300)
left(90)

#END OF SQUARE

#A DOOR

forward(120)
left(90)

color("red")
forward(100)
right(90)

forward(60)
right(90)

forward(100)
left(90)

#end door

#a roof

penup()
goto(300, 300)
pendown()

color("purple")
right(220)
forward(200)
left(80)
forward(200)

#end of roof

#a windows

penup()
goto(200, 60)
pendown()

color("green")
left(140)

forward(50)
left(90)

forward(50)
left(90)

forward(50)
left(90)

forward(50)
left(90)

#end 1 window 

#sratr 2 window

penup()
goto(100, 60)
pendown()

left(90)

forward(50)
left(90)

forward(50)
left(90)

forward(50)
left(90)

forward(50)

#end 2 window

#window 1

penup()
goto(50, 90)
pendown()

forward(50)

penup()
goto(75, 110)
pendown()

right(90)

forward(50)

#window 2

penup()
goto(250, 90)
pendown()

right(90)
forward(50)

penup()
goto(225, 110)
pendown()

left(90)
forward(50)

#window 3

penup()
goto(200, 270)
pendown()

left(90)

forward(50)
right(90)

forward(50)
right(90)

forward(50)
right(90)

forward(50)
right(90)

#window 4

penup()
goto(100, 270)
pendown()

right(90)

forward(50)
right(90)

forward(50)
right(90)

forward(50)
right(90)

forward(50)
right(90)

#window 4

penup()
goto(75, 270)
pendown()


forward(50)

penup()
goto(50, 250)
pendown()

left(90)
forward(50)

#window 3

penup()
goto(225, 270)
pendown()

right(90)
forward(50)

penup()
goto(200,250)
pendown()


left(90)
forward(50)




exitonclick()