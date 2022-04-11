var yourself = {
    fibonacciCache: new Map(),
    fibonacciRecursion: function(n ) {
      if (n <= 1) {
          return n;
      } else {
          return this.fibonacciMemoized(n - 1) +
            this.fibonacciMemoized(n - 2);
      }
    },
    fibonacci: function (n) {
      if (!this.fibonacciMemoized) this.fibonacciMemoized = this.memoize(this.fibonacciRecursion);
      return this.fibonacciMemoized(n);
    },
    memoize: function(fn) {
      return (n) => {
        const memoValue = this.fibonacciCache.get(n);
        if (!memoValue) {
          const  result = fn.call(this, n);
          this.fibonacciCache.set(n, result);
          return result;
        }
        return memoValue;
      }
    },
  };

  

  for (let index = 0; index < 10; index++) {
    console.log(index+'-'+yourself.fibonacci(index));
  }
