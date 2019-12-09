import { Doctor } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';


$(document).ready(function(){
  $('#button').click(function(){
    const doctor = $("#doctorLookup").val();
    $("#doctorLookup").val("");

    let query = $("query");



    (async () => {
      let grabInfo = new Doctor();
      const info = await grabInfo.getProfile(doctor);
      getPractice(info);
    })();


    function getPractice(info) {
      $('.doctorName').text(`Practice Name: ${info.data[0].practices[0].name}`);
      $('.firstName').text(` First Name: ${info.data[0].profile.first_name}`);
      $('.lastName').text(` Last Name: ${info.data[0].profile.last_name}`);
      $('.website').text(` Website: ${info.data[0].practices[0].website}`);
      $('.number').text(` Number: ${info.data[0].practices[0].phones[0].number}`);
      $('.street1').text(` Street: ${info.data[0].pracitces[0].visit_address.street}`);
      $('.street2').text(` Street2: ${info.data[0].pracitces[0].visit_address.street2});

    }
  });
});
