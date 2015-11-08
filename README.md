# Ractive-AutoMounter
RactiveJS Auto-Mounter. Mount components in html without any JS

## Demo

http://vikramn.github.io/Ractive-AutoMounter/

## Getting Started

Include AutoMounter
```html
<script src="automounter.js" > </script>
```
Without AutoMounter - 
```html
<div id="container" ></div>
```
```javascript
var my_comps = { } ;
my_comps.tagger = new MyComponent({
  el: 'container',
  data: { 
    x : 100,
    y : 10,
    onSomething :funtion(e) { }
  }
});
```

With AutoMounter you can write your components as html 
```html
<div id="container" auto-mount="MyComponent" var-name="tagger" var-parent="my_comps">
  <data type="js">
  {
    x : 100,
    y : 10,
    onSomething :funtion(e) { }
  }
  </data>
</div>
```
```javascript
...
load components etc
...
// Fire mounting
AutoMounter.mount();
```


## Note
data tag's type attribute accepts 2 values => js and json

data type="js" uses "eval". Use this only if you trust your data object and it needs functions etc

data type="json" uses "JSON.parse". Safer bet.

## Pro-Tip

Add this to your css if you want to hide components from being rendered to the user before Ractive mounts.

```css
div[auto-mount] { display : none } 
```







