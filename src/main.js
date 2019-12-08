import { Doctor } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';


$(document).ready(function(){
  $('#button').click(function(){
    const doctor = $("#doctorLookup").val();





    (async () => {
      let grabInfo = new Doctor();
      const info = await grabInfo.getProfile(doctor);
      getPractice(info);
    })();


    function getPractice(info) {
      $('.practiceInfo').text(`Practice Info: ${info.data[0].practices[0]}, ${info.data[0].practices.visit_address.street}, ${info.data[0].practices.visit_address.state},
      ${info.data[0].practices.visit_address.city},
      ${info.data[0].practices.phones[0].number},
      ${info.data[0].practices.phones[0].type},
      ${info.data[0].practices[0].location_slug}`);
      // $('.practiceInfo').text(`Practice: $.info.}, Current License Number: ${response.licenses[0].number}`);
    }
  });
});
