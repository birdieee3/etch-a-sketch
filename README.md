# etch-a-sketh exercise for the Odin Project

## 1

create a 16x16 grid of square divs inside the #container div (using js)

make them appear as a grid using flexbox in .css file

*careful with borders and margins as they can adjust the size of the squares

## 2

set up a hover effect so that the divs change color when mouse passes over them
=> can set up event listeners
=> on event, add class to the div (and probably not toggle buyt keep the class)

## 3

add button on top of screen that sends the user a popup asking for the number of squares per side
once entered, the existing grid should be removed, and a new grid should be generated
in the same total space as before (e.g., 960px wide), thus creating a new sketch pad

max for this input should be 100

potential research tips: \<button> tags, prompts


## extra credit

randomize the squares' rgb values with each interaction rather than same color

progressive darkening where each interaction darkens the square by 10%;
fully black (or completely colored) square in ten interactions
=> for this, css opacity property