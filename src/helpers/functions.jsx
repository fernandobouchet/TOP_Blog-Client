const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const hasThisError = (errors, inputName) => {
  return errors.find((err) => err.param === inputName);
};

export { arrayBufferToBase64, hasThisError };
