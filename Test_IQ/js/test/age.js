let age = `<div class="statusbar">
  <div class="statusbar_filler"></div>
</div>
<p class="test__question">укажите ваш возраст: </p>
<ul class="test__options">
  <li class="test__options-item item_active">
    До 18
    <input type="radio" value="before18" class="test__options-radio" name="age" checked/>
  </li>
  <li class="test__options-item">
    От 18 до 28
    <input type="radio" value="from18to28" class="test__options-radio" name="age" />
  </li>
  <li class="test__options-item">
    От 29 до 35
    <input type="radio" value="from29to35" class="test__options-radio" name="age" />
  </li>
  <li class="test__options-item">
    От 36
    <input type="radio" value="from36" class="test__options-radio" name="age" />
  </li>
</ul>
<button class="button test-button" id="age">Далее</button>`;

export default age;
