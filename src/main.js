import { Doctor } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $('#button').click(function(){

    const medicalIssue = $("#medicalIssue").val();
    // const inputSearch = $("#inputSearch").val();
    // const inputState = $("#inputState").val();

    (async () => {
      let grabInfo = new Doctor();
      const info = await getPractice(info);
      grabInfo.getIssues(medicalIssue);
    })();

    function getPractice(info) {
      $('.lastName').text(`Status: ${info.meta.item_type}, Last Name: ${response.data.profile.last_name}`);
      // $('.practiceInfo').text(`Practice: $.info.}, Current License Number: ${response.licenses[0].number}`);

  });
});
