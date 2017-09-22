![ag-word-cloud](https://user-images.githubusercontent.com/4659608/30762233-d4a36136-9fe9-11e7-8788-831558cae077.png)

[![NPM](https://nodei.co/npm/angular4-word-cloud.png?compact=true)](https://nodei.co/npm/angular4-word-cloud/)
[![Coverage Status](https://coveralls.io/repos/github/alhazmy13/Angular4-word-cloud/badge.svg?branch=master)](https://coveralls.io/github/alhazmy13/Angular4-word-cloud?branch=master)



# Angular4 Word Cloud

## Installation

To install this library, run:

```bash
$ npm install angular4-word-cloud --save
$ npm install d3 --save
```

## API

### Import
```typescript


// In your App's module:
imports: [
   AgWordCloudModule.forRoot()
]
```

### How to use
There are one directive for word cloud: `ag-word-cloud`, to use it just add this block on your html file:

```html
<div AgWordCloud 
	#word_cloud_chart=ag-word-cloud 
	[wordData]="word_cloud">
	</div>
```

### Properties


- `wordData` (`Array<WordCloudData> | WordCloudData[]`) -  set of words, it should be `Array<WordCloudData>` and each object must have a `text` and `size`;
- `colors` (`?Array<string> | string[]`) - data colors, will use default and|or random colors if not specified.
- `options` (`?WordCloudOptions`) - word cloud options and there are two object you can pass it `settings` and `margin`.
    - `setting` containes `minFontSize` and `maxFontSize` for word sets.
    - `margin` of canves `top, left, bottom, right`, Default values is 10.

- `width` and `height` of canvas, the Default value for width is the width of the container, and the height equals the width * 0.75.

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/alhazmy13/Angular4-word-cloud/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

## License

MIT © [Abdullah Alhazmy](mailto:me@alhazmy13.net)
