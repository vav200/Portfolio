let towns = `<div class="statusbar">
  <div class="statusbar_filler"></div>
</div>
<p class="test__question">Какой из городов лишний?</p>
<ul class="test__options">
  <li class="test__options-item item_active">
    Вашингтон
    <input type="radio" value="Washington" class="test__options-radio" name="towns" checked/>
  </li>
  <li class="test__options-item">
    Лондон
    <input type="radio" value="London" class="test__options-radio" name="towns" />
  </li>
  <li class="test__options-item">
    Париж
    <input type="radio" value="Paris" class="test__options-radio" name="towns" />
  </li>
  <li class="test__options-item">
    Нью-Йорк
    <input type="radio" value="New-York" class="test__options-radio" name="towns" />
  </li>
  <li class="test__options-item">
    Москва
    <input type="radio" value="Moscow" class="test__options-radio" name="towns" />
  </li>
  <li class="test__options-item">
    Оттава
    <input type="radio" value="Ottawa" class="test__options-radio" name="towns" />
  </li>
</ul>
<button class="button test-button" id="towns">Далее</button>`;

export default towns;
