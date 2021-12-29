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
  }, [readTimeout]);
```

or 性能更优解

```js
  const intervalMemo = () => {
    setIntervalHandler = setInterval(() => {
      setReadTimeout(readTimeout => {
        if (readTimeout <= 1) {
          setIsScrolled(true);
          clearInterval(setIntervalHandler);
        }
        return readTimeout - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    intervalMemo();
  }, []);


```

or 

```js

const [count, setCount] = useState(0);

// 通过 ref 来记忆最新的 count
const countRef = useRef(count);
countRef.current = count;

useEffect(() => {
  const timer = setTimeout(() => {
    console.log(countRef.current)
  }, 3000);
  return () => {
    clearTimeout(timer);
  }
}, [])

```