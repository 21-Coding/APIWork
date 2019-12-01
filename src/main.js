import { Doctor } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $('#button').click(function(){
    const stateCity = $("#stateCity").val();
    $("#stateCity").val("");
    // const inputSearch = $("#inputSearch").val();
    // const inputState = $("#inputState").val();



    (async () => {
      let grabInfo = new Doctor();
      const info = await grabInfo(info).getProfile(stateCity);
      getPractice(info);
    })();


    function getPractice(info) {
      $('.practiceInfo').text(`Practice Info: ${info.data[0].practices[0]}, ${info.data[0].practices.visit_address.street}, ${info.data[0].practices.visit_address.state},
      ${info.data[0].practices.visit_address.city},
      ${info.data[0].practices.phones[0].number},
      ${info.data[0].practices.phones[0].type},
      ${response.data[0].practices[0].location_slug}`);
      // $('.practiceInfo').text(`Practice: $.info.}, Current License Number: ${response.licenses[0].number}`);
    }
  });
