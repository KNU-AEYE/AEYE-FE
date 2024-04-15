// Example usage:
// fetchWithInterception(apiUrl, { method: 'GET' })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

const fetchWithInterception = async (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  const modifiedOptions = { ...options };
  modifiedOptions.headers = {
    ...modifiedOptions.headers,
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };
  return fetch(url, modifiedOptions)
    .then(async (response: Response) => {
      if (!response.ok) {
        if (response.status === 401) {
          alert("토근이 만료되었습니다. 다시 로그인해주세요.");
          window.location.href = "/";
        }
        throw new Error("Request failed");
      }
      return response;
    })
    .catch((error: Error) => {
      console.error("Fetch error:", error);
      throw error;
    });
};

export default fetchWithInterception;
