# Grados UI

Grados UI is a module that provides a set of Vue components and composables, to help you build beautiful and accessible user interfaces.

Its goal is to provide everything related to UI when building a Nuxt app. This includes components, icons, colors, dark mode and more.

## Toggle Component

```js
import { GuiToggle } from 'grados-ui';
```

### Example of usage
```html
<GuiToggle label="Open?" v-model:checked="isOpen" />
```

| Attributes  | Default Value | Type | Description |
| ------------- | ------------- | ------------- | ------------- |
| label  | empty  | String | Can use this attribute to add a label before the toggle button |
| v-model:checked  | false | Boolean | This is your variable that you whant reactive |

## Sliders Component

```js
import { GuiSliders } from 'grados-ui';
```

| Attributes  | Default Value | Type | Description |
| ------------- | ------------- | ------------- | ------------- |
| images  | null  | Array | This is the array of slides |
| has-links  | false | Boolean | This prop indicate if the images is going to have a link |

### Example of images array with out links
```json
  {
    "url": "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "alt": "IceCream"
  },
  {
    "url": "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "alt": "IceCream"
  },
  {
    "url": "https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "alt": "IceCream"
  }
```

### Example of images array with links 
```json
  {
    "url": "/",
    "image": {
      "url": "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "alt": "IceCream"
    }
  },
  {
    "url": "/",
    "image": {
      "url": "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "alt": "IceCream"
    }
  },
  {
    "url": "/",
    "image": {
      "url": "https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "alt": "IceCream"
    }
  }
```

### Example of usage
```html
<GuiSliders :images="sliders" :has-links="true" />
```


## Card Component

```js
import { GuiCard } from 'grados-ui';
```

### Example of usage
```html
<GuiCard>
  <template v-slot:header>
    <h2>Card Title</h2>
  </template>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, magni nesciunt. Dicta, consectetur alias? Saepe quidem cum praesentium ut! Magni magnam laudantium itaque asperiores? Dolores id neque ipsam corporis sequi!
  <template v-slot:footer>
    <p>Footer content</p>
  </template>
</GuiCard>
```

## Icons Component

This component use the icons of FontAwesome 5 you can see all the icons here: https://fontawesome.com/v5/search
```js
import { GuiIcon } from 'grados-ui';
```

### Example of usage
```html
<GuiIcon icon="fa-google" :brand="true" />
<GuiIcon icon="fa-vr-cardboard" color="#7e22ce"  />
```

| Attributes  | Default Value | Type | Description |
| ------------- | ------------- | ------------- | ------------- |
| icon  | empty  | String | Name of the icon to show |
| brand  | false | Boolean | This indicate if is a brand icon like: facebook, google, etc... |
| color  | #000 | String | This is the color of the icon can be HEX, RGB, RGBA, HSL, HWB  |