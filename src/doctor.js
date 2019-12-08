export class Doctor {
  async getProfile(doctor){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?doctor=${doctor}&location=or-portland&user_key=93ecded497254529c0dd9988fbf5e33b`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }
  };
};
