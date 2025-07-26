export function request({
  url,
  method = "get",
  tags,
  revalidate,
  body,
  dataType,
  params
}: {
  url: string;
  method?: string;
  tags?: string[];
  revalidate?: false;
  body?: any;
  dataType?: string;
  params?: any;
}) {
   const inputUrl = new URL( url);
    const sparams = new URLSearchParams(params).toString();
    const fullUrl = sparams?.length ? inputUrl + "?" + sparams : inputUrl;
  const headers = {
    "Content-Type":
      dataType === "FormData"
        ? "multipart/form-data"
        : "application/json;charset=UTF-8",
  };
  const fetchOptions: RequestInit = {
    method: method.toUpperCase(),
    headers: headers,
    body: body ? JSON.stringify(body) : undefined,
    next: {
      tags: tags,
      revalidate: revalidate,
    },
  };
  return new Promise(async (resolve, reject) => {
    try {
      const result = await fetch(fullUrl.toString(), fetchOptions);

      if (result.ok) {
        const responseData = await result.json();
        resolve(responseData);
      } else {
        const errorText = await result.text();
        console.error("Request failed:", result.status, errorText);
        reject(new Error(`Request failed with status ${result.status}`));
      }
    } catch (error) {
      reject(error);
    }
  });
}
