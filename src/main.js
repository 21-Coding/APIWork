import { Doctor } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';


$(document).ready(function(){
  $('#button').click(function(){
    const doctor = $("#doctorLookup").val();
    $("#doctorLookup").val("");





    (async () => {
      let grabInfo = new Doctor();
      const info = await grabInfo.getProfile(doctor);
      getPractice(info);
    })();


    function getPractice(info) {
      $('.practiceInfo').text(`Practice Info: ${info.data[0].name}, ${info.data[0].practices.visit_address.street}`); 

    }
  });
});
