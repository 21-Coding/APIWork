import { Doctor } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $('').click(function(){
    const inputSearch = $("#inputSearch").val();
    const inputState = $("#inputState").val();

    (async () => {
      let grabInfo = new Doctor();
      const info = await grabInfo.getPractice(info);
    })();

    function getPractice(info) {
      $('.lastName').text(`Status: ${response.meta.item_type}, Last Name: ${response.data.profile.last_name}`);
      $('.practiceInfo').text(`Practice: ${response.info.}, Current License Number: ${response.licenses[0].number}`);

  });
});
