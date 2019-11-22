import { Doctor } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $('').click(function(){
    const inputSearch = $("").val();

    (async () => {
      let grabInfo = new Doctor();
      const info = await grabInfo.getPractice(info);
    })();

    function getPractice(info) {
      $('#doctorSearch').text(`Practice: ${response.info.}`);
    };

  });
});
