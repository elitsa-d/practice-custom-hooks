export default async function request(url, method, data) {
  let options = {};

  if (method) {
    options.method = method;
  }

  if (data) {
    options.headers = {
      "cotnent-type": "application/json",
    };

    options.body = JSON.stringify(data);
  }

  const response = await fetch(url);
  console.log(response);
  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}
