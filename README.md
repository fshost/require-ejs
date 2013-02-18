﻿### require-ejs

Allows requiring [EJS](https://github.com/visionmedia/ejs) template files as modules in Node.js.  Requiring any file with an .ejs extension returns a compiled EJS template function.

#### installation

npm install require-ejs

#### about

I thought this might be useful if using Node.js as part of a build framework, and after noticing that in the [original EJS](https://github.com/visionmedia/ejs) source there was code for registering an EJS file, but that it did not work on my PC, I tweaked the EJS compiler source and wrote this little extension.

#### todo

Stack traces need to be mapped correctly for include file templates.

#### MIT License
Copyright (c) 2013 Nathan Cartwright

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.