export class Doctor {
  async getProfile(){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?practices=${practice}&user_key=1878e7cd5c8d528806fab8600c272574&location=${location}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }
  }
}
