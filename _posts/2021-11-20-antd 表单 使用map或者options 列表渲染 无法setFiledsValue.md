```jsx
      <Form.Item label="label">
          {getFieldDecorator('xxx', {
            initialValue: 1,
          })(
            <Radio.Group
              options={object2Array(COOPERATE_TYPES)}
            />
          )}
        </Form.Item>

```

```js

form.setFieldsValue({label:1}) // 不生效
```

原因： setFieldsValue 本质是调用外层 wrapper 的 setState。

同理不能在 componentWillReceiveProps 中调用 setFieldsValue