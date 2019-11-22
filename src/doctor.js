export class Doctor {
  async getProfile(){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${lastname}&state=${state}&practices=${practice}&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }
  }
}
