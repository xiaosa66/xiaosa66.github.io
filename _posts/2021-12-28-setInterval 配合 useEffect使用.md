```js
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