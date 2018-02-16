# p5js_chanceops
Run at https://nikhilvdk.github.io/p5js_chanceops/

When I thought of algorithmic design and chance operations, I immediately thought of fractals and their recursive complexity. I was inspired to create fractal trees using recursion with a random number of branches. Initially, I had difficulties with the processing complexity of random recursive calls on each draw() run, so I decided to precompute the random trees on every reload, saving them to a canvas that was displayed at drawtime.
To add to the aesthetic of a forest, I created randomly sized, shaped and colored "leaves" that fall from the sky using arrays and loops.
