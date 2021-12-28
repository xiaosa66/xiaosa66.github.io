```js
let setIntervalHandler;
  useEffect(() => {
    setIntervalHandler = setInterval(() => {
      setReadTimeout(readTimeout - 1);
      if (readTimeout <= 0) {
        setIsScrolled(true);
        clearInterval(setIntervalHandler);
      }
      console.log('readTimeout', readTimeout);
    }, 1000);
    return () => clearInterval(setIntervalHandler);
  }, [readTimeout, setIntervalHandler]);
```

or 性能更优解

```js
  const intervalMemo = useCallback(() => {
    setIntervalHandler = setInterval(() => {
      setReadTimeout(x => x - 1);
      if (readTimeout <= 1) {
        setIsScrolled(true);
        clearInterval(setIntervalHandler);
      }
    }, 1000);
  }, []);
  useEffect(() => {
    intervalMemo();
  }, []);

```