async function getData() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "someurl";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Fix => json position 0;
    getData();
    //
    console.log("whoops, something went wrong!", error);
  }
}
