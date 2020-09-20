```js
import QueryString from 'qs'
import request from "umi-request";

const upload = ({params={name:'name'}}) => {
  let uploadUrl = 'your url'
        uploadUrl = uploadUrl + '?' + QueryString.stringify(params)
        const formData = new FormData();
        formData.append('file', dataURLtoBlob(imageData), 'your file name.png');
        request(
            uploadUrl,
            {
                method: 'post',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(r => {
                // your operation after upload
            }
        )
}


const dataURLtoBlob = (dataurl) => {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

```