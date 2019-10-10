![ag-word-cloud](https://user-images.githubusercontent.com/4659608/30762233-d4a36136-9fe9-11e7-8788-831558cae077.png)

[![NPM](https://nodei.co/npm/angular4-word-cloud.png?compact=true)](https://nodei.co/npm/angular4-word-cloud/)


[![Coverage Status](https://coveralls.io/repos/github/alhazmy13/Angular4-word-cloud/badge.svg?branch=master)](https://coveralls.io/github/alhazmy13/Angular4-word-cloud?branch=master)
[![npm version](https://badge.fury.io/js/angular4-word-cloud.svg)](http://badge.fury.io/js/angular4-word-cloud)
[![GitHub issues](https://img.shields.io/github/issues/alhazmy13/angular4-word-cloud.svg)](https://github.com/mattlewis92/angular-calendar/issues)
[![GitHub stars](https://img.shields.io/github/stars/alhazmy13/angular4-word-cloud.svg)](https://github.com/alhazmy13/angular4-word-cloud/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/alhazmy13/angular4-word-cloud/master/LICENSE)


# Angular4 Word Cloud
## Links:

+ [Live Demo](https://embed.plnkr.co/hSoU4QbvVmKCdnG9Tw1h/)
+ [Documentation](https://alhazmy13.github.io/Angular4-word-cloud/index.html)
+ [Android Version](https://github.com/alhazmy13/AndroidWordCloud)


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

import {AgWordCloudModule} from 'angular4-word-cloud';

imports: [
   AgWordCloudModule.forRoot()
]
```

Then add add the script to `.angular-cli.json`


```json
"scripts": [
      ***
        "../node_modules/angular4-word-cloud/d3.min.js"
      ]
```

### How to use
There are one directive for word cloud: `ag-word-cloud`, to use it just add this block on your html file:

```html
<div AgWordCloud 
	#word_cloud_chart=ag-word-cloud 
	[wordData]="word_cloud"
	 [options]="options">
	</div>
```


```.ts
// Create Work Cloud Data Array
wordData: Array<AgWordCloudData> = [// Words];
// Word Cloud Options
options = {
	settings: {
		minFontSize: 10,
		maxFontSize: 100,
		textRotation: 0 // see below
	},
	margin: {
		top: 10,
		right: 10,
		bottom: 10,
		left: 10
	},
	labels: true // false to hide hover labels
};
```

### Properties


- `wordData` (`Array<WordCloudData> | WordCloudData[]`) -  set of words, it should be `Array<WordCloudData>` and each object must have a `text` and `size`;
- `colors` (`?Array<string> | string[]`) - data colors, will use default and|or random colors if not specified.
- `options` (`?WordCloudOptions`) - word cloud options and there are two object you can pass it `settings` and `margin`.
    * `settings`
			- `minFontSize`
			- `maxFontSize`
			- `textRotation` (`?number | RotationFunction`):
				accepts a number (angle) which all words in the cloud will be rotated at (ie 0 means no rotation). Alternatively a function can be passed which returns a number (to be called on each word in the cloud)
    * `margin` of canvas `top, left, bottom, right`, Default values is 10.
    * `labels` show Size label at the bottom

- `width` and `height` of canvas, the Default value for width is the width of the container, and the height equals the width * 0.75.

### Events

 - `wordClick` Returns the word clicked

 It can be setted as:

 <div AgWordCloud
   [wordData]="wordData"
   [options]="options"
   (wordClick)="onWordCloudClick($event)" >
 </div>

### To Update it dynamically 
First of all you need to add a reference for your div:

```html
<div WordCloud #word_cloud_chart=word-cloud [wordData]="word_cloud" [height]="300"></div>
```

Update your component to this:

```.ts
export class MyComponent implements ..... {
...
	@ViewChild('word_cloud_chart') word_cloud_chart: WordCloudDirective;
	word_cloud: Array<WordCloudData> = [];
.....
	updateWordCloud(wordCloud: WordCloud) {
		this.word_cloud.length = 0;
		const temp = wordCloud.words.map(res => {
			return {text: res.word, size: res.score};
		});
    	this.word_cloud.push(...temp);
		setTimeout(() => {
			this.word_cloud_chart.update();
		});
	}
```

When ever you ready just call `updateWordCloud` .
## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/alhazmy13/Angular4-word-cloud/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

## License

MIT © [Abdullah Alhazmy](mailto:me@alhazmy13.net)
