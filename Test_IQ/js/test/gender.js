let gender = `<div class="statusbar">
  <div class="statusbar_filler"></div>
</div>
<p class="test__question">Ваш пол:</p>
<ul class="test__options">
  <li class="test__options-item item_active">
    Мужчина
    <input type="radio" value="men" class="test__options-radio" name="male" checked/>
  </li>
  <li class="test__options-item">
    Женщина
    <input type="radio" value="women" class="test__options-radio" name="male" />
  </li>
  <li class="test__options-item">
    Другое
    <input type="radio" value="other" class="test__options-radio" name="male" />
  </li>
</ul>
<button class="button test-button" id="gender">Далее</button>`;

export default gender;
