# drop-down
Package for making drop downs on websites.

# How It Works
There are 2 modes for a drop-down button, namely:
- Click
- Hover

There are only 2 functions you can use in this package:
```loadAllDropDowns(buttonQuery, click | hover)```, this function adds an event listener to every dropdown based on buttonQuery given. buttonQuery must be a css selector and in a string like `".my-selector#blah-blah-blah"`.
```loadDropDown(buttonQuery, click | hover)```, this functions the same as "loadAllDropDowns", but instead it only applies to one element based on buttonQuery given.

If you want to make drop-down button, make a container for it, like a div:
```
<div>
    <!-- Example -->
</div>
```
then add your drop-down button:
```
<div>
    <button class="drop-down">&#8801</button>
</div>
```
...followed by a `<nav>`:
```
<div>
    <button class="drop-down">&#8801</button>
    <nav></nav>
</div>
```

And to actually load it, you need to go to your website's script and either use "loadAllDropDowns" or "loadDropDown".
Example:
```
// To load all dropdowns, this automatically searches for all elements with a class "drop-down" inside it
loadAllDropDowns(".drop-down", click); // Click means the elements will only show when the button is clicked
loadAllDropDowns(".drop-down", hover); // Hover means the nav will only show when the button is hovered, and whilst the parent container still has the mouse cursor inside it.

// alternatively, this one will only apply to one drop-down button, but you can specify what element and what css selector it is
loadDropDown(".drop-down", click); // Click means the elements will only show when the button is clicked
loadDropDown(".drop-down", hover); // Hover means the nav will only show when the button is hovered, and whilst the parent container still has the mouse cursor inside it.
```
# Example page
Please go [here](https://tekksunn.github.io/drop-down-example) for better visual explanation.
